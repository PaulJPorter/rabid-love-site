"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { href: "/about", label: "About" },
  { href: "/about/cast", label: "Cast" },
  { href: "/about/on-set", label: "On Set" },
  { href: "/about/production-design", label: "Production Design" },
  { href: "/soundtrack", label: "Soundtrack" },
];

export function AboutSubnav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="About"
      className="flex flex-wrap gap-2 border-b border-border bg-black/30 px-4 py-3"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-2">
        {items.map((item) => {
          const active =
            pathname === item.href ||
            (item.href === "/soundtrack" && pathname === "/about/soundtrack");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em]",
                active
                  ? "border-magenta bg-magenta/15 text-magenta"
                  : "border-border text-muted-foreground hover:border-cyan/50 hover:text-cyan",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
