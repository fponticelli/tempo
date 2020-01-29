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

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, OuterQuery›

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

\+ **new MapQueryTemplate**(`map`: function, `children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, InnerQuery›[]): *[MapQueryTemplate](_map_.mapquerytemplate.md)*

*Defined in [paperjs/src/map.ts:104](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L104)*

**Parameters:**

▪ **map**: *function*

▸ (`value`: OuterQuery): *InnerQuery | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | OuterQuery |

▪ **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, InnerQuery›[]*

**Returns:** *[MapQueryTemplate](_map_.mapquerytemplate.md)*

## Properties

###  children

• **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, InnerQuery›[]*

*Defined in [paperjs/src/map.ts:107](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L107)*

___

###  map

• **map**: *function*

*Defined in [paperjs/src/map.ts:106](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L106)*

#### Type declaration:

▸ (`value`: OuterQuery): *InnerQuery | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | OuterQuery |

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: State): *View‹State, OuterQuery›*

*Defined in [paperjs/src/map.ts:110](https://github.com/fponticelli/tempo/blob/master/paperjs/src/map.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, OuterQuery›*
