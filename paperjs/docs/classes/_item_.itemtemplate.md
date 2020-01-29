---
id: "_item_.itemtemplate"
title: "ItemTemplate"
sidebar_label: "ItemTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

▪ **I**: *Item*

▪ **T**

## Hierarchy

* **ItemTemplate**

## Implements

* [PaperTemplate](../interfaces/_template_.papertemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_item_.itemtemplate.md#constructor)

### Properties

* [changeItem](_item_.itemtemplate.md#changeitem)
* [createItem](_item_.itemtemplate.md#createitem)
* [destroy](_item_.itemtemplate.md#destroy)
* [request](_item_.itemtemplate.md#request)

### Methods

* [render](_item_.itemtemplate.md#render)

## Constructors

###  constructor

\+ **new ItemTemplate**(`createItem`: function, `changeItem`: function, `destroy`: function, `request`: function): *[ItemTemplate](_item_.itemtemplate.md)*

*Defined in [paperjs/src/item.ts:51](https://github.com/fponticelli/tempo/blob/master/paperjs/src/item.ts#L51)*

**Parameters:**

▪ **createItem**: *function*

▸ (`wrapper`: object, `ctx`: [PaperContext](_context_.papercontext.md)‹Action›): *function*

**Parameters:**

▪ **wrapper**: *object*

Name | Type |
------ | ------ |
`value` | T &#124; undefined |

▪ **ctx**: *[PaperContext](_context_.papercontext.md)‹Action›*

▸ (`state`: State): *object*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |

* **item**: *I*

* **views**: *View‹State, Query›[] | undefined*

▪ **changeItem**: *function*

▸ (`wrapper`: object, `ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `item`: I, `views`: View‹State, Query›[] | undefined): *function*

**Parameters:**

▪ **wrapper**: *object*

Name | Type |
------ | ------ |
`value` | T &#124; undefined |

▪ **ctx**: *[PaperContext](_context_.papercontext.md)‹Action›*

▪ **item**: *I*

▪ **views**: *View‹State, Query›[] | undefined*

▸ (`state`: State): *void*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |

▪ **destroy**: *function*

▸ (`wrapper`: object, `ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `item`: I, `views`: View‹State, Query›[] | undefined): *function*

**Parameters:**

▪ **wrapper**: *object*

Name | Type |
------ | ------ |
`value` | T &#124; undefined |

▪ **ctx**: *[PaperContext](_context_.papercontext.md)‹Action›*

▪ **item**: *I*

▪ **views**: *View‹State, Query›[] | undefined*

▸ (): *void*

▪ **request**: *function*

▸ (`wrapper`: object, `ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `item`: I, `views`: View‹State, Query›[] | undefined): *function*

**Parameters:**

▪ **wrapper**: *object*

Name | Type |
------ | ------ |
`value` | T &#124; undefined |

▪ **ctx**: *[PaperContext](_context_.papercontext.md)‹Action›*

▪ **item**: *I*

▪ **views**: *View‹State, Query›[] | undefined*

▸ (`query`: Query): *void*

**Parameters:**

Name | Type |
------ | ------ |
`query` | Query |

**Returns:** *[ItemTemplate](_item_.itemtemplate.md)*

## Properties

###  changeItem

• **changeItem**: *function*

*Defined in [paperjs/src/item.ts:57](https://github.com/fponticelli/tempo/blob/master/paperjs/src/item.ts#L57)*

#### Type declaration:

▸ (`wrapper`: object, `ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `item`: I, `views`: View‹State, Query›[] | undefined): *function*

**Parameters:**

▪ **wrapper**: *object*

Name | Type |
------ | ------ |
`value` | T &#124; undefined |

▪ **ctx**: *[PaperContext](_context_.papercontext.md)‹Action›*

▪ **item**: *I*

▪ **views**: *View‹State, Query›[] | undefined*

▸ (`state`: State): *void*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |

___

###  createItem

• **createItem**: *function*

*Defined in [paperjs/src/item.ts:53](https://github.com/fponticelli/tempo/blob/master/paperjs/src/item.ts#L53)*

#### Type declaration:

▸ (`wrapper`: object, `ctx`: [PaperContext](_context_.papercontext.md)‹Action›): *function*

**Parameters:**

▪ **wrapper**: *object*

Name | Type |
------ | ------ |
`value` | T &#124; undefined |

▪ **ctx**: *[PaperContext](_context_.papercontext.md)‹Action›*

▸ (`state`: State): *object*

**Parameters:**

Name | Type |
------ | ------ |
`state` | State |

* **item**: *I*

* **views**: *View‹State, Query›[] | undefined*

___

###  destroy

• **destroy**: *function*

*Defined in [paperjs/src/item.ts:63](https://github.com/fponticelli/tempo/blob/master/paperjs/src/item.ts#L63)*

#### Type declaration:

▸ (`wrapper`: object, `ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `item`: I, `views`: View‹State, Query›[] | undefined): *function*

**Parameters:**

▪ **wrapper**: *object*

Name | Type |
------ | ------ |
`value` | T &#124; undefined |

▪ **ctx**: *[PaperContext](_context_.papercontext.md)‹Action›*

▪ **item**: *I*

▪ **views**: *View‹State, Query›[] | undefined*

▸ (): *void*

___

###  request

• **request**: *function*

*Defined in [paperjs/src/item.ts:69](https://github.com/fponticelli/tempo/blob/master/paperjs/src/item.ts#L69)*

#### Type declaration:

▸ (`wrapper`: object, `ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `item`: I, `views`: View‹State, Query›[] | undefined): *function*

**Parameters:**

▪ **wrapper**: *object*

Name | Type |
------ | ------ |
`value` | T &#124; undefined |

▪ **ctx**: *[PaperContext](_context_.papercontext.md)‹Action›*

▪ **item**: *I*

▪ **views**: *View‹State, Query›[] | undefined*

▸ (`query`: Query): *void*

**Parameters:**

Name | Type |
------ | ------ |
`query` | Query |

## Methods

###  render

▸ **render**(`ctx`: [PaperContext](_context_.papercontext.md)‹Action›, `state`: State): *object*

*Defined in [paperjs/src/item.ts:76](https://github.com/fponticelli/tempo/blob/master/paperjs/src/item.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [PaperContext](_context_.papercontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(): *function*

  * (`state`: State): *void*

* **destroy**(): *function*

  * (): *void*

* **request**(): *function*

  * (`query`: Query): *void*
