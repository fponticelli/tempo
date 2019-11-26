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

export type Reducer<State, Action> = (state: State, action: Action) => State

export const compose = <State, Action>(reducer: Reducer<State, Action>, ...others: Reducer<State, Action>[]) => (
  state: State,
  action: Action
) => {
  return others.reduce((s, f) => f(s, action), reducer(state, action))
}

export const matchReduce = <Field extends (string | number | symbol), State, Action extends { [_ in Field]: any }>(
  field: Field,
  matches: { [k in Action[Field]]: (state: State, action: Action extends { [_ in Field]: k } ? Action : never) => State }
): Reducer<State, Action> => {
  return function(state: State, action: Action) {
    const key = action[field] as Action[Field]
    return matches[key](state, action as any)
  }
}

export const reduceOnKind = <State, Action extends { kind: any }>(
  matches: { [k in Action['kind']]: (state: State, action: Action extends { kind: k } ? Action : never) => State }
): Reducer<State, Action> => {
  return function(state: State, action: Action) {
    const key = action.kind as Action['kind']
    return matches[key](state, action as any)
  }
}
