---
id: "_when_"
title: "when"
sidebar_label: "when"
---

## Index

### Classes

* [PaperWhenTemplate](../classes/_when_.paperwhentemplate.md)

### Interfaces

* [WhenOptions](../interfaces/_when_.whenoptions.md)

### Functions

* [unless](_when_.md#const-unless)
* [when](_when_.md#const-when)

## Functions

### `Const` unless

▸ **unless**<**State**, **Action**, **Query**>(`options`: [WhenOptions](../interfaces/_when_.whenoptions.md)‹State›, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/when.ts:73](https://github.com/fponticelli/tempo/blob/master/paperjs/src/when.ts#L73)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WhenOptions](../interfaces/_when_.whenoptions.md)‹State› |
`...children` | [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[] |

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

___

### `Const` when

▸ **when**<**State**, **Action**, **Query**>(`options`: [WhenOptions](../interfaces/_when_.whenoptions.md)‹State›, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/when.ts:67](https://github.com/fponticelli/tempo/blob/master/paperjs/src/when.ts#L67)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WhenOptions](../interfaces/_when_.whenoptions.md)‹State› |
`...children` | [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[] |

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*
