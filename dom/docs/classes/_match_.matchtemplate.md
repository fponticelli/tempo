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

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_match_.matchtemplate.md#constructor)

### Properties

* [matcher](_match_.matchtemplate.md#matcher)
* [path](_match_.matchtemplate.md#path)
* [refId](_match_.matchtemplate.md#refid)

### Methods

* [render](_match_.matchtemplate.md#render)

## Constructors

###  constructor

\+ **new MatchTemplate**(`path`: Path, `matcher`: object, `refId`: string): *[MatchTemplate](_match_.matchtemplate.md)*

*Defined in [dom/src/match.ts:33](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | Path |
`matcher` | object |
`refId` | string |

**Returns:** *[MatchTemplate](_match_.matchtemplate.md)*

## Properties

###  matcher

• **matcher**: *object*

*Defined in [dom/src/match.ts:36](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L36)*

#### Type declaration:

___

###  path

• **path**: *Path*

*Defined in [dom/src/match.ts:35](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L35)*

___

###  refId

• **refId**: *string*

*Defined in [dom/src/match.ts:39](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L39)*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *object*

*Defined in [dom/src/match.ts:41](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(`state`: State): *void*

* **destroy**(): *void*

* **request**(`query`: Query): *void*
