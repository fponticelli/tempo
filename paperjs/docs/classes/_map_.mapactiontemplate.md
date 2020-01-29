---
id: "_map_.mapactiontemplate"
title: "MapActionTemplate"
sidebar_label: "MapActionTemplate"
---

## Type parameters

▪ **State**

▪ **OuterAction**

▪ **InnerAction**

▪ **Query**

## Hierarchy

* **MapActionTemplate**

## Implements

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, OuterAction, Query›

## Index

### Constructors

* [constructor](_map_.mapactiontemplate.md#constructor)

### Properties

* [children](_map_.mapactiontemplate.md#children)
* [map](_map_.mapactiontemplate.md#map)

### Methods

* [render](_map_.mapactiontemplate.md#render)

## Constructors

###  constructor

\+ **new MapActionTemplate**(`map`: function, `children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, InnerAction, Query›[]): *[MapActionTemplate](_map_.mapactiontemplate.md)*

*Defined in [paperjs/src/map.ts:70](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L70)*

**Parameters:**

▪ **map**: *function*

▸ (`value`: InnerAction): *OuterAction | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | InnerAction |

▪ **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, InnerAction, Query›[]*

**Returns:** *[MapActionTemplate](_map_.mapactiontemplate.md)*

## Properties

###  children

• **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, InnerAction, Query›[]*

*Defined in [paperjs/src/map.ts:73](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L73)*

___

###  map

• **map**: *function*

*Defined in [paperjs/src/map.ts:72](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L72)*

#### Type declaration:

▸ (`value`: InnerAction): *OuterAction | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | InnerAction |

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹OuterAction›, `state`: State): *View‹State, Query›*

*Defined in [paperjs/src/map.ts:76](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹OuterAction› |
`state` | State |

**Returns:** *View‹State, Query›*
