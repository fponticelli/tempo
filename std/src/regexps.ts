/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License")
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

export const map = (f: (...s: string[]) => string, pattern: RegExp, subject: string) => {
  const buff = [] as string[]
  let pos = 0
  let result: RegExpExecArray | null
  if (pattern.global) {
    pattern.lastIndex = 0
    while ((result = pattern.exec(subject)) !== null) {
      buff.push(subject.substring(pos, result.index))
      buff.push(f(...result))
      pos = result.index + result[0].length
    }
  } else {
    while ((result = pattern.exec(subject.substring(pos))) !== null) {
      buff.push(subject.substring(pos, pos + result.index))
      buff.push(f(...result))
      pos += result.index + result[0].length
    }
  }
  buff.push(subject.substring(pos))
  return buff.join('')
}
