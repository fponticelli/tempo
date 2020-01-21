---
id: "_types_objects_"
title: "types/objects"
sidebar_label: "types/objects"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["types/objects"](_types_objects_.md)

## Index

### Type aliases

* [ExcludeFunctionFields](_types_objects_.md#excludefunctionfields)
* [KeysWithFieldType](_types_objects_.md#keyswithfieldtype)
* [KeysWithoutFieldType](_types_objects_.md#keyswithoutfieldtype)
* [Merge](_types_objects_.md#merge)
* [ObjectWithField](_types_objects_.md#objectwithfield)
* [ObjectWithPath](_types_objects_.md#objectwithpath)
* [ReadonlyFields](_types_objects_.md#readonlyfields)
* [ReadonlyKeys](_types_objects_.md#readonlykeys)
* [RemoveNullableFromFields](_types_objects_.md#removenullablefromfields)
* [TypeAtPath](_types_objects_.md#typeatpath)
* [WritableFields](_types_objects_.md#writablefields)
* [WritableKeys](_types_objects_.md#writablekeys)

## Type aliases

###  ExcludeFunctionFields

Ƭ **ExcludeFunctionFields**: *Pick‹T, [KeysWithoutFieldType](_types_objects_.md#keyswithoutfieldtype)‹T, [AnyFunction](_types_functions_.md#anyfunction)››*

*Defined in [types/objects.ts:89](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L89)*

___

###  KeysWithFieldType

Ƭ **KeysWithFieldType**: *object[keyof T]*

*Defined in [types/objects.ts:75](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L75)*

___

###  KeysWithoutFieldType

Ƭ **KeysWithoutFieldType**: *object[keyof T]*

*Defined in [types/objects.ts:79](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L79)*

___

###  Merge

Ƭ **Merge**: *A & B*

*Defined in [types/objects.ts:95](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L95)*

___

###  ObjectWithField

Ƭ **ObjectWithField**: *object*

*Defined in [types/objects.ts:18](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L18)*

#### Type declaration:

___

###  ObjectWithPath

Ƭ **ObjectWithPath**: *Path extends [] ? object : Path extends [infer T] ? T extends IndexType ? object : never : Path extends [infer K, any] ? K extends IndexType ? Tail<Path> extends infer Rest ? Rest extends IndexType[] ? object : never : never : never : never*

*Defined in [types/objects.ts:20](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L20)*

___

###  ReadonlyFields

Ƭ **ReadonlyFields**: *Pick‹T, [ReadonlyKeys](_types_objects_.md#readonlykeys)‹T››*

*Defined in [types/objects.ts:88](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L88)*

___

###  ReadonlyKeys

Ƭ **ReadonlyKeys**: *object[keyof T]*

*Defined in [types/objects.ts:66](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L66)*

___

###  RemoveNullableFromFields

Ƭ **RemoveNullableFromFields**: *object*

*Defined in [types/objects.ts:83](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L83)*

#### Type declaration:

___

###  TypeAtPath

Ƭ **TypeAtPath**: *object[Path extends [] ? "empty" : Path extends [any] ? "done" : "next"]*

*Defined in [types/objects.ts:36](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L36)*

___

###  WritableFields

Ƭ **WritableFields**: *Pick‹T, [WritableKeys](_types_objects_.md#writablekeys)‹T››*

*Defined in [types/objects.ts:87](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L87)*

___

###  WritableKeys

Ƭ **WritableKeys**: *object[keyof T]*

*Defined in [types/objects.ts:58](https://github.com/fponticelli/tempo/blob/master/std/src/types/objects.ts#L58)*
