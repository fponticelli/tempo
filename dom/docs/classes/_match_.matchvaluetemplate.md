---
id: "_match_.matchvaluetemplate"
title: "MatchValueTemplate"
sidebar_label: "MatchValueTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **MatchValueTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_match_.matchvaluetemplate.md#constructor)

### Properties

* [matchers](_match_.matchvaluetemplate.md#matchers)
* [orElse](_match_.matchvaluetemplate.md#orelse)
* [path](_match_.matchvaluetemplate.md#path)
* [refId](_match_.matchvaluetemplate.md#refid)

### Methods

* [render](_match_.matchvaluetemplate.md#render)

## Constructors

###  constructor

\+ **new MatchValueTemplate**(`path`: IndexType[], `matchers`: object, `orElse`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›, `refId`: string): *[MatchValueTemplate](_match_.matchvaluetemplate.md)*

*Defined in [dom/src/match.ts:160](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | IndexType[] |
`matchers` | object |
`orElse` | [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query› |
`refId` | string |

**Returns:** *[MatchValueTemplate](_match_.matchvaluetemplate.md)*

## Properties

###  matchers

• **matchers**: *object*

*Defined in [dom/src/match.ts:163](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L163)*

#### Type declaration:

___

###  orElse

• **orElse**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/match.ts:166](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L166)*

___

###  path

• **path**: *IndexType[]*

*Defined in [dom/src/match.ts:162](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L162)*

___

###  refId

• **refId**: *string*

*Defined in [dom/src/match.ts:167](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L167)*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *object*

*Defined in [dom/src/match.ts:169](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(`state`: State): *void*

* **destroy**(): *void*

* **request**(`query`: Query): *void*
