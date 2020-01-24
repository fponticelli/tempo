import { div } from 'tempo-dom/lib/html'
import { matchKind } from 'tempo-dom/lib/match'
import { mapState } from 'tempo-dom/lib/map'
import { State } from './state'
import { Action } from './action'
import { Async } from 'tempo-std/lib/async'
import { Result } from 'tempo-std/lib/result'
import { Toc } from './toc'
import { HttpError } from './request'

export const template = div<State, Action>(
  { attrs: { className: 'app' } },
  mapState(
    { map: state => state.toc },
    matchKind<Async<Result<Toc, HttpError>, unknown>, Action>({
      NotAsked: 'not asked',
      Loading: '...',
      Outcome: div({}, s => JSON.stringify(s.value))
    })
  )
)
