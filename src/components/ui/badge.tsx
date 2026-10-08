import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-raised text-muted shadow-[var(--shadow-border)]",
        accent: "bg-accent text-accent-fg",
        write: "bg-accent/15 text-fg",
        read: "bg-raised text-muted shadow-[var(--shadow-border)]",
        none: "text-subtle shadow-[var(--shadow-border)]",
        danger: "bg-danger/15 text-danger",
        root: "bg-accent text-accent-fg",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
