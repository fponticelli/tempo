import { Toc } from '../build/toc'
import { Async, notAsked } from 'tempo-std/lib/async'
import { HttpError } from './request'
import { Result } from 'tempo-std/lib/result'
import { Route, parseUrl } from './route'

export interface State {
  toc: Async<Result<Toc, HttpError>, unknown>
  route: Route
}

export const makeState = (url: string): State => ({ toc: notAsked, route: parseUrl(url) })
