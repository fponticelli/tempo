---
id: "_scoped_styles_.scopedstyles"
title: "ScopedStyles"
sidebar_label: "ScopedStyles"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **ScopedStyles**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_scoped_styles_.scopedstyles.md#constructor)

### Properties

* [derived](_scoped_styles_.scopedstyles.md#derived)
* [literal](_scoped_styles_.scopedstyles.md#literal)

### Methods

* [render](_scoped_styles_.scopedstyles.md#render)

## Constructors

###  constructor

\+ **new ScopedStyles**(`literal`: string[], `derived`: function[]): *[ScopedStyles](_scoped_styles_.scopedstyles.md)*

*Defined in [dom/src/scoped_styles.ts:291](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L291)*

**Parameters:**

Name | Type |
------ | ------ |
`literal` | string[] |
`derived` | function[] |

**Returns:** *[ScopedStyles](_scoped_styles_.scopedstyles.md)*

## Properties

###  derived

• **derived**: *function[]*

*Defined in [dom/src/scoped_styles.ts:294](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L294)*

___

###  literal

• **literal**: *string[]*

*Defined in [dom/src/scoped_styles.ts:293](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L293)*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *object*

*Defined in [dom/src/scoped_styles.ts:296](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L296)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(`state`: State): *void*

* **destroy**(): *void*

* **request**(`query`: Query): *void*
