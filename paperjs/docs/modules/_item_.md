---
id: "_item_"
title: "item"
sidebar_label: "item"
---

## Index

### Classes

* [ItemTemplate](../classes/_item_.itemtemplate.md)

### Interfaces

* [FrameEvent](../interfaces/_item_.frameevent.md)
* [ItemEvents](../interfaces/_item_.itemevents.md)

### Functions

* [createItem](_item_.md#const-createitem)

## Functions

### `Const` createItem

▸ **createItem**<**State**, **Action**, **Query**, **I**, **T**, **Option**>(`makeItem`: function, `options`: Partial‹Merge‹object, Merge‹Option, [TempoAttributes](../interfaces/_tempo_attributes_.tempoattributes.md)‹State, Action, Query, I, T››››, `children?`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[] | undefined): *[ItemTemplate](../classes/_item_.itemtemplate.md)‹State, Action, Query, I, T›*

*Defined in [paperjs/src/item.ts:87](https://github.com/fponticelli/tempo/blob/master/paperjs/src/item.ts#L87)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

▪ **I**: *Item*

▪ **T**

▪ **Option**

**Parameters:**

▪ **makeItem**: *function*

▸ (`state`: State): *I*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |

▪ **options**: *Partial‹Merge‹object, Merge‹Option, [TempoAttributes](../interfaces/_tempo_attributes_.tempoattributes.md)‹State, Action, Query, I, T››››*

▪`Optional`  **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[] | undefined*

**Returns:** *[ItemTemplate](../classes/_item_.itemtemplate.md)‹State, Action, Query, I, T›*
