# The proposed benchmark

One place. One bag. No imaginary national average.

Allium's proposed first series is a regional reported spot-price reference drawn from USDA AMS Market News. It is **not a live Allium benchmark**, a transaction feed, or a qualified derivative settlement price.

## Candidate specification

| Field | Proposed first series |
| --- | --- |
| Source | Idaho Falls shipping-point report IF_FV130 |
| Report slug | 2393 |
| Origin | Idaho and Malheur County, Oregon |
| Product | Dry yellow Spanish Hybrid onions |
| Grade | U.S. One |
| Production | Conventional / non-organic |
| Size | Jumbo |
| Package | 50 lb sacks |
| Price unit | USD per sack |
| Basis | Shipping point / FOB |
| Frequency | Dated reports; actual publication cadence to be measured |

The [shipping-point PDF](https://www.ams.usda.gov/mnreports/if_fv130.pdf) is a mutable current-report link, not an immutable historical snapshot. Literal product fields, date semantics, and the exact structured filter still need confirmation against an authenticated response. Shipping-point FOB and [terminal wholesale](https://www.ams.usda.gov/mnreports/nx_fv030.pdf) are different price bases and are not interchangeable.

## Quoted ranges versus a calculated number

Source research recorded the October 2, 2026 report's **full range of $14.00–$16.00** and **mostly range of $15.00–$16.00** for the candidate specification. These are dated source observations, not a current project quotation. The current PDF may have changed since that inspection.

The proposed record retains both full-range low/high and mostly-range low/high values. Where the mostly range is available, an optional scalar would be its explicitly labeled midpoint:

**Calculated mostly midpoint = (mostly low + mostly high) / 2.**

For the dated example, ($15.00 + $16.00) / 2 = **$15.50 per 50 lb sack**. This is Allium's proposed calculation—not a USDA average, a transaction price, or a transaction-volume-weighted price. It does not reveal how trades were distributed within the range.

If the mostly range is absent, the scalar remains **missing** until an explicit fallback rule is approved. There is no silent substitution of full range, region, product, size, grade, package, or price basis. A missing observation is never zero.

## Freshness, revisions, and comparability

A publication should distinguish the source observation/report date, retrieval time, and Allium publication time. Their precise source semantics need inspection. Refreshing a page or republishing an old quote does not create a new observation.

Missing days, seasonal gaps, stale observations, source outages, and corrected reports need explicit status. A freshness policy and threshold are not established here; no 24/7 coverage or uptime is promised. Corrections should retain the original evidence and a traceable revision, tied to a calculation version, rather than quietly rewriting history. Historical continuity must be measured, not inferred from a few readable reports.

## Three separate methodology decisions

1. **Regional reference.** Publish an exact quote, evidence, and documented optional scalar. Narrow coverage is a limitation, not a reason to call it national.
2. **Possible multi-region composite.** Add only validated comparable series with predeclared eligibility, a weight rationale, rebalancing dates, seasonal treatment, and missing-region rules. **No regional weights are adopted.** Earlier illustrative 40/20/15/15/10 allocations are not a methodology. Shipment totals are not automatically matching transaction-volume weights for this product.
3. **Derivative settlement qualification.** Independently assess reporting gaps, concentration, revisions, seasonality, regional divergence, hedging basis risk, source resilience, and manipulation resistance. A useful reference may fail this harder test.

The project farm must not set its benchmark price. Farm receipts and revenue logs are separate from independently sourced market observations.

The [data desk](data-pipeline.md) explains how evidence, catalogs, and calculations would be preserved and delivered. The [market page](market.md) explains why a published number is not automatically a defensible oracle.

Sources: [USDA Market News](https://www.ams.usda.gov/market-news) · [Specialty Crops resources](https://mymarketnews.ams.usda.gov/general-resources/Specialty-Crops) · [Source register](sources.md)

[Return to the reference desk](README.md)
