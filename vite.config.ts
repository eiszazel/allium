import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import documentationPlugin from "./scripts/docs";
export default defineConfig({
  plugins: [
    react(),
    documentationPlugin(),
    {
      name: "prerender-onion-page",
      transformIndexHtml: {
        order: "pre",
        handler: (html) =>
          html.replace(
            '<div id="root"></div>',
            `<div id="root">${renderToString(createElement(App))}</div>`,
          ),
      },
    },
  ],
});
