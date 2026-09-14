import Link from "next/link";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/site";

type Props = {
  size?: "default" | "lg";
  className?: string;
  showTrailerLink?: boolean;
};

export function WatchCtas({ size = "lg", className, showTrailerLink = true }: Props) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className ?? ""}`}>
      <Button
        asChild
        size={size}
        className="h-12 min-h-12 bg-blood px-5 text-base font-semibold text-white hover:bg-[#ff0000]"
      >
        <a href={links.tubi} target="_blank" rel="noopener noreferrer">
          Watch on Tubi — Free
        </a>
      </Button>
      <Button
        asChild
        variant="outline"
        size={size}
        className="h-12 min-h-12 border-[#f7931e]/70 bg-transparent px-5 text-base text-[#f7931e] hover:bg-[#f7931e]/10 hover:text-[#f7931e]"
      >
        <a href={links.x} target="_blank" rel="noopener noreferrer">
          Follow @RabidLove1984
        </a>
      </Button>
      {showTrailerLink ? (
        <Button asChild variant="ghost" size={size} className="h-12 text-foreground/80">
          <Link href="/#trailer">Official trailer</Link>
        </Button>
      ) : null}
    </div>
  );
}
