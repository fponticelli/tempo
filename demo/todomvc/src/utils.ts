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

export class Utils {
  static uuid(): string {
    var uuid = ''

    for (let i = 0; i < 32; i++) {
      // tslint:disable-next-line:no-bitwise
      const random = (Math.random() * 16) | 0
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-'
      }
      // tslint:disable-next-line:no-bitwise
      uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16)
    }

    return uuid
  }

  static pluralize(count: number, word: string) {
    return count === 1 ? word : word + 's'
  }
}
