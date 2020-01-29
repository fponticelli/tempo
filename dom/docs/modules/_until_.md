---
id: "_until_"
title: "until"
sidebar_label: "until"
---

## Index

### Classes

* [DOMUntilTemplate](../classes/_until_.domuntiltemplate.md)

### Functions

* [until](_until_.md#const-until)

## Functions

### `Const` until

▸ **until**<**OuterState**, **InnerState**, **Action**, **Query**>(`options`: object, ...`children`: [DOMChild](_template_.md#domchild)‹InnerState, Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›*

*Defined in [dom/src/until.ts:78](https://github.com/fponticelli/tempo/blob/master/dom/src/until.ts#L78)*

**Type parameters:**

▪ **OuterState**

▪ **InnerState**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`refId?` | undefined &#124; string |
`repeatUntil` | function |

▪... **children**: *[DOMChild](_template_.md#domchild)‹InnerState, Action, Query›[]*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›*
