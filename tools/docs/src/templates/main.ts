import { div, nav, a, img, main } from 'tempo-dom/lib/html'
import { matchAsyncResult } from 'tempo-dom/lib/match'
import { mapState } from 'tempo-dom/lib/map'
import { State } from '../state'
import { Action } from '../action'
import { Toc } from '../toc'
import { HttpError } from '../request'
import { content } from './content'
import { sidebar } from './sidebar'
import { holdState } from 'tempo-dom/lib/hold_state'
import { link, maybeLink } from './link'
import { Route, sameRoute } from '../route'
import { none, some } from 'tempo-std/lib/option'
import { iterateItems } from 'tempo-dom/lib/iterate'
import { ProjectRef } from 'tools/docs/build/toc'

const { capture, release } = holdState<State>()

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
        link(
          img({
            attrs: { src: 'assets/icon-512x512.png', width: '32', height: '32' }
          }),
          Route.home,
          'navbar-item'
        )
        // a(
        //   {
        //     attrs: {
        //       class: 'navbar-burger burger',
        //       role: 'button',
        //       'aria-label': 'menu',
        //       'aria-expanded': 'false',
        //       'data-target': 'navbarBasicExample'
        //     }
        //   },
        //   span({ attrs: { 'aria-hidden': 'true' } }),
        //   span({ attrs: { 'aria-hidden': 'true' } }),
        //   span({ attrs: { 'aria-hidden': 'true' } })
        // )
      ),
      div(
        { attrs: { class: 'navbar-menu' } },
        div(
          { attrs: { class: 'navbar-start' } },
          link('Tempo', Route.home, 'navbar-item')
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
                width: '32',
                height: '32'
              }
            })
          ),
          maybeLink(
            'Demos',
            s => (sameRoute(Route.demos, s.route) ? none : some(Route.demos)),
            'navbar-item'
          ),
          div(
            { attrs: { class: 'navbar-item has-dropdown is-hoverable' } },
            a({ attrs: { class: 'navbar-link' } }, 'Projects'),
            div(
              { attrs: { class: 'navbar-dropdown' } },
              mapState(
                { map: s => s.toc },
                matchAsyncResult<Toc, HttpError, unknown, Action>({
                  Failure: '',
                  Loading: '',
                  NotAsked: '',
                  Success: iterateItems(
                    { getArray: s => s.projects },
                    link<ProjectRef>(
                      s => s.title,
                      s => Route.api(s.name, 'index.html'),
                      'navbar-item'
                    )
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
    mapState(
      { map: state => state.toc },
      matchAsyncResult<Toc, HttpError, unknown, Action>({
        NotAsked: '',
        Loading: '...',
        Success: div(
          {},
          release(
            main(
              { attrs: { class: 'container' } },
              div(
                { attrs: { class: 'columns' } },
                div(
                  {
                    attrs: {
                      class: 'column is-narrow has-background-light scrollable'
                    }
                  },
                  div(
                    { attrs: { class: '', style: 'width: 300px;' } },
                    mapState(
                      { map: ([state, toc]) => ({ toc, route: state.route }) },
                      sidebar
                    )
                  )
                ),
                div(
                  { attrs: { class: 'column scrollable' } },
                  mapState({ map: ([state]) => state.content }, content)
                )
              )
            )
          )
        ),
        Failure: div({}, e => e.message)
      })
    )
  )
)
