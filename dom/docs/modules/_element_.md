---
id: "_element_"
title: "element"
sidebar_label: "element"
---

## Index

### Classes

* [DOMElement](../classes/_element_.domelement.md)

### Functions

* [el](_element_.md#const-el)
* [el2](_element_.md#const-el2)
* [elNS](_element_.md#const-elns)
* [elNS2](_element_.md#const-elns2)

### Object literals

* [defaultNamespaces](_element_.md#const-defaultnamespaces)

## Functions

### `Const` el

▸ **el**<**State**, **Action**, **Query**, **El**, **T**>(`name`: string, `attributes`: [DOMAttributes](../interfaces/_value_.domattributes.md)‹State, Action, Query, El, T›, ...`children`: [DOMChild](_template_.md#domchild)‹State, Action, Query›[]): *[DOMElement](../classes/_element_.domelement.md)‹State, Action, Query, El, T›*

*Defined in [dom/src/element.ts:162](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L162)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

▪ **El**: *Element*

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`attributes` | [DOMAttributes](../interfaces/_value_.domattributes.md)‹State, Action, Query, El, T› |
`...children` | [DOMChild](_template_.md#domchild)‹State, Action, Query›[] |

**Returns:** *[DOMElement](../classes/_element_.domelement.md)‹State, Action, Query, El, T›*

___

### `Const` el2

▸ **el2**<**El**>(`name`: string): *(Anonymous function)*

*Defined in [dom/src/element.ts:181](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L181)*

**Type parameters:**

▪ **El**: *Element*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *(Anonymous function)*

___

### `Const` elNS

▸ **elNS**<**State**, **Action**, **Query**, **El**, **T**>(`ns`: string, `name`: string, `attributes`: [DOMAttributes](../interfaces/_value_.domattributes.md)‹State, Action, Query, El, T›, ...`children`: [DOMChild](_template_.md#domchild)‹State, Action, Query›[]): *[DOMElement](../classes/_element_.domelement.md)‹State, Action, Query, El, T›*

*Defined in [dom/src/element.ts:205](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L205)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

▪ **El**: *Element*

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`ns` | string |
`name` | string |
`attributes` | [DOMAttributes](../interfaces/_value_.domattributes.md)‹State, Action, Query, El, T› |
`...children` | [DOMChild](_template_.md#domchild)‹State, Action, Query›[] |

**Returns:** *[DOMElement](../classes/_element_.domelement.md)‹State, Action, Query, El, T›*

___

### `Const` elNS2

▸ **elNS2**<**El**>(`namespace`: string, `name`: string): *(Anonymous function)*

*Defined in [dom/src/element.ts:226](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L226)*

**Type parameters:**

▪ **El**: *Element*

**Parameters:**

Name | Type |
------ | ------ |
`namespace` | string |
`name` | string |

**Returns:** *(Anonymous function)*

## Object literals

### `Const` defaultNamespaces

### ▪ **defaultNamespaces**: *object*

*Defined in [dom/src/element.ts:198](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L198)*

###  svg

• **svg**: *string* = "http://www.w3.org/2000/svg"

*Defined in [dom/src/element.ts:199](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L199)*
