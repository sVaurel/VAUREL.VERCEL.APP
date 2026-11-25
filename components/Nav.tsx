import Link from "next/link";
import type { ReactNode } from "react";
import ThemeToggle from "@/components/ThemeToggle";

type NavProps = {
  active?: "home" | "projects" | "contact";
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
        <Link href="/contact" className={active === "contact" ? "active-link" : undefined}>
          CONTACT
        </Link>
      </nav>
      {center ? <div className="nav-center">{center}</div> : null}
      <ThemeToggle />
    </header>
  );
}
