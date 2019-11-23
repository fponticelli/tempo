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

import { Filter } from './state'

export class AddingTodo {
  readonly kind = 'adding-todo'
  constructor(readonly title: string) {}
}

export class CreateTodo {
  readonly kind = 'create-todo'
  constructor(readonly title: string) {}
}

export class CancelAddingTodo {
  readonly kind = 'cancel-adding-todo'
  constructor() {}
}

export class CancelEditingTodo {
  readonly kind = 'cancel-editing-todo'
  constructor() {}
}

export class ClearCompleted {
  readonly kind = 'clear-completed'
  constructor() {}
}

export class EditingTodo {
  readonly kind = 'editing-todo'
  constructor(readonly id: string, readonly title: string) {}
}

export class RemoveTodo {
  readonly kind = 'remove-todo'
  constructor(readonly id: string) {}
}

export class ToggleFilter {
  readonly kind = 'toggle-filter'
  constructor(readonly filter: Filter) {}
}

export class ToggleTodo {
  readonly kind = 'toggle-completed'
  constructor(readonly id: string) {}
}

export class ToggleAllTodo {
  readonly kind = 'toggle-all-todo'
}

export class UpdateTodo {
  readonly kind = 'update-todo'
  constructor(readonly id: string, readonly title: string) {}
}

export type Action =
  | AddingTodo
  | CreateTodo
  | CancelAddingTodo
  | CancelEditingTodo
  | ClearCompleted
  | EditingTodo
  | RemoveTodo
  | ToggleTodo
  | ToggleAllTodo
  | ToggleFilter
  | UpdateTodo

export const Action = {
  adddingTodo: (title: string): Action => new AddingTodo(title),
  addTodo: (title: string): Action => new CreateTodo(title),
  cancelAddTodo: new CancelAddingTodo() as Action,
  cancelUpdateTodo: new CancelEditingTodo() as Action,
  clearCompleted: new ClearCompleted() as Action,
  editingTodo: (id: string, title: string): Action => new EditingTodo(id, title),
  removeTodo: (id: string): Action => new RemoveTodo(id),
  toggleTodo: (id: string): Action => new ToggleTodo(id),
  toggleAllTodo: new ToggleAllTodo() as Action,
  toggleFilter: (filter: Filter): Action => new ToggleFilter(filter),
  updateTodo: (id: string, title: string): Action => new UpdateTodo(id, title)
}
