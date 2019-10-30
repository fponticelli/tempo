import { Emitter } from '../src/emitter'

describe('emitter', () => {
  it('should allow adding handlers and trigger them', () => {
    const e = new Emitter<number>()
    let counter = 0
    const h = (value: number) => {
      counter++
      expect(value).toEqual(0)
    }
    e.on(h)
    e.emit(0)
    expect(counter).toEqual(1)
  })

  it('should allow removing a listener', () => {
    const e = new Emitter<number>()
    let counter = 0
    const h = (_: number) => {
      counter++
    }
    e.on(h)
    e.off(h)
    e.emit(0)
    expect(counter).toEqual(0)
  })

  it('`once` should be triggered once', () => {
    const e = new Emitter<number>()
    let counter = 0
    const h = (_: number) => {
      counter++
    }
    e.once(h)
    e.emit(0)
    expect(counter).toEqual(1)
    e.emit(1)
    expect(counter).toEqual(1)
  })
})
