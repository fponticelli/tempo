[tempo-std - v0.2.0](../README.md) › [Globals](../globals.md) › ["ord"](../modules/_ord_.md) › [Ord](_ord_.ord.md)

# Class: Ord <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Ord**

## Index

### Constructors

* [constructor](_ord_.ord.md#constructor)

### Properties

* [compare](_ord_.ord.md#compare)

### Methods

* [contramap](_ord_.ord.md#contramap)
* [equal](_ord_.ord.md#equal)
* [inverse](_ord_.ord.md#inverse)
* [max](_ord_.ord.md#max)
* [min](_ord_.ord.md#min)
* [numberComparison](_ord_.ord.md#numbercomparison)
* [fromNumberComparison](_ord_.ord.md#static-fromnumbercomparison)

## Constructors

###  constructor

\+ **new Ord**(`compare`: function): *[Ord](_ord_.ord.md)*

*Defined in [ord.ts:10](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/ord.ts#L10)*

**Parameters:**

▪ **compare**: *function*

▸ (`a`: T, `b`: T): *[Ordering](../enums/_ord_.ordering.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *[Ord](_ord_.ord.md)*

## Properties

###  compare

• **compare**: *function*

*Defined in [ord.ts:13](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/ord.ts#L13)*

#### Type declaration:

▸ (`a`: T, `b`: T): *[Ordering](../enums/_ord_.ordering.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

## Methods

###  contramap

▸ **contramap**<**B**>(`f`: function): *[Ord](_ord_.ord.md)‹B›*

*Defined in [ord.ts:45](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/ord.ts#L45)*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`b`: B): *T*

**Parameters:**

Name | Type |
------ | ------ |
`b` | B |

**Returns:** *[Ord](_ord_.ord.md)‹B›*

___

###  equal

▸ **equal**(`a`: T, `b`: T): *boolean*

*Defined in [ord.ts:36](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/ord.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *boolean*

___

###  inverse

▸ **inverse**(): *[Ord](_ord_.ord.md)‹T›*

*Defined in [ord.ts:49](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/ord.ts#L49)*

**Returns:** *[Ord](_ord_.ord.md)‹T›*

___

###  max

▸ **max**(`a`: T, `b`: T): *T*

*Defined in [ord.ts:16](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/ord.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *T*

___

###  min

▸ **min**(`a`: T, `b`: T): *T*

*Defined in [ord.ts:26](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/ord.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *T*

___

###  numberComparison

▸ **numberComparison**(`a0`: T, `a1`: T): *number*

*Defined in [ord.ts:53](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/ord.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`a0` | T |
`a1` | T |

**Returns:** *number*

___

### `Static` fromNumberComparison

▸ **fromNumberComparison**<**T**>(`compare`: function): *[Ord](_ord_.ord.md)‹T›*

*Defined in [ord.ts:8](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/ord.ts#L8)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **compare**: *function*

▸ (`a`: T, `b`: T): *number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *[Ord](_ord_.ord.md)‹T›*
