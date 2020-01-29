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
* [matchAsync](_match_.md#const-matchasync)
* [matchAsyncResult](_match_.md#const-matchasyncresult)
* [matchBool](_match_.md#const-matchbool)
* [matchKind](_match_.md#const-matchkind)
* [matchMaybe](_match_.md#const-matchmaybe)
* [matchOption](_match_.md#const-matchoption)
* [matchResult](_match_.md#const-matchresult)
* [matchValue](_match_.md#const-matchvalue)

## Functions

### `Const` match

▸ **match**<**Path**, **State**, **Action**, **Query**>(`path`: Path, `matcher`: object, `refId?`: undefined | string): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/match.ts:68](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L68)*

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
`refId?` | undefined &#124; string |

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

___

### `Const` matchAsync

▸ **matchAsync**<**State**, **Progress**, **Action**, **Query**>(`matchers`: object, `refId`: string): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹Async‹State, Progress›, Action, Query›*

*Defined in [dom/src/match.ts:255](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L255)*

**Type parameters:**

▪ **State**

▪ **Progress**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **matchers**: *object*

Name | Type |
------ | ------ |
`Loading` | [DOMChild](_template_.md#domchild)‹Progress, Action, Query› |
`NotAsked` | [DOMChild](_template_.md#domchild)‹unknown, Action, Query› |
`Outcome` | [DOMChild](_template_.md#domchild)‹State, Action, Query› |

▪`Default value`  **refId**: *string*= "t-match-async"

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹Async‹State, Progress›, Action, Query›*

___

### `Const` matchAsyncResult

▸ **matchAsyncResult**<**State**, **Error**, **Progress**, **Action**, **Query**>(`matchers`: object, `refId`: string): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹AsyncResult‹State, Error, Progress›, Action, Query›*

*Defined in [dom/src/match.ts:270](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L270)*

**Type parameters:**

▪ **State**

▪ **Error**

▪ **Progress**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **matchers**: *object*

Name | Type |
------ | ------ |
`Failure` | [DOMChild](_template_.md#domchild)‹Error, Action, Query› |
`Loading` | [DOMChild](_template_.md#domchild)‹Progress, Action, Query› |
`NotAsked` | [DOMChild](_template_.md#domchild)‹unknown, Action, Query› |
`Success` | [DOMChild](_template_.md#domchild)‹State, Action, Query› |

▪`Default value`  **refId**: *string*= "t-match-async-result"

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹AsyncResult‹State, Error, Progress›, Action, Query›*

___

### `Const` matchBool

▸ **matchBool**<**State**, **Action**, **Query**>(`options`: object): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/match.ts:142](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L142)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`condition` | [DOMAttribute](_value_.md#domattribute)‹State, boolean› |
`false` | [DOMChild](_template_.md#domchild)‹State, Action, Query› |
`refId?` | undefined &#124; string |
`true` | [DOMChild](_template_.md#domchild)‹State, Action, Query› |

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

___

### `Const` matchKind

▸ **matchKind**<**State**, **Action**, **Query**>(`matchers`: object, `refId`: string): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/match.ts:94](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L94)*

**Type parameters:**

▪ **State**: *ObjectWithField‹"kind", any›*

▪ **Action**

▪ **Query**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`matchers` | object | - |
`refId` | string | "t-match-kind" |

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

___

### `Const` matchMaybe

▸ **matchMaybe**<**State**, **Action**, **Query**>(`matchers`: object, `refId`: string): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹Maybe‹State›, Action, Query›*

*Defined in [dom/src/match.ts:227](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L227)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **matchers**: *object*

Name | Type |
------ | ------ |
`Just` | [DOMChild](_template_.md#domchild)‹State, Action, Query› |
`Nothing?` | [DOMChild](_template_.md#domchild)‹unknown, Action, Query› |

▪`Default value`  **refId**: *string*= "t-match-option"

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹Maybe‹State›, Action, Query›*

___

### `Const` matchOption

▸ **matchOption**<**State**, **Action**, **Query**>(`matchers`: object, `refId`: string): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹Option‹State›, Action, Query›*

*Defined in [dom/src/match.ts:217](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L217)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **matchers**: *object*

Name | Type |
------ | ------ |
`None` | [DOMChild](_template_.md#domchild)‹unknown, Action, Query› |
`Some` | [DOMChild](_template_.md#domchild)‹State, Action, Query› |

▪`Default value`  **refId**: *string*= "t-match-option"

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹Option‹State›, Action, Query›*

___

### `Const` matchResult

▸ **matchResult**<**State**, **Error**, **Action**, **Query**>(`matchers`: object, `refId`: string): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹Result‹State, Error›, Action, Query›*

*Defined in [dom/src/match.ts:242](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L242)*

**Type parameters:**

▪ **State**

▪ **Error**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **matchers**: *object*

Name | Type |
------ | ------ |
`Failure` | [DOMChild](_template_.md#domchild)‹Error, Action, Query› |
`Success` | [DOMChild](_template_.md#domchild)‹State, Action, Query› |

▪`Default value`  **refId**: *string*= "t-match-result"

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹Result‹State, Error›, Action, Query›*

___

### `Const` matchValue

▸ **matchValue**<**Path**, **State**, **Action**, **Query**>(`path`: Path, `matchers`: object, `orElse`: [DOMChild](_template_.md#domchild)‹State, Action, Query›, `refId?`: undefined | string): *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*

*Defined in [dom/src/match.ts:198](https://github.com/fponticelli/tempo/blob/master/dom/src/match.ts#L198)*

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
`orElse` | [DOMChild](_template_.md#domchild)‹State, Action, Query› |
`refId?` | undefined &#124; string |

**Returns:** *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›*
