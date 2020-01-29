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

*Defined in [dom/src/adapter.ts:64](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L64)*

___

###  dispatchInner

• **dispatchInner**: *function*

*Defined in [dom/src/adapter.ts:67](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L67)*

#### Type declaration:

▸ (`action`: InnerAction): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | InnerAction |

___

###  dispatchOuter

• **dispatchOuter**: *function*

*Defined in [dom/src/adapter.ts:68](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L68)*

#### Type declaration:

▸ (`action`: OuterAction): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | OuterAction |

___

###  innerState

• **innerState**: *InnerState*

*Defined in [dom/src/adapter.ts:65](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L65)*

___

###  outerState

• **outerState**: *OuterState*

*Defined in [dom/src/adapter.ts:66](https://github.com/fponticelli/tempo/blob/master/dom/src/adapter.ts#L66)*
