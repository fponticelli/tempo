---
id: "_result_"
title: "result"
sidebar_label: "result"
---

## Index

### Type aliases

* [Failure](_result_.md#failure)
* [Result](_result_.md#result)
* [Success](_result_.md#success)
* [T](_result_.md#t)

### Functions

* [all](_result_.md#const-all)
* [any](_result_.md#const-any)
* [ap](_result_.md#const-ap)
* [apN](_result_.md#apn)
* [apNWithCombine](_result_.md#apnwithcombine)
* [cata](_result_.md#const-cata)
* [cataLazy](_result_.md#const-catalazy)
* [combine](_result_.md#const-combine)
* [each](_result_.md#const-each)
* [equals](_result_.md#const-equals)
* [failure](_result_.md#const-failure)
* [filter](_result_.md#const-filter)
* [filterLazy](_result_.md#const-filterlazy)
* [firstSuccess](_result_.md#const-firstsuccess)
* [flatMap](_result_.md#const-flatmap)
* [flatMapN](_result_.md#flatmapn)
* [flatMapNWithCombine](_result_.md#flatmapnwithcombine)
* [flatten](_result_.md#const-flatten)
* [foldLeft](_result_.md#const-foldleft)
* [forEach](_result_.md#const-foreach)
* [getOrElse](_result_.md#const-getorelse)
* [getOrElseLazy](_result_.md#const-getorelselazy)
* [getOrThrow](_result_.md#const-getorthrow)
* [isFailure](_result_.md#const-isfailure)
* [isSuccess](_result_.md#const-issuccess)
* [map](_result_.md#const-map)
* [mapError](_result_.md#const-maperror)
* [mapN](_result_.md#mapn)
* [mapNWithCombine](_result_.md#mapnwithcombine)
* [ofNullable](_result_.md#const-ofnullable)
* [recover](_result_.md#const-recover)
* [recoverFromError](_result_.md#const-recoverfromerror)
* [spread](_result_.md#const-spread)
* [success](_result_.md#const-success)
* [swap](_result_.md#const-swap)
* [toArray](_result_.md#const-toarray)
* [toBoolean](_result_.md#const-toboolean)
* [toMaybe](_result_.md#const-tomaybe)
* [toOption](_result_.md#const-tooption)

## Type aliases

###  Failure

Ƭ **Failure**: *object*

*Defined in [result.ts:20](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L20)*

#### Type declaration:

* **error**: *E*

* **kind**: *"Failure"*

___

###  Result

Ƭ **Result**: *[Success](_result_.md#success)‹T› | [Failure](_result_.md#failure)‹E›*

*Defined in [result.ts:22](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L22)*

___

###  Success

Ƭ **Success**: *object*

*Defined in [result.ts:19](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L19)*

#### Type declaration:

* **kind**: *"Success"*

* **value**: *T*

___

###  T

Ƭ **T**: *[Result](_result_.md#result)‹V, E›*

*Defined in [result.ts:435](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L435)*

## Functions

### `Const` all

▸ **all**<**T**, **E**>(`f`: function, `result`: [Result](_result_.md#result)‹T, E›): *boolean*

*Defined in [result.ts:376](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L376)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **result**: *[Result](_result_.md#result)‹T, E›*

**Returns:** *boolean*

___

### `Const` any

▸ **any**<**T**, **E**>(`f`: function, `result`: [Result](_result_.md#result)‹T, E›): *boolean*

*Defined in [result.ts:383](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L383)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **result**: *[Result](_result_.md#result)‹T, E›*

**Returns:** *boolean*

___

### `Const` ap

▸ **ap**<**A**, **B**, **Err**>(`resultf`: [Result](_result_.md#result)‹function, Err›, `result`: [Result](_result_.md#result)‹A, Err›): *[Result](_result_.md#result)‹B, Err›*

*Defined in [result.ts:36](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L36)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`resultf` | [Result](_result_.md#result)‹function, Err› |
`result` | [Result](_result_.md#result)‹A, Err› |

**Returns:** *[Result](_result_.md#result)‹B, Err›*

___

###  apN

▸ **apN**<**A**, **B**, **C**, **Err**>(`f`: [Result](_result_.md#result)‹[Fun2](_types_functions_.md#fun2)‹A, B, C›, Err›, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›): *[Result](_result_.md#result)‹C, Err›*

*Defined in [result.ts:38](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L38)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Result](_result_.md#result)‹[Fun2](_types_functions_.md#fun2)‹A, B, C›, Err› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |

**Returns:** *[Result](_result_.md#result)‹C, Err›*

▸ **apN**<**A**, **B**, **C**, **D**, **Err**>(`f`: [Result](_result_.md#result)‹[Fun3](_types_functions_.md#fun3)‹A, B, C, D›, Err›, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›): *[Result](_result_.md#result)‹D, Err›*

*Defined in [result.ts:39](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L39)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Result](_result_.md#result)‹[Fun3](_types_functions_.md#fun3)‹A, B, C, D›, Err› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |

**Returns:** *[Result](_result_.md#result)‹D, Err›*

▸ **apN**<**A**, **B**, **C**, **D**, **E**, **Err**>(`f`: [Result](_result_.md#result)‹[Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, Err›, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›): *[Result](_result_.md#result)‹E, Err›*

*Defined in [result.ts:42](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L42)*

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
`f` | [Result](_result_.md#result)‹[Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, Err› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |
`d` | [Result](_result_.md#result)‹D, Err› |

**Returns:** *[Result](_result_.md#result)‹E, Err›*

▸ **apN**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**>(`f`: [Result](_result_.md#result)‹[Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, Err›, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›): *[Result](_result_.md#result)‹F, Err›*

*Defined in [result.ts:45](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L45)*

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
`f` | [Result](_result_.md#result)‹[Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, Err› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |
`d` | [Result](_result_.md#result)‹D, Err› |
`e` | [Result](_result_.md#result)‹E, Err› |

**Returns:** *[Result](_result_.md#result)‹F, Err›*

▸ **apN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**>(`f`: [Result](_result_.md#result)‹[Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, Err›, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›, `g`: [Result](_result_.md#result)‹F, Err›): *[Result](_result_.md#result)‹G, Err›*

*Defined in [result.ts:48](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L48)*

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
`f` | [Result](_result_.md#result)‹[Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, Err› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |
`d` | [Result](_result_.md#result)‹D, Err› |
`e` | [Result](_result_.md#result)‹E, Err› |
`g` | [Result](_result_.md#result)‹F, Err› |

**Returns:** *[Result](_result_.md#result)‹G, Err›*

___

###  apNWithCombine

▸ **apNWithCombine**<**A**, **B**, **C**, **Err**>(`f`: [Result](_result_.md#result)‹[Fun2](_types_functions_.md#fun2)‹A, B, C›, Err›, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›): *[Result](_result_.md#result)‹C, Err›*

*Defined in [result.ts:60](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L60)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

**Parameters:**

▪ **f**: *[Result](_result_.md#result)‹[Fun2](_types_functions_.md#fun2)‹A, B, C›, Err›*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

**Returns:** *[Result](_result_.md#result)‹C, Err›*

▸ **apNWithCombine**<**A**, **B**, **C**, **D**, **Err**>(`f`: [Result](_result_.md#result)‹[Fun3](_types_functions_.md#fun3)‹A, B, C, D›, Err›, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›): *[Result](_result_.md#result)‹D, Err›*

*Defined in [result.ts:64](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L64)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Err**

**Parameters:**

▪ **f**: *[Result](_result_.md#result)‹[Fun3](_types_functions_.md#fun3)‹A, B, C, D›, Err›*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

**Returns:** *[Result](_result_.md#result)‹D, Err›*

▸ **apNWithCombine**<**A**, **B**, **C**, **D**, **E**, **Err**>(`f`: [Result](_result_.md#result)‹[Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, Err›, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›): *[Result](_result_.md#result)‹E, Err›*

*Defined in [result.ts:68](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L68)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **Err**

**Parameters:**

▪ **f**: *[Result](_result_.md#result)‹[Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, Err›*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

▪ **d**: *[Result](_result_.md#result)‹D, Err›*

**Returns:** *[Result](_result_.md#result)‹E, Err›*

▸ **apNWithCombine**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**>(`f`: [Result](_result_.md#result)‹[Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, Err›, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›): *[Result](_result_.md#result)‹F, Err›*

*Defined in [result.ts:72](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L72)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **Err**

**Parameters:**

▪ **f**: *[Result](_result_.md#result)‹[Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, Err›*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

▪ **d**: *[Result](_result_.md#result)‹D, Err›*

▪ **e**: *[Result](_result_.md#result)‹E, Err›*

**Returns:** *[Result](_result_.md#result)‹F, Err›*

▸ **apNWithCombine**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**>(`f`: [Result](_result_.md#result)‹[Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, Err›, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›, `g`: [Result](_result_.md#result)‹F, Err›): *[Result](_result_.md#result)‹G, Err›*

*Defined in [result.ts:76](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L76)*

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

▪ **f**: *[Result](_result_.md#result)‹[Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, Err›*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

▪ **d**: *[Result](_result_.md#result)‹D, Err›*

▪ **e**: *[Result](_result_.md#result)‹E, Err›*

▪ **g**: *[Result](_result_.md#result)‹F, Err›*

**Returns:** *[Result](_result_.md#result)‹G, Err›*

___

### `Const` cata

▸ **cata**<**A**, **B**, **Err**>(`f`: function, `result`: [Result](_result_.md#result)‹A, Err›, `ifNone`: B): *B*

*Defined in [result.ts:355](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L355)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Err**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **result**: *[Result](_result_.md#result)‹A, Err›*

▪ **ifNone**: *B*

**Returns:** *B*

___

### `Const` cataLazy

▸ **cataLazy**<**A**, **B**, **Err**>(`f`: function, `result`: [Result](_result_.md#result)‹A, Err›, `ifNone`: function): *B*

*Defined in [result.ts:362](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L362)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Err**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **result**: *[Result](_result_.md#result)‹A, Err›*

▪ **ifNone**: *function*

▸ (): *B*

**Returns:** *B*

___

### `Const` combine

▸ **combine**<**A**, **B**, **Err**>(`a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›): *[Result](_result_.md#result)‹[A, B], Err›*

*Defined in [result.ts:429](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L429)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |

**Returns:** *[Result](_result_.md#result)‹[A, B], Err›*

___

### `Const` each

▸ **each**<**T**, **E**>(`f`: function, `result`: [Result](_result_.md#result)‹T, E›): *void*

*Defined in [result.ts:390](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L390)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **result**: *[Result](_result_.md#result)‹T, E›*

**Returns:** *void*

___

### `Const` equals

▸ **equals**<**T**, **E**>(`predicate`: function, `a`: [Result](_result_.md#result)‹T, E›, `b`: [Result](_result_.md#result)‹T, E›): *boolean*

*Defined in [result.ts:263](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L263)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **predicate**: *function*

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

▪ **a**: *[Result](_result_.md#result)‹T, E›*

▪ **b**: *[Result](_result_.md#result)‹T, E›*

**Returns:** *boolean*

___

### `Const` failure

▸ **failure**<**T**, **E**>(`error`: E): *[Result](_result_.md#result)‹T, E›*

*Defined in [result.ts:27](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L27)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`error` | E |

**Returns:** *[Result](_result_.md#result)‹T, E›*

___

### `Const` filter

▸ **filter**<**T**, **E**>(`predicate`: function, `error`: E, `result`: [Result](_result_.md#result)‹T, E›): *[Result](_result_.md#result)‹T, E›*

*Defined in [result.ts:275](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L275)*

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

▪ **result**: *[Result](_result_.md#result)‹T, E›*

**Returns:** *[Result](_result_.md#result)‹T, E›*

___

### `Const` filterLazy

▸ **filterLazy**<**T**, **E**>(`predicate`: function, `errorf`: function, `result`: [Result](_result_.md#result)‹T, E›): *[Result](_result_.md#result)‹T, E›*

*Defined in [result.ts:287](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L287)*

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

▪ **result**: *[Result](_result_.md#result)‹T, E›*

**Returns:** *[Result](_result_.md#result)‹T, E›*

___

### `Const` firstSuccess

▸ **firstSuccess**<**A**, **Err**>(...`args`: [Result](_result_.md#result)‹A, Err›[]): *[Result](_result_.md#result)‹A, Err›*

*Defined in [result.ts:397](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L397)*

**Type parameters:**

▪ **A**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Result](_result_.md#result)‹A, Err›[] |

**Returns:** *[Result](_result_.md#result)‹A, Err›*

___

### `Const` flatMap

▸ **flatMap**<**A**, **B**, **Err**>(`f`: function, `result`: [Result](_result_.md#result)‹A, Err›): *[Result](_result_.md#result)‹B, Err›*

*Defined in [result.ts:186](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L186)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Err**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *[Result](_result_.md#result)‹B, Err›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **result**: *[Result](_result_.md#result)‹A, Err›*

**Returns:** *[Result](_result_.md#result)‹B, Err›*

___

###  flatMapN

▸ **flatMapN**<**A**, **B**, **C**, **Err**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, [Result](_result_.md#result)‹C, Err››, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›): *[Result](_result_.md#result)‹C, Err›*

*Defined in [result.ts:193](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L193)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun2](_types_functions_.md#fun2)‹A, B, [Result](_result_.md#result)‹C, Err›› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |

**Returns:** *[Result](_result_.md#result)‹C, Err›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **Err**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, [Result](_result_.md#result)‹D, Err››, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›): *[Result](_result_.md#result)‹D, Err›*

*Defined in [result.ts:196](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L196)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun3](_types_functions_.md#fun3)‹A, B, C, [Result](_result_.md#result)‹D, Err›› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |

**Returns:** *[Result](_result_.md#result)‹D, Err›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **Err**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [Result](_result_.md#result)‹E, Err››, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›): *[Result](_result_.md#result)‹E, Err›*

*Defined in [result.ts:199](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L199)*

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
`f` | [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [Result](_result_.md#result)‹E, Err›› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |
`d` | [Result](_result_.md#result)‹D, Err› |

**Returns:** *[Result](_result_.md#result)‹E, Err›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [Result](_result_.md#result)‹F, Err››, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›): *[Result](_result_.md#result)‹F, Err›*

*Defined in [result.ts:202](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L202)*

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
`f` | [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [Result](_result_.md#result)‹F, Err›› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |
`d` | [Result](_result_.md#result)‹D, Err› |
`e` | [Result](_result_.md#result)‹E, Err› |

**Returns:** *[Result](_result_.md#result)‹F, Err›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [Result](_result_.md#result)‹G, Err››, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›, `g`: [Result](_result_.md#result)‹F, Err›): *[Result](_result_.md#result)‹G, Err›*

*Defined in [result.ts:205](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L205)*

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
`f` | [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [Result](_result_.md#result)‹G, Err›› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |
`d` | [Result](_result_.md#result)‹D, Err› |
`e` | [Result](_result_.md#result)‹E, Err› |
`g` | [Result](_result_.md#result)‹F, Err› |

**Returns:** *[Result](_result_.md#result)‹G, Err›*

___

###  flatMapNWithCombine

▸ **flatMapNWithCombine**<**A**, **B**, **C**, **Err**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, [Result](_result_.md#result)‹C, Err››, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›): *[Result](_result_.md#result)‹C, Err›*

*Defined in [result.ts:221](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L221)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

**Parameters:**

▪ **f**: *[Fun2](_types_functions_.md#fun2)‹A, B, [Result](_result_.md#result)‹C, Err››*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

**Returns:** *[Result](_result_.md#result)‹C, Err›*

▸ **flatMapNWithCombine**<**A**, **B**, **C**, **D**, **Err**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, [Result](_result_.md#result)‹D, Err››, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›): *[Result](_result_.md#result)‹D, Err›*

*Defined in [result.ts:225](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L225)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Err**

**Parameters:**

▪ **f**: *[Fun3](_types_functions_.md#fun3)‹A, B, C, [Result](_result_.md#result)‹D, Err››*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

**Returns:** *[Result](_result_.md#result)‹D, Err›*

▸ **flatMapNWithCombine**<**A**, **B**, **C**, **D**, **E**, **Err**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [Result](_result_.md#result)‹E, Err››, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›): *[Result](_result_.md#result)‹E, Err›*

*Defined in [result.ts:229](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L229)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **Err**

**Parameters:**

▪ **f**: *[Fun4](_types_functions_.md#fun4)‹A, B, C, D, [Result](_result_.md#result)‹E, Err››*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

▪ **d**: *[Result](_result_.md#result)‹D, Err›*

**Returns:** *[Result](_result_.md#result)‹E, Err›*

▸ **flatMapNWithCombine**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [Result](_result_.md#result)‹F, Err››, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›): *[Result](_result_.md#result)‹F, Err›*

*Defined in [result.ts:233](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L233)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **Err**

**Parameters:**

▪ **f**: *[Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [Result](_result_.md#result)‹F, Err››*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

▪ **d**: *[Result](_result_.md#result)‹D, Err›*

▪ **e**: *[Result](_result_.md#result)‹E, Err›*

**Returns:** *[Result](_result_.md#result)‹F, Err›*

▸ **flatMapNWithCombine**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [Result](_result_.md#result)‹G, Err››, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›, `g`: [Result](_result_.md#result)‹F, Err›): *[Result](_result_.md#result)‹G, Err›*

*Defined in [result.ts:237](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L237)*

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

▪ **f**: *[Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [Result](_result_.md#result)‹G, Err››*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

▪ **d**: *[Result](_result_.md#result)‹D, Err›*

▪ **e**: *[Result](_result_.md#result)‹E, Err›*

▪ **g**: *[Result](_result_.md#result)‹F, Err›*

**Returns:** *[Result](_result_.md#result)‹G, Err›*

___

### `Const` flatten

▸ **flatten**<**T**, **E**>(`result`: [Result](_result_.md#result)‹[Result](_result_.md#result)‹T, E›, E›): *[Result](_result_.md#result)‹T, E›*

*Defined in [result.ts:348](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L348)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹[Result](_result_.md#result)‹T, E›, E› |

**Returns:** *[Result](_result_.md#result)‹T, E›*

___

### `Const` foldLeft

▸ **foldLeft**<**T**, **B**, **Err**>(`f`: function, `result`: [Result](_result_.md#result)‹T, Err›, `b`: B): *B*

*Defined in [result.ts:369](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L369)*

**Type parameters:**

▪ **T**

▪ **B**

▪ **Err**

**Parameters:**

▪ **f**: *function*

▸ (`acc`: B, `curr`: T): *B*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | B |
`curr` | T |

▪ **result**: *[Result](_result_.md#result)‹T, Err›*

▪ **b**: *B*

**Returns:** *B*

___

### `Const` forEach

▸ **forEach**<**A**, **Err**>(`f`: function, `result`: [Result](_result_.md#result)‹A, Err›): *void*

*Defined in [result.ts:103](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L103)*

**Type parameters:**

▪ **A**

▪ **Err**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **result**: *[Result](_result_.md#result)‹A, Err›*

**Returns:** *void*

___

### `Const` getOrElse

▸ **getOrElse**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›, `alt`: T): *T*

*Defined in [result.ts:306](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L306)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹T, E› |
`alt` | T |

**Returns:** *T*

___

### `Const` getOrElseLazy

▸ **getOrElseLazy**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›, `alt`: function): *T*

*Defined in [result.ts:313](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L313)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **result**: *[Result](_result_.md#result)‹T, E›*

▪ **alt**: *function*

▸ (): *T*

**Returns:** *T*

___

### `Const` getOrThrow

▸ **getOrThrow**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [result.ts:299](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L299)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹T, E› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` isFailure

▸ **isFailure**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›): *result is Failure<E>*

*Defined in [result.ts:272](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L272)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹T, E› |

**Returns:** *result is Failure<E>*

___

### `Const` isSuccess

▸ **isSuccess**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›): *result is Success<T>*

*Defined in [result.ts:273](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L273)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹T, E› |

**Returns:** *result is Success<T>*

___

### `Const` map

▸ **map**<**A**, **B**, **Err**>(`f`: function, `result`: [Result](_result_.md#result)‹A, Err›): *[Result](_result_.md#result)‹B, Err›*

*Defined in [result.ts:110](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L110)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Err**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **result**: *[Result](_result_.md#result)‹A, Err›*

**Returns:** *[Result](_result_.md#result)‹B, Err›*

___

### `Const` mapError

▸ **mapError**<**A**, **E1**, **E2**>(`f`: function, `result`: [Result](_result_.md#result)‹A, E1›): *[Result](_result_.md#result)‹A, E2›*

*Defined in [result.ts:117](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L117)*

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

▪ **result**: *[Result](_result_.md#result)‹A, E1›*

**Returns:** *[Result](_result_.md#result)‹A, E2›*

___

###  mapN

▸ **mapN**<**A**, **B**, **C**, **Err**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, C›, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›): *[Result](_result_.md#result)‹C, Err›*

*Defined in [result.ts:124](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L124)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun2](_types_functions_.md#fun2)‹A, B, C› |
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |

**Returns:** *[Result](_result_.md#result)‹C, Err›*

▸ **mapN**<**A**, **B**, **C**, **D**, **Err**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, D›, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›): *[Result](_result_.md#result)‹D, Err›*

*Defined in [result.ts:125](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L125)*

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
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |

**Returns:** *[Result](_result_.md#result)‹D, Err›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **Err**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›): *[Result](_result_.md#result)‹E, Err›*

*Defined in [result.ts:126](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L126)*

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
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |
`d` | [Result](_result_.md#result)‹D, Err› |

**Returns:** *[Result](_result_.md#result)‹E, Err›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›): *[Result](_result_.md#result)‹F, Err›*

*Defined in [result.ts:129](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L129)*

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
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |
`d` | [Result](_result_.md#result)‹D, Err› |
`e` | [Result](_result_.md#result)‹E, Err› |

**Returns:** *[Result](_result_.md#result)‹F, Err›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›, `g`: [Result](_result_.md#result)‹F, Err›): *[Result](_result_.md#result)‹G, Err›*

*Defined in [result.ts:132](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L132)*

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
`a` | [Result](_result_.md#result)‹A, Err› |
`b` | [Result](_result_.md#result)‹B, Err› |
`c` | [Result](_result_.md#result)‹C, Err› |
`d` | [Result](_result_.md#result)‹D, Err› |
`e` | [Result](_result_.md#result)‹E, Err› |
`g` | [Result](_result_.md#result)‹F, Err› |

**Returns:** *[Result](_result_.md#result)‹G, Err›*

___

###  mapNWithCombine

▸ **mapNWithCombine**<**A**, **B**, **C**, **Err**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, C›, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›): *[Result](_result_.md#result)‹C, Err›*

*Defined in [result.ts:144](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L144)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

**Parameters:**

▪ **f**: *[Fun2](_types_functions_.md#fun2)‹A, B, C›*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

**Returns:** *[Result](_result_.md#result)‹C, Err›*

▸ **mapNWithCombine**<**A**, **B**, **C**, **D**, **Err**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, D›, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›): *[Result](_result_.md#result)‹D, Err›*

*Defined in [result.ts:148](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L148)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Err**

**Parameters:**

▪ **f**: *[Fun3](_types_functions_.md#fun3)‹A, B, C, D›*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

**Returns:** *[Result](_result_.md#result)‹D, Err›*

▸ **mapNWithCombine**<**A**, **B**, **C**, **D**, **E**, **Err**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›): *[Result](_result_.md#result)‹E, Err›*

*Defined in [result.ts:152](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L152)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **Err**

**Parameters:**

▪ **f**: *[Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

▪ **d**: *[Result](_result_.md#result)‹D, Err›*

**Returns:** *[Result](_result_.md#result)‹E, Err›*

▸ **mapNWithCombine**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›): *[Result](_result_.md#result)‹F, Err›*

*Defined in [result.ts:156](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L156)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **Err**

**Parameters:**

▪ **f**: *[Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

▪ **d**: *[Result](_result_.md#result)‹D, Err›*

▪ **e**: *[Result](_result_.md#result)‹E, Err›*

**Returns:** *[Result](_result_.md#result)‹F, Err›*

▸ **mapNWithCombine**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, `combineErrors`: function, `a`: [Result](_result_.md#result)‹A, Err›, `b`: [Result](_result_.md#result)‹B, Err›, `c`: [Result](_result_.md#result)‹C, Err›, `d`: [Result](_result_.md#result)‹D, Err›, `e`: [Result](_result_.md#result)‹E, Err›, `g`: [Result](_result_.md#result)‹F, Err›): *[Result](_result_.md#result)‹G, Err›*

*Defined in [result.ts:160](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L160)*

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

▪ **f**: *[Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›*

▪ **combineErrors**: *function*

▸ (`e1`: Err, `e2`: Err): *Err*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | Err |
`e2` | Err |

▪ **a**: *[Result](_result_.md#result)‹A, Err›*

▪ **b**: *[Result](_result_.md#result)‹B, Err›*

▪ **c**: *[Result](_result_.md#result)‹C, Err›*

▪ **d**: *[Result](_result_.md#result)‹D, Err›*

▪ **e**: *[Result](_result_.md#result)‹E, Err›*

▪ **g**: *[Result](_result_.md#result)‹F, Err›*

**Returns:** *[Result](_result_.md#result)‹G, Err›*

___

### `Const` ofNullable

▸ **ofNullable**<**T**, **E**>(`value`: T | undefined | null, `error`: E): *[Result](_result_.md#result)‹T, E›*

*Defined in [result.ts:29](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L29)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; undefined &#124; null |
`error` | E |

**Returns:** *[Result](_result_.md#result)‹T, E›*

___

### `Const` recover

▸ **recover**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›, `whenFailure`: T): *[Result](_result_.md#result)‹T, E›*

*Defined in [result.ts:408](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L408)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹T, E› |
`whenFailure` | T |

**Returns:** *[Result](_result_.md#result)‹T, E›*

___

### `Const` recoverFromError

▸ **recoverFromError**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›, `whenFailuref`: function): *object | object*

*Defined in [result.ts:415](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L415)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **result**: *[Result](_result_.md#result)‹T, E›*

▪ **whenFailuref**: *function*

▸ (`e`: E): *T*

**Parameters:**

Name | Type |
------ | ------ |
`e` | E |

**Returns:** *object | object*

___

### `Const` spread

▸ **spread**<**A**, **B**, **C**, **Err**>(`f`: function, `v`: [Result](_result_.md#result)‹[A, B], Err›): *[Result](_result_.md#result)‹C, Err›*

*Defined in [result.ts:432](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L432)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

▪ **v**: *[Result](_result_.md#result)‹[A, B], Err›*

**Returns:** *[Result](_result_.md#result)‹C, Err›*

___

### `Const` success

▸ **success**<**T**, **E**>(`value`: T): *[Result](_result_.md#result)‹T, E›*

*Defined in [result.ts:26](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L26)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Result](_result_.md#result)‹T, E›*

___

### `Const` swap

▸ **swap**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›): *[Result](_result_.md#result)‹E, T›*

*Defined in [result.ts:422](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L422)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹T, E› |

**Returns:** *[Result](_result_.md#result)‹E, T›*

___

### `Const` toArray

▸ **toArray**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›): *T[]*

*Defined in [result.ts:327](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L327)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹T, E› |

**Returns:** *T[]*

___

### `Const` toBoolean

▸ **toBoolean**(`result`: [Result](_result_.md#result)‹unknown, unknown›): *boolean*

*Defined in [result.ts:320](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L320)*

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹unknown, unknown› |

**Returns:** *boolean*

___

### `Const` toMaybe

▸ **toMaybe**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [result.ts:334](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L334)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹T, E› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` toOption

▸ **toOption**<**T**, **E**>(`result`: [Result](_result_.md#result)‹T, E›): *[Option](_option_.md#option)‹T›*

*Defined in [result.ts:341](https://github.com/fponticelli/tempo/blob/master/std/src/result.ts#L341)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Result](_result_.md#result)‹T, E› |

**Returns:** *[Option](_option_.md#option)‹T›*
