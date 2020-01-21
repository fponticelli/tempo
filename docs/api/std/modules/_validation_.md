---
id: "_validation_"
title: "validation"
sidebar_label: "validation"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["validation"](_validation_.md)

## Index

### Type aliases

* [T](_validation_.md#t)
* [Validation](_validation_.md#validation)

### Functions

* [apN](_validation_.md#apn)
* [failure](_validation_.md#const-failure)
* [failures](_validation_.md#const-failures)
* [filter](_validation_.md#const-filter)
* [filterLazy](_validation_.md#const-filterlazy)
* [flatMapN](_validation_.md#flatmapn)
* [flatten](_validation_.md#const-flatten)
* [mapError](_validation_.md#const-maperror)
* [mapN](_validation_.md#mapn)
* [ofNullable](_validation_.md#const-ofnullable)
* [recover](_validation_.md#const-recover)
* [recoverFromError](_validation_.md#const-recoverfromerror)
* [success](_validation_.md#const-success)
* [swap](_validation_.md#const-swap)

## Type aliases

###  T

Ƭ **T**: *[Validation](_validation_.md#validation)‹V, E›*

*Defined in [validation.ts:149](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L149)*

___

###  Validation

Ƭ **Validation**: *Res.T‹T, [Nel](_nel_.md#nel)‹E››*

*Defined in [validation.ts:18](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L18)*

## Functions

###  apN

▸ **apN**<**A**, **B**, **C**, **Err**>(`f`: [Validation](_validation_.md#validation)‹[Fun2](_types_functions_.md#fun2)‹A, B, C›, Err›, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›): *[Validation](_validation_.md#validation)‹C, Err›*

*Defined in [validation.ts:27](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L27)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Validation](_validation_.md#validation)‹[Fun2](_types_functions_.md#fun2)‹A, B, C›, Err› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹C, Err›*

▸ **apN**<**A**, **B**, **C**, **D**, **Err**>(`f`: [Validation](_validation_.md#validation)‹[Fun3](_types_functions_.md#fun3)‹A, B, C, D›, Err›, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›): *[Validation](_validation_.md#validation)‹D, Err›*

*Defined in [validation.ts:28](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L28)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Validation](_validation_.md#validation)‹[Fun3](_types_functions_.md#fun3)‹A, B, C, D›, Err› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹D, Err›*

▸ **apN**<**A**, **B**, **C**, **D**, **E**, **Err**>(`f`: [Validation](_validation_.md#validation)‹[Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, Err›, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›, `d`: [Validation](_validation_.md#validation)‹D, Err›): *[Validation](_validation_.md#validation)‹E, Err›*

*Defined in [validation.ts:31](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L31)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Validation](_validation_.md#validation)‹[Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, Err› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |
`d` | [Validation](_validation_.md#validation)‹D, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹E, Err›*

▸ **apN**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**>(`f`: [Validation](_validation_.md#validation)‹[Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, Err›, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›, `d`: [Validation](_validation_.md#validation)‹D, Err›, `e`: [Validation](_validation_.md#validation)‹E, Err›): *[Validation](_validation_.md#validation)‹F, Err›*

*Defined in [validation.ts:34](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L34)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Validation](_validation_.md#validation)‹[Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, Err› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |
`d` | [Validation](_validation_.md#validation)‹D, Err› |
`e` | [Validation](_validation_.md#validation)‹E, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹F, Err›*

▸ **apN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**>(`f`: [Validation](_validation_.md#validation)‹[Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, Err›, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›, `d`: [Validation](_validation_.md#validation)‹D, Err›, `e`: [Validation](_validation_.md#validation)‹E, Err›, `g`: [Validation](_validation_.md#validation)‹F, Err›): *[Validation](_validation_.md#validation)‹G, Err›*

*Defined in [validation.ts:37](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L37)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Validation](_validation_.md#validation)‹[Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, Err› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |
`d` | [Validation](_validation_.md#validation)‹D, Err› |
`e` | [Validation](_validation_.md#validation)‹E, Err› |
`g` | [Validation](_validation_.md#validation)‹F, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹G, Err›*

___

### `Const` failure

▸ **failure**<**T**, **E**>(`error`: E): *[Validation](_validation_.md#validation)‹T, E›*

*Defined in [validation.ts:21](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L21)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`error` | E |

**Returns:** *[Validation](_validation_.md#validation)‹T, E›*

___

### `Const` failures

▸ **failures**<**T**, **E**>(`errors`: [Nel](_nel_.md#nel)‹E›): *[Validation](_validation_.md#validation)‹T, E›*

*Defined in [validation.ts:22](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L22)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`errors` | [Nel](_nel_.md#nel)‹E› |

**Returns:** *[Validation](_validation_.md#validation)‹T, E›*

___

### `Const` filter

▸ **filter**<**T**, **E**>(`predicate`: function, `error`: E, `result`: [Validation](_validation_.md#validation)‹T, E›): *[Validation](_validation_.md#validation)‹T, E›*

*Defined in [validation.ts:97](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L97)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **predicate**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **error**: *E*

▪ **result**: *[Validation](_validation_.md#validation)‹T, E›*

**Returns:** *[Validation](_validation_.md#validation)‹T, E›*

___

### `Const` filterLazy

▸ **filterLazy**<**T**, **E**>(`predicate`: function, `errorf`: function, `result`: [Validation](_validation_.md#validation)‹T, E›): *[Validation](_validation_.md#validation)‹T, E›*

*Defined in [validation.ts:109](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L109)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **predicate**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **errorf**: *function*

▸ (): *E*

▪ **result**: *[Validation](_validation_.md#validation)‹T, E›*

**Returns:** *[Validation](_validation_.md#validation)‹T, E›*

___

###  flatMapN

▸ **flatMapN**<**A**, **B**, **C**, **Err**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, [Validation](_validation_.md#validation)‹C, Err››, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›): *[Validation](_validation_.md#validation)‹C, Err›*

*Defined in [validation.ts:74](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L74)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun2](_types_functions_.md#fun2)‹A, B, [Validation](_validation_.md#validation)‹C, Err›› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹C, Err›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **Err**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, [Validation](_validation_.md#validation)‹D, Err››, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›): *[Validation](_validation_.md#validation)‹D, Err›*

*Defined in [validation.ts:77](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L77)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun3](_types_functions_.md#fun3)‹A, B, C, [Validation](_validation_.md#validation)‹D, Err›› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹D, Err›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **Err**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [Validation](_validation_.md#validation)‹E, Err››, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›, `d`: [Validation](_validation_.md#validation)‹D, Err›): *[Validation](_validation_.md#validation)‹E, Err›*

*Defined in [validation.ts:80](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L80)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [Validation](_validation_.md#validation)‹E, Err›› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |
`d` | [Validation](_validation_.md#validation)‹D, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹E, Err›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [Validation](_validation_.md#validation)‹F, Err››, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›, `d`: [Validation](_validation_.md#validation)‹D, Err›, `e`: [Validation](_validation_.md#validation)‹E, Err›): *[Validation](_validation_.md#validation)‹F, Err›*

*Defined in [validation.ts:83](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L83)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [Validation](_validation_.md#validation)‹F, Err›› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |
`d` | [Validation](_validation_.md#validation)‹D, Err› |
`e` | [Validation](_validation_.md#validation)‹E, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹F, Err›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [Validation](_validation_.md#validation)‹G, Err››, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›, `d`: [Validation](_validation_.md#validation)‹D, Err›, `e`: [Validation](_validation_.md#validation)‹E, Err›, `g`: [Validation](_validation_.md#validation)‹F, Err›): *[Validation](_validation_.md#validation)‹G, Err›*

*Defined in [validation.ts:86](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L86)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [Validation](_validation_.md#validation)‹G, Err›› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |
`d` | [Validation](_validation_.md#validation)‹D, Err› |
`e` | [Validation](_validation_.md#validation)‹E, Err› |
`g` | [Validation](_validation_.md#validation)‹F, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹G, Err›*

___

### `Const` flatten

▸ **flatten**<**T**, **E**>(`result`: [Validation](_validation_.md#validation)‹[Validation](_validation_.md#validation)‹T, E›, E›): *[Validation](_validation_.md#validation)‹T, E›*

*Defined in [validation.ts:121](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L121)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Validation](_validation_.md#validation)‹[Validation](_validation_.md#validation)‹T, E›, E› |

**Returns:** *[Validation](_validation_.md#validation)‹T, E›*

___

### `Const` mapError

▸ **mapError**<**A**, **E1**, **E2**>(`f`: function, `result`: [Validation](_validation_.md#validation)‹A, E1›): *[Validation](_validation_.md#validation)‹A, E2›*

*Defined in [validation.ts:47](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L47)*

**Type parameters:**

▪ **A**

▪ **E1**

▪ **E2**

**Parameters:**

▪ **f**: *function*

▸ (`e`: E1): *E2*

**Parameters:**

Name | Type |
------ | ------ |
`e` | E1 |

▪ **result**: *[Validation](_validation_.md#validation)‹A, E1›*

**Returns:** *[Validation](_validation_.md#validation)‹A, E2›*

___

###  mapN

▸ **mapN**<**A**, **B**, **C**, **Err**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, C›, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›): *[Validation](_validation_.md#validation)‹C, Err›*

*Defined in [validation.ts:54](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L54)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun2](_types_functions_.md#fun2)‹A, B, C› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹C, Err›*

▸ **mapN**<**A**, **B**, **C**, **D**, **Err**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, D›, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›): *[Validation](_validation_.md#validation)‹D, Err›*

*Defined in [validation.ts:57](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L57)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun3](_types_functions_.md#fun3)‹A, B, C, D› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹D, Err›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **Err**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›, `d`: [Validation](_validation_.md#validation)‹D, Err›): *[Validation](_validation_.md#validation)‹E, Err›*

*Defined in [validation.ts:60](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L60)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun4](_types_functions_.md#fun4)‹A, B, C, D, E› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |
`d` | [Validation](_validation_.md#validation)‹D, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹E, Err›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›, `d`: [Validation](_validation_.md#validation)‹D, Err›, `e`: [Validation](_validation_.md#validation)‹E, Err›): *[Validation](_validation_.md#validation)‹F, Err›*

*Defined in [validation.ts:63](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L63)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |
`d` | [Validation](_validation_.md#validation)‹D, Err› |
`e` | [Validation](_validation_.md#validation)‹E, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹F, Err›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, `a`: [Validation](_validation_.md#validation)‹A, Err›, `b`: [Validation](_validation_.md#validation)‹B, Err›, `c`: [Validation](_validation_.md#validation)‹C, Err›, `d`: [Validation](_validation_.md#validation)‹D, Err›, `e`: [Validation](_validation_.md#validation)‹E, Err›, `g`: [Validation](_validation_.md#validation)‹F, Err›): *[Validation](_validation_.md#validation)‹G, Err›*

*Defined in [validation.ts:66](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L66)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G› |
`a` | [Validation](_validation_.md#validation)‹A, Err› |
`b` | [Validation](_validation_.md#validation)‹B, Err› |
`c` | [Validation](_validation_.md#validation)‹C, Err› |
`d` | [Validation](_validation_.md#validation)‹D, Err› |
`e` | [Validation](_validation_.md#validation)‹E, Err› |
`g` | [Validation](_validation_.md#validation)‹F, Err› |

**Returns:** *[Validation](_validation_.md#validation)‹G, Err›*

___

### `Const` ofNullable

▸ **ofNullable**<**T**, **E**>(`value`: T | undefined | null, `error`: E): *[Validation](_validation_.md#validation)‹T, E›*

*Defined in [validation.ts:24](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L24)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; undefined &#124; null |
`error` | E |

**Returns:** *[Validation](_validation_.md#validation)‹T, E›*

___

### `Const` recover

▸ **recover**<**T**, **E**>(`result`: [Validation](_validation_.md#validation)‹T, E›, `whenFailure`: T): *object | object*

*Defined in [validation.ts:128](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L128)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Validation](_validation_.md#validation)‹T, E› |
`whenFailure` | T |

**Returns:** *object | object*

___

### `Const` recoverFromError

▸ **recoverFromError**<**T**, **E**>(`result`: [Validation](_validation_.md#validation)‹T, E›, `whenFailuref`: function): *object | object*

*Defined in [validation.ts:135](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L135)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **result**: *[Validation](_validation_.md#validation)‹T, E›*

▪ **whenFailuref**: *function*

▸ (`e`: [Nel](_nel_.md#nel)‹E›): *T*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Nel](_nel_.md#nel)‹E› |

**Returns:** *object | object*

___

### `Const` success

▸ **success**<**T**, **E**>(`value`: T): *[Validation](_validation_.md#validation)‹T, E›*

*Defined in [validation.ts:20](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L20)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Validation](_validation_.md#validation)‹T, E›*

___

### `Const` swap

▸ **swap**<**T**, **E**>(`result`: [Validation](_validation_.md#validation)‹T, E›): *Res.T‹[Nel](_nel_.md#nel)‹E›, T›*

*Defined in [validation.ts:142](https://github.com/fponticelli/tempo/blob/master/std/src/validation.ts#L142)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Validation](_validation_.md#validation)‹T, E› |

**Returns:** *Res.T‹[Nel](_nel_.md#nel)‹E›, T›*
