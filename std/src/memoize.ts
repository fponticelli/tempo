export function memoize<T>(f: () => T) {
  let value: T | undefined = undefined
  return () => {
    if (typeof value === 'undefined') {
      value = f()
    }
    return value
  }
}
