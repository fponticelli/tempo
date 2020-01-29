---
id: "_store_.store"
title: "Store"
sidebar_label: "Store"
---

## Type parameters

▪ **State**

▪ **Action**

## Hierarchy

* **Store**

## Index

### Constructors

* [constructor](_store_.store.md#constructor)

### Properties

* [observable](_store_.store.md#observable)
* [property](_store_.store.md#property)

### Methods

* [process](_store_.store.md#process)
* [ofState](_store_.store.md#static-ofstate)

## Constructors

###  constructor

\+ **new Store**(`property`: [Property](_property_.property.md)‹State›, `reducer`: [Reducer](../modules/_reducer_.md#reducer)‹State, Action›): *[Store](_store_.store.md)*

*Defined in [store.ts:31](https://github.com/fponticelli/tempo/blob/master/store/src/store.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`property` | [Property](_property_.property.md)‹State› |
`reducer` | [Reducer](../modules/_reducer_.md#reducer)‹State, Action› |

**Returns:** *[Store](_store_.store.md)*

## Properties

###  observable

• **observable**: *[Observable3](../modules/_observable_.md#observable3)‹State, Action, boolean›*

*Defined in [store.ts:31](https://github.com/fponticelli/tempo/blob/master/store/src/store.ts#L31)*

___

###  property

• **property**: *[Property](_property_.property.md)‹State›*

*Defined in [store.ts:34](https://github.com/fponticelli/tempo/blob/master/store/src/store.ts#L34)*

## Methods

###  process

▸ **process**(`action`: Action): *boolean*

*Defined in [store.ts:40](https://github.com/fponticelli/tempo/blob/master/store/src/store.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | Action |

**Returns:** *boolean*

___

### `Static` ofState

▸ **ofState**<**State**, **Action**>(`options`: object): *[Store](_store_.store.md)‹State, Action›*

*Defined in [store.ts:20](https://github.com/fponticelli/tempo/blob/master/store/src/store.ts#L20)*

**Type parameters:**

▪ **State**

▪ **Action**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`equal?` | undefined &#124; function |
`reducer` | [Reducer](../modules/_reducer_.md#reducer)‹State, Action› |
`state` | State |

**Returns:** *[Store](_store_.store.md)‹State, Action›*
