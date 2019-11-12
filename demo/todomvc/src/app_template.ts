import { section, header, h1, input, ul, label, div, li, footer, span, a, p, button } from '@mood/dom/lib/html'
import { mapState } from '@mood/dom/lib/map'
import { DOMEventHandler } from '@mood/dom/lib/value'
import { forEach } from '@mood/dom/lib/for_each'
import { when } from '@mood/dom/lib/when'
import { Action } from './action'
import { State, Filter, Todo } from './state'
import { derived } from '@mood/core/lib/value'

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

const selectedF = (filter: Filter) => (state: State) => (state.filter === filter ? 'selected' : undefined)

type TodoWEditing = Todo & { editing: boolean }

export const template = section<State, Action>(
  {},
  section(
    { attrs: { className: 'todoapp' } },
    header(
      { attrs: { className: 'header' } },
      h1({}, 'todos'),
      input({
        attrs: {
          className: 'new-todo',
          placeholder: 'What needs to be done?',
          autofocus: state => state.editing == null,
          value: state => state.adding
        },
        events: {
          keydown: e => {
            const input = e.target as HTMLInputElement
            if (e.keyCode === 13) {
              return Action.addTodo(input.value.trim())
            } else if (e.keyCode === 27) {
              return Action.cancelAddTodo
            } else {
              return Action.adddingTodo(input.value)
            }
          }
        }
      })
    ),
    section(
      { attrs: { className: 'main' } },
      input({ attrs: { id: 'toggle-all', className: 'toggle-all', type: 'checkbox' } }),
      label({ attrs: { for: 'toggle-all' } }, 'Mark all as complete'),
      ul(
        { attrs: { className: 'todo-list' } },
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
                attrs: {
                  className: todo => {
                    const classes = [
                      todo.completed ? 'completed' : undefined,
                      todo.editing ? 'editing' : undefined
                    ].filter(v => v != null)
                    return classes.join(' ') || undefined
                  }
                }
              },
              div(
                { attrs: { className: 'view' } },
                input<TodoWEditing, Action>({
                  attrs: {
                    className: 'toggle',
                    type: 'checkbox',
                    checked: todo => todo.completed
                  },
                  events: {
                    change: derived(todo => _ => Action.toggleTodo(todo.id))
                  }
                }),
                label(
                  { events: { dblclick: derived(todo => _ => Action.editingTodo(todo.id, todo.title)) } },
                  todo => todo.title
                ),
                button({
                  attrs: {
                    className: 'destroy'
                  },
                  events: {
                    click: derived(todo => _ => Action.removeTodo(todo.id))
                  }
                })
              ),
              when(
                { condition: todo => todo.editing },
                input<TodoWEditing, Action>({
                  afterrender: el => el.focus(),
                  attrs: {
                    className: 'edit',
                    value: todo => todo.title
                  },
                  events: {
                    keypress: derived((todo: Todo) => (e: KeyboardEvent) => {
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
                    blur: derived(todo => e => {
                      const input = e.target as HTMLInputElement
                      return Action.updateTodo(todo.id, input.value.trim())
                    })
                  }
                })
              )
            )
          )
        )
      )
    ),
    footer(
      { attrs: { className: 'footer' } },
      span({ attrs: { className: 'todo-count' } }),
      ul(
        { attrs: { className: 'filters' } },
        li(
          {},
          a(
            {
              attrs: {
                href: '#/',
                className: selectedF(Filter.All)
              },
              events: {
                click: changeF(Filter.All)
              }
            },
            'All'
          )
        ),
        li(
          {},
          a(
            {
              attrs: {
                href: '#/active',
                className: selectedF(Filter.Active)
              },
              events: {
                click: changeF(Filter.Active)
              }
            },
            'Active'
          )
        ),
        li(
          {},
          a(
            {
              attrs: {
                href: '#/completed',
                className: selectedF(Filter.Completed)
              },
              events: {
                click: changeF(Filter.Completed)
              }
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
            attrs: {
              className: 'clear-completed'
            },
            events: {
              click: (_: MouseEvent) => Action.clearCompleted
            }
          },
          'Clear completed'
        )
      )
    )
  ),
  footer(
    { attrs: { className: 'info' } },
    p({}, 'Double-click to edit a todo'),
    p({}, 'Created by ', a({ attrs: { href: 'http://github.com/fponticelli' } }, 'Franco Ponticelli')),
    p({}, 'Part of ', a({ attrs: { href: 'http://todomvc.com' } }, 'TodoMVC'))
  )
)
