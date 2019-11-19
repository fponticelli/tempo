const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export const createArray = (num: number)  => {
  const res = []
  for (let i = 0; i < num; i++) {
    res.push(i)
  }
  return res
}

export const createRange = (num: number)  => {
  return createArray(num).map(_ => Math.floor(Math.random() * num))
}

export const repeat = <B>(times: number, f: (num: number) => B)  => {
  return (createArray(times)).map(f)
}

export const createRanges = (values: number[])  => {
  return values.map(createRange)
}

export const createWord = (num: number)  => {
  let w = ''
  for (let i = 0; i < num; i++)
    w += alphabet[Math.floor(alphabet.length * Math.random())]
  return w
}

export const createRandomWord = (min: number, max: number)  => {
  const length = min + Math.round((max - min) * Math.random())
  return createWord(length)
}

export const createWords = (num: number, min: number, max: number)  => {
  return (createArray(num)).map(_ => createRandomWord(min, max)).join(' ')
}

export const createDeep = ()  => {
  return {
    id: createWord(8),
    name: createRandomWord(4, 12),
    address: {
      line1: createWords(3, 4, 6),
      line2: createWords(2, 4, 6)
    },
    paragraph: createWords(30, 1, 8)
  }
}
