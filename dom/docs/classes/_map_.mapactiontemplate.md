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

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, OuterAction, Query›

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

\+ **new MapActionTemplate**(`map`: function, `children`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, InnerAction, Query›[]): *[MapActionTemplate](_map_.mapactiontemplate.md)*

*Defined in [dom/src/map.ts:59](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L59)*

**Parameters:**

▪ **map**: *function*

▸ (`value`: InnerAction): *OuterAction | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | InnerAction |

▪ **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, InnerAction, Query›[]*

**Returns:** *[MapActionTemplate](_map_.mapactiontemplate.md)*

## Properties

###  children

• **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, InnerAction, Query›[]*

*Defined in [dom/src/map.ts:62](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L62)*

___

###  map

• **map**: *function*

*Defined in [dom/src/map.ts:61](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L61)*

#### Type declaration:

▸ (`value`: InnerAction): *OuterAction | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | InnerAction |

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹OuterAction›, `state`: State): *View‹State, Query›*

*Defined in [dom/src/map.ts:65](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹OuterAction› |
`state` | State |

**Returns:** *View‹State, Query›*
