[tempo-std - v0.2.0](../README.md) › [Globals](../globals.md) › ["types/generic"](_types_generic_.md)

# External module: "types/generic"

## Index

### Type aliases

* [Cast](_types_generic_.md#cast)
* [DeRef](_types_generic_.md#deref)
* [Pointer](_types_generic_.md#pointer)
* [WhenEquals](_types_generic_.md#whenequals)
* [WhenNotEquals](_types_generic_.md#whennotequals)

## Type aliases

###  Cast

Ƭ **Cast**: *A extends B ? A : B*

*Defined in [types/generic.ts:27](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/types/generic.ts#L27)*

___

###  DeRef

Ƭ **DeRef**: *T extends function ? Ret : never*

*Defined in [types/generic.ts:17](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/types/generic.ts#L17)*

___

###  Pointer

Ƭ **Pointer**: *function*

*Defined in [types/generic.ts:16](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/types/generic.ts#L16)*

#### Type declaration:

▸ (): *T*

___

###  WhenEquals

Ƭ **WhenEquals**: *Equals<X, Y> extends true ? A : B*

*Defined in [types/generic.ts:19](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/types/generic.ts#L19)*

___

###  WhenNotEquals

Ƭ **WhenNotEquals**: *NotEquals<X, Y> extends true ? A : B*

*Defined in [types/generic.ts:23](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/types/generic.ts#L23)*
