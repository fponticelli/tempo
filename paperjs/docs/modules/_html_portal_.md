---
id: "_html_portal_"
title: "html_portal"
sidebar_label: "html_portal"
---

## Index

### Functions

* [htmlBodyPortal](_html_portal_.md#const-htmlbodyportal)
* [htmlHeadPortal](_html_portal_.md#const-htmlheadportal)
* [htmlPortal](_html_portal_.md#const-htmlportal)
* [htmlPortalWithSelector](_html_portal_.md#const-htmlportalwithselector)

## Functions

### `Const` htmlBodyPortal

▸ **htmlBodyPortal**<**State**, **Action**, **Query**>(...`children`: DOMChild‹State, Action, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/html_portal.ts:90](https://github.com/fponticelli/tempo/blob/master/paperjs/src/html_portal.ts#L90)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`...children` | DOMChild‹State, Action, Query›[] |

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

___

### `Const` htmlHeadPortal

▸ **htmlHeadPortal**<**State**, **Action**, **Query**>(...`children`: DOMChild‹State, Action, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/html_portal.ts:79](https://github.com/fponticelli/tempo/blob/master/paperjs/src/html_portal.ts#L79)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`...children` | DOMChild‹State, Action, Query›[] |

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

___

### `Const` htmlPortal

▸ **htmlPortal**<**State**, **Action**, **Query**>(`options`: object, ...`children`: DOMChild‹State, Action, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/html_portal.ts:20](https://github.com/fponticelli/tempo/blob/master/paperjs/src/html_portal.ts#L20)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`append` | function |
`getParent` | function |

▪... **children**: *DOMChild‹State, Action, Query›[]*

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

___

### `Const` htmlPortalWithSelector

▸ **htmlPortalWithSelector**<**State**, **Action**, **Query**>(`options`: object, ...`children`: DOMChild‹State, Action, Query›[]): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/html_portal.ts:54](https://github.com/fponticelli/tempo/blob/master/paperjs/src/html_portal.ts#L54)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`selector` | string |

▪... **children**: *DOMChild‹State, Action, Query›[]*

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*
