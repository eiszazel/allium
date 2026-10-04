---
title: Allium website, GitBook documentation, and original contract repository
type: feature
created: 2026-10-03
status: in-review
baseline_commit: NO_VCS
repository_visibility: public
context:
  - PLAN.md
  - README.md
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The community website includes technical/reference material, lacks a Git repository, and omits the supplied original contract.

**Approach:** One Allium repository holds the frontend, public GitBook-compatible documentation, and original `Bulb.sol`. The website is the community front page; docs are the reference desk. Internal implementation plans stay separate.

## Boundaries & Constraints

**Always:** Preserve Allium, Allium Gazette, $ONION, the approved header/design, native navigation, static reading, and existing Vercel project. Allium is data infrastructure; $ONION is its associated memecoin. Buying a farm remains a founder goal; a first-season lease/grower arrangement is optional. A future farm belongs to a founder-owned LLC using founder post-tax cash; actual creator fees or founder token sales are disclosed if used. No holder ownership, farm income, guaranteed gifts, binding votes, or returns. Keep essential boundaries visible on the website. Distinguish plans, tested source, deployed contracts, and published records.

**Always:** Preserve `Bulb.sol` byte-for-byte and pin OpenZeppelin. Source specifies one billion 18-decimal ONION minted to the constructor recipient, with no custom mint/admin/revenue functions. Inspection/testing is not an audit. Configure GitBook navigation/root with relative links. If GitBook authorization is unavailable, serve the same public Markdown as readable project docs; do not fabricate a GitBook deployment.

**Ask First:** Public GitHub visibility rather than the private default; paid services/domains; original contract/economic changes; token deployment; new GitBook account, subscription, or organization authorization.

**Never:** Import archive secrets, environments, traces, contract outputs/cache, deployment scripts, or unrelated integrations. Do not alter the ebook. No crowdfunding pitch, invented prices/logs/addresses, artificial economic separation, legal approval, or promised acquisition/market date. No secrets in published assets or Git.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Outcome | Handling |
| --- | --- | --- | --- |
| Community visit | Desktop/mobile, wallet absent | Short editorial homepage; farm and token boundaries visible; real docs navigation | Native section links and readable static HTML |
| Documentation visit | Direct URL or homepage topic link | Complete public overview, token, farm, reporting, methodology, market, and risks pages | All relative links resolve; no internal release-plan download |
| GitBook unavailable | No authorized project space | GitBook-compatible sources and an accessible same-source docs edition; remote sync explicitly unconnected | No fabricated GitBook URL or claim of publication |
| Contract inspection | Original source plus pinned dependency | Same contract as archive; supply/recipient and ERC-20 transfer behavior verified locally | Compile/execute without a private key or network deployment |
| Repository publication | Selected visibility and authenticated GitHub account | Single Allium repository with website, docs, and contract; sensitive/generated files excluded | Explicit file allowlist and pre-push secret checks |

</frozen-after-approval>

## Code Map

- `src/App.tsx`, `src/index.css`, `index.html`: concise Gazette homepage, topic previews, documentation/source links.
- `src/components/BenchmarkSection.tsx`, `src/components/MarketSection.tsx`: current detailed public material to migrate, then remove obsolete homepage-only components.
- `vite.config.ts`, `package.json`, `package-lock.json`: build readable static docs from the same Markdown and pin contract/build dependencies.
- `docs/README.md`, `docs/SUMMARY.md`, `.gitbook.yaml`: public documentation entry point, navigation, and GitBook sync root.
- `docs/`: complete overview, token/founder interests, farm structure, reporting, methodology, conditional market, and risks/sources.
- `contracts/Bulb.sol`, contract compiler configuration and verification script: exact source, pinned reproducible build, local behavior.
- `.gitignore`: secrets, Vercel linkage, dependencies, generated outputs, contract caches, and local tooling excluded.
- `PLAN.md`, `README.md`, release specs: internal implementation record and actual integration instructions.
- `public/onion-plan.md`: obsolete internal-plan public download removed after all callers migrate.

## Tasks & Acceptance

**Execution:**
- [x] `contracts/Bulb.sol` and contract build configuration: recover exact original source; pin dependencies and verify behavior locally.
- [x] `docs/`, `.gitbook.yaml`: write complete public pages, summary/navigation, and sync configuration; migrate sourced material without internal instructions.
- [x] `src/App.tsx`, CSS, metadata: shorten toward 1,000 words; retain story, farm ambition, Field Notes, essential disclosures, and topic previews.
- [x] `vite.config.ts`, build scripts: publish readable static documentation from the same Markdown; migrate every internal-plan download caller and remove `public/onion-plan.md`.
- [ ] Git/README: initialize, commit, create/push `eiszazel/allium` with approved visibility, and associate existing Vercel deployment plus GitBook root.
- [x] GitBook: enable GitHub sync/publication with authorized access; otherwise deliver working public docs and identify the precise remote authorization dependency.
- [ ] Build/browser/contract verification: prove behavior and navigation, exclude secrets/generated files, and publish/inspect the existing Vercel project.

**Acceptance Criteria:**
- Given a community visitor, when reading the homepage, then the story and token/farm boundaries are understandable without technical prerequisites.
- Given a topic link or direct docs URL, when opened, then complete current public documentation is readable without an internal-plan download.
- Given source inspection, when comparing/building `Bulb.sol`, then archive bytes match and pinned compilation/local behavior verification succeed.
- Given GitHub, when browsing the approved repository, then website/docs/contract coexist with documented paths and no imported secrets/generated artifacts.
- Given missing GitBook access, when reporting release status, then reachable work is delivered and remote sync is explicitly unconnected.

## Verification

- `npm run lint` and `npm run build`: lint/typecheck and production website/docs output pass.
- Contract compilation/local execution: fixed supply, recipient, transfers/allowances, and constructor boundary behavior; no production transactions.
- Compare archive/source bytes and scan tracked files for secrets/generated artifacts before push.
- Browser: desktop/mobile, docs/topic/source links, keyboard access, JavaScript-disabled reading, and direct-route refresh.
- Public deployment/GitHub: readable homepage/docs routes; actual repository URL and approved visibility.
