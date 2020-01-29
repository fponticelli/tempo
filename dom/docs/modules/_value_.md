---
id: "_value_"
title: "value"
sidebar_label: "value"
---

## Index

### Interfaces

* [DOMAttributes](../interfaces/_value_.domattributes.md)

### Type aliases

* [AttributeValue](_value_.md#attributevalue)
* [DOMAttribute](_value_.md#domattribute)
* [DOMEventHandler](_value_.md#domeventhandler)
* [DOMStyleAttribute](_value_.md#domstyleattribute)
* [DOMTextValue](_value_.md#domtextvalue)

### Functions

* [attributeToHandler](_value_.md#const-attributetohandler)
* [mapAttribute](_value_.md#const-mapattribute)
* [resolveAttribute](_value_.md#const-resolveattribute)

## Type aliases

###  AttributeValue

Ƭ **AttributeValue**: *string | number | boolean | string[]*

*Defined in [dom/src/value.ts:23](https://github.com/fponticelli/tempo/blob/master/dom/src/value.ts#L23)*

___

###  DOMAttribute

Ƭ **DOMAttribute**: *UnwrappedValue‹State, Value | undefined› | undefined*

*Defined in [dom/src/value.ts:17](https://github.com/fponticelli/tempo/blob/master/dom/src/value.ts#L17)*

___

###  DOMEventHandler

Ƭ **DOMEventHandler**: *function*

*Defined in [dom/src/value.ts:19](https://github.com/fponticelli/tempo/blob/master/dom/src/value.ts#L19)*

#### Type declaration:

▸ (`state`: S, `event`: Ev, `element`: El): *Action | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`state` | S |
`event` | Ev |
`element` | El |

___

###  DOMStyleAttribute

Ƭ **DOMStyleAttribute**: *UnwrappedValue‹State, Value | undefined›*

*Defined in [dom/src/value.ts:21](https://github.com/fponticelli/tempo/blob/master/dom/src/value.ts#L21)*

___

###  DOMTextValue

Ƭ **DOMTextValue**: *[DOMAttribute](_value_.md#domattribute)‹S, string›*

*Defined in [dom/src/value.ts:18](https://github.com/fponticelli/tempo/blob/master/dom/src/value.ts#L18)*

## Functions

### `Const` attributeToHandler

▸ **attributeToHandler**<**State**, **Value**, **Action**, **Ev**, **El**>(`attr`: [DOMAttribute](_value_.md#domattribute)‹State, Value›, `handler`: [DOMEventHandler](_value_.md#domeventhandler)‹Value, Action, Ev, El›): *[DOMEventHandler](_value_.md#domeventhandler)‹State, Action, Ev, El›*

*Defined in [dom/src/value.ts:52](https://github.com/fponticelli/tempo/blob/master/dom/src/value.ts#L52)*

**Type parameters:**

▪ **State**

▪ **Value**

▪ **Action**

▪ **Ev**: *Event*

▪ **El**: *Element*

**Parameters:**

Name | Type |
------ | ------ |
`attr` | [DOMAttribute](_value_.md#domattribute)‹State, Value› |
`handler` | [DOMEventHandler](_value_.md#domeventhandler)‹Value, Action, Ev, El› |

**Returns:** *[DOMEventHandler](_value_.md#domeventhandler)‹State, Action, Ev, El›*

___

### `Const` mapAttribute

▸ **mapAttribute**<**State**, **A**, **B**>(`attr`: [DOMAttribute](_value_.md#domattribute)‹State, A›, `map`: function): *[DOMAttribute](_value_.md#domattribute)‹State, B›*

*Defined in [dom/src/value.ts:36](https://github.com/fponticelli/tempo/blob/master/dom/src/value.ts#L36)*

**Type parameters:**

▪ **State**

▪ **A**

▪ **B**

**Parameters:**

▪ **attr**: *[DOMAttribute](_value_.md#domattribute)‹State, A›*

▪ **map**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *[DOMAttribute](_value_.md#domattribute)‹State, B›*

___

### `Const` resolveAttribute

▸ **resolveAttribute**<**State**, **Value**>(`attr`: [DOMAttribute](_value_.md#domattribute)‹State, Value›): *function*

*Defined in [dom/src/value.ts:73](https://github.com/fponticelli/tempo/blob/master/dom/src/value.ts#L73)*

**Type parameters:**

▪ **State**

▪ **Value**

**Parameters:**

Name | Type |
------ | ------ |
`attr` | [DOMAttribute](_value_.md#domattribute)‹State, Value› |

**Returns:** *function*

▸ (`state`: State): *Value | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |
