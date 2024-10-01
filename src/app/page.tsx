import MarginWidthWrapper from "@/components/frontEnd/MarginWidthWrapper";
import MobileHeader from "@/components/frontEnd/MobileHeader";
import SideNav from "@/components/frontEnd/SideNav";
import SiteHeader from "@/components/frontEnd/SiteHeader";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex ">
      <SideNav />
      <MarginWidthWrapper>
        <SiteHeader />
        <MobileHeader />
        <div className="p-4 space-y-4">
          <h1 className="text-5xl font-bold">Home page</h1>
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </MarginWidthWrapper>
    </div>
  );
}
