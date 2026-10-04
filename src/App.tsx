const repository = "https://github.com/eiszazel/allium";
const navigation = [
  ["#project", "The Project"],
  ["#field-notes", "Field Notes"],
  ["#infrastructure", "The Infrastructure"],
  ["#disclosures", "Disclosures"],
];

function SectionLinks() {
  return <>{navigation.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</>;
}

function GazetteHeader() {
  return (
    <header>
      <div className="bulletin"><span>
        $ONION &nbsp;·&nbsp; The First Onion Financial Infrastructure Token
        &nbsp;·&nbsp; 7 U.S.C. §13-1 Still In Effect &nbsp;·&nbsp;{" "}
        <a href="https://www.govinfo.gov/content/pkg/FR-2011-07-13/html/2011-17626.htm">
          &quot;Onion swaps would seem to be permissible.&quot; — CFTC, 2011
        </a>{" "}&nbsp;·&nbsp; Testnet Only. No Real Money. Yet.
      </span></div>
      <div className="masthead-block newspaper-width">
        <p className="edition-label">Est. 2026 <span aria-hidden="true">·</span> Vol. I, No. 1 <span aria-hidden="true">·</span> Arc Testnet Edition</p>
        <h1 className="masthead">Allium Gazette</h1>
        <p className="masthead-deck">&quot;All the News That&apos;s Fit to Print About Onion Financial Infrastructure&quot;</p>
      </div>
      <nav className="section-nav newspaper-width" aria-label="Newspaper sections">
        <div className="desktop-nav"><SectionLinks /><a className="nav-plan" href="/docs/">The Reference Desk →</a></div>
        <details className="mobile-nav">
          <summary>Browse this edition <span aria-hidden="true">+</span></summary>
          <div className="mobile-links"><SectionLinks /><a href="/docs/">Explore the docs →</a></div>
        </details>
      </nav>
    </header>
  );
}

function LeadStory() {
  return (
    <section className="front-page newspaper-section" aria-labelledby="lead-headline">
      <div className="date-line"><span>Saturday, October 3, 2026</span><span>Arc Testnet · First Edition</span></div>
      <div className="lead-grid paper-panel">
        <article className="lead-story column">
          <p className="kicker story-rule">Front Page / Financial History, Agricultural Ambition</p>
          <h2 id="lead-headline" className="lead-headline display">ONION FUTURES.<br /><em>Still banned.</em><br />The next chapter?<br /><span>Being built.</span></h2>
          <p className="byline mono">By the Editors <span aria-hidden="true">·</span> The Allium Desk</p>
          <div className="editorial-columns">
            <p className="drop-cap">Congress prohibited onion futures on U.S. boards of trade in 1958. The vegetable still has a remarkable place in financial history. The law is real. A new exchange is not what this website offers.</p>
            <p>Allium builds toward better onion-price records. Buying an onion farm is the big, dirt-covered goal. $ONION is our memecoin. Follow the numbers, the receipts, and the spectacle—not a claim on the field.</p>
            <p>First, useful data. Then, if the benchmark survives scrutiny and a lawful route exists, an onion perpetual. Not the memecoin’s price. The price of actual onions. First the roots; then the financial engineering.</p>
          </div>
          <div className="article-actions"><a className="button" href="#field-notes">Read the Field Notes →</a><a className="button button-outline" href="/docs/">Explore the docs →</a></div>
        </article>
        <aside className="lead-sidebar" aria-label="Front-page briefs">
          <div className="column">
            <p className="kicker story-rule">The Token Brief</p>
            <dl className="specs">
              <div><dt>Symbol</dt><dd>$ONION</dd></div>
              <div><dt>Source supply</dt><dd>1 billion</dd></div>
              <div><dt>Token launch</dt><dd>Not live here</dd></div>
              <div><dt>Land</dt><dd>Not secured</dd></div>
              <div><dt>Price series</dt><dd>Proposed</dd></div>
              <div><dt>Perpetual</dt><dd>Conditional</dd></div>
            </dl>
            <a className="source-link" href="/docs/token/">Inspect the token record →</a>
          </div>
          <div className="column notice sidebar-notice">
            <p className="kicker story-rule">On the Record</p>
            <blockquote className="sidebar-quote">“You own the ticker.<br />You do not own the field.”</blockquote>
            <p className="small muted">No land, company equity, crop entitlement, business income, redemption, or guaranteed returns.</p>
          </div>
          <div className="column dark-panel">
            <p className="kicker">Editor’s Notice</p>
            <p>The contract source is public. A verified deployment is not. No invented harvests. No pretend prices. No wallet required to read.</p>
            <a className="source-link" href={`${repository}/blob/main/contracts/Bulb.sol`}>Read Bulb.sol ↗</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ProjectSection() {
  return (
    <section id="project" className="newspaper-section" aria-labelledby="project-title">
      <div className="section-heading"><h2 id="project-title" className="display">The Data. Then the Dirt.</h2><span className="edition-label">Allium / $ONION / A Farm Ambition</span></div>
      <p className="section-deck">The infrastructure is the project. The memecoin is the memecoin. The farm is a goal.</p>
      <div className="two-columns paper-panel">
        <article className="column">
          <p className="kicker">The Project Correspondent</p><h3 className="display article-headline">Useful numbers.<br />An unusually good story.</h3>
          <p className="drop-cap">Allium’s planned tools turn public onion reports into history, comparisons, exports, and APIs. Same place. Same onions. Same bag. Every number should come with an explanation.</p>
          <p>$ONION is the community’s associated memecoin—not project equity, token backing, or a key to paid data. Its original ERC-20 source mints one billion tokens to the constructor’s recipient. Source code is not a distribution ledger.</p>
          <div className="article-status"><span className="state-label">In planning</span><a className="source-link" href="/docs/project/">Meet Allium →</a><a className="source-link" href="/docs/token/">Token &amp; founder interests →</a></div>
        </article>
        <article className="column">
          <p className="kicker">The Land Correspondent</p><h3 className="display article-headline">A farm is the goal.<br />Not token backing.</h3>
          <p className="drop-cap">The ambition is to buy an onion farm. A first season could start with a small lease or grower partnership. Real dirt needs real records. Nothing is secured yet.</p>
          <p>A future farm would belong to a founder-owned LLC, paid for with founder post-tax cash. Not a deed divided across wallets. The LLC would owe nothing to the token contract or its holders.</p>
          <div className="article-status"><span className="state-label">Not secured</span><a className="source-link" href="/docs/farm/">Read the farm arrangement →</a></div>
        </article>
      </div>
    </section>
  );
}

function FieldNotesSection() {
  return (
    <section id="field-notes" className="newspaper-section" aria-labelledby="field-notes-title">
      <div className="section-heading"><h2 id="field-notes-title" className="display">The Field Notes</h2><span className="edition-label">Reporting Plan / No Farm Records Yet</span></div>
      <div className="two-columns paper-panel">
        <article className="column">
          <p className="kicker">The Community Gets the Record</p><h3 className="display">The receipts. Not the real estate.</h3>
          <p className="drop-cap">When there is a real closing or lease, publish redacted records. Then planting, broken irrigation, market receipts, onions sold, money lost. A failed season belongs in the log too.</p>
          <p>The reporting plan: one post a week and one public-record hash on Arc a month once a season is underway. Hashes check published bytes—not authenticity, title, or wallet ownership. Private signatures and live GPS stay private.</p>
          <a className="source-link" href="/docs/field-notes/">How the public record will work →</a>
        </article>
        <article className="column">
          <p className="kicker">Audience Participation</p><h3 className="display">Name the scarecrow.<br />Not the landlord.</h3>
          <p>Possible polls are off-chain and advisory: a barn name, a scarecrow, an onion nickname. The founder can ignore the result. This is not a land-governing DAO.</p>
          <p>Merch would be a separate purchase. Possible gifts or farm days are marketing, not promised token benefits. No events are scheduled; no harvest is reserved for holders.</p>
          <p className="small muted">No farm entries published yet. This is the reporting commitment—not a fictional first harvest.</p>
        </article>
      </div>
    </section>
  );
}

function InfrastructureSection() {
  return (
    <section id="infrastructure" className="newspaper-section" aria-labelledby="infrastructure-title">
      <div className="section-heading"><h2 id="infrastructure-title" className="display">Inside the Infrastructure</h2><span className="edition-label">Proposals / Not Live Services</span></div>
      <div className="section-grid paper-panel">
        <article className="column"><p className="kicker">The Benchmark</p><h3 className="display">One place. One bag.<br />No imaginary average.</h3><p>The proposed first series follows USDA shipping-point reports for Idaho and Malheur County, Oregon. Keep product, package, date, and quoted range intact. A calculated midpoint is a calculation—not an actual transaction.</p><a className="source-link" href="/docs/benchmark/">Inspect the methodology →</a></article>
        <article className="column"><p className="kicker">The Data Desk</p><h3 className="display">The source is free.<br />The useful work isn’t.</h3><p>USDA publishes reports at no cost. Comparable specifications, provenance, corrections, and reliable delivery are the work. Shipping-point and terminal prices are different markets. Missing or stale reports must stay visible.</p><a className="source-link" href="/docs/data-pipeline/">Follow the publication chain →</a></article>
        <article className="column"><p className="kicker">The Possible Next Chapter</p><h3 className="display">An onion perpetual.<br />Not a loophole.</h3><p>ONION-PERP is a conditional ambition referencing physical onion prices, not $ONION. An index does not supply capital, liquidity, or legal permission. The historical CFTC quotation is context—not authorization to launch a market.</p><a className="source-link" href="/docs/market/">Read the prerequisites →</a></article>
      </div>
    </section>
  );
}

function DisclosuresSection() {
  return (
    <section id="disclosures" className="newspaper-section" aria-labelledby="disclosures-title">
      <div className="section-heading"><h2 id="disclosures-title" className="display">On the Record</h2><span className="edition-label">Essential Disclosures</span></div>
      <div className="two-columns paper-panel">
        <article className="column"><p className="kicker">Follow the Money</p><h3 className="display">A founder wallet is<br />a founder wallet.</h3><p>If creator fees or sales of founder-held tokens help fund the farm, those actual sources must be disclosed. Founder holdings, vesting, fees, and liquidity controls remain unpublished—not assumed absent. Farm and data income belong to their operators, not token holders. No rent-funded buyback is promised.</p><a className="source-link" href="/docs/token/">Founder interests &amp; token record →</a></article>
        <article className="column notice"><p className="kicker">Read Before You Speculate</p><h3 className="display">The joke is an onion.<br />The risks are real.</h3><p>No verified contract address or purchase route is published here. You can lose everything on a memecoin. Project progress is not a return promise; disclaimers do not settle legal classification. No USDA, Circle, or protocol endorsement is implied.</p><a className="source-link" href="/docs/risks/">Read all risks &amp; boundaries →</a></article>
      </div>
    </section>
  );
}

function GazetteFooter() {
  return (
    <footer className="gazette-footer"><div className="newspaper-width">
      <p className="masthead footer-masthead">Allium Gazette</p>
      <p className="edition-label footer-edition">Published by Allium / Arc Testnet · First Edition</p>
      <div className="section-grid footer-grid">
        <div><p className="kicker">About the Publication</p><p className="small">Useful onion numbers. A farm ambition. A memecoin audience. The onions may rot. The record should not disappear.</p></div>
        <div><p className="kicker">Inside this Edition</p><div className="footer-links"><SectionLinks /><a href="/docs/">Project docs</a><a href={repository}>GitHub ↗</a></div></div>
        <div><p className="kicker">The Source Desk</p><a className="source-link" href="/docs/sources/">History &amp; primary sources →</a><a className="source-link" href={`${repository}/blob/main/contracts/Bulb.sol`}>Original contract source ↗</a><a className="source-link" href="/docs/risks/">Detailed disclosures →</a></div>
      </div>
      <p className="mono footer-bottom">© 2026 Allium <span>Source code available. No token, farm, data feed, or derivatives market launched here.</span></p>
    </div></footer>
  );
}

export default function App() {
  return <><a className="skip-link" href="#main">Skip to the front page</a><GazetteHeader /><main id="main" className="newspaper-width"><LeadStory /><ProjectSection /><FieldNotesSection /><InfrastructureSection /><DisclosuresSection /></main><GazetteFooter /></>;
}
