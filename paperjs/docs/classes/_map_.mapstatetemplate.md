---
id: "_map_.mapstatetemplate"
title: "MapStateTemplate"
sidebar_label: "MapStateTemplate"
---

## Type parameters

▪ **OuterState**

▪ **InnerState**

▪ **Action**

▪ **Query**

## Hierarchy

* **MapStateTemplate**

## Implements

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, Action, Query›

## Index

### Constructors

* [constructor](_map_.mapstatetemplate.md#constructor)

### Properties

* [children](_map_.mapstatetemplate.md#children)
* [map](_map_.mapstatetemplate.md#map)

### Methods

* [render](_map_.mapstatetemplate.md#render)

## Constructors

###  constructor

\+ **new MapStateTemplate**(`map`: function, `children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹InnerState, Action, Query›[]): *[MapStateTemplate](_map_.mapstatetemplate.md)*

*Defined in [paperjs/src/map.ts:20](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L20)*

**Parameters:**

▪ **map**: *function*

▸ (`value`: OuterState): *InnerState*

**Parameters:**

Name | Type |
------ | ------ |
`value` | OuterState |

▪ **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹InnerState, Action, Query›[]*

**Returns:** *[MapStateTemplate](_map_.mapstatetemplate.md)*

## Properties

###  children

• **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹InnerState, Action, Query›[]*

*Defined in [paperjs/src/map.ts:23](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L23)*

___

###  map

• **map**: *function*

*Defined in [paperjs/src/map.ts:22](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L22)*

#### Type declaration:

▸ (`value`: OuterState): *InnerState*

**Parameters:**

Name | Type |
------ | ------ |
`value` | OuterState |

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: OuterState): *View‹OuterState, Query›*

*Defined in [paperjs/src/map.ts:26](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | OuterState |

**Returns:** *View‹OuterState, Query›*
