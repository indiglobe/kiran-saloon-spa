import { Gallery } from "@/components/galary-page/galary";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export default function GalaryPage({
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main className={cn(``, className)} {...props}>
      <Gallery />
    </main>
  );
}
