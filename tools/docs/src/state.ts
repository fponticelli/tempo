import { Toc, DemoRef } from './toc'
import { AsyncResult, notAsked } from 'tempo-std/lib/async_result'
import { HttpError } from './request'
import { Route } from './route'

export type Content =
  | { kind: 'HtmlPage', title: string | undefined, html: string }
  | { kind: 'Demos', demos: DemoRef[] }

export const Content = {
  htmlPage(title: string | undefined, html: string): Content {
    return { kind: 'HtmlPage', title, html }
  },
  demos(demos: DemoRef[]): Content {
    return { kind: 'Demos', demos }
  }
}

export interface State {
  toc: AsyncResult<Toc, HttpError, unknown>
  content: AsyncResult<Content, HttpError, unknown>
  route: Route
}

export const makeState = (route: Route): State => ({
  toc: notAsked,
  content: notAsked,
  route
})
