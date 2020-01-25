import { Toc } from '../build/toc'
import { AsyncResult, notAsked } from 'tempo-std/lib/async_result'
import { HttpError } from './request'
import { Route, parseUrl } from './route'

export interface State {
  toc: AsyncResult<Toc, HttpError, unknown>
  content: AsyncResult<string, HttpError, unknown>,
  route: Route
}

export const makeState = (url: string): State => ({
  toc: notAsked,
  content: notAsked,
  route: parseUrl(url)
})
