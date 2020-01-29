---
id: "_component_"
title: "component"
sidebar_label: "component"
---

## Index

### Classes

* [DOMComponentTemplate](../classes/_component_.domcomponenttemplate.md)

### Functions

* [component](_component_.md#const-component)

## Functions

### `Const` component

▸ **component**<**State**, **Action**, **Query**>(`attributes`: object, ...`children`: [DOMChild](_template_.md#domchild)‹State, Action, Query›[]): *[DOMComponentTemplate](../classes/_component_.domcomponenttemplate.md)‹State, Action, Query›*

*Defined in [dom/src/component.ts:72](https://github.com/fponticelli/tempo/blob/master/dom/src/component.ts#L72)*

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

▪... **children**: *[DOMChild](_template_.md#domchild)‹State, Action, Query›[]*

**Returns:** *[DOMComponentTemplate](../classes/_component_.domcomponenttemplate.md)‹State, Action, Query›*
