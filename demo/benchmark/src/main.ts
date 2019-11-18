import { list } from './template/list'
import { deep, Deep } from './template/deep'
import { DOMContext } from '@mood/dom/lib/context'
import { DynamicView } from 'core/lib/view'

const ctx = DOMContext.fromElement(document.getElementById('App')!, () => {})

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
