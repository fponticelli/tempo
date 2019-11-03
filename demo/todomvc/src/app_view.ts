import { html, mapState, DOMEventHandler, handler, forEach, when, stateHandler } from '@mood/dom'
const { section, header, h1, input, ul, label, div, li, footer, span, a, p, button } = html
import { Action } from './action'
import { State, Filter, Todo } from './state'

const changeF = (filter: Filter): DOMEventHandler<State, MouseEvent, Action> => {
  return handler((state: State) => {
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

const selectedF = (filter: Filter) => (state: State) => (state.filter === filter ? 'selected' : undefined)

type TodoWEditing = Todo & { editing: boolean }

export const template = section<State, Action>({},
  section(
    { className: 'todoapp' },
    header(
      { className: 'header' },
      h1({}, 'todos'),
      input({
        className: 'new-todo',
        placeholder: 'What needs to be done?',
        autofocus: state => state.editing == null,
        value: state => state.adding,
        onkeydown: e => {
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
      label({ for: 'toggle-all' }, 'Mark all as complete'),
      ul(
        { className: 'todo-list' },
        mapState(
          {
            map: state =>
              state.todos.filter(filterF(state.filter)).map(todo => {
                if (state.editing && state.editing.id === todo.id) {
                  return { ...todo, editing: true, title: state.editing.title }
                } else {
                  return { ...todo, editing: false }
                }
              })
          },
          forEach<TodoWEditing[], Action>(
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
                input<TodoWEditing, Action>({
                  className: 'toggle',
                  type: 'checkbox',
                  checked: todo => todo.completed,
                  onchange: stateHandler(todo => Action.toggleTodo(todo.id))
                }),
                label(
                  { ondblclick: stateHandler(todo => Action.editingTodo(todo.id, todo.title)) },
                  todo => todo.title
                ),
                button({
                  className: 'destroy',
                  onclick: stateHandler(todo => Action.removeTodo(todo.id))
                })
              ),
              when(
                { condition: todo => todo.editing },
                input<TodoWEditing, Action>({
                  moodAfterRender: el => el.focus(),
                  className: 'edit',
                  value: todo => todo.title,
                  onkeypress: handler(todo => e => {
                    const input = e.target as HTMLInputElement
                    if (e.keyCode === 13) {
                      const value = input.value.trim()
                      if (value) {
                        return Action.updateTodo(todo.id, value)
                      } else {
                        return Action.removeTodo(todo.id)
                      }
                    } else if (e.keyCode === 27) {
                      return Action.cancelUpdateTodo
                    } else {
                      return Action.editingTodo(todo.id, input.value)
                    }
                  }),
                  onblur: handler(todo => e => {
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
        li(
          {},
          a(
            {
              href: '#/',
              className: selectedF(Filter.All),
              onclick: changeF(Filter.All)
            },
            'All'
          )
        ),
        li(
          {},
          a(
            {
              href: '#/active',
              className: selectedF(Filter.Active),
              onclick: changeF(Filter.Active)
            },
            'Active'
          )
        ),
        li(
          {},
          a(
            {
              href: '#/completed',
              className: selectedF(Filter.Completed),
              onclick: changeF(Filter.Completed)
            },
            'Completed'
          )
        )
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
