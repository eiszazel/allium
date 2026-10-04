# Allium — onion-price infrastructure, a farm ambition, and a possible perpetual

## Decision

Allium is an onion-price data-infrastructure project. Its purpose is to make physical onion prices easier to inspect, reproduce, and use. $ONION is the associated memecoin for a community following that work, not a crowdfunding mechanism or a claim on the business. Buying an onion farm remains a founder goal; a possible onion perpetual is a separate, conditional ambition.

Project name: Allium. Intended domain: allium.markets. Site masthead: Allium Gazette. Coin: $ONION. This release presents the story and proposed work. It does not deploy a token, establish an LLC, acquire land, deliver a data service or oracle, or open a trading venue.

## Public positioning

Headline: Onion futures: still banned. The next chapter: being built.

Premise: Better onion-price records, a community with something real to follow, and a founder working toward an onion farm.

The original fixed-supply ERC-20 source from the supplied archive is preserved in `contracts/Bulb.sol`, using pinned OpenZeppelin 5.1.0 and Solidity 0.8.28. It has been compiled and exercised locally, not deployed or explorer-verified on Arc. Holding $ONION would not confer land ownership, LLC equity, crop or business income, redemption rights, or promised returns. A memecoin label and these boundaries do not establish legal compliance; token activity, founder disclosures, business operations, and any future market need appropriate jurisdiction-specific review.

## Step 1 — build useful data, work toward a farm

### The token and the founder's money

$ONION is not a public raise for a farm or data venture. There is no raise target, token-proceeds allocation, fundraising receiver, or funding meter in this plan. Market capitalization and trading volume are not founder cash or an operating budget.

The farm-purchase goal would be pursued through a future founder-owned LLC, financed with the founder's post-tax cash. Actual, disclosed creator fees or sales of the founder's own token holdings could be among the founder's sources, if they occur. They are not guaranteed proceeds, community ownership, or a holder distribution. Do not hide those sources behind undisclosed wallets or claim that token activity and the founder's finances can never intersect.

Before any token launch, publish the network, verified contract, fixed supply and exact distribution, founder holdings and relevant wallets, compensation or creator-fee arrangements, any vesting, launch venue and fees, and liquidity ownership and withdrawal controls. Disclose actual founder sales and relevant conflicts. These are intended disclosures, not evidence that a launch or contract exists.

Data infrastructure needs its own documented operating resources and customer demand; no budget or committed funding is invented here. Planned paid data services do not turn $ONION into a right to company revenue.

### The farm ambition

The goal is to buy an onion farm through a founder-owned LLC—not to sell token holders a share of one. The LLC is a future structure, not an entity claimed to exist today. Land is not secured and no season has started. A seasonal lease or grower partnership could offer a first-season route while the purchase goal remains in place; it is not a replacement for that goal.

As real milestones occur, the community could follow redacted closing records and a farm log covering planting, costs, setbacks, harvests, and crop disposition. Obtain permission to publish records, remove private GPS/location details, and never publish sensitive wire instructions or banking records. Do not fabricate photographs, maps, acreage, partners, or ownership evidence.

The planned cadence is a weekly public post and a monthly hash of the published record set. Neither is delivered reporting today. A hash can show whether published bytes changed; it cannot establish title, verify a document's authenticity, or prove the underlying events.

Optional off-chain advisory polls could let readers express preferences without binding the LLC or giving holders management rights. Voluntary gifts or LLC merchandise may be considered if actually offered and disclosed; neither is a token entitlement, income distribution, or investment return.

### Data workstream

Inspect actual USDA Market News onion reports before selecting the first series. Define product, grade, size, package/net weight, origin, reporting market, shipping-point versus terminal-market basis, quoted range interpretation, update frequency, and historical coverage. Do not invent regional basket weights or call periodic observations real-time prices.

Publish a first reproducible series with raw-source references, observation/publication timestamps, versioned calculations, missing/stale/corrected observation handling, and documented limits. A midpoint of a reported range must be labeled calculated, not a transaction price. Build comparisons, downloadable history, and a documented API after source feasibility is proven.

Commercial services: paid exports, custom reports, integrations, and eventually subscriptions or benchmark licensing when customer demand is established. Founder/company revenue is disclosed and is not holder yield. Validate buyer demand with paid pilots. Government source data being public means the paid value is normalization, provenance, reliability, and workflow—not pretending to own the raw reports.

### Step 1 gates

1. Confirm source access and a reproducible first series before advertising a delivered data product.
2. Publish token design, founder interests, actual fee/sale arrangements, and liquidity controls before any launch; do not imply a contract is verified now.
3. Document the future LLC and actual purchase or first-season agreement before claiming ownership or a secured season.
4. Obtain permission and apply privacy redactions before publishing farm records; distinguish the planned reporting cadence from completed posts.
5. Keep company revenue, founder sources and compensation, farm activity, and independent market observations legible without implying holder rights or artificial economic separation.

## Step 2 — pursue ONION-PERP

### Dependency

An onion perpetual references an independently defined onion-price series, not the $ONION memecoin price. The Arc token/website and a prospective Hyperliquid HIP-3 market are separate systems; no bridge or integration is implied.

### Engineering and legal preparation

Validate that the underlying series is suitable for a derivative, rather than merely readable on a chart. Address periodic reporting, seasonality, regional divergence, revisions, source loss, manipulatability, outliers, stale prices, market hours, and methodology changes. Specify oracle/mark prices, update authority, collateral, funding, settlement, leverage, position limits, open-interest controls, outages, and incident procedures.

Build and exercise a non-monetary simulator or testnet market only after its scope is reviewed. No real deposits, redeemable balances, paid entry, or valuable prizes by default. Test data outages, delayed publication, large legitimate price moves, revision handling, liquidations, funding behavior, and settlement. Publish results without representing them as a live market.

Obtain specialist derivatives advice on instrument classification, operator obligations, venue structure, participant eligibility, jurisdiction, and permissible promotion before production trading. Decide whether an existing operator or regulated venue partnership is more appropriate than becoming a HIP-3 deployer.

### Three separate capital requirements

1. Project cash for data, engineering, legal work, audits, and operations.
2. HIP-3 deployer stake supplied by the company or a negotiated capital partner.
3. Order-book liquidity supplied separately; stake is not trading liquidity.

Official HIP-3 documentation reviewed on 2026-10-03 states a 500,000 HYPE mainnet stake requirement, a minimum 183-day maintenance period after DEX deployment, and no auction participation for the first three assets. Requirements can change; recheck before committing capital. Do not fix a dollar valuation using an unverified HYPE quote.

A capital partner retains only the rights established by its negotiated agreement. Do not imply a partner is secured or that stake provision is risk-free: documented slashing can apply to incompetent operation or compromised keys as well as malicious behavior. Stake ownership, rewards, fee sharing, withdrawal, loss allocation, operator control, and termination require explicit terms.

Hyperliquid warns that most price indices are not amenable as perp oracle sources. Oracle suitability is a go/no-go condition, not a marketing milestone. Live launch requires a reviewed legal route, defensible oracle, funded operations, security readiness, approved venue configuration, and genuine liquidity arrangements. No promised launch date, leverage, open-interest limit, or partner.

## Immediate frontend release

The community website preserves the supplied Gazette identity: cream paper, blackletter masthead, black rules, red accents, lead story/sidebar, and editorial columns. It introduces Allium, $ONION, the founder's farm ambition, and planned Field Notes. Methodology, ingestion logistics, market capital requirements, detailed founder interests, and risks live in public `docs/` Markdown, prepared for GitBook and rendered at `/docs/` from the same source. Internal implementation plans stay in the repository and are no longer offered as a public plan download.

Section links and topic-level documentation links work without JavaScript. Token, data, farm, and perpetual remain planned/not live. No wallet, buy button, fundraising receiver, or donation link without separately reviewed and verified production configuration. Preserve the supplied first-edition header. Publish to the existing Allium Vercel project; connect allium.markets only when domain registration and DNS allow. Public repository: `eiszazel/allium`, containing frontend, public documentation, and original contract. `.gitbook.yaml` selects `docs/` as the GitBook source root; remote publication requires authorized GitBook access and is not claimed. Do not modify the ebook launch sites.

## Sources

- USDA Market News: https://www.ams.usda.gov/market-news
- Onion-futures statute: https://www.law.cornell.edu/uscode/text/7/13-1
- CFTC agricultural-commodity-definition final rule (July 13, 2011), including the historical onion-swaps passage: https://www.govinfo.gov/content/pkg/FR-2011-07-13/html/2011-17626.htm
- Official HIP-3 specification: https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals

The historical onion-swaps quotation is verified in the cited CFTC rule; it is not authorization for this project. Partner arrangements and HYPE market price are not verified commitments or project quotations. Earlier token-funded-venture language and illustrative allocations are superseded: Allium is data infrastructure, $ONION is its associated memecoin, and a founder-funded farm purchase is a goal.

## Benchmark logistics — proposed first series

### Free access and evidence

USDA AMS Specialty Crops Market News says its information is available at no cost. Official MyMarketNews guidance describes a free account and API access; account registration supplies a personal API key. Authentication uses the key as the HTTP Basic username with an empty password. Keep credentials server-side and do not share account keys or put them in browser bundles.

Primary-source research successfully read current public shipping-point and terminal onion PDFs and a historical 2019 report. Authenticated structured API access has not been exercised. Direct MyMarketNews pages timed out and an unauthenticated MARS request returned HTTP 403; documented availability is not proof of operational access from our deployment. Hosting, storage, normalization, and operations have their own costs even when the source data is free.

### Candidate product

Start with one regional reported spot-price reference, not a national index:

- Source: Idaho Falls shipping-point report IF_FV130, report slug 2393.
- Origin: Idaho and Malheur County, Oregon.
- Product: dry yellow Spanish Hybrid onions; U.S. One; conventional/non-organic; jumbo.
- Package/unit: 50 lb sacks; USD per sack.
- Price basis: shipping point/FOB, not terminal wholesale.
- Frequency: dated reports, with observed publication cadence determined by collection; not a continuous 24/7 feed.

The October 2, 2026 report contains a full range of $14.00–$16.00 and a mostly range of $15.00–$16.00 for that specification. These are dated source observations, not a current live project benchmark. A $15.50 mostly-range midpoint would be our derived value, not a USDA average or transaction-weighted price.

Retain full and mostly low/high values. Proposed scalar policy: use a labeled mostly-range midpoint where available; otherwise mark the scalar missing until an explicit fallback rule is approved. Do not silently switch sizes, grades, regions, or price basis. Never replace a missing quote with zero.

### Three methodology directions

1. Regional reference: publish the exact source quote and a documented optional scalar. Best initial choice for provenance and reproducibility, but narrower than the national market.
2. Multi-region composite: add separately validated series with predeclared eligibility, weight rationale, rebalancing dates, and missing-region rules. The archive's 40/20/15/15/10 split is illustrative and is not adopted. Regional shipment totals are not automatically matching transaction-volume weights.
3. Derivative settlement reference: independently assess whether a reference has sufficient robustness for a perp. Reporting gaps, concentration, revisions, seasonality, hedging basis risk, and manipulation resistance may prevent it from qualifying even if it is a useful data product.

The project farm must not set its own benchmark price. Farm revenue/logs and independently sourced market observations are separate records.

### Ingestion and publication

1. Register a free MyMarketNews account and exercise one authenticated response for the selected report. Inspect current endpoint version, sections, literal schema, date semantics, organic/grade fields, units, and corrections against the source PDF before implementation.
2. Backfill bounded windows. Measure actual earliest/latest observations and continuity. A 2019 PDF proves historical availability, not complete machine-readable coverage. Detect row-limit truncation; shrink windows rather than presume completeness.
3. Preserve immutable raw payloads/PDFs with source IDs, source dates, retrieval timestamps, and hashes in durable storage. Vercel function disk/RAM is not an archive.
4. Normalize comparable observations, deduplicate across regional and national composites, and version calculations. Publish source references and both quoted ranges alongside any derived scalar.
5. Schedule ingestion around measured releases; separate observation time, retrieval time, and publication time. Re-fetch an overlapping recent window for corrections. Respect throttling and publish gaps/outages explicitly.
6. Publish a dated snapshot/API with quality/freshness status. Repeating yesterday's value does not create a fresh observation. A later oracle should include observation timestamp, calculation version, and freshness safeguards; publishing on-chain does not authenticate the source or make it reliable.

Official indexed documentation describes API row ceilings and CSV/ZIP exports. Recheck limits and actually execute a structured download before sizing the pipeline; no unlimited-throughput or uptime promise is made.

### Initial feasibility checks

- Successful authenticated response and documented exact specification filter.
- Measured historical coverage, missing days, seasonal gaps, and corrections.
- Reproduction from preserved raw observations with deterministic calculation version.
- Explicit missing/stale behavior and separately tracked publication times.
- Customer validation for useful exports/comparisons before charging for an unproven national benchmark.
- Independent suitability review before using the series in a derivative.

### Benchmark sources

- Free Specialty Crops information: https://www.ams.usda.gov/market-news/fruits-vegetables
- API/account resources: https://mymarketnews.ams.usda.gov/general-resources/Specialty-Crops
- API authentication: https://mymarketnews.ams.usda.gov/mymarketnews-api/authentication
- Current shipping-point onion report: https://www.ams.usda.gov/mnreports/if_fv130.pdf
- Current terminal onion report (different basis): https://www.ams.usda.gov/mnreports/nx_fv030.pdf
- Public downloads: https://mymarketnews.ams.usda.gov/public_data
