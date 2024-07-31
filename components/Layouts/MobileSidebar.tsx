"use client";

import { useState } from "react";
import { sidebarData } from "@/data";
import { AlignLeft, X } from "lucide-react";
import SidebarItems from "./SidebarItems";
import { MobileSidebarProps } from "@/types";
import { cn } from "@/lib/utils";

const MobileSidebar = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("z-40", className)}>
      <div
        className="fixed top-1 left-1 z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className=" text-primary-foreground">
          {isOpen ? <X size={24} /> : <AlignLeft size={24} />}
        </span>
      </div>
      <div
        className={`${
          isOpen ? "translate-x-0" : " translate-x-[-300px]"
        } duration-500 fixed top-0 left-0 z-40`}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, setIsOpen }: MobileSidebarProps) => {
  return (
    <div className="flex min-h-screen w-[300px] flex-col items-center bg-gradient-to-r from-[#0f1014]/90 to-transparen py-8">
      <div
        className={`h-full fixed top-0 left-0 ${
          isOpen ? "w-full" : "w-0"
        } bg-gradient-to-r from-[#0f1014] from-5% duration-700`}
      />
      <div className="flex z-10 flex-col my-auto gap-16 group py-8 w-full">
        {sidebarData.map((item, index) => (
          <SidebarItems
            key={index}
            icon={item.icon}
            text={item.text}
            link={item?.link}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileSidebar;
