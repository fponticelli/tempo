/*
Copyright 2018 Google LLC
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

import { list } from './template/list'
import { deep, Deep } from './template/deep'
import { DOMContext } from '@tempo/dom/lib/context'
import { DynamicView } from '@tempo/core/lib/view'

const ctx = DOMContext.fromElement(document.getElementById('test')!, () => {})

export const renderListElements = (numbers: number[]) => {
  list.render(ctx, numbers)
}

export const renderListAndUpdate = (numbers: number[][]) => {
  const view = list.render(ctx, []) as DynamicView<number[]>
  for (const nums of numbers)
    view.change(nums)
}

export const renderListElementsAndDestroy = (numbers: number[]) => {
  const view = list.render(ctx, numbers)
  view.destroy()
}

export const renderDeepAndUpdate = (deeps: Deep[]) => {
  const view = deep.render(ctx, deeps[0]!) as DynamicView<Deep>
  for (const d of deeps)
    view.change(d)
}

const anyWin = window as any
anyWin.__tests__ = {
  renderListElements,
  renderListAndUpdate,
  renderListElementsAndDestroy,
  renderDeepAndUpdate
}
