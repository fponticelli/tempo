---
id: "_types_assert_"
title: "types/assert"
sidebar_label: "types/assert"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["types/assert"](_types_assert_.md)

## Index

### Type aliases

* [Assert](_types_assert_.md#assert)
* [AssertNot](_types_assert_.md#assertnot)
* [Equals](_types_assert_.md#equals)
* [Extends](_types_assert_.md#extends)
* [IsNever](_types_assert_.md#isnever)
* [NotEquals](_types_assert_.md#notequals)
* [NotSame](_types_assert_.md#notsame)
* [Same](_types_assert_.md#same)

## Type aliases

###  Assert

Ƭ **Assert**: *A extends never ? "FAIL" : A extends true ? "PASS" : "FAIL"*

*Defined in [types/assert.ts:16](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/types/assert.ts#L16)*

___

###  AssertNot

Ƭ **AssertNot**: *A extends never ? "FAIL" : A extends false ? "PASS" : "FAIL"*

*Defined in [types/assert.ts:21](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/types/assert.ts#L21)*

___

###  Equals

Ƭ **Equals**: *function extends function ? true : false*

*Defined in [types/assert.ts:43](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/types/assert.ts#L43)*

___

###  Extends

Ƭ **Extends**: *A extends B ? true : false*

*Defined in [types/assert.ts:27](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/types/assert.ts#L27)*

___

###  IsNever

Ƭ **IsNever**: *Pointer<T> extends Pointer<never> ? true : false*

*Defined in [types/assert.ts:51](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/types/assert.ts#L51)*

___

###  NotEquals

Ƭ **NotEquals**: *Equals<A, B> extends true ? false : true*

*Defined in [types/assert.ts:49](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/types/assert.ts#L49)*

___

###  NotSame

Ƭ **NotSame**: *Pointer<A> extends Pointer<B> ? Pointer<B> extends Pointer<A> ? false : true : true*

*Defined in [types/assert.ts:36](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/types/assert.ts#L36)*

___

###  Same

Ƭ **Same**: *Pointer<A> extends Pointer<B> ? Pointer<B> extends Pointer<A> ? true : false : false*

*Defined in [types/assert.ts:30](https://github.com/fponticelli/tempo/blob/4a30d82/std/src/types/assert.ts#L30)*
