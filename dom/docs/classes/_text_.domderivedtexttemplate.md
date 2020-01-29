---
id: "_text_.domderivedtexttemplate"
title: "DOMDerivedTextTemplate"
sidebar_label: "DOMDerivedTextTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **DOMDerivedTextTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_text_.domderivedtexttemplate.md#constructor)

### Properties

* [makeContent](_text_.domderivedtexttemplate.md#makecontent)

### Methods

* [render](_text_.domderivedtexttemplate.md#render)

## Constructors

###  constructor

\+ **new DOMDerivedTextTemplate**(`makeContent`: UnwrappedDerivedValue‹State, string›): *[DOMDerivedTextTemplate](_text_.domderivedtexttemplate.md)*

*Defined in [dom/src/text.ts:21](https://github.com/fponticelli/tempo/blob/master/dom/src/text.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`makeContent` | UnwrappedDerivedValue‹State, string› |

**Returns:** *[DOMDerivedTextTemplate](_text_.domderivedtexttemplate.md)*

## Properties

###  makeContent

• **makeContent**: *UnwrappedDerivedValue‹State, string›*

*Defined in [dom/src/text.ts:22](https://github.com/fponticelli/tempo/blob/master/dom/src/text.ts#L22)*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *View‹State, Query›*

*Defined in [dom/src/text.ts:24](https://github.com/fponticelli/tempo/blob/master/dom/src/text.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, Query›*
