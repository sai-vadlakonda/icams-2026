/**
 * Tiny classnames utility - merges class strings, filtering out falsy values.
 * Usage: cn('base-class', condition && 'extra-class', anotherCondition ? 'a' : 'b')
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
