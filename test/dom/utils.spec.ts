import { removeNode } from '../../src/dom/utils'

describe('utils', () => {
  it('removeNode odd scenarios', () => {
    expect(removeNode(undefined as any)).toBeUndefined()
    expect(removeNode({} as any)).toBeUndefined()
  })
})
