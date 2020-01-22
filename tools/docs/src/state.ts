import { Toc } from '../build/toc'
import { Async, notAsked } from 'tempo-std/lib/async'
import { HttpError } from './request'
import { Result } from 'tempo-std/lib/result'

export interface State {
  toc: Async<Result<Toc, HttpError>, unknown>
}

export const state: State = { toc: notAsked }
