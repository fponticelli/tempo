---
id: "_when_.paperwhentemplate"
title: "PaperWhenTemplate"
sidebar_label: "PaperWhenTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **PaperWhenTemplate**

## Implements

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_when_.paperwhentemplate.md#constructor)

### Properties

* [children](_when_.paperwhentemplate.md#children)
* [options](_when_.paperwhentemplate.md#options)

### Methods

* [render](_when_.paperwhentemplate.md#render)

## Constructors

###  constructor

\+ **new PaperWhenTemplate**(`options`: [WhenOptions](../interfaces/_when_.whenoptions.md)‹State›, `children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]): *[PaperWhenTemplate](_when_.paperwhentemplate.md)*

*Defined in [paperjs/src/when.ts:25](https://github.com/fponticelli/tempo/blob/master/paperjs/src/when.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WhenOptions](../interfaces/_when_.whenoptions.md)‹State› |
`children` | [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[] |

**Returns:** *[PaperWhenTemplate](_when_.paperwhentemplate.md)*

## Properties

###  children

• **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]*

*Defined in [paperjs/src/when.ts:28](https://github.com/fponticelli/tempo/blob/master/paperjs/src/when.ts#L28)*

___

###  options

• **options**: *[WhenOptions](../interfaces/_when_.whenoptions.md)‹State›*

*Defined in [paperjs/src/when.ts:27](https://github.com/fponticelli/tempo/blob/master/paperjs/src/when.ts#L27)*

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: State): *View‹State, Query›*

*Defined in [paperjs/src/when.ts:30](https://github.com/fponticelli/tempo/blob/master/paperjs/src/when.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, Query›*
