import {
  a,
  button,
  component,
  footer,
  h1,
  header,
  input,
  label,
  li,
  Mood,
  p,
  section,
  span,
  ul,
  derived,
  DOMEventHandler,
  repeat,
  mapState,
  when,
  div
} from '../../../src/dom'
import { State, createTodo, Filter, Todo } from './state'
import { Action } from './action'
import { Store } from './store'

const STORE_KEY = 'todomvc-mood'

const changeF = (filter: Filter): DOMEventHandler<State, MouseEvent, Action> => {
  return derived((state: State) => {
    if (state.filter === filter) {
      return undefined
    } else {
      return (_: MouseEvent): Action | undefined => Action.toggleFilter(filter)
    }
  })
}

const filterF = (filter: Filter) => {
  if (filter === Filter.All) {
    return (_: Todo) => true
  } else if (filter === Filter.Completed) {
    return (todo: Todo) => todo.completed
  } else {
    return (todo: Todo) => !todo.completed
  }
}

const selectedF = (filter: Filter) => (state: State) => state.filter === filter ? 'selected' : undefined

const update = (state: State, action: Action) => {
  let newState = { ...state }
  switch (action.kind) {
    case 'adding-todo':
      if (action.title) {
        newState.adding = action.title
      } else {
        delete newState.adding
      }
      break
    case 'add-todo':
      newState.todos = [...state.todos, createTodo(action.title)]
      delete newState.adding
      break
    case 'editing-todo':
      newState.editing = { id: action.id, title: action.title }
      break
    case 'cancel-add-todo':
      delete newState.adding
      break
    case 'cancel-update-todo':
      delete newState.editing
      break
    case 'clear-completed':
      newState.todos = state.todos.filter(v => !v.completed)
      break
    case 'remove-todo':
      newState.todos = state.todos.filter(v => v.id !== action.todo.id)
      break
    case 'toggle-completed':
      const index = state.todos.findIndex(v => v.id === action.todo.id)
      const todo = { ...action.todo, completed: !action.todo.completed }
      newState.todos = [...state.todos.slice(0, index), todo, ...state.todos.slice(index + 1)]
      break
    case 'toggle-filter':
      newState.filter = action.filter
      break
    case 'update-todo':
      delete newState.editing
      const index2 = state.todos.findIndex(o => o.id === action.id)
      if (index2 >= 0) {
        const updated = { id: action.id, title: action.title, completed: state.todos[index2].completed }
        newState.todos = [
          ...state.todos.slice(0, index2),
          updated,
          ...state.todos.slice(index2 + 1)
        ]
      }
      break
    default:
      throw 'unreacheable code'
  }
  Store.set(STORE_KEY, newState)
  return newState
}

const state: State = Store.get(STORE_KEY)

type TodoWEditing = Todo & { editing: boolean }

const view =  component(
  { state, update },
  section(
    { className: 'todoapp' },
    header(
      { className: 'header'},
      h1({}, 'todos'),
      input({
        className: 'new-todo',
        placeholder: 'What needs to be done?',
        autofocus: (state: State) => state.editing == null,
        value: (state: State) => state.adding,
        onkeydown: (e: KeyboardEvent): Action | undefined => {
          const input = e.target as HTMLInputElement
          if (e.keyCode === 13) {
            return Action.addTodo(input.value.trim())
          } else if (e.keyCode === 27) {
            return Action.cancelAddTodo
          } else {
            return Action.adddingTodo(input.value)
          }
        }
      })
    ),
    section(
      { className: 'main' },
      input({ id: 'toggle-all', className: 'toggle-all', type: 'checkbox' }),
      label(
        { for: 'toggle-all' },
        'Mark all as complete'
      ),
      ul(
        { className: 'todo-list' },
        mapState(
          { map: (state: State): TodoWEditing[] =>
              state.todos
                .filter(filterF(state.filter))
                .map((todo: Todo): TodoWEditing => {
                  if (state.editing && state.editing.id === todo.id) {
                    return { ...todo, editing: true, title: state.editing.title }
                  } else {
                    return { ...todo, editing: false }
                  }
                })
          },
          repeat<TodoWEditing[], Action>(
            {},
            li(
              {
                className: todo => {
                  const classes = [
                                    todo.completed ? 'completed' : undefined,
                                    todo.editing ? 'editing' : undefined
                                  ].filter(v => v != null)
                  return classes.join(' ') || undefined
                }
              },
              div(
                { className: 'view' },
                input({
                  className: 'toggle',
                  type: 'checkbox',
                  checked: todo => todo.completed,
                  onchange: derived((todo: TodoWEditing) => (_: Event) => Action.toggleCompleted(todo))
                }),
                label(
                  { ondblclick: derived(todo => (_: MouseEvent) => Action.editingTodo(todo.id, todo.title)) },
                  todo => todo.title
                ),
                button({
                  className: 'destroy',
                  onclick: derived(todo => (_: Event) => Action.removeTodo(todo))
                })
              ),
              when(
                { condition: todo => todo.editing },
                input({
                  autofocus: true,
                  className: 'edit',
                  value: todo => todo.title,
                  onkeyup: derived((todo: TodoWEditing) => (e: KeyboardEvent): Action | undefined => {
                    const input = e.target as HTMLInputElement
                    if (e.keyCode === 13) {
                      return Action.updateTodo(todo.id, input.value.trim())
                    } else if (e.keyCode === 27) {
                      return Action.cancelUpdateTodo
                    } else {
                      return Action.editingTodo(todo.id, input.value)
                    }
                  }),
                  onblur: derived((todo: TodoWEditing) => (e: FocusEvent): Action | undefined => {
                    const input = e.target as HTMLInputElement
                    return Action.updateTodo(todo.id, input.value.trim())
                  })
                })
              )
            )
          )
        )
      )
    ),
    footer(
      { className: 'footer' },
      span({ className: 'todo-count' }),
      ul(
        { className: 'filters' },
        li({}, a({
          href: '#/',
          className: selectedF(Filter.All),
          onclick: changeF(Filter.All)
        }, 'All')),
        li({}, a({
          href: '#/active',
          className: selectedF(Filter.Active),
          onclick: changeF(Filter.Active)
        }, 'Active')),
        li({}, a({
          href: '#/completed',
          className: selectedF(Filter.Completed),
          onclick: changeF(Filter.Completed)
        }, 'Completed'))
      ),
      when(
        {
          condition: (state: State) => {
            return state.todos.filter(v => v.completed).length > 0
          }
        },
        button(
          {
            className: 'clear-completed',
            onclick: (_: MouseEvent) => Action.clearCompleted
          },
          'Clear completed'
        )
      )
    )
  ),
  footer(
    { className: 'info' },
    p({}, 'Double-click to edit a todo'),
    p({}, 'Created by ', a({ href: 'http://github.com/fponticelli' }, 'Franco Ponticelli')),
    p({}, 'Part of ', a({ href: 'http://todomvc.com' }, 'TodoMVC'))
  )
)

Mood.render({
  el: document.body,
  component: view
})
