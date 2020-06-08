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

import { Project, Item, PaperScope } from 'paper'

export class PaperContext<Action> {
  constructor(
    readonly canvas: HTMLCanvasElement,
    readonly scope: PaperScope,
    readonly project: Project,
    readonly append: (item: Item) => void,
    readonly dispatch: (action: Action) => void
  ) {}

  mapAction<OtherAction>(f: (action: OtherAction) => Action) {
    return new PaperContext<OtherAction>(
      this.canvas,
      this.scope,
      this.project,
      this.append,
      (action: OtherAction) => this.dispatch(f(action))
    )
  }

  conditionalMapAction<OtherAction>(
    f: (action: OtherAction) => Action | undefined
  ) {
    return new PaperContext<OtherAction>(
      this.canvas,
      this.scope,
      this.project,
      this.append,
      (action: OtherAction) => {
        const newAction = f(action)
        if (newAction !== undefined) {
          this.dispatch(newAction)
        }
      }
    )
  }

  withAppend(append: (item: Item) => void) {
    return new PaperContext<Action>(
      this.canvas,
      this.scope,
      this.project,
      append,
      this.dispatch
    )
  }

  withDispatch<OtherAction>(dispatch: (action: OtherAction) => void) {
    return new PaperContext<OtherAction>(
      this.canvas,
      this.scope,
      this.project,
      this.append,
      dispatch
    )
  }
}
