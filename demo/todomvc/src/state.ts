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

import { Utils } from './utils'

export enum Filter {
  All,
  Active,
  Completed
}

export interface State {
  filter: Filter
  filtered: Todo[]
  todos: Todo[]
  completed: number
  adding?: string
  editing?: TodoEdit
}

export interface TodoEdit {
  id: string
  title: string
}

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export const createTodo = (title: string): Todo => ({
  id: Utils.uuid(),
  title,
  completed: false
})

export const emptyState = (): State => ({
  filter: Filter.All,
  filtered: [],
  todos: [],
  completed: 0,
  adding: undefined,
  editing: undefined
})
