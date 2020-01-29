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

▸ **mapAction**<**State**, **OuterAction**, **InnerAction**, **Query**>(`options`: object, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, InnerAction, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, OuterAction, Query›*

*Defined in [paperjs/src/map.ts:94](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L94)*

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

▪... **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, InnerAction, Query›[]*

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, OuterAction, Query›*

___

### `Const` mapQuery

▸ **mapQuery**<**State**, **Action**, **OuterQuery**, **InnerQuery**>(`options`: object, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, InnerQuery›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, OuterQuery›*

*Defined in [paperjs/src/map.ts:130](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L130)*

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

▪... **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, InnerQuery›[]*

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, OuterQuery›*

___

### `Const` mapQueryConditional

▸ **mapQueryConditional**<**State**, **Action**, **OuterQuery**, **InnerQuery**>(`options`: object, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, InnerQuery›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, OuterQuery›*

*Defined in [paperjs/src/map.ts:139](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L139)*

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

▪... **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, InnerQuery›[]*

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, OuterQuery›*

___

### `Const` mapState

▸ **mapState**<**OuterState**, **InnerState**, **Action**, **Query**>(`options`: object, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹InnerState, Action, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, Action, Query›*

*Defined in [paperjs/src/map.ts:49](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L49)*

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

▪... **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹InnerState, Action, Query›[]*

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, Action, Query›*

___

### `Const` mapStateAndKeep

▸ **mapStateAndKeep**<**OuterState**, **InnerState**, **Action**, **Query**>(`options`: object, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹[InnerState, OuterState], Action, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, Action, Query›*

*Defined in [paperjs/src/map.ts:55](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L55)*

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

▪... **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹[InnerState, OuterState], Action, Query›[]*

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, Action, Query›*
