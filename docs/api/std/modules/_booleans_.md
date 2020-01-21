---
id: "_booleans_"
title: "booleans"
sidebar_label: "booleans"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["booleans"](_booleans_.md)

## Index

### Functions

* [canParse](_booleans_.md#canparse)
* [compare](_booleans_.md#compare)
* [option](_booleans_.md#option)
* [parse](_booleans_.md#parse)
* [toInt](_booleans_.md#toint)
* [xor](_booleans_.md#xor)

## Functions

###  canParse

▸ **canParse**(`v`: string): *boolean*

*Defined in [booleans.ts:20](https://github.com/fponticelli/tempo/blob/master/std/src/booleans.ts#L20)*

Returns `true` if the passed value is either `true` or `false` (case insensitive).

**Parameters:**

Name | Type |
------ | ------ |
`v` | string |

**Returns:** *boolean*

___

###  compare

▸ **compare**(`a`: boolean, `b`: boolean): *0 | 1 | -1*

*Defined in [booleans.ts:6](https://github.com/fponticelli/tempo/blob/master/std/src/booleans.ts#L6)*

Returns a comparison value (`Int`) from two boolean values.

**Parameters:**

Name | Type |
------ | ------ |
`a` | boolean |
`b` | boolean |

**Returns:** *0 | 1 | -1*

___

###  option

▸ **option**<**A**>(`cond`: boolean, `a`: A): *[Option](_option_.md#option)‹A›*

*Defined in [booleans.ts:64](https://github.com/fponticelli/tempo/blob/master/std/src/booleans.ts#L64)*

Depending upon the condition, return the provided value wrapped
in a `some`, or `none` if the condition is false.

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`cond` | boolean |
`a` | A |

**Returns:** *[Option](_option_.md#option)‹A›*

___

###  parse

▸ **parse**(`v`: string): *boolean*

*Defined in [booleans.ts:38](https://github.com/fponticelli/tempo/blob/master/std/src/booleans.ts#L38)*

Returns `true`/`false` if the passed value is `true`/`false` (case insensitive) with any other value it will return null.

**Parameters:**

Name | Type |
------ | ------ |
`v` | string |

**Returns:** *boolean*

___

###  toInt

▸ **toInt**(`v`: boolean): *0 | 1*

*Defined in [booleans.ts:13](https://github.com/fponticelli/tempo/blob/master/std/src/booleans.ts#L13)*

Converts a boolean to an integer value (`true` => `1`, `false` => `0`).

**Parameters:**

Name | Type |
------ | ------ |
`v` | boolean |

**Returns:** *0 | 1*

___

###  xor

▸ **xor**(`a`: boolean, `b`: boolean): *boolean*

*Defined in [booleans.ts:56](https://github.com/fponticelli/tempo/blob/master/std/src/booleans.ts#L56)*

Returns `true` when arguments are different.

**Parameters:**

Name | Type |
------ | ------ |
`a` | boolean |
`b` | boolean |

**Returns:** *boolean*
