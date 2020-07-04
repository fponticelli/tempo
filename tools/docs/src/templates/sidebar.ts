import { div, aside, lazy, fragment } from 'tempo-dom/lib/html'
import { Action } from '../action'
import { Toc, ApiRef } from '../toc'
import { maybeLink } from './link'
import {
  Route,
  pageMatchesRoute,
  pageToRoute,
  projectChangelogMatchesRoute,
  apiMatchesRoute,
  isApiProjectRoute,
  sameRoute
} from '../route'
import { some, none } from 'tempo-std/lib/option'
import { keys } from 'tempo-std/lib/objects'
import { SectionRef, ProjectRef } from '../toc'
import { DOMTemplate } from 'tempo-dom/lib/template'

type Sidebar = { toc: Toc; route: Route }

let section: DOMTemplate<[string, SectionRef, Route], Action, unknown>
section = lazy(() =>
  div<[string, SectionRef, Route], Action, unknown>($ =>
    $.when(
      ([title]) => !!title,
      $ => $.p($ => $.class('menu-label').text(([title]) => title))
    ).when(
      ([_, section]) =>
        section.pages.length > 0 || keys(section.sections).length > 0,
      $ =>
        $.ul($ =>
          $.iterate(
            ([_, s]) => s.pages,
            $ =>
              $.li($ =>
                $.append(
                  maybeLink({
                    label: ([page]) => page.title,
                    route: ([page, [_1, _2, route]]) =>
                      pageMatchesRoute(page, route)
                        ? none
                        : some(pageToRoute(page))
                  })
                )
              )
          ).when(
            ([_, section]) => keys(section.sections).length > 0,
            $ =>
              $.li($ =>
                $.iterate(
                  ([_, section, route]) =>
                    keys(section.sections).map(sub => [
                      sub,
                      section.sections[sub],
                      route
                    ]),
                  $ =>
                    $.mapState(
                      ([_, section]) => section,
                      $ => $.append(section)
                    )
                )
              )
          )
        )
    )
  )
)

const api = fragment<
  [ApiRef, { apis: ApiRef[]; project: ProjectRef; route: Route }, number],
  Action,
  unknown
>($ =>
  $.append(
    maybeLink({
      label: ([r]) => r.title,
      route: ([r, p]) =>
        apiMatchesRoute(p.project.name, r.path, p.route)
          ? none
          : some(Route.api(p.project.name, r.path))
    })
  )
)

const project = div<[ProjectRef, Sidebar, number], Action, unknown>($ =>
  $.p($ =>
    $.append(
      maybeLink({
        label: ([s]) => `v.${s.version}`,
        route: ([p, s]) =>
          projectChangelogMatchesRoute(p, s.route)
            ? none
            : some(Route.changelog(p.name)),
        class: 'is-pulled-right is-size-7'
      })
    ).append(
      maybeLink({
        label: ([p]) => p.title,
        route: ([p, s]) =>
          sameRoute(Route.project(p.name), s.route)
            ? none
            : some(Route.project(p.name)),
        class: 'is-uppercase has-text-weight-bold'
      })
    )
  ).div($ =>
    $.class('is-size-7')
      .text(([s]) => s.description)
      .when(
        ([p, s]) =>
          isApiProjectRoute(s.route, p.name) ||
          sameRoute(Route.project(p.name), s.route),
        $ =>
          $.div($ =>
            $.class('box api-box').mapState(
              ([project, sidebar]) => ({
                apis: sidebar.toc.apis[project.name],
                project,
                route: sidebar.route
              }),
              $ =>
                $.mapState(
                  state => ({
                    apis: state.apis,
                    project: state.project,
                    route: state.route
                  }),
                  $ =>
                    $.when(
                      state => state.apis.length > 0,
                      $ =>
                        $.ul($ =>
                          $.class('links-list').iterate(
                            state => state.apis,
                            $ => $.li($ => $.append(api))
                          )
                        )
                    )
                )
            )
          )
      )
  )
)

export const sidebar = aside<Sidebar, Action, unknown>($ =>
  $.class('menu')
    .mapState(
      sidebar =>
        ['', sidebar.toc as SectionRef, sidebar.route] as [
          string,
          SectionRef,
          Route
        ],
      $ => $.append(section)
    )
    .hr($ => $.class('sidebar-separator'))
    .iterate(
      s => s.toc.projects,
      $ => $.append(project)
    )
)
