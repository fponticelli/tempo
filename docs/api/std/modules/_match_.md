---
id: "_match_"
title: "match"
sidebar_label: "match"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["match"](_match_.md)

## Index

### Variables

* [matchKind](_match_.md#const-matchkind)

### Functions

* [createDeepMatch](_match_.md#const-createdeepmatch)
* [createMatch](_match_.md#const-creatematch)
* [deepMatch](_match_.md#const-deepmatch)
* [match](_match_.md#const-match)

## Variables

### `Const` matchKind

• **matchKind**: *(Anonymous function)* = createMatch('kind')

*Defined in [match.ts:74](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/match.ts#L74)*

## Functions

### `Const` createDeepMatch

▸ **createDeepMatch**<**Path**>(...`path`: Path): *(Anonymous function)*

*Defined in [match.ts:59](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/match.ts#L59)*

**Type parameters:**

▪ **Path**: *[IndexType](_types_index_type_.md#indextype)[]*

**Parameters:**

Name | Type |
------ | ------ |
`...path` | Path |

**Returns:** *(Anonymous function)*

___

### `Const` createMatch

▸ **createMatch**<**F**>(`field`: F): *(Anonymous function)*

*Defined in [match.ts:49](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/match.ts#L49)*

**Type parameters:**

▪ **F**: *[IndexType](_types_index_type_.md#indextype)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | F |

**Returns:** *(Anonymous function)*

___

### `Const` deepMatch

▸ **deepMatch**<**Path**, **T**, **B**>(`path`: Path, `matcher`: object, `input`: T): *B*

*Defined in [match.ts:31](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/match.ts#L31)*

**Type parameters:**

▪ **Path**: *[IndexType](_types_index_type_.md#indextype)[]*

▪ **T**: *[ObjectWithPath](_types_objects_.md#objectwithpath)‹Path, any›*

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`path` | Path |
`matcher` | object |
`input` | T |

**Returns:** *B*

___

### `Const` match

▸ **match**<**F**, **T**, **B**>(`field`: F, `matcher`: object, `input`: T): *B*

*Defined in [match.ts:18](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/match.ts#L18)*

**Type parameters:**

▪ **F**: *[IndexType](_types_index_type_.md#indextype)*

▪ **T**: *[ObjectWithField](_types_objects_.md#objectwithfield)‹F, any›*

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`field` | F |
`matcher` | object |
`input` | T |

**Returns:** *B*
