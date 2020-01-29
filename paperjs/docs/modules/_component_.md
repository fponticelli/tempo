---
id: "_component_"
title: "component"
sidebar_label: "component"
---

## Index

### Classes

* [PaperComponentTemplate](../classes/_component_.papercomponenttemplate.md)

### Functions

* [component](_component_.md#const-component)

## Functions

### `Const` component

▸ **component**<**State**, **Action**, **Query**>(`attributes`: object, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]): *[PaperComponentTemplate](../classes/_component_.papercomponenttemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/component.ts:75](https://github.com/fponticelli/tempo/blob/master/paperjs/src/component.ts#L75)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **attributes**: *object*

Name | Type |
------ | ------ |
`delayed?` | undefined &#124; false &#124; true |
`store` | Store‹State, Action› |

▪... **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]*

**Returns:** *[PaperComponentTemplate](../classes/_component_.papercomponenttemplate.md)‹State, Action, Query›*
