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

▸ **iterate**<**OuterState**, **InnerState**, **Action**, **Query**>(`options`: object, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹[InnerState[number], OuterState, number], Action, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, Action, Query›*

*Defined in [paperjs/src/iterate.ts:18](https://github.com/fponticelli/tempo/blob/master/paperjs/src/iterate.ts#L18)*

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

▪... **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹[InnerState[number], OuterState, number], Action, Query›[]*

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, Action, Query›*

___

### `Const` iterateItems

▸ **iterateItems**<**OuterState**, **InnerState**, **Action**, **Query**>(`options`: object, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹InnerState[number], Action, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, Action, Query›*

*Defined in [paperjs/src/iterate.ts:52](https://github.com/fponticelli/tempo/blob/master/paperjs/src/iterate.ts#L52)*

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

▪... **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹InnerState[number], Action, Query›[]*

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, Action, Query›*
