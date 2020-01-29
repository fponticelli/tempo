---
id: "_fragment_.domfragmenttemplate"
title: "DOMFragmentTemplate"
sidebar_label: "DOMFragmentTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **DOMFragmentTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_fragment_.domfragmenttemplate.md#constructor)

### Properties

* [children](_fragment_.domfragmenttemplate.md#children)

### Methods

* [render](_fragment_.domfragmenttemplate.md#render)

## Constructors

###  constructor

\+ **new DOMFragmentTemplate**(`children`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]): *[DOMFragmentTemplate](_fragment_.domfragmenttemplate.md)*

*Defined in [dom/src/fragment.ts:20](https://github.com/fponticelli/tempo/blob/master/dom/src/fragment.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`children` | [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[] |

**Returns:** *[DOMFragmentTemplate](_fragment_.domfragmenttemplate.md)*

## Properties

###  children

• **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]*

*Defined in [dom/src/fragment.ts:22](https://github.com/fponticelli/tempo/blob/master/dom/src/fragment.ts#L22)*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *View‹State, Query›*

*Defined in [dom/src/fragment.ts:25](https://github.com/fponticelli/tempo/blob/master/dom/src/fragment.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, Query›*
