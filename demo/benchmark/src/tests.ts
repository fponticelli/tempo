import { TestInfo, TestDescription } from './state'
import { createRange, createRanges, repeat, createDeep } from './generator'

export const tests: TestDescription[] = [
  {
    id: 'render-list-50',
    name: 'Render List (50)',
    fn: 'renderListElements',
    args: createRange(50)
  }, {
    id: 'render-list-500',
    name: 'Render List (500)',
    fn: 'renderListElements',
    args: createRange(500)
  }, {
    id: 'render-destroy-list-500',
    name: 'Render List & Destroy (500)',
    fn: 'renderListElementsAndDestroy',
    args: createRange(500)
  }, {
    id: 'render-update-list',
    name: 'Render List & Update',
    fn: 'renderListAndUpdate',
    args: createRanges([200, 100, 50, 20, 0, 20, 50, 100, 200])
  }, {
    id: 'render-update-deep',
    name: 'Render Deep & Update',
    fn: 'renderDeepAndUpdate',
    args: repeat(50, createDeep)
  }
]

export const availableTests = (): TestInfo[] => {
  return tests.map(test => ({
    id: test.id,
    name: test.name
  }))
}
