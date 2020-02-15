/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { component } from 'tempo-paper/lib/component'
import { State, PathItem, Mode } from './state'
import { Action } from './action'
import { Store } from 'tempo-store/lib/store'
import { tool } from 'tempo-paper/lib/tool'
import { Tool, Project, Color, Segment, MouseEvent } from 'paper'
import { path } from 'tempo-paper/lib/path'
import { htmlPortalWithSelector } from 'tempo-paper/lib/html_portal'
import { iterate } from 'tempo-paper/lib/iterate'
import { matchKind } from 'tempo-std/lib/match'
import { toolbar } from './toolbar'

export const makeApp = (store: Store<State, Action>) =>
  component<State, Action, unknown>(
    { store },
    htmlPortalWithSelector({ selector: '#toolbar' }, toolbar),
    tool({
      active: ({ mode }) => mode.kind === 'drawing',
      onMouseDown: (
        _1: State,
        event: MouseEvent,
        _3: Tool,
        project: Project
      ) => {
        const target = project.hitTest(event.point!, {
          stroke: true,
          tolerance: 5
        })
        if (target) {
          return Action.selectPath(target.item!.index)
        } else {
          return Action.draw
        }
      },
      onMouseUp: () => Action.addPath,
      onMouseDrag: (_, event: MouseEvent) =>
        Action.addSegment(new Segment(event.point!))
    }),
    tool({
      active: ({ mode }) => mode.kind === 'editing',
      onMouseDown: (
        state: State,
        event: MouseEvent,
        _3: Tool,
        project: Project
      ) => {
        const target = project.hitTest(event.point!, {
          stroke: true,
          tolerance: 5
        })
        if (target) {
          return Action.selectPath(target.item!.index)
        } else {
          return Action.draw
        }
      },
      onMouseDrag: (_1, event: MouseEvent) =>
        Action.updatePosition(event.delta!)
    }),
    path({
      segments: state => state.current,
      selected: true
    }),
    iterate(
      { getArray: state => state.paths },
      path<[PathItem, State, number], Action>({
        applyMatrix: false,
        position: ([item]) => item.position,
        segments: ([item]) => item.segments,
        strokeWidth: 1,
        strokeColor: new Color(0.2, 0.2, 0.2),
        fullySelected: ([_, state, index]) =>
          matchKind<Mode, boolean>({
            drawing: () => false,
            editing: ({ pathIndex }) => pathIndex === index
          })(state.mode)
      })
    )
  )
