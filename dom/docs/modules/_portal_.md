---
id: "_portal_"
title: "portal"
sidebar_label: "portal"
---

## Index

### Classes

* [DOMPortalTemplate](../classes/_portal_.domportaltemplate.md)

### Functions

* [bodyPortal](_portal_.md#const-bodyportal)
* [headPortal](_portal_.md#const-headportal)
* [portal](_portal_.md#const-portal)
* [portalWithSelector](_portal_.md#const-portalwithselector)

## Functions

### `Const` bodyPortal

▸ **bodyPortal**<**State**, **Action**, **Query**>(...`children`: [DOMChild](_template_.md#domchild)‹State, Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/portal.ts:85](https://github.com/fponticelli/tempo/blob/master/dom/src/portal.ts#L85)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`...children` | [DOMChild](_template_.md#domchild)‹State, Action, Query›[] |

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

___

### `Const` headPortal

▸ **headPortal**<**State**, **Action**, **Query**>(...`children`: [DOMChild](_template_.md#domchild)‹State, Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/portal.ts:77](https://github.com/fponticelli/tempo/blob/master/dom/src/portal.ts#L77)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`...children` | [DOMChild](_template_.md#domchild)‹State, Action, Query›[] |

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

___

### `Const` portal

▸ **portal**<**State**, **Action**, **Query**>(`options`: object, ...`children`: [DOMChild](_template_.md#domchild)‹State, Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/portal.ts:45](https://github.com/fponticelli/tempo/blob/master/dom/src/portal.ts#L45)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`append` | function |
`getParent` | function |

▪... **children**: *[DOMChild](_template_.md#domchild)‹State, Action, Query›[]*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

___

### `Const` portalWithSelector

▸ **portalWithSelector**<**State**, **Action**, **Query**>(`options`: object, ...`children`: [DOMChild](_template_.md#domchild)‹State, Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/portal.ts:54](https://github.com/fponticelli/tempo/blob/master/dom/src/portal.ts#L54)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`selector` | string |

▪... **children**: *[DOMChild](_template_.md#domchild)‹State, Action, Query›[]*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*
