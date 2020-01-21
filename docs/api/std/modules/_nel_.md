---
id: "_nel_"
title: "nel"
sidebar_label: "nel"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["nel"](_nel_.md)

## Index

### Type aliases

* [Nel](_nel_.md#nel)

### Functions

* [Nel](_nel_.md#const-nel)
* [all](_nel_.md#const-all)
* [any](_nel_.md#const-any)
* [concat](_nel_.md#const-concat)
* [each](_nel_.md#const-each)
* [equals](_nel_.md#const-equals)
* [filter](_nel_.md#const-filter)
* [flatMap](_nel_.md#const-flatmap)
* [flatten](_nel_.md#const-flatten)
* [foldLeft](_nel_.md#const-foldleft)
* [head](_nel_.md#const-head)
* [isValid](_nel_.md#const-isvalid)
* [length](_nel_.md#const-length)
* [map](_nel_.md#const-map)
* [ofValue](_nel_.md#const-ofvalue)
* [sort](_nel_.md#const-sort)
* [tail](_nel_.md#const-tail)

## Type aliases

###  Nel

Ƭ **Nel**: *[Newtype](../interfaces/_newtype_.newtype.md)‹T[], object›*

*Defined in [nel.ts:18](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L18)*

## Functions

### `Const` Nel

▸ **Nel**<**T**>(): *NelTypeClass‹T›*

*Defined in [nel.ts:27](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L27)*

**Type parameters:**

▪ **T**

**Returns:** *NelTypeClass‹T›*

___

### `Const` all

▸ **all**<**T**>(`predicate`: function, `nel`: [Nel](_nel_.md#nel)‹T›): *boolean*

*Defined in [nel.ts:58](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L58)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **nel**: *[Nel](_nel_.md#nel)‹T›*

**Returns:** *boolean*

___

### `Const` any

▸ **any**<**T**>(`predicate`: function, `nel`: [Nel](_nel_.md#nel)‹T›): *boolean*

*Defined in [nel.ts:61](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L61)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **nel**: *[Nel](_nel_.md#nel)‹T›*

**Returns:** *boolean*

___

### `Const` concat

▸ **concat**<**A**>(...`nels`: [Nel](_nel_.md#nel)‹A›[]): *[Nel](_nel_.md#nel)‹A›*

*Defined in [nel.ts:67](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L67)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`...nels` | [Nel](_nel_.md#nel)‹A›[] |

**Returns:** *[Nel](_nel_.md#nel)‹A›*

___

### `Const` each

▸ **each**<**T**>(`f`: function, `nel`: [Nel](_nel_.md#nel)‹T›): *void*

*Defined in [nel.ts:64](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L64)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **nel**: *[Nel](_nel_.md#nel)‹T›*

**Returns:** *void*

___

### `Const` equals

▸ **equals**<**T**>(`predicate`: function, `a`: [Nel](_nel_.md#nel)‹T›, `b`: [Nel](_nel_.md#nel)‹T›): *boolean*

*Defined in [nel.ts:46](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L46)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

▪ **a**: *[Nel](_nel_.md#nel)‹T›*

▪ **b**: *[Nel](_nel_.md#nel)‹T›*

**Returns:** *boolean*

___

### `Const` filter

▸ **filter**<**T**>(`predicate`: function, `nel`: [Nel](_nel_.md#nel)‹T›): *T[]*

*Defined in [nel.ts:49](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L49)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **nel**: *[Nel](_nel_.md#nel)‹T›*

**Returns:** *T[]*

___

### `Const` flatMap

▸ **flatMap**<**A**, **B**>(`f`: function, `nel`: [Nel](_nel_.md#nel)‹A›): *[Nel](_nel_.md#nel)‹B›*

*Defined in [nel.ts:40](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L40)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *[Nel](_nel_.md#nel)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **nel**: *[Nel](_nel_.md#nel)‹A›*

**Returns:** *[Nel](_nel_.md#nel)‹B›*

___

### `Const` flatten

▸ **flatten**<**T**>(`nel`: [Nel](_nel_.md#nel)‹[Nel](_nel_.md#nel)‹T››): *[Nel](_nel_.md#nel)‹T›*

*Defined in [nel.ts:52](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L52)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`nel` | [Nel](_nel_.md#nel)‹[Nel](_nel_.md#nel)‹T›› |

**Returns:** *[Nel](_nel_.md#nel)‹T›*

___

### `Const` foldLeft

▸ **foldLeft**<**T**, **B**>(`f`: function, `nel`: [Nel](_nel_.md#nel)‹T›, `b`: B): *B*

*Defined in [nel.ts:55](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L55)*

**Type parameters:**

▪ **T**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`acc`: B, `curr`: T): *B*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | B |
`curr` | T |

▪ **nel**: *[Nel](_nel_.md#nel)‹T›*

▪ **b**: *B*

**Returns:** *B*

___

### `Const` head

▸ **head**<**A**>(`nel`: [Nel](_nel_.md#nel)‹A›): *A*

*Defined in [nel.ts:43](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L43)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`nel` | [Nel](_nel_.md#nel)‹A› |

**Returns:** *A*

___

### `Const` isValid

▸ **isValid**<**T**>(`arr`: T[]): *boolean*

*Defined in [nel.ts:29](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L29)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | T[] |

**Returns:** *boolean*

___

### `Const` length

▸ **length**<**T**>(`nel`: [Nel](_nel_.md#nel)‹T›): *number*

*Defined in [nel.ts:35](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L35)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`nel` | [Nel](_nel_.md#nel)‹T› |

**Returns:** *number*

___

### `Const` map

▸ **map**<**A**, **B**>(`f`: function, `nel`: [Nel](_nel_.md#nel)‹A›): *[Nel](_nel_.md#nel)‹B›*

*Defined in [nel.ts:37](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L37)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **nel**: *[Nel](_nel_.md#nel)‹A›*

**Returns:** *[Nel](_nel_.md#nel)‹B›*

___

### `Const` ofValue

▸ **ofValue**<**T**>(`value`: T): *[Nel](_nel_.md#nel)‹T›*

*Defined in [nel.ts:33](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L33)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Nel](_nel_.md#nel)‹T›*

___

### `Const` sort

▸ **sort**<**A**>(`compare`: function, `arr`: [Nel](_nel_.md#nel)‹A›): *[Nel](_nel_.md#nel)‹A›*

*Defined in [nel.ts:70](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L70)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **compare**: *function*

▸ (`a`: A, `b`: A): *[Ordering](../enums/_ord_.ordering.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

▪ **arr**: *[Nel](_nel_.md#nel)‹A›*

**Returns:** *[Nel](_nel_.md#nel)‹A›*

___

### `Const` tail

▸ **tail**<**A**>(`nel`: [Nel](_nel_.md#nel)‹A›): *A[]*

*Defined in [nel.ts:44](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/nel.ts#L44)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`nel` | [Nel](_nel_.md#nel)‹A› |

**Returns:** *A[]*
