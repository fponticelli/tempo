---
id: "_async_result_"
title: "async_result"
sidebar_label: "async_result"
---

## Index

### Type aliases

* [AsyncResult](_async_result_.md#asyncresult)
* [T](_async_result_.md#t)

### Variables

* [notAsked](_async_result_.md#const-notasked)

### Functions

* [all](_async_result_.md#const-all)
* [any](_async_result_.md#const-any)
* [cata](_async_result_.md#const-cata)
* [cataLazy](_async_result_.md#const-catalazy)
* [each](_async_result_.md#const-each)
* [failure](_async_result_.md#const-failure)
* [firstSuccess](_async_result_.md#const-firstsuccess)
* [flatMap](_async_result_.md#const-flatmap)
* [flatMapN](_async_result_.md#flatmapn)
* [flatten](_async_result_.md#const-flatten)
* [foldLeft](_async_result_.md#const-foldleft)
* [forEach](_async_result_.md#const-foreach)
* [getOrElse](_async_result_.md#const-getorelse)
* [getOrElseLazy](_async_result_.md#const-getorelselazy)
* [getOrThrow](_async_result_.md#const-getorthrow)
* [isFailure](_async_result_.md#const-isfailure)
* [isLoading](_async_result_.md#const-isloading)
* [isNotAsked](_async_result_.md#const-isnotasked)
* [isSuccess](_async_result_.md#const-issuccess)
* [loading](_async_result_.md#const-loading)
* [map](_async_result_.md#const-map)
* [mapN](_async_result_.md#mapn)
* [recover](_async_result_.md#const-recover)
* [success](_async_result_.md#const-success)
* [toArray](_async_result_.md#const-toarray)
* [toMaybe](_async_result_.md#const-tomaybe)
* [toOption](_async_result_.md#const-tooption)

## Type aliases

###  AsyncResult

Ƭ **AsyncResult**: *[Async](_async_.md#async)‹[Result](_result_.md#result)‹T, E›, P›*

*Defined in [async_result.ts:24](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L24)*

___

###  T

Ƭ **T**: *[AsyncResult](_async_result_.md#asyncresult)‹V, E›*

*Defined in [async_result.ts:251](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L251)*

## Variables

### `Const` notAsked

• **notAsked**: *object | object | object* = { kind: 'NotAsked' } as AsyncResult<never, never>

*Defined in [async_result.ts:28](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L28)*

## Functions

### `Const` all

▸ **all**<**T**, **P**>(`f`: function, `async`: [AsyncResult](_async_result_.md#asyncresult)‹T, P›): *boolean*

*Defined in [async_result.ts:208](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L208)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **async**: *[AsyncResult](_async_result_.md#asyncresult)‹T, P›*

**Returns:** *boolean*

___

### `Const` any

▸ **any**<**T**, **P**>(`f`: function, `async`: [AsyncResult](_async_result_.md#asyncresult)‹T, P›): *boolean*

*Defined in [async_result.ts:216](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L216)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **async**: *[AsyncResult](_async_result_.md#asyncresult)‹T, P›*

**Returns:** *boolean*

___

### `Const` cata

▸ **cata**<**A**, **B**, **Prog**>(`f`: function, `async`: [AsyncResult](_async_result_.md#asyncresult)‹A, Prog›, `ifNotOutcome`: B): *B*

*Defined in [async_result.ts:184](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L184)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Prog**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **async**: *[AsyncResult](_async_result_.md#asyncresult)‹A, Prog›*

▪ **ifNotOutcome**: *B*

**Returns:** *B*

___

### `Const` cataLazy

▸ **cataLazy**<**A**, **B**, **Prog**>(`f`: function, `async`: [AsyncResult](_async_result_.md#asyncresult)‹A, Prog›, `ifNotOutcome`: function): *B*

*Defined in [async_result.ts:192](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L192)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Prog**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **async**: *[AsyncResult](_async_result_.md#asyncresult)‹A, Prog›*

▪ **ifNotOutcome**: *function*

▸ (): *B*

**Returns:** *B*

___

### `Const` each

▸ **each**<**T**, **P**>(`f`: function, `async`: [AsyncResult](_async_result_.md#asyncresult)‹T, P›): *void*

*Defined in [async_result.ts:224](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L224)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **async**: *[AsyncResult](_async_result_.md#asyncresult)‹T, P›*

**Returns:** *void*

___

### `Const` failure

▸ **failure**<**T**, **E**, **P**>(`error`: E): *[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›*

*Defined in [async_result.ts:27](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L27)*

**Type parameters:**

▪ **T**

▪ **E**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`error` | E |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›*

___

### `Const` firstSuccess

▸ **firstSuccess**<**A**, **Prog**>(...`args`: [AsyncResult](_async_result_.md#asyncresult)‹A, Prog›[]): *[AsyncResult](_async_result_.md#asyncresult)‹A, Prog›*

*Defined in [async_result.ts:232](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L232)*

**Type parameters:**

▪ **A**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [AsyncResult](_async_result_.md#asyncresult)‹A, Prog›[] |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹A, Prog›*

___

### `Const` flatMap

▸ **flatMap**<**A**, **B**, **Err**, **Prog**>(`f`: function, `async`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›*

*Defined in [async_result.ts:69](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L69)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Err**

▪ **Prog**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *[AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **async**: *[AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›*

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›*

___

###  flatMapN

▸ **flatMapN**<**A**, **B**, **C**, **Err**, **Prog**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog››, `a`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›, `b`: [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›*

*Defined in [async_result.ts:85](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L85)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun2](_types_functions_.md#fun2)‹A, B, [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›› |
`a` | [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog› |
`b` | [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **Err**, **Prog**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog››, `a`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›, `b`: [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›, `c`: [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›*

*Defined in [async_result.ts:88](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L88)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Err**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun3](_types_functions_.md#fun3)‹A, B, C, [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›› |
`a` | [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog› |
`b` | [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog› |
`c` | [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **Err**, **Prog**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog››, `a`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›, `b`: [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›, `c`: [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›, `d`: [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog›*

*Defined in [async_result.ts:91](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L91)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **Err**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog›› |
`a` | [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog› |
`b` | [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog› |
`c` | [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog› |
`d` | [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**, **Prog**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [AsyncResult](_async_result_.md#asyncresult)‹F, Err, Prog››, `a`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›, `b`: [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›, `c`: [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›, `d`: [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›, `e`: [AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹F, Err, Prog›*

*Defined in [async_result.ts:95](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L95)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **Err**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [AsyncResult](_async_result_.md#asyncresult)‹F, Err, Prog›› |
`a` | [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog› |
`b` | [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog› |
`c` | [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog› |
`d` | [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog› |
`e` | [AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹F, Err, Prog›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**, **Prog**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [AsyncResult](_async_result_.md#asyncresult)‹G, Err, Prog››, `a`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›, `b`: [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›, `c`: [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›, `d`: [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›, `e`: [AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog›, `g`: [AsyncResult](_async_result_.md#asyncresult)‹F, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹G, Err, Prog›*

*Defined in [async_result.ts:99](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L99)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **Err**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [AsyncResult](_async_result_.md#asyncresult)‹G, Err, Prog›› |
`a` | [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog› |
`b` | [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog› |
`c` | [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog› |
`d` | [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog› |
`e` | [AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog› |
`g` | [AsyncResult](_async_result_.md#asyncresult)‹F, Err, Prog› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹G, Err, Prog›*

___

### `Const` flatten

▸ **flatten**<**T**, **E**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›, E, P›): *[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›*

*Defined in [async_result.ts:171](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L171)*

**Type parameters:**

▪ **T**

▪ **E**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›, E, P› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›*

___

### `Const` foldLeft

▸ **foldLeft**<**T**, **B**, **Prog**>(`f`: function, `async`: [AsyncResult](_async_result_.md#asyncresult)‹T, Prog›, `b`: B): *B*

*Defined in [async_result.ts:200](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L200)*

**Type parameters:**

▪ **T**

▪ **B**

▪ **Prog**

**Parameters:**

▪ **f**: *function*

▸ (`acc`: B, `curr`: T): *B*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | B |
`curr` | T |

▪ **async**: *[AsyncResult](_async_result_.md#asyncresult)‹T, Prog›*

▪ **b**: *B*

**Returns:** *B*

___

### `Const` forEach

▸ **forEach**<**A**, **Err**>(`f`: function, `result`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err›): *void*

*Defined in [async_result.ts:31](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L31)*

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

▪ **result**: *[AsyncResult](_async_result_.md#asyncresult)‹A, Err›*

**Returns:** *void*

___

### `Const` getOrElse

▸ **getOrElse**<**T**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, P›, `alt`: T): *T*

*Defined in [async_result.ts:131](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L131)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹T, P› |
`alt` | T |

**Returns:** *T*

___

### `Const` getOrElseLazy

▸ **getOrElseLazy**<**T**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, P›, `alt`: function): *T*

*Defined in [async_result.ts:139](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L139)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

▪ **async**: *[AsyncResult](_async_result_.md#asyncresult)‹T, P›*

▪ **alt**: *function*

▸ (): *T*

**Returns:** *T*

___

### `Const` getOrThrow

▸ **getOrThrow**<**T**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, P›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [async_result.ts:123](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L123)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹T, P› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` isFailure

▸ **isFailure**<**T**, **E**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, E, P›): *async is Outcome<Failure<E>>*

*Defined in [async_result.ts:118](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L118)*

**Type parameters:**

▪ **T**

▪ **E**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹T, E, P› |

**Returns:** *async is Outcome<Failure<E>>*

___

### `Const` isLoading

▸ **isLoading**<**T**, **E**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, E, P›): *async is Loading<P>*

*Defined in [async_result.ts:120](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L120)*

**Type parameters:**

▪ **T**

▪ **E**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹T, E, P› |

**Returns:** *async is Loading<P>*

___

### `Const` isNotAsked

▸ **isNotAsked**<**T**, **E**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, E, P›): *async is NotAsked*

*Defined in [async_result.ts:121](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L121)*

**Type parameters:**

▪ **T**

▪ **E**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹T, E, P› |

**Returns:** *async is NotAsked*

___

### `Const` isSuccess

▸ **isSuccess**<**T**, **E**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, E, P›): *async is Outcome<Success<T>>*

*Defined in [async_result.ts:116](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L116)*

**Type parameters:**

▪ **T**

▪ **E**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹T, E, P› |

**Returns:** *async is Outcome<Success<T>>*

___

### `Const` loading

▸ **loading**<**T**, **E**, **P**>(`progress`: P): *[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›*

*Defined in [async_result.ts:29](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L29)*

**Type parameters:**

▪ **T**

▪ **E**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`progress` | P |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›*

___

### `Const` map

▸ **map**<**A**, **B**, **Err**, **Prog**>(`f`: function, `async`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›*

*Defined in [async_result.ts:41](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L41)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Err**

▪ **Prog**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **async**: *[AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›*

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›*

___

###  mapN

▸ **mapN**<**A**, **B**, **C**, **Err**, **Prog**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, C›, `a`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›, `b`: [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›*

*Defined in [async_result.ts:45](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L45)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Err**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun2](_types_functions_.md#fun2)‹A, B, C› |
`a` | [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog› |
`b` | [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›*

▸ **mapN**<**A**, **B**, **C**, **D**, **Err**, **Prog**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, D›, `a`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›, `b`: [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›, `c`: [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›*

*Defined in [async_result.ts:48](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L48)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Err**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun3](_types_functions_.md#fun3)‹A, B, C, D› |
`a` | [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog› |
`b` | [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog› |
`c` | [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **Err**, **Prog**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, `a`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›, `b`: [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›, `c`: [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›, `d`: [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog›*

*Defined in [async_result.ts:51](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L51)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **Err**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun4](_types_functions_.md#fun4)‹A, B, C, D, E› |
`a` | [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog› |
`b` | [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog› |
`c` | [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog› |
`d` | [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **F**, **Err**, **Prog**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, `a`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›, `b`: [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›, `c`: [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›, `d`: [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›, `e`: [AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹F, Err, Prog›*

*Defined in [async_result.ts:55](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L55)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **Err**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F› |
`a` | [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog› |
`b` | [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog› |
`c` | [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog› |
`d` | [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog› |
`e` | [AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹F, Err, Prog›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Err**, **Prog**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, `a`: [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog›, `b`: [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog›, `c`: [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog›, `d`: [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog›, `e`: [AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog›, `g`: [AsyncResult](_async_result_.md#asyncresult)‹F, Err, Prog›): *[AsyncResult](_async_result_.md#asyncresult)‹G, Err, Prog›*

*Defined in [async_result.ts:59](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L59)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **Err**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G› |
`a` | [AsyncResult](_async_result_.md#asyncresult)‹A, Err, Prog› |
`b` | [AsyncResult](_async_result_.md#asyncresult)‹B, Err, Prog› |
`c` | [AsyncResult](_async_result_.md#asyncresult)‹C, Err, Prog› |
`d` | [AsyncResult](_async_result_.md#asyncresult)‹D, Err, Prog› |
`e` | [AsyncResult](_async_result_.md#asyncresult)‹E, Err, Prog› |
`g` | [AsyncResult](_async_result_.md#asyncresult)‹F, Err, Prog› |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹G, Err, Prog›*

___

### `Const` recover

▸ **recover**<**T**, **E**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, E, P›, `whenNoOutcome`: T): *[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›*

*Defined in [async_result.ts:243](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L243)*

**Type parameters:**

▪ **T**

▪ **E**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹T, E, P› |
`whenNoOutcome` | T |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›*

___

### `Const` success

▸ **success**<**T**, **E**, **P**>(`value`: T): *[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›*

*Defined in [async_result.ts:26](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L26)*

**Type parameters:**

▪ **T**

▪ **E**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[AsyncResult](_async_result_.md#asyncresult)‹T, E, P›*

___

### `Const` toArray

▸ **toArray**<**T**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, P›): *T[]*

*Defined in [async_result.ts:147](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L147)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹T, P› |

**Returns:** *T[]*

___

### `Const` toMaybe

▸ **toMaybe**<**T**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, P›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [async_result.ts:155](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L155)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹T, P› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` toOption

▸ **toOption**<**T**, **P**>(`async`: [AsyncResult](_async_result_.md#asyncresult)‹T, P›): *[Option](_option_.md#option)‹T›*

*Defined in [async_result.ts:163](https://github.com/fponticelli/tempo/blob/master/std/src/async_result.ts#L163)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [AsyncResult](_async_result_.md#asyncresult)‹T, P› |

**Returns:** *[Option](_option_.md#option)‹T›*
