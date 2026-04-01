import Services from "@/components/services-page/services";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export default function AboutPage({
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main className={cn(``, className)} {...props}>
      <Services />
    </main>
  );
}
