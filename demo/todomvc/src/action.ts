import { Filter, Todo } from './state'

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

export class ToggleCompleted {
  readonly kind = 'toggle-completed'
  constructor(readonly id: string) {}
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
  | ToggleCompleted
  | ToggleFilter
  | UpdateTodo

export const Action  = {
  adddingTodo: (title: string): Action => new AddingTodo(title),
  addTodo: (title: string): Action => new CreateTodo(title),
  cancelAddTodo: new CancelAddingTodo() as Action,
  cancelUpdateTodo: new CancelEditingTodo() as Action,
  clearCompleted: new ClearCompleted() as Action,
  editingTodo: (id: string, title: string): Action => new EditingTodo(id, title),
  removeTodo: (id: string): Action => new RemoveTodo(id),
  toggleCompleted: (id: string): Action => new ToggleCompleted(id),
  toggleFilter: (filter: Filter): Action => new ToggleFilter(filter),
  updateTodo: (id: string, title: string): Action => new UpdateTodo(id, title)
}
