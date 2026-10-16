import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> YOUR BUSINESS. MORE POSSIBILITIES.</p>
            <h1>Make your next<br /><span>digital move.</span></h1>
            <p>From your first website to your next growth campaign. We bring design, technology, and marketing together to move your business forward.</p>
            <div className="button-row">
              <Link href="/contact" className="button">Build with Xome <span aria-hidden="true">↗</span></Link>
              <Link href="/services" className="button outline">Explore our services <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-footnote">
              <span className="tiny-line" /> For local businesses. For ambitious startups.
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-core"><span>×</span></div>
            <div className="art-label label-one"><span className="label-symbol">⌘</span> Built for your business</div>
            <div className="art-label label-two"><span className="label-symbol">↗</span> Ready for what’s next</div>
            <span className="art-coordinate">DESIGN · TECHNOLOGY · GROWTH</span>
          </div>
        </div>
      </section>

      <div className="capability-strip">
        <div className="container">
          <span>DESIGNED TO CONNECT</span>
          <span>Web experiences</span><i />
          <span>Brand identities</span><i />
          <span>Digital growth</span><i />
          <span>Ongoing support</span>
        </div>
      </div>

      
    </>
    );
}
