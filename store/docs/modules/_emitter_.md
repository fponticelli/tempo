---
id: "_emitter_"
title: "emitter"
sidebar_label: "emitter"
---

## Index

### Classes

* [Emitter](../classes/_emitter_.emitter.md)

### Type aliases

* [Emitter1](_emitter_.md#emitter1)
* [Emitter2](_emitter_.md#emitter2)
* [Emitter3](_emitter_.md#emitter3)

### Functions

* [debounce](_emitter_.md#const-debounce)
* [nextFrame](_emitter_.md#const-nextframe)

## Type aliases

###  Emitter1

Ƭ **Emitter1**: *[Emitter](../classes/_emitter_.emitter.md)‹[T]›*

*Defined in [emitter.ts:56](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L56)*

___

###  Emitter2

Ƭ **Emitter2**: *[Emitter](../classes/_emitter_.emitter.md)‹[A, B]›*

*Defined in [emitter.ts:57](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L57)*

___

###  Emitter3

Ƭ **Emitter3**: *[Emitter](../classes/_emitter_.emitter.md)‹[A, B, C]›*

*Defined in [emitter.ts:58](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L58)*

## Functions

### `Const` debounce

▸ **debounce**(`delay`: number): *(Anonymous function)*

*Defined in [emitter.ts:60](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *(Anonymous function)*

___

### `Const` nextFrame

▸ **nextFrame**<**T**>(`listener`: [Listener](_listener_.md#listener)‹T›): *[Listener](_listener_.md#listener)‹T›*

*Defined in [emitter.ts:76](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L76)*

**Type parameters:**

▪ **T**: *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](_listener_.md#listener)‹T› |

**Returns:** *[Listener](_listener_.md#listener)‹T›*
