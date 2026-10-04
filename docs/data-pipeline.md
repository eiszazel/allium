# The data desk

The raw information is free. The useful work is keeping the evidence attached.

This is Allium's proposed ingestion and publication approach—not a functioning price feed, delivered API, active oracle, or established service-level guarantee.

## Source access: documented versus exercised

USDA AMS says [Specialty Crops Market News information is available at no cost](https://www.ams.usda.gov/market-news/fruits-vegetables). Official [MyMarketNews resources](https://mymarketnews.ams.usda.gov/general-resources/Specialty-Crops) describe a free account and API access. Registration supplies a personal API key; [authentication guidance](https://mymarketnews.ams.usda.gov/mymarketnews-api/authentication) uses the key as the HTTP Basic username with an empty password. Credentials belong server-side, never in published records, browser bundles, or shared account keys.

Earlier source research successfully read public shipping-point and terminal onion PDFs and a historical 2019 report. **Authenticated structured API access has not been exercised.** Direct MyMarketNews pages timed out and an unauthenticated MARS request returned HTTP 403. Documented availability is not proof of operational access from the project's deployment. These observations describe research, not a new ingestion test or a blanket conclusion that the service is unavailable.

Official indexed documentation describes API row ceilings and [CSV/ZIP public exports](https://mymarketnews.ams.usda.gov/public_data). Current limits and actual structured-download behavior still need confirmation before pipeline sizing. No unlimited throughput or uptime is promised. Free source data does not make hosting, storage, normalization, or operations free.

## A source catalog readers can inspect

The proposed catalog identifies each report and its series specifications: report ID/slug, origin, reporting market, product, grade, size, organic status, package and net weight, units, shipping-point or terminal basis, range interpretation, source-date semantics, measured release cadence, and observed historical coverage. It should distinguish source fields from Allium's derived fields and disclose unsupported filters or coverage gaps.

The [candidate benchmark](benchmark.md) starts with IF_FV130, slug 2393, rather than a national composite. Inspection of the current endpoint version, report sections, literal schema, units, organic/grade fields, date semantics, and corrections against the PDF is necessary before its exact specification can be advertised as an implemented filter.

## Proposed ingestion and publication chain

1. **Demonstrate access.** Exercise one authenticated response for the selected report and reconcile it with the source PDF. A few readable files do not establish a complete historical service.
2. **Backfill bounded windows.** Measure earliest/latest observations, continuity, missing days, and seasonal gaps. A 2019 PDF proves historical availability, not complete machine-readable coverage. Detect row-limit truncation and shrink windows rather than assume a full response.
3. **Preserve raw evidence.** Keep immutable payloads and PDFs with source identifiers, source dates, retrieval timestamps, and hashes in durable storage. Ephemeral Vercel function disk or RAM is not an archive. No storage provider or completed archive is claimed.
4. **Normalize like-for-like observations.** Preserve original fields and both quoted ranges, document transformations, and deduplicate observations repeated in regional or national composites. A repeated source row must not count as a second market observation.
5. **Version calculations.** Tie each derived value to the retained inputs and methodology version so another reader can reproduce it. Revisions must remain traceable to changed sources or changed calculations.
6. **Collect around measured releases.** Schedule against observed publication behavior, respect throttling, and re-fetch an overlapping recent window for corrections. Separate source observation time, retrieval time, and publication time. Publish gaps and outages explicitly.
7. **Release dated snapshots and a documented API.** Future outputs should expose source references, specifications, quoted ranges, derived values, calculation versions, and quality/freshness status. No API URL or final response schema is invented here.

## Reading the clocks and quality flags

| Distinction | Required interpretation |
| --- | --- |
| Observation / report date | The source's dated observation; exact meaning must be confirmed |
| Retrieval time | When evidence was fetched, not when the market changed |
| Publication time | When Allium released a snapshot or revision |
| Missing | No comparable quote available; never a zero price |
| Stale | An old observation remains visibly dated under a documented policy |
| Corrected | A source revision linked to prior evidence and a new version |
| Changed methodology | A distinct calculation version, not an unexplained historical rewrite |

A carry-forward must not appear fresh. Outliers, large legitimate moves, source loss, and methodology changes need transparent treatment rather than silent smoothing or substitution. Exact freshness thresholds and exception rules have not been adopted.

A later oracle would also need observation timestamps, calculation versions, authority and freshness safeguards. Publishing on-chain neither authenticates a source nor makes periodic reports continuous or suitable for derivatives.

## Feasibility before commercial claims

The meaningful gates are a successful authenticated response and exact filter; measured coverage, corrections, and gaps; deterministic reproduction from preserved evidence; explicit missing/stale behavior with separate clocks; and customer validation for useful exports and comparisons. Independent derivative suitability review is a further gate, not part of merely making a chart.

Proposed paid value includes reliable exports, custom reports, integrations, and eventually subscriptions or benchmark licensing when demand is established. No delivered product, buyer commitment, or operating budget is claimed. Those services are not a benefit conferred by holding $ONION.

Continue: [Benchmark methodology](benchmark.md) · [Conditional market](market.md) · [Sources](sources.md) · [Reference desk](README.md)
