import {
  map
} from '../src/regexps'

describe('regexps.ts', () => {
  it('Map with non-global pattern', () => {
    const pattern = /xx|yyy/
    expect(map(v => v.toUpperCase(), pattern, 'axxbbyyyc')).toBe('aXXbbYYYc')
    expect(map(v => v.toUpperCase(), pattern, 'xxbbyyy')).toBe('XXbbYYY')
    expect(map(v => v.toUpperCase(), pattern, 'xx')).toBe('XX')
    expect(map(v => v.toUpperCase(), pattern, 'x')).toBe('x')
  })

  it('Map with global pattern', () => {
    const pattern = /xx|yyy/g
    expect(map(v => v.toUpperCase(), pattern, 'axxbbyyyc')).toBe('aXXbbYYYc')
    expect(map(v => v.toUpperCase(), pattern, 'xxbbyyy')).toBe('XXbbYYY')
    expect(map(v => v.toUpperCase(), pattern, 'xx')).toBe('XX')
    expect(map(v => v.toUpperCase(), pattern, 'x')).toBe('x')
  })
})
