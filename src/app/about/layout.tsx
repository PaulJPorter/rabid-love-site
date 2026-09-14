import { AboutSubnav } from "@/components/about-subnav";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AboutSubnav />
      {children}
    </div>
  );
}
