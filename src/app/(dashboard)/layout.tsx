import SiteHeader from "@/components/frontEnd/SiteHeader";
import MobileHeader from "@/components/frontEnd/MobileHeader";
import SideNav from "@/components/frontEnd/SideNav";
import MarginWidthWrapper from "@/components/frontEnd/MarginWidthWrapper";
import PageWrapper from "@/components/frontEnd/PageWrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1">
        <MarginWidthWrapper>
          <SiteHeader />
          <MobileHeader />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
}
