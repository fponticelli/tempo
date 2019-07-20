import { derived, literal } from '../../../core/src'

describe('value', () => {
  it('resolve', () => {
    const d = derived((v: number) => `#${v}`)
    expect(d.resolve(1)).toEqual('#1')

    const l = literal('#2')
    expect(l.resolve(1)).toEqual('#2')
  })
})
