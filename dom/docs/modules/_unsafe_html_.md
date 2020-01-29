---
id: "_unsafe_html_"
title: "unsafe_html"
sidebar_label: "unsafe_html"
---

## Index

### Classes

* [DOMUnsafeHtml](../classes/_unsafe_html_.domunsafehtml.md)

### Functions

* [unsafeHtml](_unsafe_html_.md#const-unsafehtml)

## Functions

### `Const` unsafeHtml

▸ **unsafeHtml**<**State**, **Action**, **Query**, **El**, **T**>(`options`: object): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/unsafe_html.ts:102](https://github.com/fponticelli/tempo/blob/master/dom/src/unsafe_html.ts#L102)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

▪ **El**: *Element*

▪ **T**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`content` | [DOMTextValue](_value_.md#domtextvalue)‹State› |
`element?` | [DOMElement](../classes/_element_.domelement.md)‹State, Action, Query, El, T› |
`transform?` | undefined &#124; function |

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*
