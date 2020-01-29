---
id: "_lazy_.domlazytemplate"
title: "DOMLazyTemplate"
sidebar_label: "DOMLazyTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **DOMLazyTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_lazy_.domlazytemplate.md#constructor)

### Properties

* [f](_lazy_.domlazytemplate.md#f)

### Methods

* [render](_lazy_.domlazytemplate.md#render)

## Constructors

###  constructor

\+ **new DOMLazyTemplate**(`f`: function): *[DOMLazyTemplate](_lazy_.domlazytemplate.md)*

*Defined in [dom/src/lazy.ts:18](https://github.com/fponticelli/tempo/blob/master/dom/src/lazy.ts#L18)*

**Parameters:**

▪ **f**: *function*

▸ (): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

**Returns:** *[DOMLazyTemplate](_lazy_.domlazytemplate.md)*

## Properties

###  f

• **f**: *function*

*Defined in [dom/src/lazy.ts:20](https://github.com/fponticelli/tempo/blob/master/dom/src/lazy.ts#L20)*

#### Type declaration:

▸ (): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *View‹State, Query›*

*Defined in [dom/src/lazy.ts:23](https://github.com/fponticelli/tempo/blob/master/dom/src/lazy.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, Query›*
