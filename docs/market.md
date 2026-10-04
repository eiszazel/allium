# The possible market

A useful onion-price series is not automatically a tradable market.

The proposed **ONION-PERP** would reference physical onion prices through an independently defined series—not the price of the $ONION memecoin. It is a conditional ambition, **not a live derivatives venue or oracle**. The intended Arc token and a prospective Hyperliquid HIP-3 market are separate systems; no bridge or integration is implied.

## Oracle suitability is a go/no-go condition

The [official HIP-3 specification](https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals) cautions that most price indices are not amenable as perpetual oracle sources. Periodic onion reports may be useful for readers and still unsuitable for settlement.

Independent assessment must address reporting gaps and hours, stale observations, seasonality, regional divergence, concentration, revisions, outliers, large legitimate moves, source loss, methodology changes, manipulation resistance, and hedging basis risk. Source resilience means documented responses to these problems—not a promise of continuous prices.

Market design would need reviewed specifications for oracle and mark prices, update authority, collateral, funding, settlement, leverage, position limits, open-interest controls, outages, and incidents. No leverage, open-interest limit, collateral configuration, or launch date is announced here.

## Three independent capital requirements

| Pool | Purpose | Current status |
| --- | --- | --- |
| Project operating cash | Data work, engineering, legal advice, audits/security, and ongoing operations | Budget and financing not established |
| HIP-3 deployer stake | Protocol deployment requirement, supplied by the company or a negotiated capital provider | Provider not secured |
| Order-book liquidity | Actual orders and market-making arrangements | Liquidity arrangements not secured |

The memecoin's market cap is not operating cash. Protocol stake does not place orders and is not trading liquidity. Securing one pool does not secure the other two.

### Dated HIP-3 requirements

The official specification reviewed **October 3, 2026** states a **500,000 HYPE mainnet stake** requirement, maintained for at least **183 days after DEX deployment**, and no auction participation for the **first three assets** on a HIP-3 DEX. The auction exception does not remove operating, stake, or liquidity needs. Requirements can change and need rechecking before capital is committed. No dollar valuation is attached to an unverified HYPE quote.

A capital partner would retain only rights established by its negotiated agreement. No partner is secured. Stake ownership, rewards, fee sharing, withdrawal, loss allocation, operator control, and termination need explicit terms. Documented slashing can apply to incompetent operation or compromised keys as well as malicious behavior; supplying stake is not risk-free capital.

## Testing without pretending to be live

A reviewed non-monetary simulator or testnet market could test delayed publication, source outages, revisions, large legitimate price moves, liquidations, funding behavior, and settlement. The default scope excludes real deposits, redeemable balances, paid entry, and valuable prizes. Its results would be labeled test results, not evidence of a live market. No such operating simulator or testnet is claimed here.

## A legal route before real-money trading

Specialist derivatives advice must address instrument classification, operator obligations, venue structure, eligible participants, jurisdictions, and permissible promotion. An existing operator or regulated venue partnership may be more appropriate than becoming a HIP-3 deployer. No venue partnership or legal approval is claimed.

The [onion-futures statute and historical CFTC quotation](risks.md) are not authorization for this project. Offshore incorporation, access restrictions, or testnet status do not establish compliance. Even a non-monetary test needs its actual scope reviewed.

A production decision requires a reviewed legal route, a defensible reference and resilient oracle, funded operations, security readiness, approved venue configuration, and genuine liquidity arrangements. Failure at any of these gates can prevent launch entirely; there is no promised market date.

Continue: [Benchmark](benchmark.md) · [Data desk](data-pipeline.md) · [Risks and history](risks.md) · [Sources](sources.md) · [Reference desk](README.md)
