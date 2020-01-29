---
id: "_match_.matchbooltemplate"
title: "MatchBoolTemplate"
sidebar_label: "MatchBoolTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **MatchBoolTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_match_.matchbooltemplate.md#constructor)

### Properties

* [condition](_match_.matchbooltemplate.md#condition)
* [falseTemplate](_match_.matchbooltemplate.md#falsetemplate)
* [refId](_match_.matchbooltemplate.md#refid)
* [trueTemplate](_match_.matchbooltemplate.md#truetemplate)

### Methods

* [render](_match_.matchbooltemplate.md#render)

## Constructors

###  constructor

\+ **new MatchBoolTemplate**(`condition`: [DOMAttribute](../modules/_value_.md#domattribute)‹State, boolean›, `trueTemplate`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›, `falseTemplate`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›, `refId`: string): *[MatchBoolTemplate](_match_.matchbooltemplate.md)*

*Defined in [dom/src/match.ts:105](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [DOMAttribute](../modules/_value_.md#domattribute)‹State, boolean› |
`trueTemplate` | [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query› |
`falseTemplate` | [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query› |
`refId` | string |

**Returns:** *[MatchBoolTemplate](_match_.matchbooltemplate.md)*

## Properties

###  condition

• **condition**: *[DOMAttribute](../modules/_value_.md#domattribute)‹State, boolean›*

*Defined in [dom/src/match.ts:107](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L107)*

___

###  falseTemplate

• **falseTemplate**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/match.ts:109](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L109)*

___

###  refId

• **refId**: *string*

*Defined in [dom/src/match.ts:110](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L110)*

___

###  trueTemplate

• **trueTemplate**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/match.ts:108](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L108)*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *object*

*Defined in [dom/src/match.ts:112](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(`state`: State): *void*

* **destroy**(): *void*

* **request**(`query`: Query): *void*
