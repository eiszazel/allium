---
title: Allium Gazette archive-based redesign and benchmark logistics
type: feature
created: 2026-10-03
status: done
baseline_commit: NO_VCS
context:
  - PLAN.md
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The user dislikes the deployed dark botanical frontend and supplied `onion_farm_memecoin_narrative_game_t0gg25.zip` as the preferred replacement design. The archive contains an Onion Gazette newspaper interface, but also unverified launch, benchmark, oracle, and legal claims, placeholder social links, and an email form that acknowledges submission without saving anything.

**Approach:** Replace the current visual presentation with the supplied broadsheet design: cream paper, blackletter masthead, bold serif headlines, red editorial accents, dense ruled columns, sidebar briefs, and structured tables. Under the user's latest explicit renegotiation, Allium is onion-price data infrastructure and $ONION is the associated memecoin, not a crowdfund. Preserve the founder's farm-purchase goal and a separate gated onion perpetual. Research USDA source access and present a proposed benchmark methodology, not an invented operational index. Deploy the reviewed update to the existing Vercel project.

## Boundaries & Constraints

**Always:** Use the archive as the design reference, not merely its colors. Preserve its newspaper hierarchy on desktop and mobile, renamed by the user to Allium Gazette. Project: Allium; intended domain: allium.markets; coin: $ONION. Preserve the user-supplied first-edition header, quoted deck, Arc Testnet edition line, and date line; link the historical CFTC excerpt without presenting it as authorization or evidence of a deployed contract. Lead with onion-price infrastructure. Describe $ONION as the associated memecoin with an intended fixed-supply ERC-20 design on Arc, not verified/deployed here and without off-chain claims. Keep farm purchase as a goal through a future founder-owned LLC financed with founder post-tax cash; a lease/grower partnership is only an optional first-season route. Disclose actual creator fees or own-holdings sales if they become founder sources. Distinguish proposals, cited external facts, and delivered website behavior. Preserve static HTML, native links/disclosures, keyboard access, visible focus, and reduced motion. Rename the existing Vercel project without replacing it; connect the requested domain only where ownership and DNS permit, with no purchases or unrelated DNS changes. Cite primary USDA sources. Distinguish FOB from terminal prices and physical onion data from memecoin pricing.

**Ask First:** Taking funds, setting token distribution or founder compensation, deploying contracts, creating a derivatives market, collecting subscriber personal information, adopting a binding benchmark methodology, or purchasing services.

**Never:** Import archive `.env` or secrets, deployment scripts, provider wallet integrations, console tracing, or unrelated infrastructure. No fake email confirmation, placeholder social destinations, invented benchmark weights, live chart/prices, price-feed skeleton pretending deployment is underway, unsupported MIT/open-source claims, or unverified CFTC quote presented as permission. Do not claim an entity, memecoin label, lack of holder rights, or testnet status establishes legal compliance. No operative crowdfunding model, raise target, token-funded venture allocation, hidden founder wallets, or claim that economic ties can never cross. No holder ownership, income, management rights, or promised returns. No fictional LLC, farm, deployed contract, data delivery, oracle, partner, or live market. No index engine, ingestion backend, oracle contract, or perpetual implementation in this frontend redesign.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
| --- | --- | --- | --- |
| Desktop reading | Width at least 1024px | Gazette masthead, lead article/sidebar, ruled multicolumn sections | Long content wraps within its column |
| Mobile reading | 375px wide | Stacked stories with accessible section navigation and no overflow | No clipped masthead or horizontal tables |
| Navigation | Section link selected | Real destination in the rendered document | Native links work without JavaScript |
| Benchmark exploration | Methodology disclosure or option selected | Proposed regional reference, composite, and future settlement approaches distinguished | Never displays a fabricated result |
| Project status | No verified financial configuration | Planned/not-live statuses for token, farm, index, and perp | No dummy addresses or functional-looking money controls |
| Plan download | Download link selected | Current data-infrastructure plan, associated memecoin, founder-funded farm-purchase goal, and unchanged source appendix | Asset included in production output |

</frozen-after-approval>

## Code Map

- `src/App.tsx` — replace botanical layout with archive-derived Gazette structure and honest content.
- `src/components/BenchmarkSection.tsx` — benchmark proposal, USDA access, and data logistics.
- `src/components/MarketSection.tsx` — conditional market, capital pools, and disclosures.
- `src/index.css` — newspaper palette, type hierarchy, masthead, rules, columns, responsive layout, focus and contrast.
- `index.html` — Gazette metadata and typography loading with readable fallback stacks.
- `vite.config.ts`, `src/main.tsx` — retain prerender/hydration architecture.
- `PLAN.md`, `public/onion-plan.md` — add sourced benchmark logistics and synchronize the download.
- `README.md` — update design provenance, reproduction commands, deployment URL, verification, and release notes.

## Tasks & Acceptance

**Execution (completed earlier redesign; not evidence of verification or deployment of the latest correction):**
- [x] `PLAN.md` — record confirmed USDA access facts and a proposed reproducible first-series design with explicit uncertainty.
- [x] `src/App.tsx`, `src/index.css`, `index.html` — use supplied newspaper layout and identity. The current content requirement supersedes crowdfunding: data infrastructure, associated memecoin, founder-funded farm-purchase goal, and gated perp intent.
- [x] `src/App.tsx` — replace archive fake subscription and unverified live claims with functioning disclosures and real source/plan links.
- [x] `public/onion-plan.md` — synchronize the revised plan for download.
- [x] Browser smoke — inspect actual desktop/mobile layout and exercise navigation, disclosures, no-JavaScript reading, and download.
- [x] Vercel — deploy reviewed frontend to the existing project and verify the public production surface.
- [x] `README.md` — document final release evidence and design provenance after smoke proof.
- [x] `PLAN.md`, `README.md`, this spec — replace the operative crowdfunding model and revise frozen intent/constraints/acceptance under explicit user renegotiation; integrate the community-facing copy and synchronize its public plan.

**Acceptance Criteria:**
- Given the updated homepage, when a visitor opens it, then it visibly follows the supplied Onion Gazette newspaper direction rather than the existing dark botanical design.
- Given the lead story and community sections, when read, then Allium is onion-price infrastructure, $ONION is the associated memecoin rather than a crowdfund, and buying a farm remains a goal through a future founder-owned LLC using founder post-tax cash; actual disclosed creator fees or own-holdings sales may be sources, without holder income or ownership.
- Given benchmark content, when inspected, then free public USDA access is cited and a proposed methodology does not masquerade as an operating weighted national index.
- Given the oracle/perp section, when inspected, then no feed, deployment, partner, legal authorization, or tradable instrument is claimed to be live.
- Given the token and farm descriptions, when read, then the fixed-supply ERC-20 on Arc is intended rather than verified/deployed, no existing LLC or secured land is asserted, and an optional lease/grower arrangement does not replace the purchase goal.
- Given community reporting, when read, then weekly posts and monthly published-record hashes are planned, redacted closing records and farm logs protect GPS/privacy and sensitive wires, hashes establish byte integrity rather than title/authenticity, and optional off-chain polls are advisory.
- Given possible gifts or LLC merchandise, when read, then they are voluntary possibilities rather than token entitlements, income distributions, or promised returns; disclosures make no legal safe-harbor claim.
- Given a 375px viewport or disabled JavaScript, when navigating and reading, then substantive content remains accessible without horizontal overflow or fake controls.
- Given the existing public Vercel URL, when opened after release, then the new Gazette interface and revised plan download are served.

## Spec Change Log

- User-directed naming update: Allium project, allium.markets intended domain, Allium Markets Gazette masthead, $ONION coin retained. Existing Vercel project is renamed rather than replaced. Custom-domain activation depends on registrar/DNS configuration; no purchase is authorized.
- User superseded the longer masthead with Allium Gazette and supplied the first-edition header copy. Verified the CFTC quotation in the July 13, 2011 final rule; preserved the proposed/not-live product disclosures.
- Latest explicit user renegotiation (2026-10-03): supersedes the frozen crowdfunding intent, constraints, checklist, and acceptance. Allium is data infrastructure; $ONION is its associated memecoin; a future founder-owned LLC farm purchase uses founder post-tax cash, potentially including actual disclosed creator fees or own-holdings sales. Removed the illustrative raise/allocation without inventing another budget. Planned reporting, privacy, hash limits, advisory polls, and non-entitlement gifts/merchandise follow the corrected narrative. Prior deployment and verification evidence below is historical, not proof that this correction is deployed or checked.

## Design Notes

Use the supplied archive's blackletter masthead, dark top bulletin, date/edition line, oversized lead headline, red section labels, cream background, bordered editorial sidebar, history strip, benchmark specifications, and three-capital-pool presentation. Preserve the user-supplied first-edition header rather than rewriting it to imply legality or deployment. Avoid categorical token legality claims. Lead with useful onion-price infrastructure and keep a prominent farm-purchase ambition so the story neither becomes crowdfunding nor loses the founder's goal. Preserve native disclosures rather than adding a nonfunctional launch-alert form.

## Earlier Verification

- `npm run lint` — no errors.
- `npm run build` — TypeScript and prerendered production build pass.
- Browser — desktop and mobile screenshots, column/table overflow, navigation, native disclosure keyboard interaction, actual plan endpoint, reduced motion, and JavaScript-disabled reading.
- `vercel deploy --prod` — existing project production update; final public URL inspected and essential behavior re-exercised.

## Earlier Release Evidence

- Public production: https://allium-somosenece.vercel.app — verified without Vercel login.
- Requested header copy, Allium Gazette masthead, footer, metadata, and $ONION plan download are published.
- Lint, TypeScript, and production build passed; desktop/mobile screenshots inspected.
- Live mobile section navigation and keyboard disclosure toggling passed. JavaScript-disabled reading and 320px layout passed; clean release browser reported no errors.
- `allium.markets` is attached to Allium but browser navigation returned `ERR_NAME_NOT_RESOLVED`; external domain registration/DNS access remains required. No domain purchase or external DNS mutation occurred.

## Community-Copy Verification

- Lint, TypeScript, and prerendered production build passed after integration.
- Front page, data-first project article order, and Field Notes community-reporting copy inspected in desktop/mobile browsers.
- No horizontal overflow at 320, 375, 600, 800, 1024, or 1440 pixels. All 30 internal section links resolve; mobile navigation reaches Field Notes.
- Public plan asset synchronized with `PLAN.md`; local HTTP 200 download has the revised narrative and no obsolete $50,000 allocation.
- Release review found the stale download; fixed before build. No local browser errors observed.
- Published production checked at https://allium-somosenece.vercel.app: revised copy and plan (HTTP 200), keyboard founder-financing disclosure, JavaScript-disabled Field Notes, and native mobile navigation to the new section.
- Live 375px static layout has no horizontal overflow; final browser error inspection returned no entries.
