import SiteHeader from "@/components/frontEnd/SiteHeader";
import MobileHeader from "@/components/frontEnd/MobileHeader";
import SideNav from "@/components/frontEnd/SideNav";
import MarginWidthWrapper from "@/components/frontEnd/MarginWidthWrapper";
import PageWrapper from "@/components/frontEnd/PageWrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/users/Menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* LEFT */}
      <div className="w-[14%] p-4 md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-2xl font-bold leading-tight tracking-tighter text-transparent xl:block">
            WpAccPac
          </span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="flex w-[86%] flex-col overflow-scroll bg-[#F7F8FA] md:w-[92%] lg:w-[84%] 2xl:w-[86%]">
        <SiteHeader />
        {children}
      </div>
    </div>
  );
}
