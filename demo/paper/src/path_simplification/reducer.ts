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

import { Path, Matrix } from 'paper'
import { reduceOnKind } from 'tempo-store/lib/reducer'
import { State, Mode } from './state'
import { Action } from './action'

export const reducer = reduceOnKind<State, Action>({
  AddSegment: (state, action) => {
    const current = state.current.concat([action.segment])
    return { ...state, current }
  },
  AddPath: state => {
    if (state.current.length <= 1) return state
    const path = new Path({
      segments: state.current,
      insert: false,
      applyMatrix: false
    })
    path.simplify(10)
    const paths = state.paths.concat([
      {
        segments: path.segments!.map(seg => {
          const newSeg = seg.clone()
          newSeg.transform(
            new Matrix(1, 0, 0, 1, -path.position!.x!, -path.position!.y!)
          )
          return newSeg
        }),
        position: path.position!
      }
    ])
    path.remove()
    return {
      ...state,
      paths,
      current: [],
      mode: Mode.editing(paths.length - 1)
    }
  },
  RemovePath: state => {
    if (state.mode.kind === 'drawing') return state
    const paths = state.paths
      .slice(0, state.mode.pathIndex)
      .concat(state.paths.slice(state.mode.pathIndex + 1))
    return { ...state, mode: Mode.drawing, paths }
  },
  ChangeMode: (state, action) => {
    return {
      ...state,
      mode: action.mode
    }
  },
  UpdatePosition: (state, action) => {
    if (state.mode.kind === 'editing') {
      const old = state.paths[state.mode.pathIndex]
      const item = {
        ...old,
        position: old.position.add(action.delta)
      }
      const paths = state.paths
        .slice(0, state.mode.pathIndex)
        .concat([item])
        .concat(state.paths.slice(state.mode.pathIndex + 1))
      return { ...state, paths }
    } else {
      return state
    }
  }
})
