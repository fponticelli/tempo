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
 * All attributes and DOM values in a Tempo app are described by either literal
 * values or values that are derived from the app current state.
 */

/**
 * Describes a `Value` that can only be inferred from some other value `State`.
 */
export type DerivedValue<State, Value> = (
  state: State
) => Value | undefined

/**
 * A value that can be either a literal or derived from a state.
 */
export type DerivedOrLiteralValue<State, Value> =
  | Value
  | DerivedValue<State, Value>
