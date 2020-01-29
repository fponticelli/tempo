---
id: "_adapter_.paperadaptertemplate"
title: "PaperAdapterTemplate"
sidebar_label: "PaperAdapterTemplate"
---

## Type parameters

▪ **OuterState**

▪ **InnerState**

▪ **OuterAction**

▪ **InnerAction**

▪ **Query**

## Hierarchy

* **PaperAdapterTemplate**

## Implements

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹OuterState, OuterAction, Query›

## Index

### Constructors

* [constructor](_adapter_.paperadaptertemplate.md#constructor)

### Properties

* [child](_adapter_.paperadaptertemplate.md#child)
* [mergeStates](_adapter_.paperadaptertemplate.md#mergestates)
* [propagate](_adapter_.paperadaptertemplate.md#propagate)

### Methods

* [render](_adapter_.paperadaptertemplate.md#render)

## Constructors

###  constructor

\+ **new PaperAdapterTemplate**(`mergeStates`: function, `propagate`: function, `child`: [PaperComponentTemplate](_component_.papercomponenttemplate.md)‹InnerState, InnerAction, Query›): *[PaperAdapterTemplate](_adapter_.paperadaptertemplate.md)*

*Defined in [paperjs/src/adapter.ts:25](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L25)*

**Parameters:**

▪ **mergeStates**: *function*

▸ (`outerState`: OuterState, `innerState`: InnerState): *InnerState | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`outerState` | OuterState |
`innerState` | InnerState |

▪ **propagate**: *function*

▸ (`args`: [PropagateArg](../interfaces/_adapter_.propagatearg.md)‹OuterState, InnerState, OuterAction, InnerAction›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [PropagateArg](../interfaces/_adapter_.propagatearg.md)‹OuterState, InnerState, OuterAction, InnerAction› |

▪ **child**: *[PaperComponentTemplate](_component_.papercomponenttemplate.md)‹InnerState, InnerAction, Query›*

**Returns:** *[PaperAdapterTemplate](_adapter_.paperadaptertemplate.md)*

## Properties

###  child

• **child**: *[PaperComponentTemplate](_component_.papercomponenttemplate.md)‹InnerState, InnerAction, Query›*

*Defined in [paperjs/src/adapter.ts:34](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L34)*

___

###  mergeStates

• **mergeStates**: *function*

*Defined in [paperjs/src/adapter.ts:27](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L27)*

#### Type declaration:

▸ (`outerState`: OuterState, `innerState`: InnerState): *InnerState | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`outerState` | OuterState |
`innerState` | InnerState |

___

###  propagate

• **propagate**: *function*

*Defined in [paperjs/src/adapter.ts:31](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L31)*

#### Type declaration:

▸ (`args`: [PropagateArg](../interfaces/_adapter_.propagatearg.md)‹OuterState, InnerState, OuterAction, InnerAction›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [PropagateArg](../interfaces/_adapter_.propagatearg.md)‹OuterState, InnerState, OuterAction, InnerAction› |

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹OuterAction›, `outerState`: OuterState): *View‹OuterState, Query›*

*Defined in [paperjs/src/adapter.ts:37](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹OuterAction› |
`outerState` | OuterState |

**Returns:** *View‹OuterState, Query›*
