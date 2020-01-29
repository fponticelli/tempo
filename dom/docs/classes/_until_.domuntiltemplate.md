---
id: "_until_.domuntiltemplate"
title: "DOMUntilTemplate"
sidebar_label: "DOMUntilTemplate"
---

## Type parameters

▪ **OuterState**

▪ **InnerState**

▪ **Action**

▪ **Query**

## Hierarchy

* **DOMUntilTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, Action, Query›

## Index

### Constructors

* [constructor](_until_.domuntiltemplate.md#constructor)

### Properties

* [children](_until_.domuntiltemplate.md#children)
* [options](_until_.domuntiltemplate.md#options)

### Methods

* [render](_until_.domuntiltemplate.md#render)

## Constructors

###  constructor

\+ **new DOMUntilTemplate**(`options`: object, `children`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹InnerState, Action, Query›[]): *[DOMUntilTemplate](_until_.domuntiltemplate.md)*

*Defined in [dom/src/until.ts:20](https://github.com/fponticelli/tempo/blob/master/dom/src/until.ts#L20)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`refId?` | undefined &#124; string |
`repeatUntil` | function |

▪ **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹InnerState, Action, Query›[]*

**Returns:** *[DOMUntilTemplate](_until_.domuntiltemplate.md)*

## Properties

###  children

• **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹InnerState, Action, Query›[]*

*Defined in [dom/src/until.ts:26](https://github.com/fponticelli/tempo/blob/master/dom/src/until.ts#L26)*

___

###  options

• **options**: *object*

*Defined in [dom/src/until.ts:22](https://github.com/fponticelli/tempo/blob/master/dom/src/until.ts#L22)*

#### Type declaration:

* **refId**? : *undefined | string*

* **repeatUntil**(): *function*

  * (`state`: OuterState, `index`: number): *InnerState | undefined*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: OuterState): *View‹OuterState, Query›*

*Defined in [dom/src/until.ts:29](https://github.com/fponticelli/tempo/blob/master/dom/src/until.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | OuterState |

**Returns:** *View‹OuterState, Query›*
