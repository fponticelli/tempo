import { div } from 'tempo-dom/lib/html'
import { matchAsyncResult } from 'tempo-dom/lib/match'
import { mapState } from 'tempo-dom/lib/map'
import { State } from './state'
import { Action } from './action'
import { Toc } from './toc'
import { HttpError } from './request'
import { content } from './templates/content'
import { sidebar } from './templates/sidebar'
import { holdState } from 'tempo-dom/lib/hold_state'

const { capture, release } = holdState<State>()

export const template = div<State, Action>(
  { attrs: { className: 'app' } },
  capture(
    mapState(
      { map: state => state.toc },
      matchAsyncResult<Toc, HttpError, unknown, Action>({
        NotAsked: '',
        Loading: '...',
        Success: div(
          {},
          release(
            mapState({ map: ([state, toc]) => ({ toc, route: state.route }) },  sidebar)
          ),
          content
        ),
        Failure: div({}, e => e.message)
      })
    )
  )
)
