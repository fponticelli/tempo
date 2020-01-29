---
id: "_fragment_.paperfragmenttemplate"
title: "PaperFragmentTemplate"
sidebar_label: "PaperFragmentTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **PaperFragmentTemplate**

## Implements

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_fragment_.paperfragmenttemplate.md#constructor)

### Properties

* [children](_fragment_.paperfragmenttemplate.md#children)

### Methods

* [render](_fragment_.paperfragmenttemplate.md#render)

## Constructors

###  constructor

\+ **new PaperFragmentTemplate**(`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]): *[PaperFragmentTemplate](_fragment_.paperfragmenttemplate.md)*

*Defined in [paperjs/src/fragment.ts:20](https://github.com/fponticelli/tempo/blob/master/paperjs/src/fragment.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`children` | [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[] |

**Returns:** *[PaperFragmentTemplate](_fragment_.paperfragmenttemplate.md)*

## Properties

###  children

• **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]*

*Defined in [paperjs/src/fragment.ts:21](https://github.com/fponticelli/tempo/blob/master/paperjs/src/fragment.ts#L21)*

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: State): *View‹State, Query›*

*Defined in [paperjs/src/fragment.ts:23](https://github.com/fponticelli/tempo/blob/master/paperjs/src/fragment.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, Query›*
