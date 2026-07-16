"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type HeaderProps = {
  locale?: "en" | "he";
};

type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const enLinks: NavLink[] = [
  { href: "/#services", label: "SERVICES" },
  {
    href: "/sbr-eng",
    label: "SOLUTIONS",
    children: [
      { href: "/sbr-eng", label: "SBR - Scale bio remover" },
      { href: "/accs-eng", label: "ACCS-Automatic condenser cleaning system" },
    ],
  },
  { href: "/#about", label: "ABOUT" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#contact", label: "CONTACT" },
  { href: "/team", label: "TEAM" },
  { href: "/news", label: "NEWS" },
];

const heLinks: NavLink[] = [
  { href: "/hebrew#services", label: "שרותים" },
  {
    href: "/sbr",
    label: "פתרונות",
    children: [
      { href: "/sbr", label: "SBR - Scale bio remover" },
      { href: "/accs", label: "ACCS-Automatic condenser cleaning system" },
    ],
  },
  { href: "/hebrew#about", label: "אודות" },
  { href: "/hebrew#projects", label: "פרויקטים" },
  { href: "/hebrew#contact", label: "צור קשר" },
  { href: "/team", label: "צוות" },
  { href: "/news", label: "חדשות" },
];

export default function Header({ locale = "en" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = locale === "he" ? heLinks : enLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link href={locale === "he" ? "/hebrew" : "/"} className="brand">
          <Image src="/brand/logo.png" alt="מקור פתרונות אנרגיה" width={140} height={42} priority />
          <span className="brand-word">MAKOR</span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map((link) =>
            link.children ? (
              <div className="nav-dropdown" key={link.label}>
                <Link href={link.href} className={pathname.startsWith("/sbr") || pathname.startsWith("/accs") ? "active" : ""}>
                  {link.label}
                </Link>
                <div className="nav-dropdown-panel">
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} className={pathname === child.href ? "active" : ""}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            )
          )}
          <Link className="lang-switch" href={locale === "he" ? "/" : "/hebrew"}>
            {locale === "he" ? "EN" : "עברית"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
