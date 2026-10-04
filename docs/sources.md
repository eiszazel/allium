# Sources and evidence

This register preserves the public references behind the Gazette's story and proposed methodology. Review date: **October 3, 2026**. A source establishes only what it actually contains; it is not an endorsement, project commitment, or proof that a proposed service is operating.

## Original contract

[Bulb.sol — original contract source](https://github.com/eiszazel/allium/blob/main/contracts/Bulb.sol)

The source defines ONION Token / ONION and a constructor mint of one billion 18-decimal tokens to its supplied recipient, with OpenZeppelin ERC-20 behavior and no custom mint-after-construction, administrator, fee, or revenue functions. The source pragma is `^0.8.20`; the reproducible project build pins Solidity 0.8.28 and OpenZeppelin Contracts 5.1.0. See [token details and pending disclosures](token.md).

A repository source link is not a deployment address, explorer verification, independent audit, or disclosure of actual allocation and liquidity arrangements. No production deployment is asserted.

## USDA and MyMarketNews

| Reference | What it supports | Limit |
| --- | --- | --- |
| [USDA Market News](https://www.ams.usda.gov/market-news) | Official agricultural market-information program | Not an Allium feed or endorsement |
| [Specialty Crops Market News](https://www.ams.usda.gov/market-news/fruits-vegetables) | Public information available at no cost | Project operations still have costs |
| [Specialty Crops account/API resources](https://mymarketnews.ams.usda.gov/general-resources/Specialty-Crops) | Documented account and API access | Authenticated project ingestion not exercised |
| [API authentication](https://mymarketnews.ams.usda.gov/mymarketnews-api/authentication) | API key as HTTP Basic username, empty password | Credentials must stay private and server-side |
| [Idaho Falls shipping-point onion report IF_FV130](https://www.ams.usda.gov/mnreports/if_fv130.pdf) | Candidate regional product and shipping-point/FOB quote | Mutable current PDF, not an immutable historical snapshot |
| [Terminal-market onion report NX_FV030](https://www.ams.usda.gov/mnreports/nx_fv030.pdf) | A different, terminal wholesale basis | Not interchangeable with shipping-point prices |
| [Public data downloads](https://mymarketnews.ams.usda.gov/public_data) | Export resources, including documented CSV/ZIP routes | Actual downloads, current limits, and completeness still require measurement |

Earlier research read public shipping-point and terminal onion PDFs and a historical 2019 report. The exact archived 2019 URL is not supplied in this public evidence set, so no fabricated historical download link is provided. Its availability does not establish complete machine-readable history.

Research recorded the October 2, 2026 IF_FV130 full range of $14.00–$16.00 and mostly range of $15.00–$16.00 for the proposed jumbo U.S. One conventional dry yellow Spanish Hybrid product in 50 lb sacks from Idaho/Malheur County, Oregon. The $15.50 mostly midpoint is a proposed calculation, not a USDA average or live Allium price. See [the methodology](benchmark.md).

MyMarketNews pages timed out during earlier research, and an unauthenticated MARS request returned HTTP 403. No authenticated structured response was exercised. Those facts are evidence of incomplete operational validation, not evidence that all official access is unavailable. See [the data desk](data-pipeline.md).

## Law and historical context

[7 U.S.C. §13-1 — onion futures](https://www.law.cornell.edu/uscode/text/7/13-1)

Supports the statutory prohibition concerning onion contracts for future delivery on or subject to rules of a U.S. board of trade, and the historical enactment on August 28, 1958. It is not a classification decision for a proposed token or perpetual.

[CFTC agricultural-commodity-definition final rule, July 13, 2011](https://www.govinfo.gov/content/pkg/FR-2011-07-13/html/2011-17626.htm)

Contains the historical quotation “Onion swaps would seem to be permissible.” This is historical source language, not project authorization, a safe harbor, or legal advice. See [risks and history](risks.md).

## Conditional protocol requirements

[Official HIP-3 builder-deployed perpetuals specification](https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals)

The specification reviewed October 3, 2026 states a 500,000 HYPE mainnet stake requirement, a minimum 183-day maintenance period after DEX deployment, and no auction participation for the first three assets. It also discusses oracle suitability and slashing risks. Requirements may change and must be checked before capital commitments. No HYPE dollar quotation, capital provider, liquidity provider, partnership, or launch date is established. See [the possible market](market.md).

## Project intentions are not external evidence

The [overview](project.md), [farm ambition](farm.md), and [Field Notes](field-notes.md) state the project's public intentions. They are not closing records, bank evidence, an LLC registration, completed reports, legal approval, or a live service. No private implementation plan, secret, receiving wallet, or invented remote publication URL is needed to read this reference desk.

[Return to the reference desk](README.md)
