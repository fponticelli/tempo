export const keys = <T>(object: T): (keyof T)[] => {
  return Object.keys(object) as any as (keyof T)[]
}
