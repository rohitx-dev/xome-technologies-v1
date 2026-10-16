import Link from "next/link";
import { ServiceCards, CallToAction } from "../components/home/home-sections";

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
              <Link href="/contact" className="button">
                Request a Quote <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/portfolio" className="button outline">
                View Portfolio <span aria-hidden="true">→</span>
              </Link>
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

      <section className="section container">
        <div className="section-heading">
          <div><p className="eyebrow">WHAT WE DO</p><h2>Big possibilities.<br />The right digital partner.</h2>
          </div>
          <p>One place for the creative and technical work your business needs, with a clear scope and a practical path forward.</p>
        </div>
        <ServiceCards limit={6} />

        <div className="section-bottom"><span>Your next idea doesn’t have to fit in a box.</span>
          <Link className="text-link" href="/services">See all services ↗</Link></div>
      </section>

      <section className="work-feature">
        <div className="container split">
          <div className="work-art" aria-hidden="true">
            <div className="mini-browser">
              <div className="browser-bar">
                <i /><i /><i />
              </div>
              <div className="browser-body">
                <small>YOUR NEXT CHAPTER</small><strong>A stronger<br />digital presence.</strong>
                <div className="mock-button" />
                <div className="mock-cards">
                  <i /><i /><i />
                </div>
              </div>
            </div>
            <span className="concept-label">Illustrative design concept</span>
          </div>
          <div>
            <p className="eyebrow">BUILT WITH PURPOSE</p>
            <h2>A good-looking website<br />is just the beginning.</h2>
            <p className="body-copy">Your digital presence should make it easier for people to understand your business and take the next step. We connect clear messaging, useful design, and thoughtful implementation.</p>
            <ul className="check-list">
              <li>Designed around your audience</li>
              <li>A clear route from interest to enquiry</li>
              <li>Room to evolve as your business grows</li>
            </ul>
            <Link href="/work" className="text-link">Explore our approach to work ↗</Link>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="container split">
          <div><p className="eyebrow">BEYOND THE HANDOVER</p><h2>Still here for<br />your next question.</h2>
          </div>
          <div>
            <p className="body-copy">Our lifetime-help offering covers guidance, fixes, ongoing edits, and new feature requests. We agree the scope, scheduling, and commercial terms for your project so expectations stay clear.</p>
            <Link href="/services/ongoing-support" className="text-link">Learn about ongoing support ↗</Link>
          </div>
        </div>
      </section>

      <CallToAction />




    </>
  );
}
