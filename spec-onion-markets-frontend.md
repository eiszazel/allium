---
title: Onion Markets two-stage public frontend
type: feature
created: 2026-10-03
status: done
baseline_commit: NO_VCS
context:
  - PLAN.md
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The existing downloaded plan describes a testnet farm-log site and excludes the user's actual funding and business direction. The user wants the memecoin launch to crowdfund both a land/growing project and onion-data services in Step 1, followed by a prospective onion perpetual in Step 2, with a frontend deployed to Vercel now.

**Approach:** Create a new standalone Onion Markets frontend in this directory and publish it as a new Vercel project. Present the two-stage plan with an original botanical editorial design, functional navigation and disclosures, accurate initial statuses, and a downloadable plan. This release delivers the public frontend and the written plan, not token fundraising or a derivatives implementation.

## Boundaries & Constraints

**Always:** Explicitly describe the memecoin as the proposed crowdfunding mechanism. Put land and data services together in Step 1. Make Step 2 conditional on data/oracle suitability, legal route, operating capital, stake arrangements, and liquidity. Distinguish memecoin value from the physical onion-price reference. State that holders receive no land, equity, harvest, revenue, redemption, or guaranteed-return rights. Disclaimers do not resolve the sale's legal classification. Label budget numbers as illustrative estimates, never committed expenditure. Use source links for historical and protocol claims. Treat all project capabilities as planned unless independently verified. Use semantic HTML, visible focus, adequate contrast, mobile layouts, and reduced-motion support. Keep existing projects unchanged.

**Ask First:** Activating a token sale or accepting funds; creating a contract deployment; paying for infrastructure; choosing token allocations, founder compensation, fundraising receiver addresses, or binding partner terms; changing an existing Vercel project's domain or deployment.

**Never:** Fake prices, charts, transaction hashes, funding totals, signed leases, customer logos, sponsors, token addresses, secured capital partners, or live trading. No valuable trading prizes, leverage claims, buy widget, wallet-gated content, placeholder social links, or claim that testnet/noncustodial status removes regulatory obligations. No live API/oracle or perpetual backend in this frontend release. No mainnet token launch is implied by deploying a website.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
| --- | --- | --- | --- |
| Navigation | Header or hero section link activated | Correct section reached with header offset; focus remains understandable | All destinations exist without JavaScript |
| Roadmap | Step 1 or Step 2 selected | Relevant detail visible and selected state accessible | Initial Step 1 content available on load |
| Disclosures | Disclosure summary activated | Explanation opens or closes by keyboard and pointer | Native disclosure behavior retained |
| Download | Plan link activated | Complete two-step plan downloaded or opened | File exists in deployed static output |
| Narrow viewport | 375px-wide phone | Legible stacked content; no horizontal overflow | Long links and labels wrap |
| No production configuration | No contract/receiver/market supplied | Planned/not-live status, no financial action offered | No dummy identifiers or zero-balance impersonation |

</frozen-after-approval>

## Code Map

- `PLAN.md` — complete land/data funding and gated perp business plan.
- `package.json`, `package-lock.json` — reproducible build, lint, and preview commands.
- `index.html` — document shell and metadata.
- `src/main.tsx`, `src/App.tsx` — React entry, site structure, and roadmap interaction.
- `src/index.css` — editorial layout, palette, responsive and accessibility styles.
- `public/onion-plan.md`, `public/onion.svg` — downloadable plan and original botanical artwork.
- `tsconfig.json`, `vite.config.ts`, `eslint.config.js` — build/type/lint configuration.
- `.gitignore` — exclude dependencies, build output, and local Vercel linkage.
- `README.md` — development and deployment instructions, evidence and scope limits.

## Tasks & Acceptance

**Execution:**
- [x] `PLAN.md` — record the user's two stages and memecoin funding mechanism without hiding founder interests or financial risk.
- [x] `package.json` and toolchain configuration — initialize a minimal React/TypeScript/Vite app, avoiding unnecessary libraries.
- [x] `src/App.tsx` and `src/index.css` — implement hero, status, dual Step 1 workstreams, funding budget, gated Step 2, disclosures, and source/footer sections.
- [x] `public/onion.svg` and `public/onion-plan.md` — ship original static illustration and the actual plan download.
- [x] `src/App.tsx` — exercise navigation, roadmap selection, disclosures, and download through a throwaway browser smoke scenario; do not add source-text or wording tests.
- [x] Vercel project — deploy production frontend using the authenticated CLI and verify the public URL.
- [x] `README.md` — document commands, publication URL, exercised checks, and excluded financial functionality after smoke proof.

**Acceptance Criteria:**
- Given the homepage, when a visitor reads Step 1, then both the land/growing workstream and paid data-services workstream are explained as intended uses of memecoin-raised funding.
- Given the funding section, when inspected, then illustrative spending is distinct from verified proceeds, founder income, token valuation, and liquidity.
- Given Step 2, when inspected, then the onion perpetual is not represented as live and stake, operating cash, and order-book liquidity are separate requirements.
- Given the homepage at desktop and mobile sizes, when navigating, then all sections remain legible and the site has a deliberate botanical visual identity.
- Given the public Vercel URL, when opened, then the actual site and plan download are served and inspected in a browser.
- Given no deployed financial configuration, when visiting, then there is no action that accepts money or claims an operational index, farm, or market.

## Spec Change Log

## Design Notes

Warm soil background, oversized paper serif headlines, quiet gold labels, a large original purple onion cross-section, precise monospace status labels, and spacious asymmetric desktop layouts. Mobile preserves reading order. The tone is deadpan, commercially honest, and specific. Headline: “Serious infrastructure. Actual onions.” No stock-photo farm, fake ticker, speculative chart, or animated mascot.

## Verification

**Commands:**
- `npm run lint` — no lint errors.
- `npm run build` — TypeScript check and production build pass.
- `vercel deploy --prod` — returns a live production deployment URL for a new standalone project.

**Browser checks:**
- Inspect actual desktop and mobile screenshots; test roadmap controls, section links, disclosure keyboard interaction, plan download, overflow, and browser errors.
- Repeat essential interaction and download checks on the deployed URL. Report only observed evidence.

## Release Evidence

- Production: https://onion-markets-woad.vercel.app
- Local lint, TypeScript, and production build passed; Vercel production build succeeded.
- Actual browser checks covered desktop, mobile, tablet widths, roadmap switching, keyboard disclosure, section navigation, plan endpoint, reduced motion, and primary text contrast.
- Independent reviews identified missing static HTML and a low-contrast light-section hover; both are corrected and exercised.
- Final deployed page serves sections without JavaScript, hydrates roadmap interaction, loads the illustration, serves the plan with HTTP 200, and has no mobile horizontal overflow or observed browser errors.

## Suggested Review Order

**Public experience and funding boundaries**

- Start with the complete page and its explicit planned-state financial boundaries.
  [`App.tsx:1`](src/App.tsx#L1)
- Inspect the two-stage operating plan and disclosed fundraising purpose.
  [`PLAN.md:1`](PLAN.md#L1)

**Rendering and presentation**

- Prerender readable content before enhancing interactions.
  [`vite.config.ts:1`](vite.config.ts#L1)
- Hydrate the existing markup rather than replace static content.
  [`main.tsx:1`](src/main.tsx#L1)
- Review botanical layout, responsive boundaries, and accessible interaction styles.
  [`index.css:1`](src/index.css#L1)

**Operations**

- Reproduce the build and inspect deployment boundaries and exercised evidence.
  [`README.md:1`](README.md#L1)
