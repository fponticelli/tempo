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

import { insertFBefore as makeInsertBefore } from './utils/dom'

export class DOMContext<Action> {
  static fromElement<Action>(element: Element, dispatch: (action: Action) => void): DOMContext<Action> {
    return new DOMContext<Action>(
      /* istanbul ignore next */
      element.ownerDocument || (window && window.document),
      (node: Node) => element.appendChild(node),
      element,
      dispatch
    )
  }

  constructor(
    readonly doc: Document,
    readonly append: (node: Node) => void,
    readonly parent: Element,
    readonly dispatch: (action: Action) => void
  ) {}

  mapAction<OtherAction>(f: (action: OtherAction) => Action) {
    return new DOMContext<OtherAction>(this.doc, this.append, this.parent, (action: OtherAction) =>
      this.dispatch(f(action))
    )
  }

  conditionalMapAction<OtherAction>(f: (action: OtherAction) => Action | undefined) {
    return new DOMContext<OtherAction>(this.doc, this.append, this.parent, (action: OtherAction) => {
      const newAction = f(action)
      if (typeof newAction !== 'undefined') {
        this.dispatch(newAction)
      }
    })
  }

  withAppendToReference(refId?: string) {
    const ref = this.doc.createComment(refId || 't:ref')
    this.append(ref)
    return {
      ctx: this.withAppend(makeInsertBefore(ref)),
      ref
    }
  }

  withAppend(append: (node: Node) => void) {
    return new DOMContext<Action>(this.doc, append, this.parent, this.dispatch)
  }

  withParent(parent: Element) {
    return new DOMContext<Action>(this.doc, this.append, parent, this.dispatch)
  }

  withDispatch<OtherAction>(dispatch: (action: OtherAction) => void) {
    return new DOMContext<OtherAction>(this.doc, this.append, this.parent, dispatch)
  }
}
