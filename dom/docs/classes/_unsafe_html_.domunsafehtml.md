---
id: "_unsafe_html_.domunsafehtml"
title: "DOMUnsafeHtml"
sidebar_label: "DOMUnsafeHtml"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

▪ **El**: *Element*

▪ **T**

## Hierarchy

* **DOMUnsafeHtml**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_unsafe_html_.domunsafehtml.md#constructor)

### Properties

* [content](_unsafe_html_.domunsafehtml.md#content)
* [element](_unsafe_html_.domunsafehtml.md#element)
* [transform](_unsafe_html_.domunsafehtml.md#transform)

### Methods

* [render](_unsafe_html_.domunsafehtml.md#render)

## Constructors

###  constructor

\+ **new DOMUnsafeHtml**(`content`: [DOMTextValue](../modules/_value_.md#domtextvalue)‹State›, `element`: [DOMElement](_element_.domelement.md)‹State, Action, Query, El, T›, `transform`: function): *[DOMUnsafeHtml](_unsafe_html_.domunsafehtml.md)*

*Defined in [dom/src/unsafe_html.ts:74](https://github.com/fponticelli/tempo/blob/master/dom/src/unsafe_html.ts#L74)*

**Parameters:**

▪ **content**: *[DOMTextValue](../modules/_value_.md#domtextvalue)‹State›*

▪ **element**: *[DOMElement](_element_.domelement.md)‹State, Action, Query, El, T›*

▪ **transform**: *function*

▸ (`source`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |

**Returns:** *[DOMUnsafeHtml](_unsafe_html_.domunsafehtml.md)*

## Properties

###  content

• **content**: *[DOMTextValue](../modules/_value_.md#domtextvalue)‹State›*

*Defined in [dom/src/unsafe_html.ts:76](https://github.com/fponticelli/tempo/blob/master/dom/src/unsafe_html.ts#L76)*

___

###  element

• **element**: *[DOMElement](_element_.domelement.md)‹State, Action, Query, El, T›*

*Defined in [dom/src/unsafe_html.ts:77](https://github.com/fponticelli/tempo/blob/master/dom/src/unsafe_html.ts#L77)*

___

###  transform

• **transform**: *function*

*Defined in [dom/src/unsafe_html.ts:78](https://github.com/fponticelli/tempo/blob/master/dom/src/unsafe_html.ts#L78)*

#### Type declaration:

▸ (`source`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *View‹State, Query›*

*Defined in [dom/src/unsafe_html.ts:81](https://github.com/fponticelli/tempo/blob/master/dom/src/unsafe_html.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, Query›*
