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

export const map = <A, B>(f: (a: A) => B, arr: A[]): B[] => {
  const length = arr.length
  const buff = new Array(length)
  for (let i = 0; i < length; i++) {
    buff[i] = f(arr[i])
  }
  return buff
}

export const flatMap = <A, B>(f: (a: A) => B[], arr: A[]): B[] => {
  const buff = new Array()
  for (const el of arr) {
    buff.push(...f(el))
  }
  return buff
}
