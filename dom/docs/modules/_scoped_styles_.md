---
id: "_scoped_styles_"
title: "scoped_styles"
sidebar_label: "scoped_styles"
---

## Index

### Classes

* [ScopedStyles](../classes/_scoped_styles_.scopedstyles.md)

### Interfaces

* [MediaQueries](../interfaces/_scoped_styles_.mediaqueries.md)
* [MediaQuery](../interfaces/_scoped_styles_.mediaquery.md)

### Type aliases

* [StyleDeclarations](_scoped_styles_.md#styledeclarations)
* [StyleDefinitions](_scoped_styles_.md#styledefinitions)

### Variables

* [annotation](_scoped_styles_.md#const-annotation)
* [atRules](_scoped_styles_.md#const-atrules)
* [characterVariant](_scoped_styles_.md#const-charactervariant)
* [charset](_scoped_styles_.md#const-charset)
* [counterStyle](_scoped_styles_.md#const-counterstyle)
* [fontFace](_scoped_styles_.md#const-fontface)
* [fontFeatureValues](_scoped_styles_.md#const-fontfeaturevalues)
* [importRule](_scoped_styles_.md#const-importrule)
* [keyframes](_scoped_styles_.md#const-keyframes)
* [media](_scoped_styles_.md#const-media)
* [namespace](_scoped_styles_.md#const-namespace)
* [nestedAtRules](_scoped_styles_.md#const-nestedatrules)
* [ornaments](_scoped_styles_.md#const-ornaments)
* [page](_scoped_styles_.md#const-page)
* [styleset](_scoped_styles_.md#const-styleset)
* [stylistic](_scoped_styles_.md#const-stylistic)
* [supports](_scoped_styles_.md#const-supports)
* [swash](_scoped_styles_.md#const-swash)

### Functions

* [resetCache](_scoped_styles_.md#const-resetcache)
* [scopedStyles](_scoped_styles_.md#const-scopedstyles)

## Type aliases

###  StyleDeclarations

Ƭ **StyleDeclarations**: *object*

*Defined in [dom/src/scoped_styles.ts:84](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L84)*

#### Type declaration:

___

###  StyleDefinitions

Ƭ **StyleDefinitions**: *Record‹string, [StyleDeclarations](_scoped_styles_.md#styledeclarations)‹State›› & [MediaQueries](../interfaces/_scoped_styles_.mediaqueries.md)‹State›*

*Defined in [dom/src/scoped_styles.ts:112](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L112)*

## Variables

### `Const` annotation

• **annotation**: *unique symbol* = Symbol('annotation')

*Defined in [dom/src/scoped_styles.ts:49](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L49)*

___

### `Const` atRules

• **atRules**: *unique symbol | unique symbol | unique symbol[]* = [importRule, charset, namespace]

*Defined in [dom/src/scoped_styles.ts:34](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L34)*

___

### `Const` characterVariant

• **characterVariant**: *unique symbol* = Symbol('character-variant')

*Defined in [dom/src/scoped_styles.ts:52](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L52)*

___

### `Const` charset

• **charset**: *unique symbol* = Symbol('charset')

*Defined in [dom/src/scoped_styles.ts:31](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L31)*

___

### `Const` counterStyle

• **counterStyle**: *unique symbol* = Symbol('counter-style')

*Defined in [dom/src/scoped_styles.ts:45](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L45)*

___

### `Const` fontFace

• **fontFace**: *unique symbol* = Symbol('font-face')

*Defined in [dom/src/scoped_styles.ts:43](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L43)*

___

### `Const` fontFeatureValues

• **fontFeatureValues**: *unique symbol* = Symbol('font-feature-values')

*Defined in [dom/src/scoped_styles.ts:46](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L46)*

___

### `Const` importRule

• **importRule**: *unique symbol* = Symbol('import')

*Defined in [dom/src/scoped_styles.ts:30](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L30)*

___

### `Const` keyframes

• **keyframes**: *unique symbol* = Symbol('keyframes')

*Defined in [dom/src/scoped_styles.ts:44](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L44)*

___

### `Const` media

• **media**: *unique symbol* = Symbol('media')

*Defined in [dom/src/scoped_styles.ts:40](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L40)*

___

### `Const` namespace

• **namespace**: *unique symbol* = Symbol('namespace')

*Defined in [dom/src/scoped_styles.ts:32](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L32)*

___

### `Const` nestedAtRules

• **nestedAtRules**: *unique symbol | unique symbol | unique symbol | unique symbol | unique symbol | unique symbol | unique symbol | unique symbol | unique symbol | unique symbol | unique symbol | unique symbol | unique symbol[]* = [
  media,
  supports,
  page,
  fontFace,
  keyframes,
  counterStyle,
  fontFeatureValues,
  swash,
  ornaments,
  annotation,
  stylistic,
  styleset,
  characterVariant
]

*Defined in [dom/src/scoped_styles.ts:54](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L54)*

___

### `Const` ornaments

• **ornaments**: *unique symbol* = Symbol('ornaments')

*Defined in [dom/src/scoped_styles.ts:48](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L48)*

___

### `Const` page

• **page**: *unique symbol* = Symbol('page')

*Defined in [dom/src/scoped_styles.ts:42](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L42)*

___

### `Const` styleset

• **styleset**: *unique symbol* = Symbol('styleset')

*Defined in [dom/src/scoped_styles.ts:51](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L51)*

___

### `Const` stylistic

• **stylistic**: *unique symbol* = Symbol('stylistic')

*Defined in [dom/src/scoped_styles.ts:50](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L50)*

___

### `Const` supports

• **supports**: *unique symbol* = Symbol('supports')

*Defined in [dom/src/scoped_styles.ts:41](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L41)*

___

### `Const` swash

• **swash**: *unique symbol* = Symbol('swash')

*Defined in [dom/src/scoped_styles.ts:47](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L47)*

## Functions

### `Const` resetCache

▸ **resetCache**(): *void*

*Defined in [dom/src/scoped_styles.ts:259](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L259)*

**Returns:** *void*

___

### `Const` scopedStyles

▸ **scopedStyles**<**State**, **Action**, **Query**>(`definitions`: [StyleDefinitions](_scoped_styles_.md#styledefinitions)‹State›): *[ScopedStyles](../classes/_scoped_styles_.scopedstyles.md)‹State, Action, Query›*

*Defined in [dom/src/scoped_styles.ts:335](https://github.com/fponticelli/tempo/blob/master/dom/src/scoped_styles.ts#L335)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [StyleDefinitions](_scoped_styles_.md#styledefinitions)‹State› |

**Returns:** *[ScopedStyles](../classes/_scoped_styles_.scopedstyles.md)‹State, Action, Query›*
