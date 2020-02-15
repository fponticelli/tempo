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

/**
 *
 */

export type IndexType = keyof any

// TYPE TESTS
import { Assert, Extends, AssertNot } from './assert'

// @ts-ignore
type _TESTS_ =
  | Assert<Extends<string, IndexType>>
  | Assert<Extends<number, IndexType>>
  | Assert<Extends<symbol, IndexType>>
  | AssertNot<Extends<boolean, IndexType>>
