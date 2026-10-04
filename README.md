# Allium / Allium Gazette

- Website: https://allium-somosenece.vercel.app
- Public reference desk: https://allium-somosenece.vercel.app/docs/
- Public repository: https://github.com/eiszazel/allium

Allium is onion-price data infrastructure; $ONION is its associated memecoin. Buying an onion farm is a founder goal, not token backing or crowdfunding. An onion perpetual is a separate conditional ambition. This release delivers the community website, public reference documentation, and the original contract source—not a token deployment, existing LLC, secured farm, operating data feed, or derivatives venue.

## One repository, three surfaces

| Surface | Source | Publication |
| --- | --- | --- |
| Community front page | `src/App.tsx`, `src/index.css` | Existing Allium Vercel project |
| Public reference documentation | `docs/README.md`, `docs/SUMMARY.md`, topic Markdown | Same-source static `/docs/` pages; prepared for GitBook |
| Original token contract | `contracts/Bulb.sol` | Public GitHub source and reproducible local compilation |

`PLAN.md` and `spec-*.md` are internal project/release records, not GitBook content or public website downloads. Earlier redesign specs are historical and superseded by `spec-website-gitbook-contract.md` for this release. Public documentation is maintained once, in `docs/`; do not duplicate it into frontend components or copy the internal plan to `public/`.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run contracts:build
npm run preview -- --port 4295 --strictPort
```

The Vite plugin in `scripts/docs.ts` serves `/docs/` during development and emits static HTML pages during production builds. It reads the Markdown and summary directly, rewrites relative topic links to public routes, fails on unknown Markdown targets, and shares Gazette styling. The homepage is prerendered and hydrated by React; docs require no client JavaScript. Native section links, mobile navigation, documentation navigation, and skip links work without JavaScript.

The contract compiler emits ignored `contracts/out/Bulb.json`. It pins Solidity 0.8.28, OpenZeppelin 5.1.0, optimizer 200, and EVM `paris`; see `contracts/README.md`. `Bulb.sol` matches the archive byte-for-byte. No archive credentials, deployment scripts, wallet integrations, or unrelated dependencies were imported. Optional Foundry configuration is in `contracts/foundry.toml`; npm compilation is canonical.

## GitBook integration

`.gitbook.yaml` selects `docs/` as the source root, with `README.md` and `SUMMARY.md` as the landing/navigation files. This repository is ready to be selected for GitHub sync on branch `main` in an authorized GitBook space. Those sources already publish at `/docs/` using the same Markdown.

**Remote GitBook sync/publication is not connected.** The available browser session opens to GitBook authentication, and GitBook is not in the connected service-provisioning catalog. No GitBook account, subscription, URL, or successful sync is fabricated. Connecting an authorized space and approving its GitHub repository access is the remaining external prerequisite.

## Vercel deployment

Use the existing `somosenece/allium` project, not a replacement. `.vercel/` is intentionally ignored; a fresh checkout uses `vercel link` to select that project, followed by `vercel deploy --prod`. The Git repository association is configured separately from GitBook publication; a failed remote authorization must not be described as a successful connection.

`allium-somosenece.vercel.app` is the public production address. `allium.markets` was attached previously but custom-domain DNS remains an external dependency; no domain purchase or DNS change is part of this release. Recheck the provider's current requirements before changing the registrar.

This frontend requires no environment variables or backend. USDA ingestion is not performed in the browser; any future personal API key must stay server-side. Dependencies, environment files, Vercel linkage, provisioning state, and generated contract/site artifacts are excluded from Git. Stage source files explicitly rather than importing the supplied ZIP wholesale.

## Design provenance

The user-supplied `onion_farm_memecoin_narrative_game_t0gg25.zip` provides the approved Gazette direction: blackletter masthead, cream paper, red labels, black rules, editorial columns, and sidebar briefs. The first-edition bulletin, historical CFTC excerpt, quoted deck, and Arc Testnet edition are preserved. UnifrakturMaguntia, Playfair Display, IM Fell English, and DM Mono use HTTPS Google Fonts URLs and readable fallbacks; font requests are third-party requests, but reading and navigation do not depend on them.

## Release verification and changes

- Homepage main content reduced from the previously measured 2,785 words to 840; essential ownership, founder interests, undeployed status, and loss-risk disclosures remain visible.
- Ten public reference pages contain methodology, data access/logistics, token/founder interests, farm structure, reporting, conditional market prerequisites, risks, and primary sources.
- Removed the public internal-plan download and obsolete detailed homepage components/styles. Field Notes remain an explicitly planned record, not fictional farm entries.
- ESLint, TypeScript/Vite production compilation, and pinned contract compilation passed.
- Original contract bytes matched the ZIP. A throwaway local EthereumJS VM exercised supply, initial allocation, metadata, transfers, allowances, rejected overspending with unchanged balances, and zero-address constructor rejection. No network transactions; not a formal audit.
- Actual browser smoke covered the homepage-to-docs action, all ten reference routes, desktop/mobile screenshots, 320px page boundaries, keyboard mobile navigation, documentation skip link, direct refresh, and JavaScript-disabled reading. No browser errors observed.

## Release boundaries

No verified on-chain address, holder distribution, founder wallet, vesting, actual fees, or liquidity arrangements are published. These must be disclosed before a launch; omission is not evidence that founder interests are absent. Farm and data-service income belong to their operators, not holders. Gifts, merchandise, advisory polls, planned reporting, and hashes do not create ownership or revenue rights. Hashes establish byte integrity, not authenticity or title. Nothing here supplies legal permission or USDA/Circle/protocol endorsement.
