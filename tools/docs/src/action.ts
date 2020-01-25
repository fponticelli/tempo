import { AsyncResult } from 'tempo-std/lib/async_result'
import { Toc } from './toc'
import { HttpError } from './request'
import { Route } from './route'

export type Action =
  | { kind: 'RequestToc' }
  | { kind: 'LoadedToc', toc: AsyncResult<Toc, HttpError, unknown> }
  | { kind: 'GoTo', route: Route }

export const Action = {
  requestToc: { kind: 'RequestToc' } as Action,
  loadedToc: (toc: AsyncResult<Toc, HttpError, unknown>) => ({ kind: 'LoadedToc', toc }) as Action,
  goTo: (route: Route) => ({ kind: 'GoTo', route }) as Action
}
