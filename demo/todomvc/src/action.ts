import { Filter, Todo } from './state'

export class AddingTodo {
  readonly kind = 'adding-todo'
  constructor(readonly title: string) {}
}

export class AddTodo {
  readonly kind = 'add-todo'
  constructor(readonly title: string) {}
}

export class CancelAddTodo {
  readonly kind = 'cancel-add-todo'
  constructor() {}
}

export class CancelUpdateTodo {
  readonly kind = 'cancel-update-todo'
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
  constructor(readonly todo: Todo) {}
}

export class ToggleFilter {
  readonly kind = 'toggle-filter'
  constructor(readonly filter: Filter) {}
}

export class ToggleCompleted {
  readonly kind = 'toggle-completed'
  constructor(readonly todo: Todo) {}
}

export class UpdateTodo {
  readonly kind = 'update-todo'
  constructor(readonly id: string, readonly title: string) {}
}

export type Action =
  | AddingTodo
  | AddTodo
  | CancelAddTodo
  | CancelUpdateTodo
  | ClearCompleted
  | EditingTodo
  | RemoveTodo
  | ToggleCompleted
  | ToggleFilter
  | UpdateTodo

export const Action  = {
  adddingTodo: (title: string): Action => new AddingTodo(title),
  addTodo: (title: string): Action => new AddTodo(title),
  cancelAddTodo: new CancelAddTodo(),
  cancelUpdateTodo: new CancelUpdateTodo(),
  clearCompleted: (new ClearCompleted() as Action),
  editingTodo: (id: string, title: string): Action => new EditingTodo(id, title),
  removeTodo: (todo: Todo): Action => new RemoveTodo(todo),
  toggleCompleted: (todo: Todo): Action => new ToggleCompleted(todo),
  toggleFilter: (filter: Filter): Action => new ToggleFilter(filter),
  updateTodo: (id: string, title: string): Action => new UpdateTodo(id, title)
}
