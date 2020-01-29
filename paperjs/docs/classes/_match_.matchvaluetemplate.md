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

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_match_.matchvaluetemplate.md#constructor)

### Properties

* [matchers](_match_.matchvaluetemplate.md#matchers)
* [orElse](_match_.matchvaluetemplate.md#orelse)
* [path](_match_.matchvaluetemplate.md#path)

### Methods

* [render](_match_.matchvaluetemplate.md#render)

## Constructors

###  constructor

\+ **new MatchValueTemplate**(`path`: IndexType[], `matchers`: object, `orElse`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›): *[MatchValueTemplate](_match_.matchvaluetemplate.md)*

*Defined in [paperjs/src/match.ts:169](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | IndexType[] |
`matchers` | object |
`orElse` | [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query› |

**Returns:** *[MatchValueTemplate](_match_.matchvaluetemplate.md)*

## Properties

###  matchers

• **matchers**: *object*

*Defined in [paperjs/src/match.ts:172](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L172)*

#### Type declaration:

___

###  orElse

• **orElse**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/match.ts:175](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L175)*

___

###  path

• **path**: *IndexType[]*

*Defined in [paperjs/src/match.ts:171](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L171)*

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: State): *object*

*Defined in [paperjs/src/match.ts:177](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(`state`: State): *void*

* **destroy**(): *void*

* **request**(`query`: Query): *void*
