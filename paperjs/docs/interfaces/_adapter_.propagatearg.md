---
id: "_adapter_.propagatearg"
title: "PropagateArg"
sidebar_label: "PropagateArg"
---

## Type parameters

▪ **OuterState**

▪ **InnerState**

▪ **OuterAction**

▪ **InnerAction**

## Hierarchy

* **PropagateArg**

## Index

### Properties

* [action](_adapter_.propagatearg.md#action)
* [dispatchInner](_adapter_.propagatearg.md#dispatchinner)
* [dispatchOuter](_adapter_.propagatearg.md#dispatchouter)
* [innerState](_adapter_.propagatearg.md#innerstate)
* [outerState](_adapter_.propagatearg.md#outerstate)

## Properties

###  action

• **action**: *InnerAction*

*Defined in [paperjs/src/adapter.ts:88](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L88)*

___

###  dispatchInner

• **dispatchInner**: *function*

*Defined in [paperjs/src/adapter.ts:91](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L91)*

#### Type declaration:

▸ (`action`: InnerAction): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | InnerAction |

___

###  dispatchOuter

• **dispatchOuter**: *function*

*Defined in [paperjs/src/adapter.ts:92](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L92)*

#### Type declaration:

▸ (`action`: OuterAction): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | OuterAction |

___

###  innerState

• **innerState**: *InnerState*

*Defined in [paperjs/src/adapter.ts:89](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L89)*

___

###  outerState

• **outerState**: *OuterState*

*Defined in [paperjs/src/adapter.ts:90](https://github.com/fponticelli/tempo/blob/master/paperjs/src/adapter.ts#L90)*
