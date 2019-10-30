import { compose } from '../src/reducer'

describe('compose', () => {
  it('aggregates multiple reducers', () => {
    const red1 = (state: number[], action: number) => state.concat([1, action])
    const red2 = (state: number[], action: number) => state.concat([2, action])

    expect(compose(red1, red2, red1)([], 0)).toEqual([1, 0, 2, 0, 1, 0])
  })
})
