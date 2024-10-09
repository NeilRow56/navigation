"use client";

import React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Logo } from "../shared/Logo";
import { ThemeToggle } from "../dashboard/ThemeToggle";
import { UserButton } from "@clerk/nextjs";

const SiteHeader = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 transition-all`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200": selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row items-center justify-center space-x-3 md:hidden"
          >
            {/* <span className="h-7 w-7 bg-zinc-300 rounded-lg" /> */}
            <span className="flex text-xl font-bold">
              <Logo />
            </span>
          </Link>
        </div>

        <div className="hidden gap-4 md:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-full text-center">
            <ThemeToggle />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium leading-3">John Doe</span>
          </div>
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
