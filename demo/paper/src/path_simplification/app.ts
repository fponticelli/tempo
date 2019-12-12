import { component } from 'tempo-paper/lib/component'
import { State, PathItem, Mode } from './state'
import { Action } from './action'
import { Store } from 'tempo-store/lib/store'
import { tool } from 'tempo-paper/lib/tool'
import { Tool, Project, Color, Segment, MouseEvent } from 'paper'
import { path } from 'tempo-paper/lib/path'
import { domPortalWithSelector } from 'tempo-paper/lib/dom_portal'
import { iterate } from 'tempo-paper/lib/iterate'
import { matchKind } from 'tempo-core'
import { toolbar } from './toolbar'

export const makeApp = (store: Store<State, Action>) => component<State, Action, unknown>(
  { store },
  domPortalWithSelector(
    { selector: '#toolbar' },
    toolbar
  ),
  tool({
    active: ({ mode }) => mode.kind === 'idle',
    onMouseDown: (_1: State, event: MouseEvent, _3: Tool, project: Project) => {
      const target = project.hitTest(event.point!, { stroke: true, tolerance: 5 })
      if (target) {
        return Action.selectPath(target.item!.index)
      } else {
        return Action.draw
      }
    }
  }),
  tool({
    active: ({ mode }) => mode.kind === 'editing',
    onMouseDown: (state: State, event: MouseEvent, _3: Tool, project: Project) => {
      const target = project.hitTest(event.point!, { stroke: true, tolerance: 5 })
      if (target) {
        return Action.selectPath(target.item!.index)
      } else {
        return Action.unselect
      }
    },
    onMouseDrag: (_1, event: MouseEvent) => Action.updatePosition(event.delta!)
  }),
  tool({
    active: ({ mode }) => mode.kind === 'drawing',
    onMouseUp: () => Action.addPath,
    onMouseDrag: (_, event: MouseEvent) => Action.addSegment(new Segment(event.point!))
  }),
  path({
    segments: state => state.current,
    selected: true
  }),
  iterate(
    { getArray: state => state.paths },
    path<[PathItem, State, number], Action>(
      {
        applyMatrix: false,
        position: ([item]) => item.position,
        segments: ([item]) => item.segments,
        strokeWidth: 3,
        strokeColor: new Color(0.75, 0.75, 0.75),
        fullySelected: ([_, state, index]) => matchKind<Mode, boolean>({
          drawing: () => false,
          editing: ({ pathIndex }) => pathIndex === index,
          idle: () => false
        })(state.mode)
      }
    )
  )
)
