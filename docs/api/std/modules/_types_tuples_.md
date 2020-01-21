---
id: "_types_tuples_"
title: "types/tuples"
sidebar_label: "types/tuples"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["types/tuples"](_types_tuples_.md)

## Index

### Type aliases

* [DropN](_types_tuples_.md#dropn)
* [Head](_types_tuples_.md#head)
* [Last](_types_tuples_.md#last)
* [Length](_types_tuples_.md#length)
* [LoseLastImpl](_types_tuples_.md#loselastimpl)
* [Prepend](_types_tuples_.md#prepend)
* [Reverse](_types_tuples_.md#reverse)
* [Tail](_types_tuples_.md#tail)
* [TupleToUnion](_types_tuples_.md#tupletounion)

## Type aliases

###  DropN

Ƭ **DropN**: *DropNImpl‹N, T, []›*

*Defined in [types/tuples.ts:28](https://github.com/fponticelli/tempo/blob/master/std/src/types/tuples.ts#L28)*

___

###  Head

Ƭ **Head**: *T extends [infer H, any] ? H : never*

*Defined in [types/tuples.ts:37](https://github.com/fponticelli/tempo/blob/master/std/src/types/tuples.ts#L37)*

___

###  Last

Ƭ **Last**: *object[T extends [] ? "empty" : T extends [any] ? "one" : "n"]*

*Defined in [types/tuples.ts:39](https://github.com/fponticelli/tempo/blob/master/std/src/types/tuples.ts#L39)*

___

###  Length

Ƭ **Length**: *T["length"]*

*Defined in [types/tuples.ts:54](https://github.com/fponticelli/tempo/blob/master/std/src/types/tuples.ts#L54)*

___

###  LoseLastImpl

Ƭ **LoseLastImpl**: *object[B extends [] ? "empty" : B extends [any] ? "empty" : "next"]*

*Defined in [types/tuples.ts:63](https://github.com/fponticelli/tempo/blob/master/std/src/types/tuples.ts#L63)*

___

###  Prepend

Ƭ **Prepend**: *function extends function ? Tuple : never*

*Defined in [types/tuples.ts:47](https://github.com/fponticelli/tempo/blob/master/std/src/types/tuples.ts#L47)*

___

###  Reverse

Ƭ **Reverse**: *ReverseImpl‹T, [], []›*

*Defined in [types/tuples.ts:35](https://github.com/fponticelli/tempo/blob/master/std/src/types/tuples.ts#L35)*

___

###  Tail

Ƭ **Tail**: *function extends function ? Rest : never*

*Defined in [types/tuples.ts:16](https://github.com/fponticelli/tempo/blob/master/std/src/types/tuples.ts#L16)*

___

###  TupleToUnion

Ƭ **TupleToUnion**: *T[number]*

*Defined in [types/tuples.ts:45](https://github.com/fponticelli/tempo/blob/master/std/src/types/tuples.ts#L45)*
