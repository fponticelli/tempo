---
id: "_maybe_"
title: "maybe"
sidebar_label: "maybe"
---

## Index

### Type aliases

* [Just](_maybe_.md#just)
* [Maybe](_maybe_.md#maybe)
* [Nothing](_maybe_.md#nothing)

### Variables

* [nothing](_maybe_.md#const-nothing)

### Functions

* [isJust](_maybe_.md#const-isjust)
* [isNothing](_maybe_.md#const-isnothing)
* [just](_maybe_.md#const-just)

## Type aliases

###  Just

Ƭ **Just**: *T*

*Defined in [maybe.ts:17](https://github.com/fponticelli/tempo/blob/master/std/src/maybe.ts#L17)*

___

###  Maybe

Ƭ **Maybe**: *[Just](_maybe_.md#just)‹T› | [Nothing](_maybe_.md#nothing)*

*Defined in [maybe.ts:14](https://github.com/fponticelli/tempo/blob/master/std/src/maybe.ts#L14)*

___

###  Nothing

Ƭ **Nothing**: *undefined | null*

*Defined in [maybe.ts:16](https://github.com/fponticelli/tempo/blob/master/std/src/maybe.ts#L16)*

## Variables

### `Const` nothing

• **nothing**: *[Maybe](_maybe_.md#maybe)‹never›* = undefined

*Defined in [maybe.ts:19](https://github.com/fponticelli/tempo/blob/master/std/src/maybe.ts#L19)*

## Functions

### `Const` isJust

▸ **isJust**<**T**>(`maybe`: [Maybe](_maybe_.md#maybe)‹T›): *maybe is Just<T>*

*Defined in [maybe.ts:23](https://github.com/fponticelli/tempo/blob/master/std/src/maybe.ts#L23)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](_maybe_.md#maybe)‹T› |

**Returns:** *maybe is Just<T>*

___

### `Const` isNothing

▸ **isNothing**<**T**>(`maybe`: [Maybe](_maybe_.md#maybe)‹T›): *maybe is Nothing*

*Defined in [maybe.ts:22](https://github.com/fponticelli/tempo/blob/master/std/src/maybe.ts#L22)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](_maybe_.md#maybe)‹T› |

**Returns:** *maybe is Nothing*

___

### `Const` just

▸ **just**<**T**>(`value`: T): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [maybe.ts:20](https://github.com/fponticelli/tempo/blob/master/std/src/maybe.ts#L20)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*
