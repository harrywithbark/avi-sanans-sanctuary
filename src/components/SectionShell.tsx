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
      ? "bg-[#F4F6F8]"
      : bg === "navy"
      ? "bg-[#0D1B2A] text-white"
      : "bg-white";
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
