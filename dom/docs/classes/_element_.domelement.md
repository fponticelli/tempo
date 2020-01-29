---
id: "_element_.domelement"
title: "DOMElement"
sidebar_label: "DOMElement"
---

## Type parameters

▪ **State**

▪ **Action**

▪ **Query**

▪ **El**: *Element*

▪ **T**

## Hierarchy

* **DOMElement**

## Implements

* [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›

## Index

### Constructors

* [constructor](_element_.domelement.md#constructor)

### Properties

* [afterchange](_element_.domelement.md#afterchange)
* [afterrender](_element_.domelement.md#afterrender)
* [attrs](_element_.domelement.md#attrs)
* [beforechange](_element_.domelement.md#beforechange)
* [beforedestroy](_element_.domelement.md#beforedestroy)
* [children](_element_.domelement.md#children)
* [createElement](_element_.domelement.md#createelement)
* [events](_element_.domelement.md#events)
* [respond](_element_.domelement.md#respond)
* [styles](_element_.domelement.md#styles)

### Methods

* [render](_element_.domelement.md#render)

## Constructors

###  constructor

\+ **new DOMElement**(`createElement`: function, `attrs`: object[], `events`: object[], `styles`: object[], `afterrender`: undefined | function, `beforechange`: undefined | function, `afterchange`: undefined | function, `beforedestroy`: undefined | function, `respond`: undefined | function, `children`: [DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]): *[DOMElement](_element_.domelement.md)*

*Defined in [dom/src/element.ts:44](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L44)*

**Parameters:**

▪ **createElement**: *function*

▸ (`doc`: Document): *El*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | Document |

▪ **attrs**: *object[]*

▪ **events**: *object[]*

▪ **styles**: *object[]*

▪ **afterrender**: *undefined | function*

▪ **beforechange**: *undefined | function*

▪ **afterchange**: *undefined | function*

▪ **beforedestroy**: *undefined | function*

▪ **respond**: *undefined | function*

▪ **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]*

**Returns:** *[DOMElement](_element_.domelement.md)*

## Properties

###  afterchange

• **afterchange**: *undefined | function*

*Defined in [dom/src/element.ts:52](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L52)*

___

###  afterrender

• **afterrender**: *undefined | function*

*Defined in [dom/src/element.ts:50](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L50)*

___

###  attrs

• **attrs**: *object[]*

*Defined in [dom/src/element.ts:47](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L47)*

___

###  beforechange

• **beforechange**: *undefined | function*

*Defined in [dom/src/element.ts:51](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L51)*

___

###  beforedestroy

• **beforedestroy**: *undefined | function*

*Defined in [dom/src/element.ts:53](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L53)*

___

###  children

• **children**: *[DOMTemplate](../interfaces/_template_.domtemplate.md)‹State, Action, Query›[]*

*Defined in [dom/src/element.ts:55](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L55)*

___

###  createElement

• **createElement**: *function*

*Defined in [dom/src/element.ts:46](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L46)*

#### Type declaration:

▸ (`doc`: Document): *El*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | Document |

___

###  events

• **events**: *object[]*

*Defined in [dom/src/element.ts:48](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L48)*

___

###  respond

• **respond**: *undefined | function*

*Defined in [dom/src/element.ts:54](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L54)*

___

###  styles

• **styles**: *object[]*

*Defined in [dom/src/element.ts:49](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L49)*

## Methods

###  render

▸ **render**(`ctx`: [DOMContext](_context_.domcontext.md)‹Action›, `state`: State): *View‹State, Query›*

*Defined in [dom/src/element.ts:58](https://github.com/fponticelli/tempo/blob/master/dom/src/element.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | [DOMContext](_context_.domcontext.md)‹Action› |
`state` | State |

**Returns:** *View‹State, Query›*
