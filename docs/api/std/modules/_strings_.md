---
id: "_strings_"
title: "strings"
sidebar_label: "strings"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["strings"](_strings_.md)

## Index

### Variables

* [BASE64_ALPHABET](_strings_.md#const-base64_alphabet)
* [order](_strings_.md#const-order)

### Functions

* [after](_strings_.md#after)
* [afterLast](_strings_.md#afterlast)
* [before](_strings_.md#before)
* [beforeLast](_strings_.md#beforelast)
* [canonicalizeNewlines](_strings_.md#canonicalizenewlines)
* [capitalize](_strings_.md#capitalize)
* [capitalizeWords](_strings_.md#capitalizewords)
* [collapse](_strings_.md#collapse)
* [compare](_strings_.md#compare)
* [compareCaseInsensitive](_strings_.md#comparecaseinsensitive)
* [contains](_strings_.md#contains)
* [containsAll](_strings_.md#containsall)
* [containsAllCaseInsensitive](_strings_.md#containsallcaseinsensitive)
* [containsAny](_strings_.md#containsany)
* [containsAnyCaseInsensitive](_strings_.md#containsanycaseinsensitive)
* [containsCaseInsensitive](_strings_.md#containscaseinsensitive)
* [count](_strings_.md#count)
* [dasherize](_strings_.md#dasherize)
* [diffAt](_strings_.md#diffat)
* [ellipsis](_strings_.md#ellipsis)
* [ellipsisMiddle](_strings_.md#ellipsismiddle)
* [endsWith](_strings_.md#endswith)
* [endsWithAny](_strings_.md#endswithany)
* [endsWithAnyCaseInsensitive](_strings_.md#endswithanycaseinsensitive)
* [endsWithCaseInsensitive](_strings_.md#endswithcaseinsensitive)
* [filter](_strings_.md#filter)
* [filterCharcode](_strings_.md#filtercharcode)
* [from](_strings_.md#from)
* [hasContent](_strings_.md#hascontent)
* [hashCode](_strings_.md#hashcode)
* [humanize](_strings_.md#humanize)
* [ifEmpty](_strings_.md#ifempty)
* [isAlpha](_strings_.md#isalpha)
* [isAlphaNum](_strings_.md#isalphanum)
* [isBreakingWhitespace](_strings_.md#isbreakingwhitespace)
* [isDigitsOnly](_strings_.md#isdigitsonly)
* [isEmpty](_strings_.md#isempty)
* [isLowerCase](_strings_.md#islowercase)
* [isSpaceAt](_strings_.md#isspaceat)
* [isUpperCase](_strings_.md#isuppercase)
* [lowerCaseFirst](_strings_.md#lowercasefirst)
* [lpad](_strings_.md#lpad)
* [map](_strings_.md#map)
* [quote](_strings_.md#quote)
* [random](_strings_.md#random)
* [randomSequence](_strings_.md#randomsequence)
* [randomSequence64](_strings_.md#randomsequence64)
* [remove](_strings_.md#remove)
* [removeAfter](_strings_.md#removeafter)
* [removeAt](_strings_.md#removeat)
* [removeBefore](_strings_.md#removebefore)
* [removeOne](_strings_.md#removeone)
* [repeat](_strings_.md#repeat)
* [replace](_strings_.md#const-replace)
* [reverse](_strings_.md#reverse)
* [rpad](_strings_.md#rpad)
* [splitOnce](_strings_.md#splitonce)
* [startsWith](_strings_.md#startswith)
* [startsWithAny](_strings_.md#startswithany)
* [startsWithAnyCaseInsensitive](_strings_.md#startswithanycaseinsensitive)
* [startsWithCaseInsensitive](_strings_.md#startswithcaseinsensitive)
* [stripTags](_strings_.md#striptags)
* [surround](_strings_.md#surround)
* [toArray](_strings_.md#toarray)
* [toCharcodes](_strings_.md#tocharcodes)
* [toChunks](_strings_.md#tochunks)
* [toLines](_strings_.md#tolines)
* [trimChars](_strings_.md#trimchars)
* [trimCharsLeft](_strings_.md#trimcharsleft)
* [trimCharsRight](_strings_.md#trimcharsright)
* [underscore](_strings_.md#underscore)
* [upTo](_strings_.md#upto)
* [upperCaseFirst](_strings_.md#uppercasefirst)
* [wrapColumns](_strings_.md#wrapcolumns)

## Variables

### `Const` BASE64_ALPHABET

• **BASE64_ALPHABET**: *"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"* = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

*Defined in [strings.ts:703](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L703)*

___

### `Const` order

• **order**: *[Ord](../classes/_ord_.ord.md)‹string›* = Ord.fromNumberComparison(compare)

*Defined in [strings.ts:161](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L161)*

## Functions

###  after

▸ **after**(`value`: string, `searchFor`: string): *string*

*Defined in [strings.ts:28](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L28)*

`after` searches for the first occurrance of `searchFor` and returns the text after that.
If `searchFor` is not found, an empty string is returned.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`searchFor` | string |

**Returns:** *string*

___

###  afterLast

▸ **afterLast**(`value`: string, `searchFor`: string): *string*

*Defined in [strings.ts:40](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L40)*

`afterLast` searches for the last occurrance of `searchFor` and returns the text after that.
If `searchFor` is not found, an empty string is returned.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`searchFor` | string |

**Returns:** *string*

___

###  before

▸ **before**(`value`: string, `searchFor`: string): *string*

*Defined in [strings.ts:52](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L52)*

`before` searches for the first occurrance of `searchFor` and returns the text before that.
If `searchFor` is not found, an empty string is returned.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`searchFor` | string |

**Returns:** *string*

___

###  beforeLast

▸ **beforeLast**(`value`: string, `searchFor`: string): *string*

*Defined in [strings.ts:64](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L64)*

`beforeLast` searches for the last occurrance of `searchFor` and returns the text before that.
If `searchFor` is not found, an empty string is returned.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`searchFor` | string |

**Returns:** *string*

___

###  canonicalizeNewlines

▸ **canonicalizeNewlines**(`value`: string): *string*

*Defined in [strings.ts:96](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L96)*

Replaces occurrances of `\r\n`, `\n\r`, `\r` with `\n`

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

###  capitalize

▸ **capitalize**(`s`: string): *string*

*Defined in [strings.ts:75](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L75)*

`capitalize` returns a string with the first character convert to upper case.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  capitalizeWords

▸ **capitalizeWords**(`value`: string, `whiteSpaceOnly`: boolean): *string*

*Defined in [strings.ts:85](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L85)*

Capitalize the first letter of every word in `value`. If `whiteSpaceOnly` is set to `true`
the process is limited to whitespace separated words.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string | - |
`whiteSpaceOnly` | boolean | false |

**Returns:** *string*

___

###  collapse

▸ **collapse**(`value`: string): *string*

*Defined in [strings.ts:149](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L149)*

It cleans up all the whitespaces in the passed `value`. `collapse` does the following:
- remove trailing/leading whitespaces
- within the string, it collapses seqeunces of whitespaces into a single space character
For whitespaces in this description, it is intended to be anything that is matched by the regular expression `\s`.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

###  compare

▸ **compare**(`a`: string, `b`: string): *0 | 1 | -1*

*Defined in [strings.ts:157](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L157)*

It compares to string and it returns a negative number if `a` is inferior to `b`, zero if they are the same,
or otherwise a positive non-sero number.

**Parameters:**

Name | Type |
------ | ------ |
`a` | string |
`b` | string |

**Returns:** *0 | 1 | -1*

___

###  compareCaseInsensitive

▸ **compareCaseInsensitive**(`a`: string, `b`: string): *number*

*Defined in [strings.ts:103](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L103)*

Compares two strings ignoring their case.

**Parameters:**

Name | Type |
------ | ------ |
`a` | string |
`b` | string |

**Returns:** *number*

___

###  contains

▸ **contains**(`s`: string, `test`: string): *boolean*

*Defined in [strings.ts:173](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L173)*

`contains` returns `true` if `s` contains one or more occurrences of `test`.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`test` | string |

**Returns:** *boolean*

___

###  containsAll

▸ **containsAll**(`s`: string, `tests`: Array‹string›): *boolean*

*Defined in [strings.ts:208](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L208)*

`contains` returns `true` if `s` contains all of the strings in `tests`

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`tests` | Array‹string› |

**Returns:** *boolean*

___

###  containsAllCaseInsensitive

▸ **containsAllCaseInsensitive**(`s`: string, `tests`: Array‹string›): *boolean*

*Defined in [strings.ts:201](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L201)*

`contains` returns `true` if `s` contains all of the strings in `tests` regardless of the text case

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`tests` | Array‹string› |

**Returns:** *boolean*

___

###  containsAny

▸ **containsAny**(`s`: string, `tests`: Array‹string›): *boolean*

*Defined in [strings.ts:194](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L194)*

`contains` returns `true` if `s` contains any of the strings in `tests`

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`tests` | Array‹string› |

**Returns:** *boolean*

___

###  containsAnyCaseInsensitive

▸ **containsAnyCaseInsensitive**(`s`: string, `tests`: Array‹string›): *boolean*

*Defined in [strings.ts:187](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L187)*

`contains` returns `true` if `s` contains any of the strings in `tests` regardless of the text case

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`tests` | Array‹string› |

**Returns:** *boolean*

___

###  containsCaseInsensitive

▸ **containsCaseInsensitive**(`s`: string, `test`: string): *boolean*

*Defined in [strings.ts:166](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L166)*

`contains` returns `true` if `s` contains one or more occurrences of `test` regardless of the text case.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`test` | string |

**Returns:** *boolean*

___

###  count

▸ **count**(`s`: string, `test`: string): *number*

*Defined in [strings.ts:180](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L180)*

Return the number of occurances of `test` in `s`.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`test` | string |

**Returns:** *number*

___

###  dasherize

▸ **dasherize**(`s`: string): *string*

*Defined in [strings.ts:215](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L215)*

`dasherize` replaces all the occurrances of `_` with `-`

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  diffAt

▸ **diffAt**(`a`: string, `b`: string): *number*

*Defined in [strings.ts:225](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L225)*

Compares strings `a` and `b` and returns the position where they differ.
```ts
diffAt('abcdef', 'abc123') // returns 3
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | string |
`b` | string |

**Returns:** *number*

___

###  ellipsis

▸ **ellipsis**(`s`: string, `maxlen`: number, `symbol`: string): *string*

*Defined in [strings.ts:240](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L240)*

`ellipsis` truncates `s` at len `maxlen` replaces the last characters with the content
of `symbol`.
```ts
ellipsis('tempo is a nice library', 9) // returns 'tempo is …'
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`maxlen` | number | 20 |
`symbol` | string | "…" |

**Returns:** *string*

___

###  ellipsisMiddle

▸ **ellipsisMiddle**(`s`: string, `maxlen`: number, `symbol`: string): *string*

*Defined in [strings.ts:259](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L259)*

Same as `ellipsis` but puts the symbol in the middle of the string and not to the end.
```ts
ellipsisMiddle('tempo is a nice library', 18) // returns 'tempo is … library'
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`maxlen` | number | 20 |
`symbol` | string | "…" |

**Returns:** *string*

___

###  endsWith

▸ **endsWith**(`s`: string, `end`: string): *boolean*

*Defined in [strings.ts:113](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`end` | string |

**Returns:** *boolean*

___

###  endsWithAny

▸ **endsWithAny**(`s`: string, `values`: string[]): *boolean*

*Defined in [strings.ts:276](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L276)*

Returns `true` if `s` ends with any of the values in `values`.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`values` | string[] |

**Returns:** *boolean*

___

###  endsWithAnyCaseInsensitive

▸ **endsWithAnyCaseInsensitive**(`s`: string, `values`: Array‹string›): *boolean*

*Defined in [strings.ts:132](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L132)*

Compares a string `s` with many `values` and see if one of them matches its end ignoring their case.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`values` | Array‹string› |

**Returns:** *boolean*

___

###  endsWithCaseInsensitive

▸ **endsWithCaseInsensitive**(`s`: string, `end`: string): *boolean*

*Defined in [strings.ts:117](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`end` | string |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`s`: string, `predicate`: function): *string*

*Defined in [strings.ts:284](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L284)*

`filter` applies `predicate` character by character to `s` and it returns a filtered
version of the string.

**Parameters:**

▪ **s**: *string*

▪ **predicate**: *function*

▸ (`s`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  filterCharcode

▸ **filterCharcode**(`s`: string, `predicate`: function): *string*

*Defined in [strings.ts:293](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L293)*

Same as `filter` but `predicate` operates on integer char codes instead of string characters.

**Parameters:**

▪ **s**: *string*

▪ **predicate**: *function*

▸ (`n`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *string*

___

###  from

▸ **from**(`value`: string, `searchFor`: string): *string*

*Defined in [strings.ts:304](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L304)*

`from` searches for the first occurrance of `searchFor` and returns the text from that point on.
If `searchFor` is not found, an empty string is returned.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`searchFor` | string |

**Returns:** *string*

___

###  hasContent

▸ **hasContent**(`value`: string): *boolean*

*Defined in [strings.ts:327](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L327)*

Returns `true` if `value` is not `null` and contains at least one character.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  hashCode

▸ **hashCode**(`value`: string, `seed`: number): *number*

*Defined in [strings.ts:312](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L312)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string | - |
`seed` | number | 2166136261 |

**Returns:** *number*

___

###  humanize

▸ **humanize**(`s`: string): *string*

*Defined in [strings.ts:334](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L334)*

Works the same as `underscore` but also replaces underscores with whitespaces.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  ifEmpty

▸ **ifEmpty**(`value`: string, `alt`: string): *string*

*Defined in [strings.ts:375](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L375)*

`ifEmpty` returns `value` if it is neither `null` or empty, otherwise it returns `alt`

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`alt` | string |

**Returns:** *string*

___

###  isAlpha

▸ **isAlpha**(`s`: string): *boolean*

*Defined in [strings.ts:341](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L341)*

Checks if `s` contains only (and at least one) alphabetical characters.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *boolean*

___

###  isAlphaNum

▸ **isAlphaNum**(`value`: string): *boolean*

*Defined in [strings.ts:348](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L348)*

`isAlphaNum` returns `true` if the string only contains alpha-numeric characters.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  isBreakingWhitespace

▸ **isBreakingWhitespace**(`value`: string): *boolean*

*Defined in [strings.ts:352](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L352)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  isDigitsOnly

▸ **isDigitsOnly**(`value`: string): *boolean*

*Defined in [strings.ts:382](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L382)*

`isDigitsOnly` returns `true` if the string only contains digits.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  isEmpty

▸ **isEmpty**(`value`: string): *boolean*

*Defined in [strings.ts:389](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L389)*

`isEmpty` returns true if either `value` is null or is an empty string.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  isLowerCase

▸ **isLowerCase**(`value`: string): *boolean*

*Defined in [strings.ts:360](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L360)*

Returns `true` if the value string is composed of only lower cased characters
or case neutral characters.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  isSpaceAt

▸ **isSpaceAt**(`s`: string, `pos`: number): *boolean*

*Defined in [strings.ts:648](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L648)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`pos` | number |

**Returns:** *boolean*

___

###  isUpperCase

▸ **isUpperCase**(`value`: string): *boolean*

*Defined in [strings.ts:368](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L368)*

Returns `true` if the value string is composed of only upper cased characters
or case neutral characters.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  lowerCaseFirst

▸ **lowerCaseFirst**(`value`: string): *string*

*Defined in [strings.ts:396](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L396)*

Convert first letter in `value` to lower case.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

###  lpad

▸ **lpad**(`s`: string, `char`: string, `length`: number): *string*

*Defined in [strings.ts:685](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L685)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`char` | string |
`length` | number |

**Returns:** *string*

___

###  map

▸ **map**<**T**>(`callback`: function, `value`: string): *Array‹T›*

*Defined in [strings.ts:424](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L424)*

It maps a string character by character using `callback`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **callback**: *function*

▸ (`c`: string): *T*

**Parameters:**

Name | Type |
------ | ------ |
`c` | string |

▪ **value**: *string*

**Returns:** *Array‹T›*

___

###  quote

▸ **quote**(`s`: string): *string*

*Defined in [strings.ts:488](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L488)*

Converts a string in a quoted string.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  random

▸ **random**(`value`: string, `length`: number): *string*

*Defined in [strings.ts:403](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L403)*

Returns a random substring from the `value` argument. The length of such value is by default `1`.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string | - |
`length` | number | 1 |

**Returns:** *string*

___

###  randomSequence

▸ **randomSequence**(`alphabet`: string, `length`: number): *string*

*Defined in [strings.ts:410](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L410)*

Returns a random sampling of the specified length from the seed string.

**Parameters:**

Name | Type |
------ | ------ |
`alphabet` | string |
`length` | number |

**Returns:** *string*

___

###  randomSequence64

▸ **randomSequence64**(`length`: number): *string*

*Defined in [strings.ts:417](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L417)*

Like `randomSequence`, but automatically uses the base64 sequence as the seed string.

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *string*

___

###  remove

▸ **remove**(`value`: string, `toremove`: string): *string*

*Defined in [strings.ts:431](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L431)*

If present, it removes all the occurrences of `toremove` from `value`.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`toremove` | string |

**Returns:** *string*

___

###  removeAfter

▸ **removeAfter**(`value`: string, `toremove`: string): *string*

*Defined in [strings.ts:438](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L438)*

If present, it removes the `toremove` text from the end of `value`.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`toremove` | string |

**Returns:** *string*

___

###  removeAt

▸ **removeAt**(`value`: string, `index`: number, `length`: number): *string*

*Defined in [strings.ts:445](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L445)*

Removes a slice from `index` to `index + length` from `value`.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`length` | number |

**Returns:** *string*

___

###  removeBefore

▸ **removeBefore**(`value`: string, `toremove`: string): *string*

*Defined in [strings.ts:452](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L452)*

If present, it removes the `toremove` text from the beginning of `value`.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`toremove` | string |

**Returns:** *string*

___

###  removeOne

▸ **removeOne**(`value`: string, `toremove`: string): *string*

*Defined in [strings.ts:459](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L459)*

If present, it removes the first occurrence of `toremove` from `value`.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`toremove` | string |

**Returns:** *string*

___

###  repeat

▸ **repeat**(`s`: string, `times`: number): *string*

*Defined in [strings.ts:472](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L472)*

`repeat` builds a new string by repeating the argument `s`, n `times`.
```ts
repeat('Xy', 3) // generates 'XyXyXy'
```

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`times` | number |

**Returns:** *string*

___

### `Const` replace

▸ **replace**(`subject`: string, `placeholder`: string, `replacement`: string): *string*

*Defined in [strings.ts:18](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`subject` | string |
`placeholder` | string |
`replacement` | string |

**Returns:** *string*

___

###  reverse

▸ **reverse**(`s`: string): *string*

*Defined in [strings.ts:479](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L479)*

Returns a new string whose characters are in reverse order.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  rpad

▸ **rpad**(`s`: string, `char`: string, `length`: number): *string*

*Defined in [strings.ts:694](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L694)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`char` | string |
`length` | number |

**Returns:** *string*

___

###  splitOnce

▸ **splitOnce**(`s`: string, `separator`: string): *string[]*

*Defined in [strings.ts:500](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L500)*

It only splits on the first occurrance of separator.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`separator` | string |

**Returns:** *string[]*

___

###  startsWith

▸ **startsWith**(`s`: string, `start`: string): *boolean*

*Defined in [strings.ts:121](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`start` | string |

**Returns:** *boolean*

___

###  startsWithAny

▸ **startsWithAny**(`s`: string, `values`: string[]): *boolean*

*Defined in [strings.ts:510](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L510)*

Returns `true` if `s` starts with any of the values in `values`.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`values` | string[] |

**Returns:** *boolean*

___

###  startsWithAnyCaseInsensitive

▸ **startsWithAnyCaseInsensitive**(`s`: string, `values`: Array‹string›): *boolean*

*Defined in [strings.ts:139](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L139)*

Compares a string `s` with many `values` and see if one of them matches its beginning ignoring their case.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`values` | Array‹string› |

**Returns:** *boolean*

___

###  startsWithCaseInsensitive

▸ **startsWithCaseInsensitive**(`s`: string, `start`: string): *boolean*

*Defined in [strings.ts:125](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`start` | string |

**Returns:** *boolean*

___

###  stripTags

▸ **stripTags**(`s`: string): *string*

*Defined in [strings.ts:518](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L518)*

`stripTags` removes any HTML/XML markup from the string leaving only the concatenation
of the existing text nodes.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  surround

▸ **surround**(`s`: string, `left`: string, `right`: string): *string*

*Defined in [strings.ts:526](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L526)*

Surrounds a string with the contents of `left` and `right`. If `right` is omitted,
`left` will be used on both sides

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`left` | string | - |
`right` | string | left |

**Returns:** *string*

___

###  toArray

▸ **toArray**(`s`: string): *string[]*

*Defined in [strings.ts:533](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L533)*

It transforms a string into an `Array` of characters.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string[]*

___

###  toCharcodes

▸ **toCharcodes**(`s`: string): *Array‹number›*

*Defined in [strings.ts:540](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L540)*

It transforms a string into an `Array` of char codes in integer format.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *Array‹number›*

___

###  toChunks

▸ **toChunks**(`s`: string, `len`: number): *Array‹string›*

*Defined in [strings.ts:548](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L548)*

Returns an array of `string` whose elements are equally long (using `len`). If the string `s`
is not exactly divisible by `len` the last element of the array will be shorter.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`len` | number |

**Returns:** *Array‹string›*

___

###  toLines

▸ **toLines**(`s`: string): *string[]*

*Defined in [strings.ts:560](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L560)*

Returns an array of `string` split by line breaks.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string[]*

___

###  trimChars

▸ **trimChars**(`value`: string, `charlist`: string): *string*

*Defined in [strings.ts:567](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L567)*

`trimChars` removes from the beginning and the end of the string any character that is present in `charlist`.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`charlist` | string |

**Returns:** *string*

___

###  trimCharsLeft

▸ **trimCharsLeft**(`value`: string, `charlist`: string): *string*

*Defined in [strings.ts:574](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L574)*

`trimCharsLeft` removes from the beginning of the string any character that is present in `charlist`.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`charlist` | string |

**Returns:** *string*

___

###  trimCharsRight

▸ **trimCharsRight**(`value`: string, `charlist`: string): *string*

*Defined in [strings.ts:587](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L587)*

`trimCharsRight` removes from the end of the string any character that is present in `charlist`.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`charlist` | string |

**Returns:** *string*

___

###  underscore

▸ **underscore**(`s`: string): *string*

*Defined in [strings.ts:605](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L605)*

`underscore` finds UpperCase characters and turns them into LowerCase and prepends them with a whtiespace.
Sequences of more than one UpperCase character are left untouched.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  upTo

▸ **upTo**(`value`: string, `searchFor`: string): *string*

*Defined in [strings.ts:624](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L624)*

`upTo` searches for the first occurrance of `searchFor` and returns the text up to that point.
If `searchFor` is not found, the entire string is returned.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`searchFor` | string |

**Returns:** *string*

___

###  upperCaseFirst

▸ **upperCaseFirst**(`value`: string): *string*

*Defined in [strings.ts:616](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L616)*

Convert first letter in `value` to upper case.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

###  wrapColumns

▸ **wrapColumns**(`s`: string, `columns`: number, `indent`: string, `newline`: string): *string*

*Defined in [strings.ts:636](https://github.com/fponticelli/tempo/blob/master/std/src/strings.ts#L636)*

`wrapColumns` splits a long string into lines that are at most `columns` long.
Words whose length exceeds `columns` are not split.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`columns` | number | 78 |
`indent` | string | "" |
`newline` | string | "
" |

**Returns:** *string*
