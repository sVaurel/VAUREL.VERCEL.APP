import Link from "next/link";
import type { ReactNode } from "react";

type NavProps = {
  active?: "home" | "projects" | "shop" | "contact";
  center?: ReactNode;
};

export default function Nav({ active, center }: NavProps) {
  return (
    <header className={center ? "nav nav-has-center" : "nav"}>
      <nav className="nav-left" aria-label="Primary navigation">
        <Link href="/" className={active === "home" ? "active-link" : undefined}>
          HOME
        </Link>
        <Link href="/projects" className={active === "projects" ? "active-link" : undefined}>
          PROJECTS
        </Link>
        <Link href="/shop" className={active === "shop" ? "active-link" : undefined}>
          SHOP
        </Link>
      </nav>
      {center ? <div className="nav-center">{center}</div> : null}
      <Link
        href="/contact"
        className={active === "contact" ? "nav-contact active-link" : "nav-contact"}
      >
        GET IN TOUCH
      </Link>
    </header>
  );
}
