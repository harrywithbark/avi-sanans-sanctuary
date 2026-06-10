import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  className,
  bg = "white",
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  bg?: "white" | "muted" | "navy";
  as?: "section" | "div";
}) {
  const bgClass =
    bg === "muted"
      ? "bg-[#070E1A]"
      : bg === "navy"
      ? "bg-[#0A1221] text-white"
      : "bg-[#0A1221]";
  return (
    <Tag className={cn("w-full", bgClass)}>
      <div
        className={cn(
          "max-w-[1440px] mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-16",
          className,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
