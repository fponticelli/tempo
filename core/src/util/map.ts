export const mapArray = <A, B>(arr: A[], f: (a: A) => B): B[] => {
  const length = arr.length
  const buff = new Array(length)
  for (let i = 0; i < length; i++) {
    buff[i] = f(arr[i])
  }
  return buff
}
