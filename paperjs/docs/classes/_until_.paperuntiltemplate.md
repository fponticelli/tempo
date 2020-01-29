---
id: "_until_.paperuntiltemplate"
title: "PaperUntilTemplate"
sidebar_label: "PaperUntilTemplate"
---

## Type parameters

▪ **OuterState**

▪ **InnerState**

▪ **Action**

▪ **Query**

## Hierarchy

* **PaperUntilTemplate**

## Implements

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, Action, Query›

## Index

### Constructors

* [constructor](_until_.paperuntiltemplate.md#constructor)

### Properties

* [children](_until_.paperuntiltemplate.md#children)
* [options](_until_.paperuntiltemplate.md#options)

### Methods

* [render](_until_.paperuntiltemplate.md#render)

## Constructors

###  constructor

\+ **new PaperUntilTemplate**(`options`: object, `children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹InnerState, Action, Query›[]): *[PaperUntilTemplate](_until_.paperuntiltemplate.md)*

*Defined in [paperjs/src/until.ts:21](https://github.com/fponticelli/tempo/blob/master/paperjs/src/until.ts#L21)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`repeatUntil` | function |

▪ **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹InnerState, Action, Query›[]*

**Returns:** *[PaperUntilTemplate](_until_.paperuntiltemplate.md)*

## Properties

###  children

• **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹InnerState, Action, Query›[]*

*Defined in [paperjs/src/until.ts:26](https://github.com/fponticelli/tempo/blob/master/paperjs/src/until.ts#L26)*

___

###  options

• **options**: *object*

*Defined in [paperjs/src/until.ts:23](https://github.com/fponticelli/tempo/blob/master/paperjs/src/until.ts#L23)*

#### Type declaration:

* **repeatUntil**(): *function*

  * (`state`: OuterState, `index`: number): *InnerState | undefined*

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: OuterState): *View‹OuterState, Query›*

*Defined in [paperjs/src/until.ts:29](https://github.com/fponticelli/tempo/blob/master/paperjs/src/until.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | OuterState |

**Returns:** *View‹OuterState, Query›*
