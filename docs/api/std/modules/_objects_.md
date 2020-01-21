---
id: "_objects_"
title: "objects"
sidebar_label: "objects"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["objects"](_objects_.md)

## Index

### Functions

* [keys](_objects_.md#const-keys)
* [merge](_objects_.md#const-merge)
* [removeFields](_objects_.md#const-removefields)

## Functions

### `Const` keys

▸ **keys**<**T**>(`object`: T): *keyof T[]*

*Defined in [objects.ts:4](https://github.com/fponticelli/tempo/blob/master/std/src/objects.ts#L4)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | T |

**Returns:** *keyof T[]*

___

### `Const` merge

▸ **merge**<**A**, **B**>(`a`: A, `b`: B): *[Merge](_types_objects_.md#merge)‹A, B›*

*Defined in [objects.ts:18](https://github.com/fponticelli/tempo/blob/master/std/src/objects.ts#L18)*

**Type parameters:**

▪ **A**: *object*

▪ **B**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

**Returns:** *[Merge](_types_objects_.md#merge)‹A, B›*

___

### `Const` removeFields

▸ **removeFields**<**T**, **F**>(`ob`: T, ...`fields`: F): *Omit‹T, [TupleToUnion](_types_tuples_.md#tupletounion)‹F››*

*Defined in [objects.ts:8](https://github.com/fponticelli/tempo/blob/master/std/src/objects.ts#L8)*

**Type parameters:**

▪ **T**

▪ **F**: *keyof T[]*

**Parameters:**

Name | Type |
------ | ------ |
`ob` | T |
`...fields` | F |

**Returns:** *Omit‹T, [TupleToUnion](_types_tuples_.md#tupletounion)‹F››*
