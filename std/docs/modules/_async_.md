---
id: "_async_"
title: "async"
sidebar_label: "async"
---

## Index

### Type aliases

* [Async](_async_.md#async)
* [Loading](_async_.md#loading)
* [NotAsked](_async_.md#notasked)
* [Outcome](_async_.md#outcome)
* [T](_async_.md#t)

### Variables

* [notAsked](_async_.md#const-notasked)

### Functions

* [all](_async_.md#const-all)
* [any](_async_.md#const-any)
* [cata](_async_.md#const-cata)
* [cataLazy](_async_.md#const-catalazy)
* [each](_async_.md#const-each)
* [firstOutcome](_async_.md#const-firstoutcome)
* [flatMap](_async_.md#const-flatmap)
* [flatMapN](_async_.md#flatmapn)
* [flatten](_async_.md#const-flatten)
* [foldLeft](_async_.md#const-foldleft)
* [getOrElse](_async_.md#const-getorelse)
* [getOrElseLazy](_async_.md#const-getorelselazy)
* [getOrThrow](_async_.md#const-getorthrow)
* [isLoading](_async_.md#const-isloading)
* [isNotAsked](_async_.md#const-isnotasked)
* [isOutcome](_async_.md#const-isoutcome)
* [loading](_async_.md#const-loading)
* [map](_async_.md#const-map)
* [mapLoading](_async_.md#const-maploading)
* [mapN](_async_.md#mapn)
* [outcome](_async_.md#const-outcome)
* [recover](_async_.md#const-recover)
* [toArray](_async_.md#const-toarray)
* [toMaybe](_async_.md#const-tomaybe)
* [toOption](_async_.md#const-tooption)

## Type aliases

###  Async

Ƭ **Async**: *[Outcome](_async_.md#outcome)‹T› | [NotAsked](_async_.md#notasked) | [Loading](_async_.md#loading)‹P›*

*Defined in [async.ts:23](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L23)*

___

###  Loading

Ƭ **Loading**: *object*

*Defined in [async.ts:21](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L21)*

#### Type declaration:

* **kind**: *"Loading"*

* **progress**: *P*

___

###  NotAsked

Ƭ **NotAsked**: *object*

*Defined in [async.ts:20](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L20)*

#### Type declaration:

* **kind**: *"NotAsked"*

___

###  Outcome

Ƭ **Outcome**: *object*

*Defined in [async.ts:19](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L19)*

#### Type declaration:

* **kind**: *"Outcome"*

* **value**: *T*

___

###  T

Ƭ **T**: *[Async](_async_.md#async)‹V, E›*

*Defined in [async.ts:231](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L231)*

## Variables

### `Const` notAsked

• **notAsked**: *object | object | object* = { kind: 'NotAsked' } as Async<never, never>

*Defined in [async.ts:29](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L29)*

## Functions

### `Const` all

▸ **all**<**T**, **P**>(`f`: function, `async`: [Async](_async_.md#async)‹T, P›): *boolean*

*Defined in [async.ts:188](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L188)*

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

▪ **async**: *[Async](_async_.md#async)‹T, P›*

**Returns:** *boolean*

___

### `Const` any

▸ **any**<**T**, **P**>(`f`: function, `async`: [Async](_async_.md#async)‹T, P›): *boolean*

*Defined in [async.ts:196](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L196)*

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

▪ **async**: *[Async](_async_.md#async)‹T, P›*

**Returns:** *boolean*

___

### `Const` cata

▸ **cata**<**A**, **B**, **Prog**>(`f`: function, `async`: [Async](_async_.md#async)‹A, Prog›, `ifNotOutcome`: B): *B*

*Defined in [async.ts:164](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L164)*

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

▪ **async**: *[Async](_async_.md#async)‹A, Prog›*

▪ **ifNotOutcome**: *B*

**Returns:** *B*

___

### `Const` cataLazy

▸ **cataLazy**<**A**, **B**, **Prog**>(`f`: function, `async`: [Async](_async_.md#async)‹A, Prog›, `ifNotOutcome`: function): *B*

*Defined in [async.ts:172](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L172)*

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

▪ **async**: *[Async](_async_.md#async)‹A, Prog›*

▪ **ifNotOutcome**: *function*

▸ (): *B*

**Returns:** *B*

___

### `Const` each

▸ **each**<**T**, **P**>(`f`: function, `async`: [Async](_async_.md#async)‹T, P›): *void*

*Defined in [async.ts:204](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L204)*

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

▪ **async**: *[Async](_async_.md#async)‹T, P›*

**Returns:** *void*

___

### `Const` firstOutcome

▸ **firstOutcome**<**A**, **Prog**>(...`args`: [Async](_async_.md#async)‹A, Prog›[]): *[Async](_async_.md#async)‹A, Prog›*

*Defined in [async.ts:212](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L212)*

**Type parameters:**

▪ **A**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Async](_async_.md#async)‹A, Prog›[] |

**Returns:** *[Async](_async_.md#async)‹A, Prog›*

___

### `Const` flatMap

▸ **flatMap**<**A**, **B**, **Prog**>(`f`: function, `async`: [Async](_async_.md#async)‹A, Prog›): *[Async](_async_.md#async)‹B, Prog›*

*Defined in [async.ts:68](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L68)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **Prog**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *[Async](_async_.md#async)‹B, Prog›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **async**: *[Async](_async_.md#async)‹A, Prog›*

**Returns:** *[Async](_async_.md#async)‹B, Prog›*

___

###  flatMapN

▸ **flatMapN**<**A**, **B**, **C**, **Prog**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, [Async](_async_.md#async)‹C, Prog››, `a`: [Async](_async_.md#async)‹A, Prog›, `b`: [Async](_async_.md#async)‹B, Prog›): *[Async](_async_.md#async)‹C, Prog›*

*Defined in [async.ts:76](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L76)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun2](_types_functions_.md#fun2)‹A, B, [Async](_async_.md#async)‹C, Prog›› |
`a` | [Async](_async_.md#async)‹A, Prog› |
`b` | [Async](_async_.md#async)‹B, Prog› |

**Returns:** *[Async](_async_.md#async)‹C, Prog›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **Prog**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, [Async](_async_.md#async)‹D, Prog››, `a`: [Async](_async_.md#async)‹A, Prog›, `b`: [Async](_async_.md#async)‹B, Prog›, `c`: [Async](_async_.md#async)‹C, Prog›): *[Async](_async_.md#async)‹D, Prog›*

*Defined in [async.ts:79](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L79)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun3](_types_functions_.md#fun3)‹A, B, C, [Async](_async_.md#async)‹D, Prog›› |
`a` | [Async](_async_.md#async)‹A, Prog› |
`b` | [Async](_async_.md#async)‹B, Prog› |
`c` | [Async](_async_.md#async)‹C, Prog› |

**Returns:** *[Async](_async_.md#async)‹D, Prog›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **Prog**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [Async](_async_.md#async)‹E, Prog››, `a`: [Async](_async_.md#async)‹A, Prog›, `b`: [Async](_async_.md#async)‹B, Prog›, `c`: [Async](_async_.md#async)‹C, Prog›, `d`: [Async](_async_.md#async)‹D, Prog›): *[Async](_async_.md#async)‹E, Prog›*

*Defined in [async.ts:82](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L82)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun4](_types_functions_.md#fun4)‹A, B, C, D, [Async](_async_.md#async)‹E, Prog›› |
`a` | [Async](_async_.md#async)‹A, Prog› |
`b` | [Async](_async_.md#async)‹B, Prog› |
`c` | [Async](_async_.md#async)‹C, Prog› |
`d` | [Async](_async_.md#async)‹D, Prog› |

**Returns:** *[Async](_async_.md#async)‹E, Prog›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **F**, **Prog**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [Async](_async_.md#async)‹F, Prog››, `a`: [Async](_async_.md#async)‹A, Prog›, `b`: [Async](_async_.md#async)‹B, Prog›, `c`: [Async](_async_.md#async)‹C, Prog›, `d`: [Async](_async_.md#async)‹D, Prog›, `e`: [Async](_async_.md#async)‹E, Prog›): *[Async](_async_.md#async)‹F, Prog›*

*Defined in [async.ts:85](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L85)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, [Async](_async_.md#async)‹F, Prog›› |
`a` | [Async](_async_.md#async)‹A, Prog› |
`b` | [Async](_async_.md#async)‹B, Prog› |
`c` | [Async](_async_.md#async)‹C, Prog› |
`d` | [Async](_async_.md#async)‹D, Prog› |
`e` | [Async](_async_.md#async)‹E, Prog› |

**Returns:** *[Async](_async_.md#async)‹F, Prog›*

▸ **flatMapN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Prog**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [Async](_async_.md#async)‹G, Prog››, `a`: [Async](_async_.md#async)‹A, Prog›, `b`: [Async](_async_.md#async)‹B, Prog›, `c`: [Async](_async_.md#async)‹C, Prog›, `d`: [Async](_async_.md#async)‹D, Prog›, `e`: [Async](_async_.md#async)‹E, Prog›, `g`: [Async](_async_.md#async)‹F, Prog›): *[Async](_async_.md#async)‹G, Prog›*

*Defined in [async.ts:88](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L88)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, [Async](_async_.md#async)‹G, Prog›› |
`a` | [Async](_async_.md#async)‹A, Prog› |
`b` | [Async](_async_.md#async)‹B, Prog› |
`c` | [Async](_async_.md#async)‹C, Prog› |
`d` | [Async](_async_.md#async)‹D, Prog› |
`e` | [Async](_async_.md#async)‹E, Prog› |
`g` | [Async](_async_.md#async)‹F, Prog› |

**Returns:** *[Async](_async_.md#async)‹G, Prog›*

___

### `Const` flatten

▸ **flatten**<**T**, **P**>(`async`: [Async](_async_.md#async)‹[Async](_async_.md#async)‹T, P›, P›): *[Async](_async_.md#async)‹T, P›*

*Defined in [async.ts:156](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L156)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [Async](_async_.md#async)‹[Async](_async_.md#async)‹T, P›, P› |

**Returns:** *[Async](_async_.md#async)‹T, P›*

___

### `Const` foldLeft

▸ **foldLeft**<**T**, **B**, **Prog**>(`f`: function, `async`: [Async](_async_.md#async)‹T, Prog›, `b`: B): *B*

*Defined in [async.ts:180](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L180)*

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

▪ **async**: *[Async](_async_.md#async)‹T, Prog›*

▪ **b**: *B*

**Returns:** *B*

___

### `Const` getOrElse

▸ **getOrElse**<**T**, **P**>(`async`: [Async](_async_.md#async)‹T, P›, `alt`: T): *T*

*Defined in [async.ts:116](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L116)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [Async](_async_.md#async)‹T, P› |
`alt` | T |

**Returns:** *T*

___

### `Const` getOrElseLazy

▸ **getOrElseLazy**<**T**, **P**>(`async`: [Async](_async_.md#async)‹T, P›, `alt`: function): *T*

*Defined in [async.ts:124](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L124)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

▪ **async**: *[Async](_async_.md#async)‹T, P›*

▪ **alt**: *function*

▸ (): *T*

**Returns:** *T*

___

### `Const` getOrThrow

▸ **getOrThrow**<**T**, **P**>(`async`: [Async](_async_.md#async)‹T, P›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [async.ts:108](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L108)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [Async](_async_.md#async)‹T, P› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` isLoading

▸ **isLoading**<**T**, **P**>(`async`: [Async](_async_.md#async)‹T, P›): *async is Loading<P>*

*Defined in [async.ts:105](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L105)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [Async](_async_.md#async)‹T, P› |

**Returns:** *async is Loading<P>*

___

### `Const` isNotAsked

▸ **isNotAsked**<**T**, **P**>(`async`: [Async](_async_.md#async)‹T, P›): *async is NotAsked*

*Defined in [async.ts:106](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L106)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [Async](_async_.md#async)‹T, P› |

**Returns:** *async is NotAsked*

___

### `Const` isOutcome

▸ **isOutcome**<**T**, **P**>(`async`: [Async](_async_.md#async)‹T, P›): *async is Outcome<T>*

*Defined in [async.ts:104](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L104)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [Async](_async_.md#async)‹T, P› |

**Returns:** *async is Outcome<T>*

___

### `Const` loading

▸ **loading**<**T**, **P**>(`progress`: P): *[Async](_async_.md#async)‹T, P›*

*Defined in [async.ts:30](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L30)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`progress` | P |

**Returns:** *[Async](_async_.md#async)‹T, P›*

___

### `Const` map

▸ **map**<**A**, **B**, **P**>(`f`: function, `async`: [Async](_async_.md#async)‹A, P›): *[Async](_async_.md#async)‹B, P›*

*Defined in [async.ts:32](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L32)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **P**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **async**: *[Async](_async_.md#async)‹A, P›*

**Returns:** *[Async](_async_.md#async)‹B, P›*

___

### `Const` mapLoading

▸ **mapLoading**<**A**, **E1**, **E2**>(`f`: function, `async`: [Async](_async_.md#async)‹A, E1›): *[Async](_async_.md#async)‹A, E2›*

*Defined in [async.ts:40](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L40)*

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

▪ **async**: *[Async](_async_.md#async)‹A, E1›*

**Returns:** *[Async](_async_.md#async)‹A, E2›*

___

###  mapN

▸ **mapN**<**A**, **B**, **C**, **Prog**>(`f`: [Fun2](_types_functions_.md#fun2)‹A, B, C›, `a`: [Async](_async_.md#async)‹A, Prog›, `b`: [Async](_async_.md#async)‹B, Prog›): *[Async](_async_.md#async)‹C, Prog›*

*Defined in [async.ts:48](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L48)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun2](_types_functions_.md#fun2)‹A, B, C› |
`a` | [Async](_async_.md#async)‹A, Prog› |
`b` | [Async](_async_.md#async)‹B, Prog› |

**Returns:** *[Async](_async_.md#async)‹C, Prog›*

▸ **mapN**<**A**, **B**, **C**, **D**, **Prog**>(`f`: [Fun3](_types_functions_.md#fun3)‹A, B, C, D›, `a`: [Async](_async_.md#async)‹A, Prog›, `b`: [Async](_async_.md#async)‹B, Prog›, `c`: [Async](_async_.md#async)‹C, Prog›): *[Async](_async_.md#async)‹D, Prog›*

*Defined in [async.ts:49](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L49)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun3](_types_functions_.md#fun3)‹A, B, C, D› |
`a` | [Async](_async_.md#async)‹A, Prog› |
`b` | [Async](_async_.md#async)‹B, Prog› |
`c` | [Async](_async_.md#async)‹C, Prog› |

**Returns:** *[Async](_async_.md#async)‹D, Prog›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **Prog**>(`f`: [Fun4](_types_functions_.md#fun4)‹A, B, C, D, E›, `a`: [Async](_async_.md#async)‹A, Prog›, `b`: [Async](_async_.md#async)‹B, Prog›, `c`: [Async](_async_.md#async)‹C, Prog›, `d`: [Async](_async_.md#async)‹D, Prog›): *[Async](_async_.md#async)‹E, Prog›*

*Defined in [async.ts:50](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L50)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun4](_types_functions_.md#fun4)‹A, B, C, D, E› |
`a` | [Async](_async_.md#async)‹A, Prog› |
`b` | [Async](_async_.md#async)‹B, Prog› |
`c` | [Async](_async_.md#async)‹C, Prog› |
`d` | [Async](_async_.md#async)‹D, Prog› |

**Returns:** *[Async](_async_.md#async)‹E, Prog›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **F**, **Prog**>(`f`: [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F›, `a`: [Async](_async_.md#async)‹A, Prog›, `b`: [Async](_async_.md#async)‹B, Prog›, `c`: [Async](_async_.md#async)‹C, Prog›, `d`: [Async](_async_.md#async)‹D, Prog›, `e`: [Async](_async_.md#async)‹E, Prog›): *[Async](_async_.md#async)‹F, Prog›*

*Defined in [async.ts:53](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L53)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun5](_types_functions_.md#fun5)‹A, B, C, D, E, F› |
`a` | [Async](_async_.md#async)‹A, Prog› |
`b` | [Async](_async_.md#async)‹B, Prog› |
`c` | [Async](_async_.md#async)‹C, Prog› |
`d` | [Async](_async_.md#async)‹D, Prog› |
`e` | [Async](_async_.md#async)‹E, Prog› |

**Returns:** *[Async](_async_.md#async)‹F, Prog›*

▸ **mapN**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **Prog**>(`f`: [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G›, `a`: [Async](_async_.md#async)‹A, Prog›, `b`: [Async](_async_.md#async)‹B, Prog›, `c`: [Async](_async_.md#async)‹C, Prog›, `d`: [Async](_async_.md#async)‹D, Prog›, `e`: [Async](_async_.md#async)‹E, Prog›, `g`: [Async](_async_.md#async)‹F, Prog›): *[Async](_async_.md#async)‹G, Prog›*

*Defined in [async.ts:56](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L56)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **Prog**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fun6](_types_functions_.md#fun6)‹A, B, C, D, E, F, G› |
`a` | [Async](_async_.md#async)‹A, Prog› |
`b` | [Async](_async_.md#async)‹B, Prog› |
`c` | [Async](_async_.md#async)‹C, Prog› |
`d` | [Async](_async_.md#async)‹D, Prog› |
`e` | [Async](_async_.md#async)‹E, Prog› |
`g` | [Async](_async_.md#async)‹F, Prog› |

**Returns:** *[Async](_async_.md#async)‹G, Prog›*

___

### `Const` outcome

▸ **outcome**<**T**, **P**>(`value`: T): *[Async](_async_.md#async)‹T, P›*

*Defined in [async.ts:28](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L28)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Async](_async_.md#async)‹T, P›*

___

### `Const` recover

▸ **recover**<**T**, **P**>(`async`: [Async](_async_.md#async)‹T, P›, `whenNoOutcome`: T): *object | object | object*

*Defined in [async.ts:223](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L223)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [Async](_async_.md#async)‹T, P› |
`whenNoOutcome` | T |

**Returns:** *object | object | object*

___

### `Const` toArray

▸ **toArray**<**T**, **P**>(`async`: [Async](_async_.md#async)‹T, P›): *T[]*

*Defined in [async.ts:132](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L132)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [Async](_async_.md#async)‹T, P› |

**Returns:** *T[]*

___

### `Const` toMaybe

▸ **toMaybe**<**T**, **P**>(`async`: [Async](_async_.md#async)‹T, P›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [async.ts:140](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L140)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [Async](_async_.md#async)‹T, P› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` toOption

▸ **toOption**<**T**, **P**>(`async`: [Async](_async_.md#async)‹T, P›): *[Option](_option_.md#option)‹T›*

*Defined in [async.ts:148](https://github.com/fponticelli/tempo/blob/master/std/src/async.ts#L148)*

**Type parameters:**

▪ **T**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`async` | [Async](_async_.md#async)‹T, P› |

**Returns:** *[Option](_option_.md#option)‹T›*
