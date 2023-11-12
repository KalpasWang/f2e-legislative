import { cn } from "@nextui-org/react";
import React from "react";

type Props = {
  className: string;
  type: "main" | "dark";
  children: React.ReactNode;
};

const bgType = {
  main: "bg-primary",
  dark: "bg-primaryDark",
};

export default function DateMarker({
  children,
  className,
  type = "dark",
}: Props) {
  return (
    <div
      className={cn(
        "absolute bottom-0 origin-bottom transition-all",
        className
      )}
    >
      <div className="flex flex-col items-center justify-end">
        <div
          className={cn(
            "px-4 py-2 mb-2 bg-primary shadow-activity",
            bgType[type]
          )}
        >
          <span className="text-3xl font-bold leading-normal tracking-[3px]">
            {children}
          </span>
        </div>
        <div
          className={cn(
            "bg-primary w-unit-2 h-unit-10 shadow-activity",
            bgType[type]
          )}
        ></div>
      </div>
    </div>
  );
}
