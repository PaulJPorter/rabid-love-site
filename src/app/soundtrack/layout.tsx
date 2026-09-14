import { AboutSubnav } from "@/components/about-subnav";

export default function SoundtrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AboutSubnav />
      {children}
    </div>
  );
}
