---
id: "_hold_state_"
title: "hold_state"
sidebar_label: "hold_state"
---

## Index

### Functions

* [holdMappedState](_hold_state_.md#const-holdmappedstate)
* [holdState](_hold_state_.md#const-holdstate)

## Functions

### `Const` holdMappedState

▸ **holdMappedState**<**State**, **HeldState**>(`map`: function): *object*

*Defined in [dom/src/hold_state.ts:6](https://github.com/fponticelli/tempo/blob/master/dom/src/hold_state.ts#L6)*

**Type parameters:**

▪ **State**

▪ **HeldState**

**Parameters:**

▪ **map**: *function*

▸ (`s`: State): *HeldState*

**Parameters:**

Name | Type |
------ | ------ |
`s` | State |

**Returns:** *object*

* **capture**: *capture*

* **release**: *release*

___

### `Const` holdState

▸ **holdState**<**State**>(): *object*

*Defined in [dom/src/hold_state.ts:58](https://github.com/fponticelli/tempo/blob/master/dom/src/hold_state.ts#L58)*

**Type parameters:**

▪ **State**

**Returns:** *object*

* **capture**: *capture*

* **release**: *release*
