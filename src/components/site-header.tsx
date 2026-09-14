"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links, nav } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(
  pathname: string,
  href: string,
  children?: readonly { href: string }[],
) {
  if (href === "/") return pathname === "/";
  if (children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`))) {
    return true;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-magenta/25 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="font-display text-xl tracking-[0.18em] text-magenta neon-text">
          Rabid Love
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "inline-flex h-9 items-center px-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-cyan",
                  isActive(
                    pathname,
                    item.href,
                    "children" in item ? item.children : undefined,
                  ) && "text-cyan cyan-text",
                )}
              >
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <div className="invisible absolute left-0 top-full z-20 min-w-48 border border-border bg-card p-2 opacity-0 shadow-lg group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:bg-muted hover:text-cyan"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-9 bg-blood text-white hover:bg-[#ff0000] sm:inline-flex"
          >
            <a href={links.tubi} target="_blank" rel="noopener noreferrer">
              Watch on Tubi
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-l-magenta/30 bg-background">
              <SheetHeader>
                <SheetTitle className="font-display tracking-[0.2em] text-magenta">
                  Rabid Love
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
                {nav.map((item) => (
                  <div key={item.href} className="flex flex-col">
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "px-1 py-2 font-mono text-sm uppercase tracking-[0.16em] text-foreground",
                          isActive(
                            pathname,
                            item.href,
                            "children" in item ? item.children : undefined,
                          ) && "text-cyan",
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                    {"children" in item && item.children
                      ? item.children.map((child) => (
                          <SheetClose asChild key={child.href}>
                            <Link
                              href={child.href}
                              className="pl-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground"
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        ))
                      : null}
                  </div>
                ))}
                <SheetClose asChild>
                  <a
                    href={links.tubi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex h-12 items-center justify-center bg-blood font-semibold text-white"
                  >
                    Watch on Tubi — Free
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
