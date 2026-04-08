// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function searchParamGenerator(search: Record<string, any>): string {
  return Object.entries(search)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");
}
