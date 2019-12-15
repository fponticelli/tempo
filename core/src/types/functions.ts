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

export type AnyFunction = ((...args: any[]) => any) | Function

// TYPE TESTS
import { Assert, Extends, AssertNot } from './assert'
type _procedure_is_AnyFunction = Assert<Extends<() => void, AnyFunction>>
type _Function_is_AnyFunction = Assert<Extends<Function, AnyFunction>>
type _string_is_not_AnyFunction = AssertNot<Extends<string, AnyFunction>>

// @ts-ignore
type _TESTS_ =
  | _procedure_is_AnyFunction
  | _Function_is_AnyFunction
  | _string_is_not_AnyFunction
