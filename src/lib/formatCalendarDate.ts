/**
 * Format a calendar date from content frontmatter. YAML date-only fields are
 * parsed as UTC midnight; formatting in the default local timezone shifts the
 * displayed day for many regions.
 */
export function formatCalendarDate(
  date: Date,
  locales?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions
): string {
  return date.toLocaleDateString(locales, {
    ...options,
    timeZone: "UTC",
  });
}
