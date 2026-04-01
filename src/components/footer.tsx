import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export function Footer({ className, ...props }: ComponentProps<"footer">) {
  return (
    <footer
      className={cn(`bg-primary-500 py-10 text-white`, className)}
      {...props}
    >
      <div
        className={cn(
          `mx-auto flex max-w-7xl flex-col items-center justify-center gap-y-4 px-4 sm:px-6 md:flex-row md:justify-between lg:px-8`
        )}
      >
        <div>&copy; 2026 Kiran Family Sallon and Spa all right reserve.</div>
        <div>
          Developed by{" "}
          <a href="https://indiglobe.in" className={cn(`underline`)}>
            Indiglobe
          </a>
        </div>
      </div>
    </footer>
  );
}
