[tempo-std - v0.2.0](../README.md) › [Globals](../globals.md) › ["option"](_option_.md)

# External module: "option"

## Index

### Type aliases

* [None](_option_.md#none)
* [Option](_option_.md#option)
* [Some](_option_.md#some)
* [T](_option_.md#t)

### Variables

* [none](_option_.md#const-none)

### Functions

* [all](_option_.md#const-all)
* [any](_option_.md#const-any)
* [ap](_option_.md#const-ap)
* [apN](_option_.md#apn)
* [cata](_option_.md#const-cata)
* [cataLazy](_option_.md#const-catalazy)
* [combine](_option_.md#const-combine)
* [each](_option_.md#const-each)
* [equals](_option_.md#const-equals)
* [filter](_option_.md#const-filter)
* [firstSome](_option_.md#const-firstsome)
* [flatMap](_option_.md#const-flatmap)
* [flatMapN](_option_.md#flatmapn)
* [flatten](_option_.md#const-flatten)
* [foldLeft](_option_.md#const-foldleft)
* [getOrElse](_option_.md#const-getorelse)
* [getOrElseLazy](_option_.md#const-getorelselazy)
* [getOrThrow](_option_.md#const-getorthrow)
* [isNone](_option_.md#const-isnone)
* [isSome](_option_.md#const-issome)
* [map](_option_.md#const-map)
* [mapN](_option_.md#mapn)
* [ofValue](_option_.md#const-ofvalue)
* [recover](_option_.md#const-recover)
* [recoverLazy](_option_.md#const-recoverlazy)
* [some](_option_.md#const-some)
* [spread](_option_.md#const-spread)
* [toArray](_option_.md#const-toarray)
* [toBoolean](_option_.md#const-toboolean)
* [toMaybe](_option_.md#const-tomaybe)
* [toResult](_option_.md#const-toresult)
* [toResultLazy](_option_.md#const-toresultlazy)

## Type aliases

###  None

Ƭ **None**: *object*

*Defined in [option.ts:20](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L20)*

#### Type declaration:

* **kind**: *"none"*

___

###  Option

Ƭ **Option**: *[Some](_option_.md#some)‹T› | [None](_option_.md#none)*

*Defined in [option.ts:22](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L22)*

___

###  Some

Ƭ **Some**: *object*

*Defined in [option.ts:19](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L19)*

#### Type declaration:

* **kind**: *"some"*

* **value**: *T*

___

###  T

Ƭ **T**: *[Option](_option_.md#option)‹V›*

*Defined in [option.ts:263](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L263)*

## Variables

### `Const` none

• **none**: *object | object* = { kind: 'none' } as Option<never>

*Defined in [option.ts:27](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L27)*

## Functions

### `Const` all

▸ **all**<**T**>(`f`: function, `option`: [Option](_option_.md#option)‹T›): *boolean*

*Defined in [option.ts:214](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L214)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **option**: *[Option](_option_.md#option)‹T›*

**Returns:** *boolean*

___

### `Const` any

▸ **any**<**T**>(`f`: function, `option`: [Option](_option_.md#option)‹T›): *boolean*

*Defined in [option.ts:221](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L221)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **option**: *[Option](_option_.md#option)‹T›*

**Returns:** *boolean*

___

### `Const` ap

▸ **ap**<**A**, **B**>(`optf`: [Option](_option_.md#option)‹function›, `opt`: [Option](_option_.md#option)‹A›): *[Option](_option_.md#option)‹B›*

*Defined in [option.ts:35](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L35)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`optf` | [Option](_option_.md#option)‹function› |
`opt` | [Option](_option_.md#option)‹A› |

**Returns:** *[Option](_option_.md#option)‹B›*

___

###  apN

▸ **apN**<**A**, **B**, **C**>(`f`: [Option](_option_.md#option)‹[Fun2](_types_functions_.md#fun2)‹A, B, C››, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›): *[Option](_option_.md#option)‹C›*

*Defined in [option.ts:38](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L38)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Option](_option_.md#option)‹[Fun2](_types_functions_.md#fun2)‹A, B, C›› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |

**Returns:** *[Option](_option_.md#option)‹C›*

▸ **apN**<**A**, **B**, **C**, **D**>(`f`: [Option](_option_.md#option)‹[Fun3](_types_functions_.md#fun3)‹A, B, C, D››, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›): *[Option](_option_.md#option)‹D›*

*Defined in [option.ts:39](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L39)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Option](_option_.md#option)‹[Fun3](_types_functions_.md#fun3)‹A, B, C, D›› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |

**Returns:** *[Option](_option_.md#option)‹D›*

▸ **apN**<**A**, **B**, **C**, **D**, **E**>(`f`: [Option](_option_.md#option)‹[Fun4](_types_functions_.md#fun4)‹A, B, C, D, E››, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›, `d`: [Option](_option_.md#option)‹D›): *[Option](_option_.md#option)‹E›*

*Defined in [option.ts:40](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L40)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Option](_option_.md#option)‹[Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |
`d` | [Option](_option_.md#option)‹D› |

**Returns:** *[Option](_option_.md#option)‹E›*

▸ **apN**<**A**, **B**, **C**, **D**, **E**, **F**>(`f`: [Option](_option_.md#option)‹[Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F››, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›, `d`: [Option](_option_.md#option)‹D›, `e`: [Option](_option_.md#option)‹E›): *[Option](_option_.md#option)‹F›*

*Defined in [option.ts:43](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L43)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Option](_option_.md#option)‹[Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |
`d` | [Option](_option_.md#option)‹D› |
`e` | [Option](_option_.md#option)‹E› |

**Returns:** *[Option](_option_.md#option)‹F›*

▸ **apN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`f`: [Option](_option_.md#option)‹[Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G››, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›, `d`: [Option](_option_.md#option)‹D›, `e`: [Option](_option_.md#option)‹E›, `g`: [Option](_option_.md#option)‹F›): *[Option](_option_.md#option)‹G›*

*Defined in [option.ts:46](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L46)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Option](_option_.md#option)‹[Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |
`d` | [Option](_option_.md#option)‹D› |
`e` | [Option](_option_.md#option)‹E› |
`g` | [Option](_option_.md#option)‹F› |

**Returns:** *[Option](_option_.md#option)‹G›*

___

### `Const` cata

▸ **cata**<**A**, **B**>(`f`: function, `option`: [Option](_option_.md#option)‹A›, `ifNone`: B): *B*

*Defined in [option.ts:193](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L193)*

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

▪ **option**: *[Option](_option_.md#option)‹A›*

▪ **ifNone**: *B*

**Returns:** *B*

___

### `Const` cataLazy

▸ **cataLazy**<**A**, **B**>(`f`: function, `option`: [Option](_option_.md#option)‹A›, `ifNone`: function): *B*

*Defined in [option.ts:200](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L200)*

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

▪ **option**: *[Option](_option_.md#option)‹A›*

▪ **ifNone**: *function*

▸ (): *B*

**Returns:** *B*

___

### `Const` combine

▸ **combine**<**A**, **B**>(`a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›): *[Option](_option_.md#option)‹[A, B]›*

*Defined in [option.ts:257](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L257)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |

**Returns:** *[Option](_option_.md#option)‹[A, B]›*

___

### `Const` each

▸ **each**<**T**>(`f`: function, `option`: [Option](_option_.md#option)‹T›): *void*

*Defined in [option.ts:228](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L228)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **option**: *[Option](_option_.md#option)‹T›*

**Returns:** *void*

___

### `Const` equals

▸ **equals**<**T**>(`predicate`: function, `a`: [Option](_option_.md#option)‹T›, `b`: [Option](_option_.md#option)‹T›): *boolean*

*Defined in [option.ts:106](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L106)*

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

▪ **a**: *[Option](_option_.md#option)‹T›*

▪ **b**: *[Option](_option_.md#option)‹T›*

**Returns:** *boolean*

___

### `Const` filter

▸ **filter**<**T**>(`predicate`: function, `option`: [Option](_option_.md#option)‹T›): *[Option](_option_.md#option)‹T›*

*Defined in [option.ts:118](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L118)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **option**: *[Option](_option_.md#option)‹T›*

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` firstSome

▸ **firstSome**<**A**>(...`args`: [Option](_option_.md#option)‹A›[]): *[Option](_option_.md#option)‹A›*

*Defined in [option.ts:235](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L235)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Option](_option_.md#option)‹A›[] |

**Returns:** *[Option](_option_.md#option)‹A›*

___

### `Const` flatMap

▸ **flatMap**<**A**, **B**>(`f`: function, `opt`: [Option](_option_.md#option)‹A›): *[Option](_option_.md#option)‹B›*

*Defined in [option.ts:83](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L83)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *[Option](_option_.md#option)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **opt**: *[Option](_option_.md#option)‹A›*

**Returns:** *[Option](_option_.md#option)‹B›*

___

###  flatMapN

▸ **flatMapN**<**A**, **B**, **C**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, [Option](_option_.md#option)‹C››, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›): *[Option](_option_.md#option)‹C›*

*Defined in [option.ts:90](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L90)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun2](_types_functions_.md#fun2)‹A, B, [Option](_option_.md#option)‹C›› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |

**Returns:** *[Option](_option_.md#option)‹C›*

▸ **flatMapN**<**A**, **B**, **C**, **D**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, [Option](_option_.md#option)‹D››, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›): *[Option](_option_.md#option)‹D›*

*Defined in [option.ts:91](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L91)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun3](_types_functions_.md#fun3)‹A, B, C, [Option](_option_.md#option)‹D›› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |

**Returns:** *[Option](_option_.md#option)‹D›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [Option](_option_.md#option)‹E››, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›, `d`: [Option](_option_.md#option)‹D›): *[Option](_option_.md#option)‹E›*

*Defined in [option.ts:92](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L92)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [Option](_option_.md#option)‹E›› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |
`d` | [Option](_option_.md#option)‹D› |

**Returns:** *[Option](_option_.md#option)‹E›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **F**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [Option](_option_.md#option)‹F››, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›, `d`: [Option](_option_.md#option)‹D›, `e`: [Option](_option_.md#option)‹E›): *[Option](_option_.md#option)‹F›*

*Defined in [option.ts:93](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L93)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [Option](_option_.md#option)‹F›› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |
`d` | [Option](_option_.md#option)‹D› |
`e` | [Option](_option_.md#option)‹E› |

**Returns:** *[Option](_option_.md#option)‹F›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [Option](_option_.md#option)‹G››, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›, `d`: [Option](_option_.md#option)‹D›, `e`: [Option](_option_.md#option)‹E›, `g`: [Option](_option_.md#option)‹F›): *[Option](_option_.md#option)‹G›*

*Defined in [option.ts:96](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L96)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [Option](_option_.md#option)‹G›› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |
`d` | [Option](_option_.md#option)‹D› |
`e` | [Option](_option_.md#option)‹E› |
`g` | [Option](_option_.md#option)‹F› |

**Returns:** *[Option](_option_.md#option)‹G›*

___

### `Const` flatten

▸ **flatten**<**T**>(`option`: [Option](_option_.md#option)‹[Option](_option_.md#option)‹T››): *[Option](_option_.md#option)‹T›*

*Defined in [option.ts:186](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L186)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹[Option](_option_.md#option)‹T›› |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` foldLeft

▸ **foldLeft**<**T**, **B**>(`f`: function, `option`: [Option](_option_.md#option)‹T›, `b`: B): *B*

*Defined in [option.ts:207](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L207)*

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

▪ **option**: *[Option](_option_.md#option)‹T›*

▪ **b**: *B*

**Returns:** *B*

___

### `Const` getOrElse

▸ **getOrElse**<**T**>(`option`: [Option](_option_.md#option)‹T›, `alt`: T): *T*

*Defined in [option.ts:144](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L144)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹T› |
`alt` | T |

**Returns:** *T*

___

### `Const` getOrElseLazy

▸ **getOrElseLazy**<**T**>(`option`: [Option](_option_.md#option)‹T›, `alt`: function): *T*

*Defined in [option.ts:151](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L151)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **option**: *[Option](_option_.md#option)‹T›*

▪ **alt**: *function*

▸ (): *T*

**Returns:** *T*

___

### `Const` getOrThrow

▸ **getOrThrow**<**T**, **E**>(`option`: [Option](_option_.md#option)‹T›, `exception`: E): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [option.ts:130](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L130)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹T› |
`exception` | E |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` isNone

▸ **isNone**<**T**>(`option`: [Option](_option_.md#option)‹T›): *option is None*

*Defined in [option.ts:115](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L115)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹T› |

**Returns:** *option is None*

___

### `Const` isSome

▸ **isSome**<**T**>(`option`: [Option](_option_.md#option)‹T›): *option is Some<T>*

*Defined in [option.ts:116](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L116)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹T› |

**Returns:** *option is Some<T>*

___

### `Const` map

▸ **map**<**A**, **B**>(`f`: function, `opt`: [Option](_option_.md#option)‹A›): *[Option](_option_.md#option)‹B›*

*Defined in [option.ts:58](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L58)*

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

▪ **opt**: *[Option](_option_.md#option)‹A›*

**Returns:** *[Option](_option_.md#option)‹B›*

___

###  mapN

▸ **mapN**<**A**, **B**, **C**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, C›, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›): *[Option](_option_.md#option)‹C›*

*Defined in [option.ts:65](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L65)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun2](_types_functions_.md#fun2)‹A, B, C› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |

**Returns:** *[Option](_option_.md#option)‹C›*

▸ **mapN**<**A**, **B**, **C**, **D**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, D›, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›): *[Option](_option_.md#option)‹D›*

*Defined in [option.ts:66](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L66)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun3](_types_functions_.md#fun3)‹A, B, C, D› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |

**Returns:** *[Option](_option_.md#option)‹D›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›, `d`: [Option](_option_.md#option)‹D›): *[Option](_option_.md#option)‹E›*

*Defined in [option.ts:67](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L67)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun4](_types_functions_.md#fun4)‹A, B, C, D, E› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |
`d` | [Option](_option_.md#option)‹D› |

**Returns:** *[Option](_option_.md#option)‹E›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **F**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›, `d`: [Option](_option_.md#option)‹D›, `e`: [Option](_option_.md#option)‹E›): *[Option](_option_.md#option)‹F›*

*Defined in [option.ts:70](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L70)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |
`d` | [Option](_option_.md#option)‹D› |
`e` | [Option](_option_.md#option)‹E› |

**Returns:** *[Option](_option_.md#option)‹F›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, `a`: [Option](_option_.md#option)‹A›, `b`: [Option](_option_.md#option)‹B›, `c`: [Option](_option_.md#option)‹C›, `d`: [Option](_option_.md#option)‹D›, `e`: [Option](_option_.md#option)‹E›, `g`: [Option](_option_.md#option)‹F›): *[Option](_option_.md#option)‹G›*

*Defined in [option.ts:73](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L73)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G› |
`a` | [Option](_option_.md#option)‹A› |
`b` | [Option](_option_.md#option)‹B› |
`c` | [Option](_option_.md#option)‹C› |
`d` | [Option](_option_.md#option)‹D› |
`e` | [Option](_option_.md#option)‹E› |
`g` | [Option](_option_.md#option)‹F› |

**Returns:** *[Option](_option_.md#option)‹G›*

___

### `Const` ofValue

▸ **ofValue**<**T**>(`value`: T | undefined | null): *[Option](_option_.md#option)‹T›*

*Defined in [option.ts:28](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L28)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; undefined &#124; null |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` recover

▸ **recover**<**T**>(`result`: [Option](_option_.md#option)‹T›, `whenFailure`: T): *object | object*

*Defined in [option.ts:243](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L243)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`result` | [Option](_option_.md#option)‹T› |
`whenFailure` | T |

**Returns:** *object | object*

___

### `Const` recoverLazy

▸ **recoverLazy**<**T**>(`result`: [Option](_option_.md#option)‹T›, `whenFailuref`: function): *object | object*

*Defined in [option.ts:250](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L250)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **result**: *[Option](_option_.md#option)‹T›*

▪ **whenFailuref**: *function*

▸ (): *T*

**Returns:** *object | object*

___

### `Const` some

▸ **some**<**T**>(`value`: T): *[Option](_option_.md#option)‹T›*

*Defined in [option.ts:26](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L26)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` spread

▸ **spread**<**A**, **B**, **C**>(`f`: function, `v`: [Option](_option_.md#option)‹[A, B]›): *[Option](_option_.md#option)‹C›*

*Defined in [option.ts:260](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L260)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

▪ **v**: *[Option](_option_.md#option)‹[A, B]›*

**Returns:** *[Option](_option_.md#option)‹C›*

___

### `Const` toArray

▸ **toArray**<**T**>(`option`: [Option](_option_.md#option)‹T›): *T[]*

*Defined in [option.ts:165](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L165)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹T› |

**Returns:** *T[]*

___

### `Const` toBoolean

▸ **toBoolean**(`option`: [Option](_option_.md#option)‹unknown›): *boolean*

*Defined in [option.ts:158](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹unknown› |

**Returns:** *boolean*

___

### `Const` toMaybe

▸ **toMaybe**<**T**>(`option`: [Option](_option_.md#option)‹T›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [option.ts:137](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L137)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹T› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` toResult

▸ **toResult**<**T**, **E**>(`option`: [Option](_option_.md#option)‹T›, `error`: E): *[Result](_result_.md#result)‹T, E›*

*Defined in [option.ts:172](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L172)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹T› |
`error` | E |

**Returns:** *[Result](_result_.md#result)‹T, E›*

___

### `Const` toResultLazy

▸ **toResultLazy**<**T**, **E**>(`option`: [Option](_option_.md#option)‹T›, `errorf`: function): *[Result](_result_.md#result)‹T, E›*

*Defined in [option.ts:179](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/option.ts#L179)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **option**: *[Option](_option_.md#option)‹T›*

▪ **errorf**: *function*

▸ (): *E*

**Returns:** *[Result](_result_.md#result)‹T, E›*
