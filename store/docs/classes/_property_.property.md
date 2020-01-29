---
id: "_property_.property"
title: "Property"
sidebar_label: "Property"
---

## Type parameters

▪ **T**

## Hierarchy

* **Property**

## Index

### Constructors

* [constructor](_property_.property.md#constructor)

### Properties

* [observable](_property_.property.md#observable)

### Methods

* [get](_property_.property.md#get)
* [set](_property_.property.md#set)

## Constructors

###  constructor

\+ **new Property**(`value`: T, `equal`: function): *[Property](_property_.property.md)*

*Defined in [property.ts:19](https://github.com/fponticelli/tempo/blob/master/store/src/property.ts#L19)*

**Parameters:**

▪ **value**: *T*

▪`Default value`  **equal**: *function*= strictEqual

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *[Property](_property_.property.md)*

## Properties

###  observable

• **observable**: *[Observable1](../modules/_observable_.md#observable1)‹T›*

*Defined in [property.ts:19](https://github.com/fponticelli/tempo/blob/master/store/src/property.ts#L19)*

## Methods

###  get

▸ **get**(): *T*

*Defined in [property.ts:37](https://github.com/fponticelli/tempo/blob/master/store/src/property.ts#L37)*

**Returns:** *T*

___

###  set

▸ **set**(`value`: T): *boolean*

*Defined in [property.ts:28](https://github.com/fponticelli/tempo/blob/master/store/src/property.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *boolean*
