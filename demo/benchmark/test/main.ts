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

import { list } from './template/list'
import { deep, Deep } from './template/deep'
import { DOMContext } from 'tempo-dom/lib/context'
import { DynamicView } from 'tempo-core/lib/view'
import { TestAttributes, attribute } from './template/attribute'
import { TestStyles, style } from './template/styles'
import { event } from './template/events'
import { TestProperties, property } from './template/property'

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

export const renderDeepAndUpdate = (values: Deep[]) => {
  const view = deep.render(ctx, values[0]!) as DynamicView<Deep>
  for (const v of values)
    view.change(v)
}

export const updateAttributes = (values: TestAttributes[]) => {
  const view = attribute.render(ctx, values[0]!) as DynamicView<TestAttributes>
  for (const v of values)
    view.change(v)
}

export const updateProperty = (values: TestProperties[]) => {
  const view = property.render(ctx, values[0]!) as DynamicView<TestProperties>
  for (const v of values)
    view.change(v)
}

export const updateStyles = (values: TestStyles[]) => {
  const view = style.render(ctx, values[0]!) as DynamicView<TestStyles>
  for (const v of values)
    view.change(v)
}

export const updateAndTriggerEvents = (values: string[]) => {
  const view = event.render(ctx, values[0]!) as DynamicView<string>
  const el = document.getElementById('test').firstElementChild! as HTMLButtonElement
  for (const v of values) {
    el.click()
    view.change(v)
  }
}

const anyWin = window as any
anyWin.__tests__ = {
  renderListElements,
  renderListAndUpdate,
  renderListElementsAndDestroy,
  renderDeepAndUpdate,
  updateAttributes,
  updateStyles,
  updateProperty,
  updateAndTriggerEvents
}
