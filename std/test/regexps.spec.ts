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

import {
  map
} from '../src/regexps'

describe('regexps.ts', () => {
  it('Map with non-global pattern', () => {
    const pattern = /xx|yyy/
    expect(map(v => v.toUpperCase(), pattern, 'axxbbyyyc')).toBe('aXXbbYYYc')
    expect(map(v => v.toUpperCase(), pattern, 'xxbbyyy')).toBe('XXbbYYY')
    expect(map(v => v.toUpperCase(), pattern, 'xx')).toBe('XX')
    expect(map(v => v.toUpperCase(), pattern, 'x')).toBe('x')
  })

  it('Map with global pattern', () => {
    const pattern = /xx|yyy/g
    expect(map(v => v.toUpperCase(), pattern, 'axxbbyyyc')).toBe('aXXbbYYYc')
    expect(map(v => v.toUpperCase(), pattern, 'xxbbyyy')).toBe('XXbbYYY')
    expect(map(v => v.toUpperCase(), pattern, 'xx')).toBe('XX')
    expect(map(v => v.toUpperCase(), pattern, 'x')).toBe('x')
  })
})
