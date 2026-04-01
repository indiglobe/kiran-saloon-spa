import { cn } from "@/lib/utils/cn"; // adjust path if needed

export default function ComingSoon() {
  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center",
        "bg-linear-to-br from-black via-gray-900 to-gray-800",
        "px-4 text-white",
      )}
    >
      <div className={cn("max-w-xl space-y-6 text-center", "animate-fade-in")}>
        {/* Title */}
        <h1
          className={cn(
            "pb-4 text-4xl font-bold tracking-tight md:text-6xl",
            "bg-clip-text text-transparent",
            "bg-linear-to-r from-primary-400 to-purple-500",
          )}
        >
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className={cn("text-lg text-gray-300 md:text-xl")}>
          We're working hard to bring something amazing.
        </p>

        {/* Divider */}
        <div
          className={cn(
            "mx-auto h-1 w-20",
            "rounded-full bg-linear-to-r from-primary-500 to-purple-500",
          )}
        />

        {/* Launch Hint */}
        <p className={cn("text-sm text-gray-400")}>Stay tuned 🚀</p>
      </div>
    </div>
  );
}
