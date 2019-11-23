/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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

export const repeatf = <B>(f: (num: number) => B) => (times: number)  => {
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

export const createWordsBetween = (minWords: number, maxWords: number, minLength: number, maxLentgh: number)  => {
  const num = randomInt(minWords, maxWords)
  return (createArray(num)).map(_ => createRandomWord(minLength, maxLentgh)).join(' ')
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

export const createAttributes = () => {
  return {
    id: createRandomWord(2, 8),
    className: createWordsBetween(1, 4, 2, 8),
    title: createWordsBetween(1, 6, 2, 8)
  }
}

const hexAlphabet = '0123456789ABCDEF'
export const randomColor = () => {
  function randomHex() {
    const pos = Math.floor(Math.random() * hexAlphabet.length)
    return hexAlphabet[pos]
  }
  return `#${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}`
}

export const createManyAttributes = repeatf(createAttributes)

export const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const createStyles = () => {
  return {
    backgroundColor: randomColor(),
    color: randomColor(),
    border: `${randomInt(1, 4)}px solid ${randomColor()}`
  }
}

export const createManyStyles = repeatf(createStyles)
