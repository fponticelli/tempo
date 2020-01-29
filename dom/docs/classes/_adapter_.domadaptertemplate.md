---
id: "_adapter_.domadaptertemplate"
title: "DOMAdapterTemplate"
sidebar_label: "DOMAdapterTemplate"
---

## Type parameters

▪ **OuterState**

▪ **InnerState**

▪ **OuterAction**

▪ **InnerAction**

▪ **Query**

## Hierarchy

* **DOMAdapterTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹OuterState, OuterAction, Query›

## Index

### Constructors

* [constructor](_adapter_.domadaptertemplate.md#constructor)

### Properties

* [child](_adapter_.domadaptertemplate.md#child)
* [mergeStates](_adapter_.domadaptertemplate.md#mergestates)
* [propagate](_adapter_.domadaptertemplate.md#propagate)

### Methods

* [render](_adapter_.domadaptertemplate.md#render)

## Constructors

###  constructor

\+ **new DOMAdapterTemplate**(`mergeStates`: function, `propagate`: function, `child`: [DOMComponentTemplate](_component_.domcomponenttemplate.md)‹InnerState, InnerAction, Query›): *[DOMAdapterTemplate](_adapter_.domadaptertemplate.md)*

*Defined in [dom/src/adapter.ts:20](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L20)*

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

▪ **child**: *[DOMComponentTemplate](_component_.domcomponenttemplate.md)‹InnerState, InnerAction, Query›*

**Returns:** *[DOMAdapterTemplate](_adapter_.domadaptertemplate.md)*

## Properties

###  child

• **child**: *[DOMComponentTemplate](_component_.domcomponenttemplate.md)‹InnerState, InnerAction, Query›*

*Defined in [dom/src/adapter.ts:24](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L24)*

___

###  mergeStates

• **mergeStates**: *function*

*Defined in [dom/src/adapter.ts:22](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L22)*

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

*Defined in [dom/src/adapter.ts:23](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L23)*

#### Type declaration:

▸ (`args`: [PropagateArg](../interfaces/_adapter_.propagatearg.md)‹OuterState, InnerState, OuterAction, InnerAction›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [PropagateArg](../interfaces/_adapter_.propagatearg.md)‹OuterState, InnerState, OuterAction, InnerAction› |

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹OuterAction›, `outerState`: OuterState): *View‹OuterState, Query›*

*Defined in [dom/src/adapter.ts:27](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹OuterAction› |
`outerState` | OuterState |

**Returns:** *View‹OuterState, Query›*
