---
id: "_uuid_"
title: "uuid"
sidebar_label: "uuid"
---

## Index

### Type aliases

* [UUID](_uuid_.md#uuid)

### Variables

* [UUID](_uuid_.md#const-uuid)

### Functions

* [create](_uuid_.md#const-create)
* [toString](_uuid_.md#const-tostring)

## Type aliases

###  UUID

Ƭ **UUID**: *[Newtype](../interfaces/_newtype_.newtype.md)‹string, object›*

*Defined in [uuid.ts:40](https://github.com/fponticelli/tempo/blob/master/std/src/uuid.ts#L40)*

Returns `true` if the passed `uuid` conforms to the UUID v.4 format.

## Variables

### `Const` UUID

• **UUID**: *(Anonymous class)‹›* = new class extends NewtypeClass<UUID> {
  isValid(uuid: string) { return pattern.test(uuid) }
}()

*Defined in [uuid.ts:42](https://github.com/fponticelli/tempo/blob/master/std/src/uuid.ts#L42)*

## Functions

### `Const` create

▸ **create**(): *[Newtype](../interfaces/_newtype_.newtype.md)‹string, object›*

*Defined in [uuid.ts:13](https://github.com/fponticelli/tempo/blob/master/std/src/uuid.ts#L13)*

`Uuid.create()` returns a string value representing a random UUID string.

**Returns:** *[Newtype](../interfaces/_newtype_.newtype.md)‹string, object›*

___

### `Const` toString

▸ **toString**(`uuid`: [UUID](_uuid_.md#uuid)): *string*

*Defined in [uuid.ts:46](https://github.com/fponticelli/tempo/blob/master/std/src/uuid.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`uuid` | [UUID](_uuid_.md#uuid) |

**Returns:** *string*
