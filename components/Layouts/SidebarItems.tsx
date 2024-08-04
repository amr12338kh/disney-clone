"use client";

import { SidebarItemsProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const SidebarItems = ({ icon, text, link, setIsOpen }: SidebarItemsProps) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const firstPath = pathname?.split("/")[1]?.toLowerCase() || "";
    const activeLink = link.split("/").join("");
    setIsActive(firstPath === activeLink);
  }, [pathname, link]);

  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full">
      <Link
        href={link}
        className={`absolute text-primary left-10 flex items-center gap-4 font-semibold ${
          isActive ? "opacity-100" : "opacity-40"
        } hover:opacity-100 hover:scale-110 duration-200 cursor-pointer`}
        onClick={handleClick}
      >
        {icon}
        {isActive && (
          <span className="absolute w-full h-full group-hover:bg-white group-hover:bg-opacity-10 p-4 blur-lg" />
        )}
        <span
          className={`text-transparent group-hover:text-primary translate-x-[-50px] delay-300 group-hover:translate-x-0 w-0 text-xl duration-500`}
        >
          {text}
        </span>
      </Link>
    </div>
  );
};

export default SidebarItems;
