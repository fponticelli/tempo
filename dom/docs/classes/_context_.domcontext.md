---
id: "_context_.domcontext"
title: "DOMContext"
sidebar_label: "DOMContext"
---

## Type parameters

▪ **Action**

## Hierarchy

* **DOMContext**

## Index

### Constructors

* [constructor](_context_.domcontext.md#constructor)

### Properties

* [append](_context_.domcontext.md#append)
* [dispatch](_context_.domcontext.md#dispatch)
* [doc](_context_.domcontext.md#doc)
* [parent](_context_.domcontext.md#parent)

### Methods

* [conditionalMapAction](_context_.domcontext.md#conditionalmapaction)
* [mapAction](_context_.domcontext.md#mapaction)
* [withAppend](_context_.domcontext.md#withappend)
* [withAppendToReference](_context_.domcontext.md#withappendtoreference)
* [withDispatch](_context_.domcontext.md#withdispatch)
* [withParent](_context_.domcontext.md#withparent)
* [fromElement](_context_.domcontext.md#static-fromelement)

## Constructors

###  constructor

\+ **new DOMContext**(`doc`: Document, `append`: function, `parent`: Element, `dispatch`: function): *[DOMContext](_context_.domcontext.md)*

*Defined in [dom/src/context.ts:25](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L25)*

**Parameters:**

▪ **doc**: *Document*

▪ **append**: *function*

▸ (`node`: Node): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Node |

▪ **parent**: *Element*

▪ **dispatch**: *function*

▸ (`action`: Action): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | Action |

**Returns:** *[DOMContext](_context_.domcontext.md)*

## Properties

###  append

• **append**: *function*

*Defined in [dom/src/context.ts:29](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L29)*

#### Type declaration:

▸ (`node`: Node): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Node |

___

###  dispatch

• **dispatch**: *function*

*Defined in [dom/src/context.ts:31](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L31)*

#### Type declaration:

▸ (`action`: Action): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | Action |

___

###  doc

• **doc**: *Document*

*Defined in [dom/src/context.ts:28](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L28)*

___

###  parent

• **parent**: *Element*

*Defined in [dom/src/context.ts:30](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L30)*

## Methods

###  conditionalMapAction

▸ **conditionalMapAction**<**OtherAction**>(`f`: function): *[DOMContext](_context_.domcontext.md)‹OtherAction›*

*Defined in [dom/src/context.ts:40](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L40)*

**Type parameters:**

▪ **OtherAction**

**Parameters:**

▪ **f**: *function*

▸ (`action`: OtherAction): *Action | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`action` | OtherAction |

**Returns:** *[DOMContext](_context_.domcontext.md)‹OtherAction›*

___

###  mapAction

▸ **mapAction**<**OtherAction**>(`f`: function): *[DOMContext](_context_.domcontext.md)‹OtherAction›*

*Defined in [dom/src/context.ts:34](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L34)*

**Type parameters:**

▪ **OtherAction**

**Parameters:**

▪ **f**: *function*

▸ (`action`: OtherAction): *Action*

**Parameters:**

Name | Type |
------ | ------ |
`action` | OtherAction |

**Returns:** *[DOMContext](_context_.domcontext.md)‹OtherAction›*

___

###  withAppend

▸ **withAppend**(`append`: function): *[DOMContext](_context_.domcontext.md)‹Action›*

*Defined in [dom/src/context.ts:58](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L58)*

**Parameters:**

▪ **append**: *function*

▸ (`node`: Node): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Node |

**Returns:** *[DOMContext](_context_.domcontext.md)‹Action›*

___

###  withAppendToReference

▸ **withAppendToReference**(`refId?`: undefined | string): *object*

*Defined in [dom/src/context.ts:49](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`refId?` | undefined &#124; string |

**Returns:** *object*

* **ctx**: *[DOMContext](_context_.domcontext.md)‹Action›* = this.withAppend(makeInsertBefore(ref))

* **ref**: *Comment*

___

###  withDispatch

▸ **withDispatch**<**OtherAction**>(`dispatch`: function): *[DOMContext](_context_.domcontext.md)‹OtherAction›*

*Defined in [dom/src/context.ts:66](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L66)*

**Type parameters:**

▪ **OtherAction**

**Parameters:**

▪ **dispatch**: *function*

▸ (`action`: OtherAction): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | OtherAction |

**Returns:** *[DOMContext](_context_.domcontext.md)‹OtherAction›*

___

###  withParent

▸ **withParent**(`parent`: Element): *[DOMContext](_context_.domcontext.md)‹Action›*

*Defined in [dom/src/context.ts:62](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | Element |

**Returns:** *[DOMContext](_context_.domcontext.md)‹Action›*

___

### `Static` fromElement

▸ **fromElement**<**Action**>(`element`: Element, `dispatch`: function): *[DOMContext](_context_.domcontext.md)‹Action›*

*Defined in [dom/src/context.ts:17](https://github.com/fponticelli/tempo/blob/master/dom/src/context.ts#L17)*

**Type parameters:**

▪ **Action**

**Parameters:**

▪ **element**: *Element*

▪ **dispatch**: *function*

▸ (`action`: Action): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | Action |

**Returns:** *[DOMContext](_context_.domcontext.md)‹Action›*
