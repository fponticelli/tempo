---
id: "_utils_dom_"
title: "utils/dom"
sidebar_label: "utils/dom"
---

## Index

### Type aliases

* [Acc](_utils_dom_.md#acc)

### Functions

* [containerSize](_utils_dom_.md#const-containersize)
* [domChildToTemplate](_utils_dom_.md#domchildtotemplate)
* [insertFBefore](_utils_dom_.md#insertfbefore)
* [processAttribute](_utils_dom_.md#processattribute)
* [processEvent](_utils_dom_.md#processevent)
* [processStyle](_utils_dom_.md#processstyle)
* [removeNode](_utils_dom_.md#removenode)

## Type aliases

###  Acc

Ƭ **Acc**: *function[]*

*Defined in [dom/src/utils/dom.ts:52](https://github.com/fponticelli/tempo/blob/master/dom/src/utils/dom.ts#L52)*

## Functions

### `Const` containerSize

▸ **containerSize**(`el`: HTMLElement): *object*

*Defined in [dom/src/utils/dom.ts:139](https://github.com/fponticelli/tempo/blob/master/dom/src/utils/dom.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLElement |

**Returns:** *object*

* **height**: *number* = el.offsetHeight

* **width**: *number* = el.offsetWidth

___

###  domChildToTemplate

▸ **domChildToTemplate**<**State**, **Action**, **Query**>(`dom`: [DOMChild](_template_.md#domchild)‹State, Action, Query›): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/utils/dom.ts:40](https://github.com/fponticelli/tempo/blob/master/dom/src/utils/dom.ts#L40)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`dom` | [DOMChild](_template_.md#domchild)‹State, Action, Query› |

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

___

###  insertFBefore

▸ **insertFBefore**(`ref`: Node): *(Anonymous function)*

*Defined in [dom/src/utils/dom.ts:32](https://github.com/fponticelli/tempo/blob/master/dom/src/utils/dom.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | Node |

**Returns:** *(Anonymous function)*

___

###  processAttribute

▸ **processAttribute**<**State**, **Value**>(`el`: Element, `name`: string, `value`: [DOMAttribute](_value_.md#domattribute)‹State, Value›, `acc`: [Acc](_utils_dom_.md#acc)‹State›): *[Acc](_utils_dom_.md#acc)‹State›*

*Defined in [dom/src/utils/dom.ts:54](https://github.com/fponticelli/tempo/blob/master/dom/src/utils/dom.ts#L54)*

**Type parameters:**

▪ **State**

▪ **Value**

**Parameters:**

Name | Type |
------ | ------ |
`el` | Element |
`name` | string |
`value` | [DOMAttribute](_value_.md#domattribute)‹State, Value› |
`acc` | [Acc](_utils_dom_.md#acc)‹State› |

**Returns:** *[Acc](_utils_dom_.md#acc)‹State›*

___

###  processEvent

▸ **processEvent**<**State**, **El**, **Ev**, **Action**>(`el`: El, `name`: string, `value`: [DOMEventHandler](_value_.md#domeventhandler)‹State, Action, Ev, El›, `dispatch`: function, `acc`: [Acc](_utils_dom_.md#acc)‹State›): *[Acc](_utils_dom_.md#acc)‹State›*

*Defined in [dom/src/utils/dom.ts:89](https://github.com/fponticelli/tempo/blob/master/dom/src/utils/dom.ts#L89)*

**Type parameters:**

▪ **State**

▪ **El**: *Element*

▪ **Ev**: *Event*

▪ **Action**

**Parameters:**

▪ **el**: *El*

▪ **name**: *string*

▪ **value**: *[DOMEventHandler](_value_.md#domeventhandler)‹State, Action, Ev, El›*

▪ **dispatch**: *function*

▸ (`action`: Action): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | Action |

▪ **acc**: *[Acc](_utils_dom_.md#acc)‹State›*

**Returns:** *[Acc](_utils_dom_.md#acc)‹State›*

___

###  processStyle

▸ **processStyle**<**State**, **Value**>(`el`: Element, `name`: string, `value`: [DOMStyleAttribute](_value_.md#domstyleattribute)‹State, Value›, `acc`: [Acc](_utils_dom_.md#acc)‹State›): *[Acc](_utils_dom_.md#acc)‹State›*

*Defined in [dom/src/utils/dom.ts:117](https://github.com/fponticelli/tempo/blob/master/dom/src/utils/dom.ts#L117)*

**Type parameters:**

▪ **State**

▪ **Value**

**Parameters:**

Name | Type |
------ | ------ |
`el` | Element |
`name` | string |
`value` | [DOMStyleAttribute](_value_.md#domstyleattribute)‹State, Value› |
`acc` | [Acc](_utils_dom_.md#acc)‹State› |

**Returns:** *[Acc](_utils_dom_.md#acc)‹State›*

___

###  removeNode

▸ **removeNode**(`node`: Node): *void*

*Defined in [dom/src/utils/dom.ts:21](https://github.com/fponticelli/tempo/blob/master/dom/src/utils/dom.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Node |

**Returns:** *void*
