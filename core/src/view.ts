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

interface BasicView {
  destroy(): void
}

export interface DynamicView<State> extends BasicView {
  readonly kind: 'dynamic'
  change(value: State): void
}

export interface StaticView extends BasicView {
  readonly kind: 'static'
}

export type View<State> = DynamicView<State> | StaticView

export function filterDynamics<State>(children: View<State>[]) {
  return children.filter(child => child.kind === 'dynamic') as DynamicView<State>[]
}

export function applyChange<State>(state: State, children: View<State>[]) {
  for (const view of children) {
    if (view.kind === 'dynamic') {
      view.change(state)
    }
  }
}
