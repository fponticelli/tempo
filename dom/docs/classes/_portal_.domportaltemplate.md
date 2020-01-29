---
id: "_portal_.domportaltemplate"
title: "DOMPortalTemplate"
sidebar_label: "DOMPortalTemplate"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

## Hierarchy

* **DOMPortalTemplate**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_portal_.domportaltemplate.md#constructor)

### Properties

* [append](_portal_.domportaltemplate.md#append)
* [children](_portal_.domportaltemplate.md#children)
* [getParent](_portal_.domportaltemplate.md#getparent)

### Methods

* [render](_portal_.domportaltemplate.md#render)

## Constructors

###  constructor

\+ **new DOMPortalTemplate**(`getParent`: function, `append`: function, `children`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]): *[DOMPortalTemplate](_portal_.domportaltemplate.md)*

*Defined in [dom/src/portal.ts:19](https://github.com/fponticelli/tempo/blob/master/dom/src/portal.ts#L19)*

**Parameters:**

▪ **getParent**: *function*

▸ (`doc`: Document): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | Document |

▪ **append**: *function*

▸ (`doc`: Document, `node`: Node): *void*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | Document |
`node` | Node |

▪ **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]*

**Returns:** *[DOMPortalTemplate](_portal_.domportaltemplate.md)*

## Properties

###  append

• **append**: *function*

*Defined in [dom/src/portal.ts:22](https://github.com/fponticelli/tempo/blob/master/dom/src/portal.ts#L22)*

#### Type declaration:

▸ (`doc`: Document, `node`: Node): *void*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | Document |
`node` | Node |

___

###  children

• **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]*

*Defined in [dom/src/portal.ts:23](https://github.com/fponticelli/tempo/blob/master/dom/src/portal.ts#L23)*

___

###  getParent

• **getParent**: *function*

*Defined in [dom/src/portal.ts:21](https://github.com/fponticelli/tempo/blob/master/dom/src/portal.ts#L21)*

#### Type declaration:

▸ (`doc`: Document): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | Document |

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *object*

*Defined in [dom/src/portal.ts:26](https://github.com/fponticelli/tempo/blob/master/dom/src/portal.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *object*

* **change**(`state`: State): *void*

* **destroy**(): *void*

* **request**(`query`: Query): *void*
