import Link from "next/link";
import { services } from "../../lib/services";

export function ServiceCards({ limit }: { limit?: number }) {
    return (
        <div className="service-grid">
            {services.slice(0, limit).map(service =>
                <Link className="service-card" key={service.slug} href={`/services/${service.slug}`}>
                    <div className="card-top">
                        <span>{service.number}</span>
                        <span className="arrow-circle" aria-hidden="true">↗</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <span className="card-bottom">Explore service <span aria-hidden="true">→</span>
                    </span>
                </Link>)}
        </div>
    );
}


export function CallToAction() {
    return (
        <section className="cta-section">
            <div className="container cta-panel">
                <div><p className="eyebrow">LET’S TALK ABOUT YOUR IDEA</p><h2> What is your next<br />digital move?</h2><p>Share what you want to build, improve, or promote..</p></div>
                <Link href="/contact" className="button light">Let’s talk about your project <span aria-hidden="true">↗</span>
                </Link>
            </div>
        </section>
    );
}