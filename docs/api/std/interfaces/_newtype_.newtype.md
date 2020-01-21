---
id: "_newtype_.newtype"
title: "Newtype"
sidebar_label: "Newtype"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["newtype"](../modules/_newtype_.md) › [Newtype](_newtype_.newtype.md)

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

*Defined in [newtype.ts:18](https://github.com/fponticelli/tempo/blob/master/std/src/newtype.ts#L18)*

___

###  _T

• **_T**: *V*

*Defined in [newtype.ts:17](https://github.com/fponticelli/tempo/blob/master/std/src/newtype.ts#L17)*
