import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Link
            className="brand"
            href="/"
            aria-label="Xome Technologies home">
            <Image
              src="/xome-logo.png"
              alt="Xome Technologies"
              width={180}
              height={60}
              className="footer-logo"
            />

          </Link>
          <p>Thoughtful digital work.<br />Built around your business.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/services">Services</Link>
          <Link href="/about">About Xome</Link>
          <Link href="/work">Our work</Link>
        </div>
        <div>
          <h2>Start a conversation</h2><p>Have a project in mind?<br />Tell us what you want to build.</p>
          <Link href="/contact" className="text-link">Request a quote ↗</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Xome Technologies</span>
        <span>Web. Brand. Growth.</span>
      </div>
    </footer>
  );
}
