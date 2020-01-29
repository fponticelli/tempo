---
id: "_adapter_"
title: "adapter"
sidebar_label: "adapter"
---

## Index

### Classes

* [PaperAdapterTemplate](../classes/_adapter_.paperadaptertemplate.md)

### Interfaces

* [PropagateArg](../interfaces/_adapter_.propagatearg.md)

### Functions

* [adapter](_adapter_.md#const-adapter)

## Functions

### `Const` adapter

▸ **adapter**<**OuterState**, **InnerState**, **OuterAction**, **InnerAction**, **Query**>(`options`: object, `child`: [PaperComponentTemplate](../classes/_component_.papercomponenttemplate.md)‹InnerState, InnerAction, Query›): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, OuterAction, Query›*

*Defined in [paperjs/src/adapter.ts:95](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L95)*

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

▪ **child**: *[PaperComponentTemplate](../classes/_component_.papercomponenttemplate.md)‹InnerState, InnerAction, Query›*

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, OuterAction, Query›*
