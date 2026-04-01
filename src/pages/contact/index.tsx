import Contact from "@/components/contact-page/contact";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export default function ContactPage({
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main className={cn(``, className)} {...props}>
      <Contact />
    </main>
  );
}
