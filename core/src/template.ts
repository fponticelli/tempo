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
 * A `Template` is a declarative representation of a `View`. The `Template` will
 * be interpreted and realized into a `View` by invoking the `render` method.
 */

import { View } from './view'

/**
 * An object representing a `Template` that can be rendered into a `View`.
 */
export interface Template<State, Query, Context> {
  render: RenderMethod<State, Query, Context>
}

/**
 * Function signature for the `Template.render()` method.
 */
export type RenderMethod<State, Query, Context> = (
  ctx: Context,
  state: State
) => View<State, Query>
