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

import { DynamicView, StaticView, View } from '@tempo/core/lib/view'
import { removeNode } from './utils/dom'

export class DOMBaseNodeView<State> {
  constructor(readonly node: Node, readonly children: View<State>[], readonly beforeDestroy?: () => void) {}
  destroy() {
    if (this.beforeDestroy) this.beforeDestroy()
    removeNode(this.node)
    for (const c of this.children) c.destroy()
  }
}

export class DOMStaticNodeView<State> extends DOMBaseNodeView<State> implements StaticView {
  readonly kind = 'static'
}

export class DOMDynamicNodeView<State> extends DOMBaseNodeView<State> implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(
    readonly node: Node,
    readonly children: View<State>[],
    readonly change: (state: State) => void,
    readonly beforeDestroy?: () => void
  ) {
    super(node, children, beforeDestroy)
  }
}
