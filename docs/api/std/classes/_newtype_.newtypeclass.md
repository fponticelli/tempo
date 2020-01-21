---
id: "_newtype_.newtypeclass"
title: "NewtypeClass"
sidebar_label: "NewtypeClass"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["newtype"](../modules/_newtype_.md) › [NewtypeClass](_newtype_.newtypeclass.md)

## Type parameters

▪ **T**: *[Newtype](../interfaces/_newtype_.newtype.md)‹any, any›*

## Hierarchy

* **NewtypeClass**

## Index

### Methods

* [get](_newtype_.newtypeclass.md#get)
* [isValid](_newtype_.newtypeclass.md#abstract-isvalid)
* [maybeModify](_newtype_.newtypeclass.md#maybemodify)
* [maybeOf](_newtype_.newtypeclass.md#maybeof)
* [modify](_newtype_.newtypeclass.md#modify)
* [of](_newtype_.newtypeclass.md#of)
* [unsafeModify](_newtype_.newtypeclass.md#unsafemodify)
* [unsafeOf](_newtype_.newtypeclass.md#unsafeof)

## Methods

###  get

▸ **get**(`v`: T): *T["_T"]*

*Defined in [newtype.ts:32](https://github.com/fponticelli/tempo/blob/master/std/src/newtype.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *T["_T"]*

___

### `Abstract` isValid

▸ **isValid**(`v`: T["_T"]): *boolean*

*Defined in [newtype.ts:22](https://github.com/fponticelli/tempo/blob/master/std/src/newtype.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T["_T"] |

**Returns:** *boolean*

___

###  maybeModify

▸ **maybeModify**(`f`: function): *function*

*Defined in [newtype.ts:35](https://github.com/fponticelli/tempo/blob/master/std/src/newtype.ts#L35)*

**Parameters:**

▪ **f**: *function*

▸ (`v`: T["_T"]): *T["_T"]*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T["_T"] |

**Returns:** *function*

▸ (`value`: T): *[Maybe](../modules/_maybe_.md#maybe)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

___

###  maybeOf

▸ **maybeOf**(`v`: T["_T"]): *[Maybe](../modules/_maybe_.md#maybe)‹T›*

*Defined in [newtype.ts:29](https://github.com/fponticelli/tempo/blob/master/std/src/newtype.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T["_T"] |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹T›*

___

###  modify

▸ **modify**(`f`: function): *function*

*Defined in [newtype.ts:38](https://github.com/fponticelli/tempo/blob/master/std/src/newtype.ts#L38)*

**Parameters:**

▪ **f**: *function*

▸ (`v`: T["_T"]): *T["_T"]*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T["_T"] |

**Returns:** *function*

▸ (`value`: T): *[Option](../modules/_option_.md#option)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

___

###  of

▸ **of**(`v`: T["_T"]): *[Option](../modules/_option_.md#option)‹T›*

*Defined in [newtype.ts:26](https://github.com/fponticelli/tempo/blob/master/std/src/newtype.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T["_T"] |

**Returns:** *[Option](../modules/_option_.md#option)‹T›*

___

###  unsafeModify

▸ **unsafeModify**(`f`: function): *function*

*Defined in [newtype.ts:42](https://github.com/fponticelli/tempo/blob/master/std/src/newtype.ts#L42)*

**Parameters:**

▪ **f**: *function*

▸ (`v`: T["_T"]): *T["_T"]*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T["_T"] |

**Returns:** *function*

▸ (`value`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

___

###  unsafeOf

▸ **unsafeOf**(`v`: T["_T"]): *T*

*Defined in [newtype.ts:23](https://github.com/fponticelli/tempo/blob/master/std/src/newtype.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T["_T"] |

**Returns:** *T*
