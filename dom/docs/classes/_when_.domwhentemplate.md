---
id: "_when_.domwhentemplate"
title: "DOMWhenTemplate"
sidebar_label: "DOMWhenTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **DOMWhenTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_when_.domwhentemplate.md#constructor)

### Properties

* [children](_when_.domwhentemplate.md#children)
* [options](_when_.domwhentemplate.md#options)

### Methods

* [render](_when_.domwhentemplate.md#render)

## Constructors

###  constructor

\+ **new DOMWhenTemplate**(`options`: [WhenOptions](../interfaces/_when_.whenoptions.md)‹State›, `children`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]): *[DOMWhenTemplate](_when_.domwhentemplate.md)*

*Defined in [dom/src/when.ts:25](https://github.com/fponticelli/tempo/blob/master/dom/src/when.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WhenOptions](../interfaces/_when_.whenoptions.md)‹State› |
`children` | [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[] |

**Returns:** *[DOMWhenTemplate](_when_.domwhentemplate.md)*

## Properties

###  children

• **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]*

*Defined in [dom/src/when.ts:28](https://github.com/fponticelli/tempo/blob/master/dom/src/when.ts#L28)*

___

###  options

• **options**: *[WhenOptions](../interfaces/_when_.whenoptions.md)‹State›*

*Defined in [dom/src/when.ts:27](https://github.com/fponticelli/tempo/blob/master/dom/src/when.ts#L27)*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *View‹State, Query›*

*Defined in [dom/src/when.ts:30](https://github.com/fponticelli/tempo/blob/master/dom/src/when.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, Query›*
