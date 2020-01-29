---
id: "_iterate_"
title: "iterate"
sidebar_label: "iterate"
---

## Index

### Functions

* [iterate](_iterate_.md#const-iterate)
* [iterateItems](_iterate_.md#const-iterateitems)

## Functions

### `Const` iterate

▸ **iterate**<**OuterState**, **InnerState**, **Action**, **Query**>(`options`: object, ...`children`: [DOMChild](_template_.md#domchild)‹[InnerState[number], OuterState, number], Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›*

*Defined in [dom/src/iterate.ts:18](https://github.com/fponticelli/tempo/blob/master/dom/src/iterate.ts#L18)*

**Type parameters:**

▪ **OuterState**

▪ **InnerState**: *any[]*

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`getArray` | function |
`refId?` | undefined &#124; string |

▪... **children**: *[DOMChild](_template_.md#domchild)‹[InnerState[number], OuterState, number], Action, Query›[]*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›*

___

### `Const` iterateItems

▸ **iterateItems**<**OuterState**, **InnerState**, **Action**, **Query**>(`options`: object, ...`children`: [DOMChild](_template_.md#domchild)‹InnerState[number], Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›*

*Defined in [dom/src/iterate.ts:43](https://github.com/fponticelli/tempo/blob/master/dom/src/iterate.ts#L43)*

**Type parameters:**

▪ **OuterState**

▪ **InnerState**: *any[]*

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`getArray` | function |
`refId?` | undefined &#124; string |

▪... **children**: *[DOMChild](_template_.md#domchild)‹InnerState[number], Action, Query›[]*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›*
