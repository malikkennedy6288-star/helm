import * as React from "react";
import { cn } from "@/lib/utils";

const NativeSelect = React.forwardRef<HTMLSelectElement, React.ComponentProps<"select">>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "flex h-11 w-full appearance-none rounded-md bg-raised bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 fill=%22none%22 stroke=%22%239a9890%22 stroke-width=%221.6%22><path d=%22M2.5 4.5 6 8l3.5-3.5%22/></svg>')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat px-3 pr-9 text-sm text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-border-hover)] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  ),
);
NativeSelect.displayName = "NativeSelect";

export { NativeSelect };
