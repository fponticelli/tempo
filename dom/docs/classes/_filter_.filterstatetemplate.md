---
id: "_filter_.filterstatetemplate"
title: "FilterStateTemplate"
sidebar_label: "FilterStateTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **FilterStateTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_filter_.filterstatetemplate.md#constructor)

### Properties

* [children](_filter_.filterstatetemplate.md#children)
* [isSame](_filter_.filterstatetemplate.md#issame)

### Methods

* [render](_filter_.filterstatetemplate.md#render)

## Constructors

###  constructor

\+ **new FilterStateTemplate**(`isSame`: function, `children`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]): *[FilterStateTemplate](_filter_.filterstatetemplate.md)*

*Defined in [dom/src/filter.ts:20](https://github.com/fponticelli/tempo/blob/master/dom/src/filter.ts#L20)*

**Parameters:**

▪ **isSame**: *function*

▸ (`prev`: State, `next`: State): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`prev` | State |
`next` | State |

▪ **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]*

**Returns:** *[FilterStateTemplate](_filter_.filterstatetemplate.md)*

## Properties

###  children

• **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]*

*Defined in [dom/src/filter.ts:23](https://github.com/fponticelli/tempo/blob/master/dom/src/filter.ts#L23)*

___

###  isSame

• **isSame**: *function*

*Defined in [dom/src/filter.ts:22](https://github.com/fponticelli/tempo/blob/master/dom/src/filter.ts#L22)*

#### Type declaration:

▸ (`prev`: State, `next`: State): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`prev` | State |
`next` | State |

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *View‹State, Query›*

*Defined in [dom/src/filter.ts:26](https://github.com/fponticelli/tempo/blob/master/dom/src/filter.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, Query›*
