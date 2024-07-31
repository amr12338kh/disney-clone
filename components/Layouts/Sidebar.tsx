"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { sidebarData } from "@/data";
import { cn } from "@/lib/utils";
import SidebarItems from "./SidebarItems";

const Sidebar = ({ className }: { className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={cn(
        "flex min-h-screen sm:w-[100px] fixed top-0 left-0 z-40 flex-col items-center bg-gradient-to-r from-[#0f1014]/90 to-transparent py-8",
        className
      )}
    >
      <div className="flex flex-col items-center gap-3">
        <Image
          alt="Disney+ Logo"
          src="/Disney+_logo.png"
          width={50}
          height={50}
          priority={false}
          className=" z-50"
        />
        <span className="text-xs z-50 text-yellow-200 font-extralight tracking-wider bg-yellow-500 bg-opacity-10 py-1 px-2 rounded-full flex items-center justify-center">
          Subscribe <ChevronRight size={13} />
        </span>
      </div>
      <div
        className={`h-full fixed delay-100 top-0 left-0 ${
          isHovered ? "w-[40%]" : "w-0"
        } bg-gradient-to-r from-[#0f1014] from-5% duration-700`}
      />
      <div
        className={` z-10  fixed top-[50%] translate-y-[-50%] left-0 my-auto flex flex-col gap-y-16 group py-8 ${
          isHovered ? "w-[170px]" : "w-[100px]"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {sidebarData.map((item, index) => (
          <SidebarItems
            key={index}
            icon={item.icon}
            text={item.text}
            link={item?.link}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
