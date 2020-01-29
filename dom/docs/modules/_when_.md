---
id: "_when_"
title: "when"
sidebar_label: "when"
---

## Index

### Classes

* [DOMWhenTemplate](../classes/_when_.domwhentemplate.md)

### Interfaces

* [WhenOptions](../interfaces/_when_.whenoptions.md)

### Functions

* [unless](_when_.md#const-unless)
* [when](_when_.md#const-when)

## Functions

### `Const` unless

▸ **unless**<**State**, **Action**, **Query**>(`options`: [WhenOptions](../interfaces/_when_.whenoptions.md)‹State›, ...`children`: [DOMChild](_template_.md#domchild)‹State, Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/when.ts:69](https://github.com/fponticelli/tempo/blob/master/dom/src/when.ts#L69)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WhenOptions](../interfaces/_when_.whenoptions.md)‹State› |
`...children` | [DOMChild](_template_.md#domchild)‹State, Action, Query›[] |

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

___

### `Const` when

▸ **when**<**State**, **Action**, **Query**>(`options`: [WhenOptions](../interfaces/_when_.whenoptions.md)‹State›, ...`children`: [DOMChild](_template_.md#domchild)‹State, Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/when.ts:65](https://github.com/fponticelli/tempo/blob/master/dom/src/when.ts#L65)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WhenOptions](../interfaces/_when_.whenoptions.md)‹State› |
`...children` | [DOMChild](_template_.md#domchild)‹State, Action, Query›[] |

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*
