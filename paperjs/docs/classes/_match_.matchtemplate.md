---
id: "_match_.matchtemplate"
title: "MatchTemplate"
sidebar_label: "MatchTemplate"
---

## Type parameters

▪ **Path**: *IndexType[]*

▪ **State**: *ObjectWithPath‹Path, any›*

▪ **Action**

▪ **Query**

## Hierarchy

* **MatchTemplate**

## Implements

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_match_.matchtemplate.md#constructor)

### Properties

* [matcher](_match_.matchtemplate.md#matcher)
* [path](_match_.matchtemplate.md#path)

### Methods

* [render](_match_.matchtemplate.md#render)

## Constructors

###  constructor

\+ **new MatchTemplate**(`path`: Path, `matcher`: object): *[MatchTemplate](_match_.matchtemplate.md)*

*Defined in [paperjs/src/match.ts:29](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | Path |
`matcher` | object |

**Returns:** *[MatchTemplate](_match_.matchtemplate.md)*

## Properties

###  matcher

• **matcher**: *object*

*Defined in [paperjs/src/match.ts:32](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L32)*

#### Type declaration:

___

###  path

• **path**: *Path*

*Defined in [paperjs/src/match.ts:31](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L31)*

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: State): *object*

*Defined in [paperjs/src/match.ts:40](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(`state`: State): *void*

* **destroy**(): *void*

* **request**(`query`: Query): *void*
