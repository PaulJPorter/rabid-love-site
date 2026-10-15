import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Rabid Love: email rabidlove1984@gmail.com for press and fans. X @RabidLove1984 is the primary social channel.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <section className="border border-blood/50 bg-card p-6">
        <Button asChild className="h-12 w-full bg-blood text-white hover:bg-[#ff0000]">
          <a href={links.mailto}>Email {links.email}</a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="mt-4 h-12 w-full border-orange bg-transparent text-orange hover:bg-orange/10 hover:text-orange"
        >
          <a href={links.x} target="_blank" rel="noopener noreferrer">
            Open @RabidLove1984
          </a>
        </Button>
      </section>
    </div>
  );
}
