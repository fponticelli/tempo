import { div, ul, li, aside, p, hr } from 'dom/lib/html_old'
import { lazy } from 'dom/lib/impl/lazy'
import { iterate } from 'dom/lib/impl/iterate'
import { when } from 'dom/lib/impl/when'
import { Action } from '../action'
import { Toc, PageRef, ApiRef } from '../toc'
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
import { mapState } from 'dom/lib/map_state'
import { fragment } from 'dom/lib/impl/fragment'

type Sidebar = { toc: Toc; route: Route }

let section: DOMTemplate<[string, SectionRef, Route], Action, unknown>
section = lazy(() =>
  div<[string, SectionRef, Route], Action>(
    {},
    when(
      { condition: ([title]) => !!title },
      p({ attrs: { class: 'menu-label' } }, ([title]) => title)
    ),
    when(
      {
        condition: ([_, section]) =>
          section.pages.length > 0 || keys(section.sections).length > 0
      },
      ul(
        { attrs: { class: '' } },
        iterate<[string, SectionRef, Route], PageRef[], Action>(
          { map: ([_, s]) => s.pages },
          li(
            {},
            maybeLink({
              label: ([page]) => page.title,
              route: ([page, [_1, _2, route]]) =>
                pageMatchesRoute(page, route) ? none : some(pageToRoute(page))
            })
          )
        ),
        when(
          { condition: ([_, section]) => keys(section.sections).length > 0 },
          li(
            {},
            iterate<
              [string, SectionRef, Route],
              [string, SectionRef, Route][],
              Action
            >(
              {
                map: ([_, section, route]) =>
                  keys(section.sections).map(sub => [
                    sub,
                    section.sections[sub],
                    route
                  ])
              },
              mapState({ map: ([_, section]) => section }, section)
            )
          )
        )
      )
    )
  )
)

const api = fragment<
  [ApiRef, { apis: ApiRef[]; project: ProjectRef; route: Route }, number],
  Action
>(
  maybeLink({
    label: ([r]) => r.title,
    route: ([r, p]) =>
      apiMatchesRoute(p.project.name, r.path, p.route)
        ? none
        : some(Route.api(p.project.name, r.path))
  })
)

const project = div<[ProjectRef, Sidebar, number], Action>(
  {},
  p(
    { attrs: { class: '' } },
    maybeLink({
      label: ([s]) => `v.${s.version}`,
      route: ([p, s]) =>
        projectChangelogMatchesRoute(p, s.route)
          ? none
          : some(Route.changelog(p.name)),
      class: 'is-pulled-right is-size-7'
    }),
    maybeLink({
      label: ([p]) => p.title,
      route: ([p, s]) =>
        sameRoute(Route.project(p.name), s.route)
          ? none
          : some(Route.project(p.name)),
      class: 'is-uppercase has-text-weight-bold'
    })
  ),
  div({ attrs: { class: 'is-size-7' } }, ([s]) => s.description),
  when(
    {
      condition: ([p, s]) =>
        isApiProjectRoute(s.route, p.name) ||
        sameRoute(Route.project(p.name), s.route)
    },
    div(
      { attrs: { class: 'box api-box' } },
      mapState(
        {
          map: ([project, sidebar]) => ({
            apis: sidebar.toc.apis[project.name],
            project,
            route: sidebar.route
          })
        },
        mapState<
          { apis: ApiRef[]; project: ProjectRef; route: Route },
          { apis: ApiRef[]; project: ProjectRef; route: Route },
          Action
        >(
          {
            map: state => ({
              apis: state.apis,
              project: state.project,
              route: state.route
            })
          },
          when(
            { condition: state => state.apis.length > 0 },
            ul(
              { attrs: { class: 'links-list' } },
              iterate<
                { apis: ApiRef[]; project: ProjectRef; route: Route },
                ApiRef[],
                Action
              >({ map: state => state.apis }, li({}, api))
            )
          )
        )
      )
    )
  )
)

export const sidebar = aside<Sidebar, Action>(
  { attrs: { class: 'menu' } },
  mapState(
    {
      map: sidebar =>
        ['', sidebar.toc as SectionRef, sidebar.route] as [
          string,
          SectionRef,
          Route
        ]
    },
    section
  ),
  hr({ attrs: { class: 'sidebar-separator' } }),
  iterate<Sidebar, ProjectRef[], Action>({ map: s => s.toc.projects }, project)
)
