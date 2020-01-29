---
id: "_lazy_.paperlazytemplate"
title: "PaperLazyTemplate"
sidebar_label: "PaperLazyTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **PaperLazyTemplate**

## Implements

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_lazy_.paperlazytemplate.md#constructor)

### Properties

* [f](_lazy_.paperlazytemplate.md#f)

### Methods

* [render](_lazy_.paperlazytemplate.md#render)

## Constructors

###  constructor

\+ **new PaperLazyTemplate**(`f`: function): *[PaperLazyTemplate](_lazy_.paperlazytemplate.md)*

*Defined in [paperjs/src/lazy.ts:19](https://github.com/fponticelli/tempo/blob/master/paperjs/src/lazy.ts#L19)*

**Parameters:**

▪ **f**: *function*

▸ (): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

**Returns:** *[PaperLazyTemplate](_lazy_.paperlazytemplate.md)*

## Properties

###  f

• **f**: *function*

*Defined in [paperjs/src/lazy.ts:20](https://github.com/fponticelli/tempo/blob/master/paperjs/src/lazy.ts#L20)*

#### Type declaration:

▸ (): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: State): *View‹State, Query›*

*Defined in [paperjs/src/lazy.ts:22](https://github.com/fponticelli/tempo/blob/master/paperjs/src/lazy.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, Query›*
