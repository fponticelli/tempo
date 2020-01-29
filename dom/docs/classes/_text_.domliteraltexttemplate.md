---
id: "_text_.domliteraltexttemplate"
title: "DOMLiteralTextTemplate"
sidebar_label: "DOMLiteralTextTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **DOMLiteralTextTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_text_.domliteraltexttemplate.md#constructor)

### Properties

* [content](_text_.domliteraltexttemplate.md#content)

### Methods

* [render](_text_.domliteraltexttemplate.md#render)

## Constructors

###  constructor

\+ **new DOMLiteralTextTemplate**(`content`: string): *[DOMLiteralTextTemplate](_text_.domliteraltexttemplate.md)*

*Defined in [dom/src/text.ts:46](https://github.com/fponticelli/tempo/blob/master/dom/src/text.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |

**Returns:** *[DOMLiteralTextTemplate](_text_.domliteraltexttemplate.md)*

## Properties

###  content

• **content**: *string*

*Defined in [dom/src/text.ts:48](https://github.com/fponticelli/tempo/blob/master/dom/src/text.ts#L48)*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `_`: State): *View‹State, Query›*

*Defined in [dom/src/text.ts:50](https://github.com/fponticelli/tempo/blob/master/dom/src/text.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`_` | State |

**Returns:** *View‹State, Query›*
