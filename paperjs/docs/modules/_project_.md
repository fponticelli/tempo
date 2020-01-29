---
id: "_project_"
title: "project"
sidebar_label: "project"
---

## Index

### Functions

* [project](_project_.md#const-project)

## Functions

### `Const` project

▸ **project**<**State**, **Action**, **Query**>(`options`: object, ...`children`: [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]): *DOMElement‹State, Action, Query, HTMLCanvasElement, PaperLocal‹State, Action, Query››*

*Defined in [paperjs/src/project.ts:30](https://github.com/fponticelli/tempo/blob/master/paperjs/src/project.ts#L30)*

**Type parameters:**

▪ **State**

▪ **Action**

▪ **Query**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`active?` | DOMAttribute‹State, boolean› |
`height` | DOMAttribute‹State, number› |
`respond?` | undefined &#124; function |
`scope?` | PaperScope |
`width` | DOMAttribute‹State, number› |

▪... **children**: *[PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›[]*

**Returns:** *DOMElement‹State, Action, Query, HTMLCanvasElement, PaperLocal‹State, Action, Query››*
