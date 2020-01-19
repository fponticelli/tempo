import { Ordering } from '../src/ord'
import {
  lowerCaseFirst, upperCaseFirst, contains, count, containsAny, containsAll,
  hashCode, capitalizeWords, diffAt, ellipsis, ellipsisMiddle, isAlphaNum,
  humanize, wrapColumns, repeat, upTo, from, after, stripTags, trimCharsLeft,
  trimCharsRight, trimChars, toArray, toLines, order, reverse
} from '../src/strings'

describe('strings.ts', () => {

  it('LowerUpperCaseFirst', () => {
    expect('aBC').toBe(lowerCaseFirst('ABC'))
    expect('Abc').toBe(upperCaseFirst('abc'))
  })

  it('Contains', () => {
    expect(contains('test', '')).toBe(true)
    expect(contains('test', 't')).toBe(true)
    expect(contains('test', 'te')).toBe(true)
    expect(contains('test', 'tes')).toBe(true)
    expect(contains('test', 'test')).toBe(true)
    expect(contains('one two three', 'one')).toBe(true)
    expect(contains('one two three', 'two')).toBe(true)
    expect(contains('one two three', 'three')).toBe(true)
    expect(contains('test', 'test ')).toBe(false)
    expect(contains('test', ' test')).toBe(false)
    expect(contains('test', 'tes ')).toBe(false)
  })

  it('Count', () => {
    expect(3).toBe(count('one two three four five six seven eight nine ten', 'o'))
    expect(2).toBe(count('one two three four five six seven eight nine ten', 'en'))
    expect(3).toBe(count('one two three four five six seven eight nine ten', ' t'))
    expect(2).toBe(count('one two three four five six seven eight nine ten', 've'))
    expect(0).toBe(count('xxxxxx', 'y'))
    expect(6).toBe(count('xxxxxx', 'x'))
    expect(3).toBe(count('xxxxxx', 'xx'))
    expect(2).toBe(count('xxxxxx', 'xxx'))
    expect(1).toBe(count('xxxxxx', 'xxxx'))
    expect(0).toBe(count('x', 'xx'))
  })

  it('ContainsAny', () => {
    expect(containsAny('test', ['t', 'x', 'y'])).toBe(true)
    expect(containsAny('test', ['e', 'x', 'y'])).toBe(true)
    expect(containsAny('test', ['s', 'x', 'y'])).toBe(true)
    expect(containsAny('test', ['x', 't', 'y'])).toBe(true)
    expect(containsAny('test', ['x', 'e', 'y'])).toBe(true)
    expect(containsAny('test', ['x', 's', 'y'])).toBe(true)
    expect(containsAny('test', ['x', 'y', 't'])).toBe(true)
    expect(containsAny('test', ['x', 'y', 'e'])).toBe(true)
    expect(containsAny('test', ['x', 'y', 's'])).toBe(true)
    expect(containsAny('one two three', ['zero', 'one', 'two'])).toBe(true)
    expect(containsAny('one two three', ['one', 'two', 'three'])).toBe(true)
    expect(containsAny('one two three', ['one two', 'x', 'three'])).toBe(true)
  })

  it('ContainsAll', () => {
    expect(containsAll('test', ['t', 's', 'e'])).toBe(true)
    expect(containsAll('test', ['e', 'x', 'y'])).toBe(false)
    expect(containsAll('test', ['t'])).toBe(true)
    expect(containsAll('test', ['e'])).toBe(true)
    expect(containsAll('test', ['s', 't'])).toBe(true)
    expect(containsAll('test', ['x', 't'])).toBe(false)
    expect(containsAll('one two three', ['zero', 'one', 'two'])).toBe(false)
    expect(containsAll('one two three', ['one', 'two', 'three'])).toBe(true)
    expect(containsAll('one two three', ['one two', 'three'])).toBe(true)
  })

  it('HashCode', () => {
    expect(97).toBe(hashCode('a'))
    expect(96354).toBe(hashCode('abc'))
    expect(898829415).toBe(hashCode('abcdefghijklm'))
    expect(410520826).toBe(hashCode('abcdefghijklmabcdefghijklmabcdefghijklmabcdefghijklmabcdefghijklm!!!'))
  })

  it('Ucwordsws', () => {
    var tests = [
      { expected : 'Test', test : 'test' },
      { expected : 'Test Test', test : 'test test' },
      { expected : ' Test Test  Test ', test : ' test test  test ' },
      { expected : 'Test\nTest', test : 'test\ntest' },
      { expected : 'Test\tTest', test : 'test\ttest' }
    ]
    for (const item of tests)
      expect(item.expected).toBe(capitalizeWords(item.test, true))
  })

  it('DifferAt', () => {
    expect(3).toBe(diffAt('abcdef', 'abc123'))
    expect(0).toBe(diffAt('', 'abc123'))
    expect(1).toBe(diffAt('a', 'abc123'))
    expect(0).toBe(diffAt('abc123', ''))
    expect(1).toBe(diffAt('abc123', 'a'))
  })

  it('Ellipsis', () => {
    var test = 'abcdefghijkl',
        tests: Array<{ expected: string, len: number | null, symbol: string }> = [
      { expected : 'abcdefghijkl', len : null, symbol : null },
      { expected : 'abcdefghijkl', len : 100, symbol : null },
      { expected : 'abcd…', len : 5, symbol : null },
      { expected : 'a ...', len : 5, symbol : ' ...' },
      { expected : '..', len : 2, symbol : ' ...' },
      { expected : 'abcdef ...', len : 10, symbol : ' ...' }
    ]
    for (const item of tests)
      expect(item.expected).toBe(ellipsis(test, item.len, item.symbol))
  })

  it('EllipsisMiddle', () => {
    var test = 'abcdefghijkl',
        tests: Array<{ expected: string, len: number | null, symbol: string }> = [
      { expected : 'abcdefghijkl', len : null, symbol : null },
      { expected : 'abcdefghijkl', len : 100, symbol : null },
      { expected : 'ab…kl', len : 5, symbol : null },
      { expected : 'a ...', len : 5, symbol : ' ...' },
      { expected : '..', len : 2, symbol : ' ...' },
      { expected : 'abc ...jkl', len : 10, symbol : ' ...' }
    ]
    for (const item of tests)
      expect(item.expected).toBe(ellipsisMiddle(test, item.len, item.symbol))
  })

  it('Ucwords', () => {
    var tests = [
      { expected : 'Test', test : 'test' },
      { expected : 'Test Test', test : 'test test' },
      { expected : ' Test-Test:Test_Test : Test ', test : ' test-test:test_test : test ' },
      { expected : 'Test\nTest', test : 'test\ntest' },
      { expected : 'Test\tTest', test : 'test\ttest' }
    ]
    for (const item of tests)
      expect(item.expected).toBe(capitalizeWords(item.test))
  })

  it('AlphaNum', () => {
    var tests = [
      { expected : true, test : 'a' },
      { expected : true, test : '1a' },
      { expected : false, test : ' a' },
      { expected : false, test : ' ' },
      { expected : false, test : '' }
    ]
    for (const item of tests)
      expect(item.expected).toBe(isAlphaNum(item.test))
  })

  it('Humanize', () => {
    expect('hello world').toBe(humanize('helloWorld'))
    expect('my long string').toBe(humanize('my_long_string'))
    expect('ignore many').toBe(humanize('ignoreMANY'))
  })

  it('WrapColumn', () => {
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    expect(
`Lorem ipsum dolor
sit amet,
consectetur
adipisicing elit,
sed do eiusmod
tempor incididunt ut
labore et dolore
magna aliqua. Ut
enim ad minim
veniam, quis nostrud
exercitation ullamco
laboris nisi ut
aliquip ex ea
commodo consequat.`).toBe(wrapColumns(text, 20))

    expect(
`    Lorem ipsum
    dolor sit amet,
    consectetur
    adipisicing
    elit, sed do
    eiusmod tempor
    incididunt ut
    labore et dolore
    magna aliqua. Ut
    enim ad minim
    veniam, quis
    nostrud
    exercitation
    ullamco laboris
    nisi ut aliquip
    ex ea commodo
    consequat.`).toBe(wrapColumns(text, 20, '    '))

  })

  it('WrapColumnPreserveNewLines', () => {
    var text = 'Lorem ipsum dolor sit amet,\n\nconsectetur adipisicing elit'
    expect(
      'Lorem ipsum dolor\nsit amet,\n\nconsectetur\nadipisicing elit'
    ).toBe(wrapColumns(text, 18))
  })

  it('WrapColumnLong', () => {
    var text = 'aaaaaaaaaa aaaa aaa aa'
    expect(
`aaaaaaaaaa
aaaa
aaa aa`).toBe(wrapColumns(text, 6))
  })

  it('Repeat', () => {
    expect('XyXyXy').toBe(repeat('Xy', 3))
  })

  it('UpTo', () => {
    expect('abcdef').toBe(upTo('abcdef', 'x'))
    expect('ab').toBe(upTo('abcdef', 'cd'))
  })

  it('From', () => {
    expect('').toBe(from('abcdef', 'x'))
    expect('cdef').toBe(from('abcdef', 'cd'))
  })

  it('After', () => {
    expect('').toBe(after('abcdef', 'x'))
    expect('ef').toBe(after('abcdef', 'cd'))
  })

  it('StripTags', () => {
    expect('a code; x').toBe(stripTags('a<br/> <script src="aaa">code;</script> x'))
  })

  it('Ltrim', () => {
    expect('abcde').toBe(trimCharsLeft('abcde', 'x'))
    expect('de').toBe(trimCharsLeft('abcde', 'cba'))
    expect('abcde').toBe(trimCharsLeft('abcde', 'b'))

    expect('').toBe(trimCharsLeft('/', '/'))
  })

  it('Rtrim', () => {
    expect('abcde').toBe(trimCharsRight('abcde', 'x'))
    expect('ab').toBe(trimCharsRight('abcde', 'ced'))
    expect('abcde').toBe(trimCharsRight('abcde', 'd'))

    expect('').toBe(trimCharsRight('/', '/'))
  })

  it('Trim', () => {
    expect('abcde').toBe(trimChars('abcde', 'x'))
    expect('cd').toBe(trimChars('abcde', 'abe'))
    expect('abcde').toBe(trimChars('abcde', 'bd'))

    expect('').toBe(trimChars('/', '/'))
  })

  it('ToArray', () => {
    var t = 'a☺b☺☺c☺☺☺',
        e = ['a', '☺', 'b', '☺', '☺', 'c', '☺', '☺', '☺']
    expect(e).toEqual(toArray(t))
  })

  it('ToLines', () => {
    var text = `Split
to
lines`
    expect(['Split', 'to', 'lines']).toEqual(toLines(text))
  })

  it('Reverse', () => {
    var t = 'a☺b☺☺c☺☺☺',
        e = '☺☺☺c☺☺b☺a'
    expect(e).toEqual(reverse(t))
  })

  it('Order', () => {
    expect(Ordering.EQ).toBe(order.compare('companyId', 'companyId'))
    expect(Ordering.LT).toBe(order.compare('companyIc', 'companyId'))
    expect(Ordering.GT).toBe(order.compare('companyId', 'companyIc'))
  })
})
