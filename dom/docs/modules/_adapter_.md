---
id: "_adapter_"
title: "adapter"
sidebar_label: "adapter"
---

## Index

### Classes

* [DOMAdapterTemplate](../classes/_adapter_.domadaptertemplate.md)

### Interfaces

* [PropagateArg](../interfaces/_adapter_.propagatearg.md)

### Functions

* [adapter](_adapter_.md#const-adapter)

## Functions

### `Const` adapter

▸ **adapter**<**OuterState**, **InnerState**, **OuterAction**, **InnerAction**, **Query**>(`options`: object, `child`: [DOMComponentTemplate](../classes/_component_.domcomponenttemplate.md)‹InnerState, InnerAction, Query›): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, OuterAction, Query›*

*Defined in [dom/src/adapter.ts:71](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L71)*

**Type parameters:**

▪ **OuterState**

▪ **InnerState**

▪ **OuterAction**

▪ **InnerAction**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`mergeStates?` | undefined &#124; function |
`propagate?` | undefined &#124; function |

▪ **child**: *[DOMComponentTemplate](../classes/_component_.domcomponenttemplate.md)‹InnerState, InnerAction, Query›*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, OuterAction, Query›*
