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
 * A `View` represents the realization of a `Template`.
 */

/**
 * A `View` is attached to its realiazion (DOM nodes) and it controls its behavior
 * after the first render. It is possible to update (`change`), remove (`destroy`)
 * or query (`request`) a view.
 */
export interface View<State, Query> {
  /**
   * `change` takes a new `State` value and immediately updates its realization
   * to match the new state.
   * @param value
   */
  change(value: State): void

  /**
   * Removes its own realization from the DOM permanently.
   */
  destroy(): void

  /**
   * Allows the container App that holds a reference to a view to query the view
   * itself for information that it owns.
   * @param query
   */
  request(query: Query): void
}
