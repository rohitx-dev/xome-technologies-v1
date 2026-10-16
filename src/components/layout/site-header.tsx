"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "../ui/container"
import { useState } from "react";
const links =
    [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/contact", label: "Contact" }
    ];

export function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    return (
        <header className="header">
            <Container>

                <div className="container header-inner">

                    <Link
                        href="/"
                        className="header-logo"
                        aria-label="Xome Technologies home"
                        onClick={() => setOpen(false)}
                    >
                        <Image
                            src="/xome-logo.png"
                            alt="Xome Technologies"
                            width={200}
                            height={60}
                            className="header-logo-image"
                            priority
                        />
                    </Link>

                    <nav className="desktop-nav" aria-label="Main navigation">
                        {links.map(link => <Link key={link.href} href={link.href} aria-current={(link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)) ? "page" : undefined}>{link.label}</Link>)}
                    </nav>

                    <Link href="/contact" className="button small header-cta">Request a quote <span aria-hidden="true">↗</span></Link>

                    <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button>

                </div>

                {open && <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}>{[...links, { href: "/contact", label: "Request a quote" }].map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span>
                </Link>)}
                </nav>}

            </Container>

        </header>
    );
};
