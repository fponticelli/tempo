import { div, nav, a, img, main, span } from 'tempo-dom/lib/html'
import { matchAsyncResult } from 'tempo-dom/lib/match'
import { mapState, mapField } from 'dom/lib/map_state'
import { State } from '../state'
import { Action } from '../action'
import { Toc } from '../toc'
import { HttpError } from '../request'
import { content } from './content'
import { sidebar } from './sidebar'
import { holdState } from 'dom/lib/impl/hold_state'
import { link, maybeLink } from './link'
import { Route, sameRoute } from '../route'
import { none, some } from 'tempo-std/lib/option'
import { iterateItems } from 'dom/lib/impl/iterate'
import { ProjectRef } from '../toc'
import { loader } from './loader'

const { capture, release } = holdState<State>()

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

export const template = div<State, Action>(
  { attrs: { class: 'app' } },
  nav(
    {
      attrs: {
        class: 'navbar has-shadow',
        role: 'navigation',
        'aria-label': 'main navigation'
      }
    },
    div(
      { attrs: { class: 'container' } },
      div(
        { attrs: { class: 'navbar-brand' } },
        a(
          {
            attrs: {
              role: 'button',
              class: 'navbar-burger burger',
              'aria-label': 'menu',
              'aria-expanded': 'false',
              'data-target': 'navbarBasicExample'
            },
            events: { click: toggleMenu }
          },
          span({ attrs: { 'aria-hidden': true } }),
          span({ attrs: { 'aria-hidden': true } }),
          span({ attrs: { 'aria-hidden': true } })
        ),
        link({
          label: img({
            attrs: {
              src: 'assets/icon-512x512.png',
              alt: 'Tempo',
              'aria-hidden': true
            }
          }),
          route: Route.home,
          class: 'navbar-item'
        })
      ),
      div(
        { attrs: { class: 'navbar-menu' } },
        div(
          { attrs: { class: 'navbar-start' } },
          link({
            label: 'Tempo',
            route: Route.home,
            class: 'navbar-item'
          })
        ),
        div(
          { attrs: { class: 'navbar-end' } },
          a(
            {
              attrs: {
                class: 'navbar-item',
                href: 'https://github.com/fponticelli/tempo'
              }
            },
            img({
              attrs: {
                src: 'assets/github-mark-64px.png',
                alt: 'Github Project'
              }
            })
          ),
          maybeLink({
            label: 'Demos',
            route: s =>
              sameRoute(Route.demos, s.route) ? none : some(Route.demos),
            class: 'navbar-item'
          }),
          div(
            { attrs: { class: 'navbar-item has-dropdown is-hoverable' } },
            a({ attrs: { class: 'navbar-link' } }, 'Projects'),
            div(
              { attrs: { class: 'navbar-dropdown' } },
              mapField(
                'toc',
                matchAsyncResult<Toc, HttpError, unknown, Action>({
                  Failure: '',
                  Loading: '',
                  NotAsked: '',
                  Success: iterateItems(
                    { map: s => s.projects },
                    link<ProjectRef>({
                      label: s => s.title,
                      route: s => Route.project(s.name),
                      class: 'navbar-item'
                    })
                  )
                })
              )
            )
          )
        )
      )
    )
  ),
  capture(
    mapField(
      'toc',
      matchAsyncResult<Toc, HttpError, unknown, Action>({
        NotAsked: '',
        Loading: loader,
        Success: release(
          main(
            { attrs: { class: 'container' } },
            div(
              { attrs: { class: 'columns is-mobile' } },
              div(
                {
                  attrs: {
                    class: 'column has-background-light side-control scrollable'
                  }
                },
                mapState(
                  { map: ([state, toc]) => ({ toc, route: state.route }) },
                  sidebar
                )
              ),
              div(
                { attrs: { class: 'column scrollable main-column' } },
                mapState({ map: ([state]) => state.content }, content)
              )
            )
          )
        ),
        Failure: div({}, e => e.message)
      })
    )
  )
)
