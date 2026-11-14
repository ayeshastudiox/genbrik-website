/** Small class-name helper — avoids a runtime dependency for string joins. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
