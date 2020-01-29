---
id: "_map_"
title: "map"
sidebar_label: "map"
---

## Index

### Classes

* [MapActionTemplate](../classes/_map_.mapactiontemplate.md)
* [MapQueryTemplate](../classes/_map_.mapquerytemplate.md)
* [MapStateTemplate](../classes/_map_.mapstatetemplate.md)

### Functions

* [mapAction](_map_.md#const-mapaction)
* [mapQuery](_map_.md#const-mapquery)
* [mapQueryConditional](_map_.md#const-mapqueryconditional)
* [mapState](_map_.md#const-mapstate)
* [mapStateAndKeep](_map_.md#const-mapstateandkeep)

## Functions

### `Const` mapAction

▸ **mapAction**<**State**, **OuterAction**, **InnerAction**, **Query**>(`options`: object, ...`children`: [DOMChild](_template_.md#domchild)‹State, InnerAction, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, OuterAction, Query›*

*Defined in [dom/src/map.ts:83](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L83)*

**Type parameters:**

▪ **State**

▪ **OuterAction**

▪ **InnerAction**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`map` | function |

▪... **children**: *[DOMChild](_template_.md#domchild)‹State, InnerAction, Query›[]*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, OuterAction, Query›*

___

### `Const` mapQuery

▸ **mapQuery**<**State**, **Action**, **OuterQuery**, **InnerQuery**>(`options`: object, ...`children`: [DOMChild](_template_.md#domchild)‹State, Action, InnerQuery›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, OuterQuery›*

*Defined in [dom/src/map.ts:115](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L115)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **OuterQuery**

▪ **InnerQuery**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`map` | function |

▪... **children**: *[DOMChild](_template_.md#domchild)‹State, Action, InnerQuery›[]*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, OuterQuery›*

___

### `Const` mapQueryConditional

▸ **mapQueryConditional**<**State**, **Action**, **OuterQuery**, **InnerQuery**>(`options`: object, ...`children`: [DOMChild](_template_.md#domchild)‹State, Action, InnerQuery›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, OuterQuery›*

*Defined in [dom/src/map.ts:121](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L121)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **OuterQuery**

▪ **InnerQuery**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`map` | function |

▪... **children**: *[DOMChild](_template_.md#domchild)‹State, Action, InnerQuery›[]*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, OuterQuery›*

___

### `Const` mapState

▸ **mapState**<**OuterState**, **InnerState**, **Action**, **Query**>(`options`: object, ...`children`: [DOMChild](_template_.md#domchild)‹InnerState, Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›*

*Defined in [dom/src/map.ts:46](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L46)*

**Type parameters:**

▪ **OuterState**

▪ **InnerState**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`map` | function |

▪... **children**: *[DOMChild](_template_.md#domchild)‹InnerState, Action, Query›[]*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›*

___

### `Const` mapStateAndKeep

▸ **mapStateAndKeep**<**OuterState**, **InnerState**, **Action**, **Query**>(`options`: object, ...`children`: [DOMChild](_template_.md#domchild)‹[InnerState, OuterState], Action, Query›[]): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›*

*Defined in [dom/src/map.ts:51](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L51)*

**Type parameters:**

▪ **OuterState**

▪ **InnerState**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`map` | function |

▪... **children**: *[DOMChild](_template_.md#domchild)‹[InnerState, OuterState], Action, Query›[]*

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›*
