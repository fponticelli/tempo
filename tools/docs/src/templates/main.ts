import {
  div,
  img,
  matchAsyncResult,
  iterate,
  mapField
} from 'tempo-dom/lib/html'
import { State, Content } from '../state'
import { Action } from '../action'
import { Toc } from '../toc'
import { content } from './content'
import { HttpError } from '../request'
import { link, maybeLink } from './link'
import { Route, sameRoute } from '../route'
import { none, some } from 'tempo-std/lib/option'
import { loader } from './loader'
import { sidebar } from './sidebar'
import { AsyncResult } from 'tempo-std/lib/async_result'

const toggleMenu = (
  _s: State,
  _e: Event,
  element: HTMLElement
): Action | undefined => {
  const side = document.querySelector('.side-control')!
  const main = document.querySelector('.main-column')!

  function close() {
    // console.log('CLOSE')
    element.classList.remove('is-active')
    side.classList.remove('is-active')
    main.removeEventListener('mouseup', close, true)
  }

  if (element.classList.contains('is-active')) {
    close()
  } else {
    element.classList.add('is-active')
    side.classList.add('is-active')
    main.addEventListener('mouseup', close, true)
  }
  return undefined
}

export const template = div<State, Action, unknown>($ =>
  $.class('app')
    .nav($ =>
      $.class('navbar has-shadow')
        .role('navigation')
        .ariaLabel('main navigation')
        .div($ =>
          $.class('container')
            .div($ =>
              $.class('navabar-brand')
                .a($ =>
                  $.role('button')
                    .class('navbar-burger burger')
                    .ariaLabel('menu')
                    .ariaExpanded(false)
                    .data('target', 'navbarBasicExample')
                    .onClick(toggleMenu)
                    .spanEl($ => $.ariaHidden(true))
                    .spanEl($ => $.ariaHidden(true))
                    .spanEl($ => $.ariaHidden(true))
                )
                .append(
                  link({
                    label: img($ =>
                      $.src('assets/icon-512x512.png')
                        .alt('Tempo')
                        .ariaHidden(true)
                    ),
                    route: Route.home,
                    class: 'navbar-item'
                  })
                )
            )
            .div($ =>
              $.class('navbar-menu')
                .div($ =>
                  $.class('navabar-start').append(
                    link({
                      label: 'Tempo',
                      route: Route.home,
                      class: 'navbar-item'
                    })
                  )
                )
                .div($ =>
                  $.class('navabar-end')
                    .a($ =>
                      $.class('navbar-item')
                        .href('https://github.com/fponticelli/tempo')
                        .img($ =>
                          $.src('assets/github-mark-64px.png').text(
                            'Github Project'
                          )
                        )
                    )
                    .append(
                      maybeLink({
                        label: 'Demos',
                        route: s =>
                          sameRoute(Route.demos, s.route)
                            ? none
                            : some(Route.demos),
                        class: 'navbar-item'
                      })
                    )
                    .div($ =>
                      $.class('navbar-item has-dropdown is-hoverable')
                        .a($ => $.class('navbar-link').text('Projects'))
                        .div($ =>
                          $.class('navbar-dropdown').mapField('toc', $ =>
                            $.append(
                              matchAsyncResult<
                                Toc,
                                HttpError,
                                unknown,
                                Action,
                                unknown
                              >({
                                Failure: '',
                                Loading: '',
                                NotAsked: '',
                                Success: iterate(
                                  s => s.projects,
                                  $ =>
                                    $.append(
                                      link({
                                        label: ([s]) => s.title,
                                        route: ([s]) => Route.project(s.name),
                                        class: 'navbar-item'
                                      })
                                    )
                                )
                              })
                            )
                          )
                        )
                    )
                )
            )
        )
    )
    //
    .holdState<
      Toc,
      {
        route: Route
        content: AsyncResult<Content, HttpError, unknown>
        toc: Toc
      }
    >(release =>
      mapField('toc', $ =>
        $.append(
          matchAsyncResult({
            NotAsked: '',
            Loading: loader,
            Success: release(
              (state, toc) => ({
                route: state.route,
                content: state.content,
                toc
              }),
              $ =>
                $.main($ =>
                  $.class('container').div($ =>
                    $.class('columns is-mobile')
                      .div($ =>
                        $.class(
                          'column has-background-light side-control scrollable'
                        ).append(sidebar)
                      )
                      .div($ =>
                        $.class('column scrollable main-column').mapState(
                          ({ content }) => content,
                          $ => $.append(content)
                        )
                      )
                  )
                )
            ),
            Failure: div($ => $.text(e => e.message))
          })
        )
      )
    )
)
