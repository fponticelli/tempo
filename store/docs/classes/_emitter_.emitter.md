---
id: "_emitter_.emitter"
title: "Emitter"
sidebar_label: "Emitter"
---

## Type parameters

▪ **T**: *any[]*

## Hierarchy

* **Emitter**

## Implements

* [Observable](../interfaces/_observable_.observable.md)‹T›

## Index

### Properties

* [listeners](_emitter_.emitter.md#listeners)

### Methods

* [emit](_emitter_.emitter.md#emit)
* [off](_emitter_.emitter.md#off)
* [on](_emitter_.emitter.md#on)
* [once](_emitter_.emitter.md#once)
* [ofOne](_emitter_.emitter.md#static-ofone)
* [ofThree](_emitter_.emitter.md#static-ofthree)
* [ofTwo](_emitter_.emitter.md#static-oftwo)

## Properties

###  listeners

• **listeners**: *[Listener](../modules/_listener_.md#listener)‹T›[]* = []

*Defined in [emitter.ts:28](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L28)*

## Methods

###  emit

▸ **emit**(...`value`: T): *void*

*Defined in [emitter.ts:32](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`...value` | T |

**Returns:** *void*

___

###  off

▸ **off**(`listener`: [Listener](../modules/_listener_.md#listener)‹T›): *boolean*

*Implementation of [Observable](../interfaces/_observable_.observable.md)*

*Defined in [emitter.ts:40](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_listener_.md#listener)‹T› |

**Returns:** *boolean*

___

###  on

▸ **on**(`listener`: [Listener](../modules/_listener_.md#listener)‹T›): *void*

*Implementation of [Observable](../interfaces/_observable_.observable.md)*

*Defined in [emitter.ts:36](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_listener_.md#listener)‹T› |

**Returns:** *void*

___

###  once

▸ **once**(`listener`: [Listener](../modules/_listener_.md#listener)‹T›): *void*

*Implementation of [Observable](../interfaces/_observable_.observable.md)*

*Defined in [emitter.ts:47](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_listener_.md#listener)‹T› |

**Returns:** *void*

___

### `Static` ofOne

▸ **ofOne**<**A**>(): *[Emitter1](../modules/_emitter_.md#emitter1)‹A›*

*Defined in [emitter.ts:18](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L18)*

**Type parameters:**

▪ **A**

**Returns:** *[Emitter1](../modules/_emitter_.md#emitter1)‹A›*

___

### `Static` ofThree

▸ **ofThree**<**A**, **B**, **C**>(): *[Emitter3](../modules/_emitter_.md#emitter3)‹A, B, C›*

*Defined in [emitter.ts:24](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L24)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Returns:** *[Emitter3](../modules/_emitter_.md#emitter3)‹A, B, C›*

___

### `Static` ofTwo

▸ **ofTwo**<**A**, **B**>(): *[Emitter2](../modules/_emitter_.md#emitter2)‹A, B›*

*Defined in [emitter.ts:21](https://github.com/fponticelli/tempo/blob/master/store/src/emitter.ts#L21)*

**Type parameters:**

▪ **A**

▪ **B**

**Returns:** *[Emitter2](../modules/_emitter_.md#emitter2)‹A, B›*
