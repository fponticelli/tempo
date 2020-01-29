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

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_match_.matchbooltemplate.md#constructor)

### Properties

* [condition](_match_.matchbooltemplate.md#condition)
* [falseTemplate](_match_.matchbooltemplate.md#falsetemplate)
* [trueTemplate](_match_.matchbooltemplate.md#truetemplate)

### Methods

* [render](_match_.matchbooltemplate.md#render)

## Constructors

###  constructor

\+ **new MatchBoolTemplate**(`condition`: function, `trueTemplate`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›, `falseTemplate`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›): *[MatchBoolTemplate](_match_.matchbooltemplate.md)*

*Defined in [paperjs/src/match.ts:122](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L122)*

**Parameters:**

▪ **condition**: *function*

▸ (`state`: State): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |

▪ **trueTemplate**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

▪ **falseTemplate**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

**Returns:** *[MatchBoolTemplate](_match_.matchbooltemplate.md)*

## Properties

###  condition

• **condition**: *function*

*Defined in [paperjs/src/match.ts:124](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L124)*

#### Type declaration:

▸ (`state`: State): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |

___

###  falseTemplate

• **falseTemplate**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/match.ts:126](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L126)*

___

###  trueTemplate

• **trueTemplate**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/match.ts:125](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L125)*

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: State): *object*

*Defined in [paperjs/src/match.ts:128](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(`state`: State): *void*

* **destroy**(): *void*

* **request**(`query`: Query): *void*
