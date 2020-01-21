[tempo-std - v0.2.0](../README.md) › [Globals](../globals.md) › ["arrays"](_arrays_.md)

# External module: "arrays"

## Index

### Functions

* [all](_arrays_.md#const-all)
* [any](_arrays_.md#const-any)
* [concat](_arrays_.md#const-concat)
* [each](_arrays_.md#const-each)
* [equals](_arrays_.md#const-equals)
* [fill](_arrays_.md#const-fill)
* [filter](_arrays_.md#const-filter)
* [flatMap](_arrays_.md#const-flatmap)
* [flatten](_arrays_.md#const-flatten)
* [foldLeft](_arrays_.md#const-foldleft)
* [hasValues](_arrays_.md#const-hasvalues)
* [head](_arrays_.md#const-head)
* [isEmpty](_arrays_.md#const-isempty)
* [map](_arrays_.md#const-map)
* [numbersRange](_arrays_.md#const-numbersrange)
* [range](_arrays_.md#const-range)
* [sort](_arrays_.md#const-sort)
* [tail](_arrays_.md#const-tail)

## Functions

### `Const` all

▸ **all**<**T**>(`predicate`: function, `arr`: T[]): *boolean*

*Defined in [arrays.ts:70](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L70)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **arr**: *T[]*

**Returns:** *boolean*

___

### `Const` any

▸ **any**<**T**>(`predicate`: function, `arr`: T[]): *boolean*

*Defined in [arrays.ts:79](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L79)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **arr**: *T[]*

**Returns:** *boolean*

___

### `Const` concat

▸ **concat**<**A**>(...`arrs`: A[][]): *A[]*

*Defined in [arrays.ts:93](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L93)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`...arrs` | A[][] |

**Returns:** *A[]*

___

### `Const` each

▸ **each**<**T**>(`f`: function, `arr`: T[]): *void*

*Defined in [arrays.ts:88](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L88)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **arr**: *T[]*

**Returns:** *void*

___

### `Const` equals

▸ **equals**<**T**>(`predicate`: function, `a`: T[], `b`: T[]): *boolean*

*Defined in [arrays.ts:37](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L37)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

▪ **a**: *T[]*

▪ **b**: *T[]*

**Returns:** *boolean*

___

### `Const` fill

▸ **fill**<**A**>(`length`: number, `value`: A): *any[]*

*Defined in [arrays.ts:108](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L108)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |
`value` | A |

**Returns:** *any[]*

___

### `Const` filter

▸ **filter**<**T**>(`predicate`: function, `arr`: T[]): *T[]*

*Defined in [arrays.ts:51](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L51)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`v`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

▪ **arr**: *T[]*

**Returns:** *T[]*

___

### `Const` flatMap

▸ **flatMap**<**A**, **B**>(`f`: function, `arr`: A[]): *B[]*

*Defined in [arrays.ts:26](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L26)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B[]*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **arr**: *A[]*

**Returns:** *B[]*

___

### `Const` flatten

▸ **flatten**<**T**>(`arr`: T[][]): *T[]*

*Defined in [arrays.ts:59](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L59)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | T[][] |

**Returns:** *T[]*

___

### `Const` foldLeft

▸ **foldLeft**<**T**, **B**>(`f`: function, `arr`: T[], `b`: B): *B*

*Defined in [arrays.ts:63](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L63)*

**Type parameters:**

▪ **T**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`acc`: B, `curr`: T): *B*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | B |
`curr` | T |

▪ **arr**: *T[]*

▪ **b**: *B*

**Returns:** *B*

___

### `Const` hasValues

▸ **hasValues**<**T**>(`arr`: T[]): *arr is [T]*

*Defined in [arrays.ts:49](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L49)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | T[] |

**Returns:** *arr is [T]*

___

### `Const` head

▸ **head**<**A**>(`arr`: A[]): *[Maybe](_maybe_.md#maybe)‹A›*

*Defined in [arrays.ts:34](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L34)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | A[] |

**Returns:** *[Maybe](_maybe_.md#maybe)‹A›*

___

### `Const` isEmpty

▸ **isEmpty**<**T**>(`arr`: T[]): *arr is []*

*Defined in [arrays.ts:48](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L48)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | T[] |

**Returns:** *arr is []*

___

### `Const` map

▸ **map**<**A**, **B**>(`f`: function, `arr`: A[]): *B[]*

*Defined in [arrays.ts:17](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L17)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **arr**: *A[]*

**Returns:** *B[]*

___

### `Const` numbersRange

▸ **numbersRange**(`length`: number, `startAt`: number): *any[]*

*Defined in [arrays.ts:106](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L106)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`length` | number | - |
`startAt` | number | 0 |

**Returns:** *any[]*

___

### `Const` range

▸ **range**<**A**>(`length`: number, `f`: function): *any[]*

*Defined in [arrays.ts:99](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L99)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **length**: *number*

▪ **f**: *function*

▸ (`index`: number): *A*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *any[]*

___

### `Const` sort

▸ **sort**<**A**>(`compare`: function, `arr`: A[]): *A[]*

*Defined in [arrays.ts:96](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L96)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **compare**: *function*

▸ (`a`: A, `b`: A): *[Ordering](../enums/_ord_.ordering.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

▪ **arr**: *A[]*

**Returns:** *A[]*

___

### `Const` tail

▸ **tail**<**A**>(`arr`: A[]): *A[]*

*Defined in [arrays.ts:35](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/arrays.ts#L35)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | A[] |

**Returns:** *A[]*
