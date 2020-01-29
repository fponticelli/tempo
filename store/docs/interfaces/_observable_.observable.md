---
id: "_observable_.observable"
title: "Observable"
sidebar_label: "Observable"
---

## Type parameters

▪ **T**: *any[]*

## Hierarchy

* **Observable**

## Implemented by

* [Emitter](../classes/_emitter_.emitter.md)

## Index

### Methods

* [off](_observable_.observable.md#off)
* [on](_observable_.observable.md#on)
* [once](_observable_.observable.md#once)

## Methods

###  off

▸ **off**(`listener`: [Listener](../modules/_listener_.md#listener)‹T›): *boolean*

*Defined in [observable.ts:18](https://github.com/fponticelli/tempo/blob/master/store/src/observable.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_listener_.md#listener)‹T› |

**Returns:** *boolean*

___

###  on

▸ **on**(`listener`: [Listener](../modules/_listener_.md#listener)‹T›): *void*

*Defined in [observable.ts:17](https://github.com/fponticelli/tempo/blob/master/store/src/observable.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_listener_.md#listener)‹T› |

**Returns:** *void*

___

###  once

▸ **once**(`listener`: [Listener](../modules/_listener_.md#listener)‹T›): *void*

*Defined in [observable.ts:19](https://github.com/fponticelli/tempo/blob/master/store/src/observable.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_listener_.md#listener)‹T› |

**Returns:** *void*
