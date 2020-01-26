import { Toc } from './toc'
import { AsyncResult, notAsked } from 'tempo-std/lib/async_result'
import { HttpError } from './request'
import { Route } from './route'

export interface State {
  toc: AsyncResult<Toc, HttpError, unknown>
  content: AsyncResult<string, HttpError, unknown>
  route: Route
}

export const makeState = (route: Route): State => ({
  toc: notAsked,
  content: notAsked,
  route
})
