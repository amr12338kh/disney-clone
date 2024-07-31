import React from "react";
import { cn } from "@/lib/utils";

const Section = ({
  children,
  className,
  isLeft,
}: {
  children: React.ReactNode;
  className?: string;
  isLeft: boolean;
}) => {
  return (
    <section
      className={cn(
        `${
          isLeft
            ? "pl-5 sm:pl-0 sm:ml-container"
            : "px-5 sm:px-0 sm:mx-container"
        }`,
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
