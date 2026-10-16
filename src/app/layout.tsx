import type { Metadata } from 'next';
import { SiteHeader } from '../components/layout/site-header';
import { Footer } from '../components/layout/site-footer';
import "./globals.css";


export const metadata: Metadata = {
  title: { default: "Xome Technologies | Websites, Branding & Digital Marketing", template: " %s | Xome Technologies" },
  description: "Website design, landing pages, digital marketing, SEO, branding, and ongoing support for local businesses and startups.",
}


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return(
  <html lang="en">
    <body>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <Footer />
    </body>
  </html>
 );
}