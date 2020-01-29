---
id: "_value_"
title: "value"
sidebar_label: "value"
---

## Index

### Type aliases

* [PaperAttribute](_value_.md#paperattribute)
* [PaperEventHandler](_value_.md#papereventhandler)

### Functions

* [resolveAttribute](_value_.md#const-resolveattribute)

## Type aliases

###  PaperAttribute

Ƭ **PaperAttribute**: *UnwrappedValue‹State, Value | undefined› | undefined*

*Defined in [paperjs/src/value.ts:17](https://github.com/fponticelli/tempo/blob/master/paperjs/src/value.ts#L17)*

___

###  PaperEventHandler

Ƭ **PaperEventHandler**: *function*

*Defined in [paperjs/src/value.ts:21](https://github.com/fponticelli/tempo/blob/master/paperjs/src/value.ts#L21)*

#### Type declaration:

▸ (`state`: State, `event`: Event, `target`: Target, `project`: Project): *Action | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |
`event` | Event |
`target` | Target |
`project` | Project |

## Functions

### `Const` resolveAttribute

▸ **resolveAttribute**<**State**, **Value**>(`attr`: [PaperAttribute](_value_.md#paperattribute)‹State, Value›): *function*

*Defined in [paperjs/src/value.ts:28](https://github.com/fponticelli/tempo/blob/master/paperjs/src/value.ts#L28)*

**Type parameters:**

▪ **State**

▪ **Value**

**Parameters:**

Name | Type |
------ | ------ |
`attr` | [PaperAttribute](_value_.md#paperattribute)‹State, Value› |

**Returns:** *function*

▸ (`state`: State): *Value | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |
