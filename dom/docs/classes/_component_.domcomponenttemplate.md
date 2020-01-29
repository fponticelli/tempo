---
id: "_component_.domcomponenttemplate"
title: "DOMComponentTemplate"
sidebar_label: "DOMComponentTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **DOMComponentTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_component_.domcomponenttemplate.md#constructor)

### Properties

* [children](_component_.domcomponenttemplate.md#children)
* [delayed](_component_.domcomponenttemplate.md#delayed)
* [store](_component_.domcomponenttemplate.md#store)

### Methods

* [render](_component_.domcomponenttemplate.md#render)

## Constructors

###  constructor

\+ **new DOMComponentTemplate**(`store`: Store‹State, Action›, `children`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[], `delayed`: boolean): *[DOMComponentTemplate](_component_.domcomponenttemplate.md)*

*Defined in [dom/src/component.ts:20](https://github.com/fponticelli/tempo/blob/master/dom/src/component.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`store` | Store‹State, Action› |
`children` | [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[] |
`delayed` | boolean |

**Returns:** *[DOMComponentTemplate](_component_.domcomponenttemplate.md)*

## Properties

###  children

• **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]*

*Defined in [dom/src/component.ts:23](https://github.com/fponticelli/tempo/blob/master/dom/src/component.ts#L23)*

___

###  delayed

• **delayed**: *boolean*

*Defined in [dom/src/component.ts:24](https://github.com/fponticelli/tempo/blob/master/dom/src/component.ts#L24)*

___

###  store

• **store**: *Store‹State, Action›*

*Defined in [dom/src/component.ts:22](https://github.com/fponticelli/tempo/blob/master/dom/src/component.ts#L22)*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *object*

*Defined in [dom/src/component.ts:27](https://github.com/fponticelli/tempo/blob/master/dom/src/component.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(`state`: State): *void*

* **destroy**(): *void*

* **request**(`query`: Query): *void*
