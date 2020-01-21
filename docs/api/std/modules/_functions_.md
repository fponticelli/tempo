---
id: "_functions_"
title: "functions"
sidebar_label: "functions"
---

[tempo-std - v0.2.0](../index.md) › [Globals](../globals.md) › ["functions"](_functions_.md)

## Index

### Functions

* [compose](_functions_.md#compose)
* [curryLeft](_functions_.md#const-curryleft)
* [curryRight](_functions_.md#curryright)
* [flip](_functions_.md#flip)
* [identity](_functions_.md#const-identity)

## Functions

###  compose

▸ **compose**<**A**>(): *function*

*Defined in [functions.ts:3](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L3)*

**Type parameters:**

▪ **A**

**Returns:** *function*

▸ (`a`: A): *A*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ **compose**<**A**, **B**>(`f1`: function): *function*

*Defined in [functions.ts:4](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f1**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ **compose**<**A**, **B**, **C**>(`f1`: function, `f2`: function): *function*

*Defined in [functions.ts:5](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f1**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **f2**: *function*

▸ (`b`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`b` | B |

**Returns:** *function*

▸ (`a`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ **compose**<**A**, **B**, **C**, **D**>(`f1`: function, `f2`: function, `f3`: function): *function*

*Defined in [functions.ts:6](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L6)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

▪ **f1**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **f2**: *function*

▸ (`b`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`b` | B |

▪ **f3**: *function*

▸ (`c`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`c` | C |

**Returns:** *function*

▸ (`a`: A): *D*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ **compose**<**A**, **B**, **C**, **D**, **E**>(`f1`: function, `f2`: function, `f3`: function, `f4`: function): *function*

*Defined in [functions.ts:7](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L7)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

▪ **f1**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **f2**: *function*

▸ (`b`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`b` | B |

▪ **f3**: *function*

▸ (`c`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`c` | C |

▪ **f4**: *function*

▸ (`d`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`d` | D |

**Returns:** *function*

▸ (`a`: A): *E*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ **compose**<**A**, **B**, **C**, **D**, **E**, **F**>(`f1`: function, `f2`: function, `f3`: function, `f4`: function, `f5`: function): *function*

*Defined in [functions.ts:8](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

▪ **f1**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **f2**: *function*

▸ (`b`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`b` | B |

▪ **f3**: *function*

▸ (`c`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`c` | C |

▪ **f4**: *function*

▸ (`d`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`d` | D |

▪ **f5**: *function*

▸ (`e`: E): *F*

**Parameters:**

Name | Type |
------ | ------ |
`e` | E |

**Returns:** *function*

▸ (`a`: A): *F*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ **compose**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`f1`: function, `f2`: function, `f3`: function, `f4`: function, `f5`: function, `f6`: function): *function*

*Defined in [functions.ts:9](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L9)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

▪ **f1**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **f2**: *function*

▸ (`b`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`b` | B |

▪ **f3**: *function*

▸ (`c`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`c` | C |

▪ **f4**: *function*

▸ (`d`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`d` | D |

▪ **f5**: *function*

▸ (`e`: E): *F*

**Parameters:**

Name | Type |
------ | ------ |
`e` | E |

▪ **f6**: *function*

▸ (`f`: F): *G*

**Parameters:**

Name | Type |
------ | ------ |
`f` | F |

**Returns:** *function*

▸ (`a`: A): *G*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

___

### `Const` curryLeft

▸ **curryLeft**<**A**, **Rest**, **Ret**>(`f`: function): *(Anonymous function)*

*Defined in [functions.ts:17](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L17)*

**Type parameters:**

▪ **A**

▪ **Rest**: *any[]*

▪ **Ret**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, ...`rest`: Rest): *Ret*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`...rest` | Rest |

**Returns:** *(Anonymous function)*

___

###  curryRight

▸ **curryRight**<**A**, **B**, **C**, **D**>(`f`: function): *function*

*Defined in [functions.ts:20](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L20)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B, `c`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |

**Returns:** *function*

▸ (`a`: A, `b`: B): *function*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

▸ (`c`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`c` | C |

▸ **curryRight**<**A**, **B**, **C**, **D**, **E**>(`f`: function): *function*

*Defined in [functions.ts:22](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L22)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C): *function*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |

▸ (`d`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`d` | D |

▸ **curryRight**<**A**, **B**, **C**, **D**, **E**, **F**>(`f`: function): *function*

*Defined in [functions.ts:24](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L24)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E): *F*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D): *function*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |

▸ (`e`: E): *F*

**Parameters:**

Name | Type |
------ | ------ |
`e` | E |

▸ **curryRight**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`f`: function): *function*

*Defined in [functions.ts:26](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L26)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F): *G*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |

**Returns:** *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E): *function*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |

▸ (`f`: F): *G*

**Parameters:**

Name | Type |
------ | ------ |
`f` | F |

___

###  flip

▸ **flip**<**A**, **B**, **C**>(`f`: function): *function*

*Defined in [functions.ts:32](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L32)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

**Returns:** *function*

▸ (`b`: B, `a`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`b` | B |
`a` | A |

▸ **flip**<**A**, **B**, **C**, **D**>(`f`: function): *function*

*Defined in [functions.ts:34](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L34)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B, `c`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |

**Returns:** *function*

▸ (`c`: C, `b`: B, `a`: A): *D*

**Parameters:**

Name | Type |
------ | ------ |
`c` | C |
`b` | B |
`a` | A |

▸ **flip**<**A**, **B**, **C**, **D**, **E**>(`f`: function): *function*

*Defined in [functions.ts:36](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L36)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |

**Returns:** *function*

▸ (`d`: D, `c`: C, `b`: B, `a`: A): *E*

**Parameters:**

Name | Type |
------ | ------ |
`d` | D |
`c` | C |
`b` | B |
`a` | A |

▸ **flip**<**A**, **B**, **C**, **D**, **E**>(`f`: function): *function*

*Defined in [functions.ts:38](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L38)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |

**Returns:** *function*

▸ (`d`: D, `c`: C, `b`: B, `a`: A): *E*

**Parameters:**

Name | Type |
------ | ------ |
`d` | D |
`c` | C |
`b` | B |
`a` | A |

▸ **flip**<**A**, **B**, **C**, **D**, **E**, **F**>(`f`: function): *function*

*Defined in [functions.ts:40](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L40)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E): *F*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |

**Returns:** *function*

▸ (`e`: E, `d`: D, `c`: C, `b`: B, `a`: A): *F*

**Parameters:**

Name | Type |
------ | ------ |
`e` | E |
`d` | D |
`c` | C |
`b` | B |
`a` | A |

▸ **flip**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`f`: function): *function*

*Defined in [functions.ts:42](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L42)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E, `f`: F): *G*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |
`f` | F |

**Returns:** *function*

▸ (`f`: F, `e`: E, `d`: D, `c`: C, `b`: B, `a`: A): *G*

**Parameters:**

Name | Type |
------ | ------ |
`f` | F |
`e` | E |
`d` | D |
`c` | C |
`b` | B |
`a` | A |

___

### `Const` identity

▸ **identity**<**T**>(`v`: T): *T*

*Defined in [functions.ts:15](https://github.com/fponticelli/tempo/blob/master/std/src/functions.ts#L15)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *T*
