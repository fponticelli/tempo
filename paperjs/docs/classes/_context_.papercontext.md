---
id: "_context_.papercontext"
title: "PaperContext"
sidebar_label: "PaperContext"
---

## Type parameters

▪ **Action**

## Hierarchy

* **PaperContext**

## Index

### Constructors

* [constructor](_context_.papercontext.md#constructor)

### Properties

* [append](_context_.papercontext.md#append)
* [canvas](_context_.papercontext.md#canvas)
* [dispatch](_context_.papercontext.md#dispatch)
* [project](_context_.papercontext.md#project)
* [scope](_context_.papercontext.md#scope)

### Methods

* [conditionalMapAction](_context_.papercontext.md#conditionalmapaction)
* [mapAction](_context_.papercontext.md#mapaction)
* [withAppend](_context_.papercontext.md#withappend)
* [withDispatch](_context_.papercontext.md#withdispatch)

## Constructors

###  constructor

\+ **new PaperContext**(`canvas`: HTMLCanvasElement, `scope`: PaperScope, `project`: Project, `append`: function, `dispatch`: function): *[PaperContext](_context_.papercontext.md)*

*Defined in [paperjs/src/context.ts:16](https://github.com/fponticelli/tempo/blob/master/paperjs/src/context.ts#L16)*

**Parameters:**

▪ **canvas**: *HTMLCanvasElement*

▪ **scope**: *PaperScope*

▪ **project**: *Project*

▪ **append**: *function*

▸ (`item`: Item): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | Item |

▪ **dispatch**: *function*

▸ (`action`: Action): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | Action |

**Returns:** *[PaperContext](_context_.papercontext.md)*

## Properties

###  append

• **append**: *function*

*Defined in [paperjs/src/context.ts:21](https://github.com/fponticelli/tempo/blob/master/paperjs/src/context.ts#L21)*

#### Type declaration:

▸ (`item`: Item): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | Item |

___

###  canvas

• **canvas**: *HTMLCanvasElement*

*Defined in [paperjs/src/context.ts:18](https://github.com/fponticelli/tempo/blob/master/paperjs/src/context.ts#L18)*

___

###  dispatch

• **dispatch**: *function*

*Defined in [paperjs/src/context.ts:22](https://github.com/fponticelli/tempo/blob/master/paperjs/src/context.ts#L22)*

#### Type declaration:

▸ (`action`: Action): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | Action |

___

###  project

• **project**: *Project*

*Defined in [paperjs/src/context.ts:20](https://github.com/fponticelli/tempo/blob/master/paperjs/src/context.ts#L20)*

___

###  scope

• **scope**: *PaperScope*

*Defined in [paperjs/src/context.ts:19](https://github.com/fponticelli/tempo/blob/master/paperjs/src/context.ts#L19)*

## Methods

###  conditionalMapAction

▸ **conditionalMapAction**<**OtherAction**>(`f`: function): *[PaperContext](_context_.papercontext.md)‹OtherAction›*

*Defined in [paperjs/src/context.ts:35](https://github.com/fponticelli/tempo/blob/master/paperjs/src/context.ts#L35)*

**Type parameters:**

▪ **OtherAction**

**Parameters:**

▪ **f**: *function*

▸ (`action`: OtherAction): *Action | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`action` | OtherAction |

**Returns:** *[PaperContext](_context_.papercontext.md)‹OtherAction›*

___

###  mapAction

▸ **mapAction**<**OtherAction**>(`f`: function): *[PaperContext](_context_.papercontext.md)‹OtherAction›*

*Defined in [paperjs/src/context.ts:25](https://github.com/fponticelli/tempo/blob/master/paperjs/src/context.ts#L25)*

**Type parameters:**

▪ **OtherAction**

**Parameters:**

▪ **f**: *function*

▸ (`action`: OtherAction): *Action*

**Parameters:**

Name | Type |
------ | ------ |
`action` | OtherAction |

**Returns:** *[PaperContext](_context_.papercontext.md)‹OtherAction›*

___

###  withAppend

▸ **withAppend**(`append`: function): *[PaperContext](_context_.papercontext.md)‹Action›*

*Defined in [paperjs/src/context.ts:52](https://github.com/fponticelli/tempo/blob/master/paperjs/src/context.ts#L52)*

**Parameters:**

▪ **append**: *function*

▸ (`item`: Item): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | Item |

**Returns:** *[PaperContext](_context_.papercontext.md)‹Action›*

___

###  withDispatch

▸ **withDispatch**<**OtherAction**>(`dispatch`: function): *[PaperContext](_context_.papercontext.md)‹OtherAction›*

*Defined in [paperjs/src/context.ts:62](https://github.com/fponticelli/tempo/blob/master/paperjs/src/context.ts#L62)*

**Type parameters:**

▪ **OtherAction**

**Parameters:**

▪ **dispatch**: *function*

▸ (`action`: OtherAction): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | OtherAction |

**Returns:** *[PaperContext](_context_.papercontext.md)‹OtherAction›*
