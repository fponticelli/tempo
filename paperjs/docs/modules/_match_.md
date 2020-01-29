---
id: "_match_"
title: "match"
sidebar_label: "match"
---

## Index

### Classes

* [MatchBoolTemplate](../classes/_match_.matchbooltemplate.md)
* [MatchTemplate](../classes/_match_.matchtemplate.md)
* [MatchValueTemplate](../classes/_match_.matchvaluetemplate.md)

### Functions

* [match](_match_.md#const-match)
* [matchBool](_match_.md#const-matchbool)
* [matchKind](_match_.md#const-matchkind)
* [matchValue](_match_.md#const-matchvalue)

## Functions

### `Const` match

▸ **match**<**Path**, **State**, **Action**, **Query**>(`path`: Path, `matcher`: object): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/match.ts:71](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L71)*

**Type parameters:**

▪ **Path**: *IndexType[]*

▪ **State**: *ObjectWithPath‹Path, any›*

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`path` | Path |
`matcher` | object |

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

___

### `Const` matchBool

▸ **matchBool**<**State**, **Action**, **Query**>(`options`: object): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/match.ts:157](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L157)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`condition` | function |
`false` | [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query› |
`true` | [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query› |

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

___

### `Const` matchKind

▸ **matchKind**<**State**, **Action**, **Query**>(`matchers`: object): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/match.ts:106](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L106)*

**Type parameters:**

▪ **State**: *ObjectWithField‹"kind", any›*

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`matchers` | object |

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

___

### `Const` matchValue

▸ **matchValue**<**Path**, **State**, **Action**, **Query**>(`path`: Path, `matchers`: object, `orElse`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›): *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*

*Defined in [paperjs/src/match.ts:204](https://github.com/fponticelli/tempo/blob/master/paperjs/src/match.ts#L204)*

**Type parameters:**

▪ **Path**: *IndexType[]*

▪ **State**: *ObjectWithPath‹Path, string›*

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type |
------ | ------ |
`path` | Path |
`matchers` | object |
`orElse` | [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query› |

**Returns:** *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›*
