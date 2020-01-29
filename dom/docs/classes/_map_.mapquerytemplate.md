---
id: "_map_.mapquerytemplate"
title: "MapQueryTemplate"
sidebar_label: "MapQueryTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **OuterQuery**

▪ **InnerQuery**

## Hierarchy

* **MapQueryTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, OuterQuery›

## Index

### Constructors

* [constructor](_map_.mapquerytemplate.md#constructor)

### Properties

* [children](_map_.mapquerytemplate.md#children)
* [map](_map_.mapquerytemplate.md#map)

### Methods

* [render](_map_.mapquerytemplate.md#render)

## Constructors

###  constructor

\+ **new MapQueryTemplate**(`map`: function, `children`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, InnerQuery›[]): *[MapQueryTemplate](_map_.mapquerytemplate.md)*

*Defined in [dom/src/map.ts:89](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L89)*

**Parameters:**

▪ **map**: *function*

▸ (`value`: OuterQuery): *InnerQuery | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | OuterQuery |

▪ **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, InnerQuery›[]*

**Returns:** *[MapQueryTemplate](_map_.mapquerytemplate.md)*

## Properties

###  children

• **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, InnerQuery›[]*

*Defined in [dom/src/map.ts:92](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L92)*

___

###  map

• **map**: *function*

*Defined in [dom/src/map.ts:91](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L91)*

#### Type declaration:

▸ (`value`: OuterQuery): *InnerQuery | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | OuterQuery |

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *View‹State, OuterQuery›*

*Defined in [dom/src/map.ts:95](https://github.com/fponticelli/tempo/blob/master/dom/src/map.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, OuterQuery›*
