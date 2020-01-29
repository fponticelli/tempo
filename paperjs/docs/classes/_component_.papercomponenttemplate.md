---
id: "_component_.papercomponenttemplate"
title: "PaperComponentTemplate"
sidebar_label: "PaperComponentTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **PaperComponentTemplate**

## Implements

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_component_.papercomponenttemplate.md#constructor)

### Properties

* [children](_component_.papercomponenttemplate.md#children)
* [delayed](_component_.papercomponenttemplate.md#delayed)
* [store](_component_.papercomponenttemplate.md#store)

### Methods

* [render](_component_.papercomponenttemplate.md#render)

## Constructors

###  constructor

\+ **new PaperComponentTemplate**(`store`: Store‹State, Action›, `children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[], `delayed`: boolean): *[PaperComponentTemplate](_component_.papercomponenttemplate.md)*

*Defined in [paperjs/src/component.ts:20](https://github.com/fponticelli/tempo/blob/master/paperjs/src/component.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`store` | Store‹State, Action› |
`children` | [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[] |
`delayed` | boolean |

**Returns:** *[PaperComponentTemplate](_component_.papercomponenttemplate.md)*

## Properties

###  children

• **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]*

*Defined in [paperjs/src/component.ts:23](https://github.com/fponticelli/tempo/blob/master/paperjs/src/component.ts#L23)*

___

###  delayed

• **delayed**: *boolean*

*Defined in [paperjs/src/component.ts:24](https://github.com/fponticelli/tempo/blob/master/paperjs/src/component.ts#L24)*

___

###  store

• **store**: *Store‹State, Action›*

*Defined in [paperjs/src/component.ts:22](https://github.com/fponticelli/tempo/blob/master/paperjs/src/component.ts#L22)*

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: State): *object*

*Defined in [paperjs/src/component.ts:27](https://github.com/fponticelli/tempo/blob/master/paperjs/src/component.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(`state`: State): *void*

* **destroy**(): *void*

* **request**(`query`: Query): *void*
