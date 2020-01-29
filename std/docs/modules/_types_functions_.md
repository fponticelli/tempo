---
id: "_types_functions_"
title: "types/functions"
sidebar_label: "types/functions"
---

## Index

### Type aliases

* [AnyFunction](_types_functions_.md#anyfunction)
* [FirstArgument](_types_functions_.md#firstargument)
* [Fun](_types_functions_.md#fun)
* [Fun1](_types_functions_.md#fun1)
* [Fun2](_types_functions_.md#fun2)
* [Fun3](_types_functions_.md#fun3)
* [Fun4](_types_functions_.md#fun4)
* [Fun5](_types_functions_.md#fun5)
* [Fun6](_types_functions_.md#fun6)
* [FunctionsChain](_types_functions_.md#functionschain)
* [Lazy](_types_functions_.md#lazy)
* [OnlyIfDoesNotReturnNever](_types_functions_.md#onlyifdoesnotreturnnever)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *[Fun](_types_functions_.md#fun) | Function*

*Defined in [types/functions.ts:30](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L30)*

___

###  FirstArgument

Ƭ **FirstArgument**: *F extends function ? unknown extends A ? never : A : never*

*Defined in [types/functions.ts:32](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L32)*

___

###  Fun

Ƭ **Fun**: *function*

*Defined in [types/functions.ts:15](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L15)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  Fun1

Ƭ **Fun1**: *function*

*Defined in [types/functions.ts:16](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L16)*

#### Type declaration:

▸ (`a1`: A): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a1` | A |

___

###  Fun2

Ƭ **Fun2**: *function*

*Defined in [types/functions.ts:17](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L17)*

#### Type declaration:

▸ (`a1`: A, `a2`: B): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a1` | A |
`a2` | B |

___

###  Fun3

Ƭ **Fun3**: *function*

*Defined in [types/functions.ts:18](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L18)*

#### Type declaration:

▸ (`a1`: A, `a2`: B, `a3`: C): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a1` | A |
`a2` | B |
`a3` | C |

___

###  Fun4

Ƭ **Fun4**: *function*

*Defined in [types/functions.ts:19](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L19)*

#### Type declaration:

▸ (`a1`: A, `a2`: B, `a3`: C, `a4`: D): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a1` | A |
`a2` | B |
`a3` | C |
`a4` | D |

___

###  Fun5

Ƭ **Fun5**: *function*

*Defined in [types/functions.ts:20](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L20)*

#### Type declaration:

▸ (`a1`: A, `a2`: B, `a3`: C, `a4`: D, `a5`: E): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a1` | A |
`a2` | B |
`a3` | C |
`a4` | D |
`a5` | E |

___

###  Fun6

Ƭ **Fun6**: *function*

*Defined in [types/functions.ts:21](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L21)*

#### Type declaration:

▸ (`a1`: A, `a2`: B, `a3`: C, `a4`: D, `a5`: E, `a6`: F): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a1` | A |
`a2` | B |
`a3` | C |
`a4` | D |
`a5` | E |
`a6` | F |

___

###  FunctionsChain

Ƭ **FunctionsChain**: *[OnlyIfDoesNotReturnNever](_types_functions_.md#onlyifdoesnotreturnnever)‹CheckFunctionsChain‹In, Args››*

*Defined in [types/functions.ts:52](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L52)*

___

###  Lazy

Ƭ **Lazy**: *function*

*Defined in [types/functions.ts:14](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L14)*

#### Type declaration:

▸ (): *T*

___

###  OnlyIfDoesNotReturnNever

Ƭ **OnlyIfDoesNotReturnNever**: *F extends Fun1<any, never> ? never : F*

*Defined in [types/functions.ts:38](https://github.com/fponticelli/tempo/blob/master/std/src/types/functions.ts#L38)*
