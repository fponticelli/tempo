---
id: "_tempo_"
title: "tempo"
sidebar_label: "tempo"
---

## Index

### Type aliases

* [TempoView](_tempo_.md#tempoview)

### Object literals

* [Tempo](_tempo_.md#const-tempo)

## Type aliases

###  TempoView

Ƭ **TempoView**: *Readonly‹object›*

*Defined in [dom/src/tempo.ts:20](https://github.com/fponticelli/tempo/blob/master/dom/src/tempo.ts#L20)*

## Object literals

### `Const` Tempo

### ▪ **Tempo**: *object*

*Defined in [dom/src/tempo.ts:25](https://github.com/fponticelli/tempo/blob/master/dom/src/tempo.ts#L25)*

###  render

▸ **render**<**State**, **Action**, **Query**>(`options`: object): *[TempoView](_tempo_.md#tempoview)‹State, Action, Query›*

*Defined in [dom/src/tempo.ts:52](https://github.com/fponticelli/tempo/blob/master/dom/src/tempo.ts#L52)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`delayed?` | undefined &#124; false &#124; true |
`document?` | Document |
`el?` | HTMLElement |
`store` | Store‹State, Action› |
`template` | [DOMChild](_template_.md#domchild)‹State, Action, Query› |

**Returns:** *[TempoView](_tempo_.md#tempoview)‹State, Action, Query›*

###  renderComponent

▸ **renderComponent**<**State**, **Action**, **Query**>(`options`: object): *[TempoView](_tempo_.md#tempoview)‹State, Action, Query›*

*Defined in [dom/src/tempo.ts:26](https://github.com/fponticelli/tempo/blob/master/dom/src/tempo.ts#L26)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`component` | [DOMComponentTemplate](../classes/_component_.domcomponenttemplate.md)‹State, Action, Query› |
`document?` | Document |
`el?` | HTMLElement |

**Returns:** *[TempoView](_tempo_.md#tempoview)‹State, Action, Query›*
