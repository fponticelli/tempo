[tempo-std - v0.2.0](../README.md) › [Globals](../globals.md) › ["newtype"](../modules/_newtype_.md) › [Newtype](_newtype_.newtype.md)

# Interface: Newtype <**V, S**>

Usage:
export interface Int extends Newtype<
  number,
  { readonly Int: unique symbol }
> {}

export const Int = new class extends NewtypeClass<Int> {
  isValid(v: number) { return Number.isInteger(v) }
}()

## Type parameters

▪ **V**

▪ **S**

## Hierarchy

* **Newtype**

## Index

### Properties

* [_S](_newtype_.newtype.md#_s)
* [_T](_newtype_.newtype.md#_t)

## Properties

###  _S

• **_S**: *S*

*Defined in [newtype.ts:18](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/newtype.ts#L18)*

___

###  _T

• **_T**: *V*

*Defined in [newtype.ts:17](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/newtype.ts#L17)*
