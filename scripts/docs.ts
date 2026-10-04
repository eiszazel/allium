import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { Marked, type Tokens } from "marked";
import type { Plugin } from "vite";

const docsDirectory = fileURLToPath(new URL("../docs/", import.meta.url));
const escapeHtml = (text: string) => text.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]!);
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

function documentation(stylesheets: string[]) {
  const pages = new Map(readdirSync(docsDirectory)
    .filter((name) => name.endsWith(".md") && name !== "SUMMARY.md")
    .map((name) => [name, {
      source: readFileSync(`${docsDirectory}/${name}`, "utf8"),
      route: name === "README.md" ? "/docs/" : `/docs/${name.slice(0, -3)}/`,
    }]));
  const output = new Map<string, string>();
  const summary = readFileSync(`${docsDirectory}/SUMMARY.md`, "utf8");

  for (const [name, page] of pages) {
    const parser = new Marked({ gfm: true });
    const headingIds = new Set<string>();
    parser.use({ renderer: {
      heading({ tokens, depth, text }: Tokens.Heading) {
        const base = slug(text);
        let id = base;
        for (let number = 2; headingIds.has(id); number++) id = `${base}-${number}`;
        headingIds.add(id);
        return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>`;
      },
      link({ href, title, tokens }: Tokens.Link) {
        let destination = href;
        if (!/^(https?:|mailto:|\/|#)/.test(href)) {
          const [filename, fragment] = href.split("#");
          const target = pages.get(filename.replace(/^\.\//, ""));
          if (!target) throw new Error(`Unknown documentation link in ${name}: ${href}`);
          destination = target.route + (fragment ? `#${fragment}` : "");
        } else if (/^[a-z]+:/i.test(href) && !/^(https?:|mailto:)/.test(href)) {
          throw new Error(`Unsupported documentation URL in ${name}: ${href}`);
        }
        return `<a href="${escapeHtml(destination)}"${title ? ` title="${escapeHtml(title)}"` : ""}${destination === page.route ? ' aria-current="page"' : ""}>${this.parser.parseInline(tokens)}</a>`;
      },
    } });
    const content = parser.parse(page.source) as string;
    const titleToken = parser.lexer(page.source).find((token) => token.type === "heading" && token.depth === 1) as Tokens.Heading | undefined;
    if (!titleToken) throw new Error(`Missing documentation title: ${name}`);
    const navigation = parser.parser(parser.lexer(summary).filter((token) => token.type !== "heading"));
    output.set(page.route, `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#f4f0e6"><title>${escapeHtml(titleToken.text)} · Allium Reference Desk</title><link rel="icon" href="/onion.svg">${stylesheets.map((href) => `<link rel="stylesheet" href="${escapeHtml(href)}">`).join("")}</head>
<body class="documentation"><a class="skip-link" href="#content">Skip to documentation</a>
<header class="docs-header newspaper-width"><a class="masthead" href="/">Allium Gazette</a><p class="edition-label">The Reference Desk / Public Project Documentation</p><a class="source-link" href="/">← Back to the front page</a></header>
<div class="docs-layout newspaper-width"><nav class="docs-navigation" aria-label="Documentation topics"><p class="kicker">Inside the reference desk</p>${navigation}<a class="source-link" href="https://github.com/eiszazel/allium/tree/main/docs">Read the Markdown on GitHub ↗</a></nav><main id="content" class="docs-content">${content}<footer class="docs-page-footer"><p class="small muted">Project documentation, generated from the same Markdown prepared for GitBook. Remote GitBook sync is not connected. Planned work is not a live service or a promised token benefit.</p><a class="source-link" href="https://github.com/eiszazel/allium/blob/main/docs/${encodeURIComponent(name)}">View this page’s source ↗</a></footer></main></div>
</body></html>`);
  }
  return output;
}

export default function documentationPlugin(): Plugin {
  return {
    name: "allium-public-documentation",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const pathname = new URL(request.url ?? "/", "http://localhost").pathname;
        if (pathname !== "/docs" && !pathname.startsWith("/docs/")) return next();
        try {
          const pages = documentation(["/src/index.css"]);
          const route = pathname.endsWith("/") ? pathname : `${pathname}/`;
          const html = pages.get(route);
          response.statusCode = html ? 200 : 404;
          response.setHeader("Content-Type", "text/html; charset=utf-8");
          response.end(html ?? "<!doctype html><title>Documentation not found</title><h1>Documentation not found</h1><a href='/docs/'>Return to Allium docs</a>");
        } catch (error) {
          next(error);
        }
      });
    },
    generateBundle(_options, bundle) {
      const stylesheets = Object.values(bundle).filter((asset) => asset.fileName.endsWith(".css")).map((asset) => `/${asset.fileName}`);
      for (const [route, html] of documentation(stylesheets)) {
        this.emitFile({ type: "asset", fileName: `${route.slice(1)}index.html`, source: html });
      }
    },
  };
}
