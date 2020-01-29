---
id: "_reducer_"
title: "reducer"
sidebar_label: "reducer"
---

## Index

### Type aliases

* [Reducer](_reducer_.md#reducer)

### Functions

* [compose](_reducer_.md#const-compose)
* [matchReduce](_reducer_.md#const-matchreduce)
* [reduceOnKind](_reducer_.md#const-reduceonkind)

## Type aliases

###  Reducer

Ƭ **Reducer**: *function*

*Defined in [reducer.ts:14](https://github.com/fponticelli/tempo/blob/master/store/src/reducer.ts#L14)*

#### Type declaration:

▸ (`state`: State, `action`: Action): *State*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |
`action` | Action |

## Functions

### `Const` compose

▸ **compose**<**State**, **Action**>(`reducer`: [Reducer](_reducer_.md#reducer)‹State, Action›, ...`others`: [Reducer](_reducer_.md#reducer)‹State, Action›[]): *(Anonymous function)*

*Defined in [reducer.ts:16](https://github.com/fponticelli/tempo/blob/master/store/src/reducer.ts#L16)*

**Type parameters:**

▪ **State**

▪ **Action**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](_reducer_.md#reducer)‹State, Action› |
`...others` | [Reducer](_reducer_.md#reducer)‹State, Action›[] |

**Returns:** *(Anonymous function)*

___

### `Const` matchReduce

▸ **matchReduce**<**Field**, **State**, **Action**>(`field`: Field, `matches`: object): *[Reducer](_reducer_.md#reducer)‹State, Action›*

*Defined in [reducer.ts:23](https://github.com/fponticelli/tempo/blob/master/store/src/reducer.ts#L23)*

**Type parameters:**

▪ **Field**: *string | number | symbol*

▪ **State**

▪ **Action**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`field` | Field |
`matches` | object |

**Returns:** *[Reducer](_reducer_.md#reducer)‹State, Action›*

___

### `Const` reduceOnKind

▸ **reduceOnKind**<**State**, **Action**>(`matches`: object): *[Reducer](_reducer_.md#reducer)‹State, Action›*

*Defined in [reducer.ts:42](https://github.com/fponticelli/tempo/blob/master/store/src/reducer.ts#L42)*

**Type parameters:**

▪ **State**

▪ **Action**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`matches` | object |

**Returns:** *[Reducer](_reducer_.md#reducer)‹State, Action›*
