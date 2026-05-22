import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-sky-300/20 bg-sky-300/10 px-2.5 py-1 text-xs font-medium text-sky-200 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
