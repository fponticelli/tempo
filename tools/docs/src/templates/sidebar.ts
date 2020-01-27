import { div, h1, h2, ul, li, h3 } from 'tempo-dom/lib/html'
import { lazy } from 'tempo-dom/lib/lazy'
import { iterate } from 'tempo-dom/lib/iterate'
import { when } from 'tempo-dom/lib/when'
import { Action } from '../action'
import { Toc, PageRef, ApiRef } from '../toc'
import { link, maybeLink } from './link'
import { Route, pageMatchesRoute, pageToRoute, projectChangelogMatchesRoute, apiMatchesRoute } from '../route'
import { some, none } from 'tempo-std/lib/option'
import { compareCaseInsensitive } from 'tempo-std/lib/strings'
import { keys } from 'tempo-std/lib/objects'
import { SectionRef, ProjectRef } from '../toc'
import { DOMTemplate } from 'tempo-dom/lib/template'
import { mapState } from 'tempo-dom/lib/map'
import { fragment } from 'tempo-dom/lib/fragment'
import { DemoRef } from 'tools/docs/build/toc'

type Sidebar = { toc: Toc; route: Route }

let section: DOMTemplate<[string, SectionRef, Route], Action, unknown>
section = lazy(() => div<[string, SectionRef, Route], Action>(
  {  },
  h2({}, ([title]) => title),
  when(
    { condition: ([_, section]) => section.pages.length > 0 || keys(section.sections).length > 0 },
    ul(
      {},
      iterate<[string, SectionRef, Route], PageRef[], Action>(
        { getArray: ([_, s]) => s.pages },
        li(
          {},
          maybeLink(
            ([page]) => page.title,
            ([page, [_1, _2, route]]) =>
              pageMatchesRoute(page, route) ? none : some(pageToRoute(page))
          )
        )
      ),
      when(
        { condition: ([_, section]) => keys(section.sections).length > 0 },
        li(
          {},
          iterate<[string, SectionRef, Route], [string, SectionRef, Route][], Action>(
            { getArray: ([_, section, route]) => keys(section.sections).map(sub => [sub, section.sections[sub], route]) },
            mapState(
              { map: ([_, section]) => section },
              section
            )
          )
        )
      )
    )
  ),
))

const api = fragment<[ApiRef, { apis: ApiRef[], project: ProjectRef, route: Route }, number], Action>(
  maybeLink(([r]) => r.title, ([r, p]) => apiMatchesRoute(p.project.name, r.path, p.route) ? none : some(Route.api(p.project.name, r.path)))
)

const demo = div<[DemoRef, Sidebar, number], Action>(
  {},
  h2({}, link(([s]) => s.title, ([s]) => Route.demo(s.path))),
  div({ attrs: { class: 'description' }}, ([s]) => s.description)
)

const project = div<[ProjectRef, Sidebar, number], Action>(
  {},
  h2({}, maybeLink(([p]) => p.title, ([p, s]) => apiMatchesRoute(p.name, 'index.html', s.route) ? none : some(Route.api(p.name, 'index.html')))),
  div({ attrs: { class: 'version' }}, ([s]) => s.version),
  div({ attrs: { class: 'description' }}, ([s]) => s.description),
  h3({ attrs: { class: 'changelog' } }, maybeLink('changelog', ([p, s]) => projectChangelogMatchesRoute(p, s.route) ? none : some(Route.changelog(p.name)))),
  div(
    {},
    mapState(
      { map: ([project, sidebar]) => ({ apis: sidebar.toc.apis[project.name], project, route: sidebar.route }) },
      h3({ attrs: { class: 'types' } }, 'types'),
      ul(
        {},
        iterate<{ apis: ApiRef[], project: ProjectRef, route: Route }, ApiRef[], Action>(
          { getArray: state => state.apis.filter(a => a.type !== 'module').sort((a, b) => compareCaseInsensitive(a.title, b.title)) },
          li({}, api)
        )
      ),
      h3({ attrs: { class: 'modules' } }, 'modules'),
      ul(
        {},
        iterate<{ apis: ApiRef[], project: ProjectRef, route: Route }, ApiRef[], Action>(
          { getArray: state => state.apis.filter(a => a.type === 'module').sort((a, b) => compareCaseInsensitive(a.title, b.title)) },
          li({}, api)
        )
      )
    )
  )
)

export const sidebar = div<Sidebar, Action>(
  { attrs: { className: 'sidebar' } },
  h1({}, link('Tempo', Route.home)),
  mapState(
    { map: sidebar => ['Contents', sidebar.toc as SectionRef, sidebar.route] as [string, SectionRef, Route] },
    section
  ),
  h2({}, 'Demos'),
  ul(
    {},
    iterate<Sidebar, DemoRef[], Action>(
      { getArray: s => s.toc.demos },
      li(
        {},
        demo
      )
    )
  ),
  h2({}, 'Projects'),
  ul(
    {},
    iterate<Sidebar, ProjectRef[], Action>(
      { getArray: s => s.toc.projects },
      li(
        {},
        project
      )
    )
  )
)
