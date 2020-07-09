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

import { insertFBefore as makeInsertBefore } from './impl/dom'

export class DOMContext<Action> {
  static fromElement<Action>(
    element: Element,
    dispatch: (action: Action) => void
  ): DOMContext<Action> {
    return new DOMContext<Action>(
      element.ownerDocument || (window && window.document),
      (node: Node) => element.appendChild(node),
      dispatch
    )
  }

  constructor(
    readonly doc: Document,
    readonly append: (node: Node) => void,
    readonly dispatch: (action: Action) => void
  ) {}

  mapAction<OtherAction>(f: (action: OtherAction) => Action) {
    return new DOMContext<OtherAction>(
      this.doc,
      this.append,
      (action: OtherAction) => this.dispatch(f(action))
    )
  }

  conditionalMapAction<OtherAction>(
    f: (action: OtherAction) => Action | undefined
  ) {
    return new DOMContext<OtherAction>(
      this.doc,
      this.append,
      (action: OtherAction) => {
        const newAction = f(action)
        if (newAction !== undefined) {
          this.dispatch(newAction)
        }
      }
    )
  }

  withAppendToReference() {
    const ref = this.doc.createTextNode('')
    this.append(ref)
    return {
      ctx: this.withAppend(makeInsertBefore(ref)),
      ref
    }
  }

  withAppend(append: (node: Node) => void) {
    return new DOMContext<Action>(this.doc, append, this.dispatch)
  }

  withDispatch<OtherAction>(dispatch: (action: OtherAction) => void) {
    return new DOMContext<OtherAction>(this.doc, this.append, dispatch)
  }

  withInterceptDispatch(dispatch: (action: Action) => void) {
    return new DOMContext<Action>(this.doc, this.append, (action: Action) => {
      dispatch(action)
      this.dispatch(action)
    })
  }
}
