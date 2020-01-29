---
id: "_item_.frameevent"
title: "FrameEvent"
sidebar_label: "FrameEvent"
---

## Hierarchy

* [Event](_item_.frameevent.md#event)

  ↳ **FrameEvent**

## Index

### Properties

* [AT_TARGET](_item_.frameevent.md#at_target)
* [BUBBLING_PHASE](_item_.frameevent.md#bubbling_phase)
* [CAPTURING_PHASE](_item_.frameevent.md#capturing_phase)
* [Event](_item_.frameevent.md#event)
* [NONE](_item_.frameevent.md#none)
* [bubbles](_item_.frameevent.md#bubbles)
* [cancelBubble](_item_.frameevent.md#cancelbubble)
* [cancelable](_item_.frameevent.md#cancelable)
* [composed](_item_.frameevent.md#composed)
* [count](_item_.frameevent.md#count)
* [currentTarget](_item_.frameevent.md#currenttarget)
* [defaultPrevented](_item_.frameevent.md#defaultprevented)
* [delta](_item_.frameevent.md#delta)
* [eventPhase](_item_.frameevent.md#eventphase)
* [isTrusted](_item_.frameevent.md#istrusted)
* [returnValue](_item_.frameevent.md#returnvalue)
* [srcElement](_item_.frameevent.md#srcelement)
* [target](_item_.frameevent.md#target)
* [time](_item_.frameevent.md#time)
* [timeStamp](_item_.frameevent.md#timestamp)
* [type](_item_.frameevent.md#type)

### Methods

* [composedPath](_item_.frameevent.md#composedpath)
* [initEvent](_item_.frameevent.md#initevent)
* [preventDefault](_item_.frameevent.md#preventdefault)
* [stopImmediatePropagation](_item_.frameevent.md#stopimmediatepropagation)
* [stopPropagation](_item_.frameevent.md#stoppropagation)

## Properties

###  AT_TARGET

• **AT_TARGET**: *number*

*Inherited from [FrameEvent](_item_.frameevent.md).[AT_TARGET](_item_.frameevent.md#at_target)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5445

___

###  BUBBLING_PHASE

• **BUBBLING_PHASE**: *number*

*Inherited from [FrameEvent](_item_.frameevent.md).[BUBBLING_PHASE](_item_.frameevent.md#bubbling_phase)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5446

___

###  CAPTURING_PHASE

• **CAPTURING_PHASE**: *number*

*Inherited from [FrameEvent](_item_.frameevent.md).[CAPTURING_PHASE](_item_.frameevent.md#capturing_phase)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5447

___

###  Event

• **Event**: *object*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5451

#### Type declaration:

* **new __type**(`type`: string, `eventInitDict?`: EventInit): *[Event](_item_.frameevent.md#event)*

* **AT_TARGET**: *number*

* **BUBBLING_PHASE**: *number*

* **CAPTURING_PHASE**: *number*

* **NONE**: *number*

* **prototype**: *[Event](_item_.frameevent.md#event)*

___

###  NONE

• **NONE**: *number*

*Inherited from [FrameEvent](_item_.frameevent.md).[NONE](_item_.frameevent.md#none)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5448

___

###  bubbles

• **bubbles**: *boolean*

*Inherited from [FrameEvent](_item_.frameevent.md).[bubbles](_item_.frameevent.md#bubbles)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5387

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

___

###  cancelBubble

• **cancelBubble**: *boolean*

*Inherited from [FrameEvent](_item_.frameevent.md).[cancelBubble](_item_.frameevent.md#cancelbubble)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5388

___

###  cancelable

• **cancelable**: *boolean*

*Inherited from [FrameEvent](_item_.frameevent.md).[cancelable](_item_.frameevent.md#cancelable)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5392

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

___

###  composed

• **composed**: *boolean*

*Inherited from [FrameEvent](_item_.frameevent.md).[composed](_item_.frameevent.md#composed)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5396

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

___

###  count

• **count**: *number*

*Defined in [paperjs/src/item.ts:26](https://github.com/fponticelli/tempo/blob/master/paperjs/src/item.ts#L26)*

___

###  currentTarget

• **currentTarget**: *EventTarget | null*

*Inherited from [FrameEvent](_item_.frameevent.md).[currentTarget](_item_.frameevent.md#currenttarget)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5400

Returns the object whose event listener's callback is currently being invoked.

___

###  defaultPrevented

• **defaultPrevented**: *boolean*

*Inherited from [FrameEvent](_item_.frameevent.md).[defaultPrevented](_item_.frameevent.md#defaultprevented)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5404

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

___

###  delta

• **delta**: *number*

*Defined in [paperjs/src/item.ts:30](https://github.com/fponticelli/tempo/blob/master/paperjs/src/item.ts#L30)*

___

###  eventPhase

• **eventPhase**: *number*

*Inherited from [FrameEvent](_item_.frameevent.md).[eventPhase](_item_.frameevent.md#eventphase)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5408

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

___

###  isTrusted

• **isTrusted**: *boolean*

*Inherited from [FrameEvent](_item_.frameevent.md).[isTrusted](_item_.frameevent.md#istrusted)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5412

Returns true if event was dispatched by the user agent, and false otherwise.

___

###  returnValue

• **returnValue**: *boolean*

*Inherited from [FrameEvent](_item_.frameevent.md).[returnValue](_item_.frameevent.md#returnvalue)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5413

___

###  srcElement

• **srcElement**: *EventTarget | null*

*Inherited from [FrameEvent](_item_.frameevent.md).[srcElement](_item_.frameevent.md#srcelement)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5415

**`deprecated`** 

___

###  target

• **target**: *EventTarget | null*

*Inherited from [FrameEvent](_item_.frameevent.md).[target](_item_.frameevent.md#target)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5419

Returns the object to which event is dispatched (its target).

___

###  time

• **time**: *number*

*Defined in [paperjs/src/item.ts:28](https://github.com/fponticelli/tempo/blob/master/paperjs/src/item.ts#L28)*

___

###  timeStamp

• **timeStamp**: *number*

*Inherited from [FrameEvent](_item_.frameevent.md).[timeStamp](_item_.frameevent.md#timestamp)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5423

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

___

###  type

• **type**: *string*

*Inherited from [FrameEvent](_item_.frameevent.md).[type](_item_.frameevent.md#type)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5427

Returns the type of event, e.g. "click", "hashchange", or "submit".

## Methods

###  composedPath

▸ **composedPath**(): *EventTarget[]*

*Inherited from [FrameEvent](_item_.frameevent.md).[composedPath](_item_.frameevent.md#composedpath)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5431

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

**Returns:** *EventTarget[]*

___

###  initEvent

▸ **initEvent**(`type`: string, `bubbles?`: undefined | false | true, `cancelable?`: undefined | false | true): *void*

*Inherited from [FrameEvent](_item_.frameevent.md).[initEvent](_item_.frameevent.md#initevent)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5432

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`bubbles?` | undefined &#124; false &#124; true |
`cancelable?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  preventDefault

▸ **preventDefault**(): *void*

*Inherited from [FrameEvent](_item_.frameevent.md).[preventDefault](_item_.frameevent.md#preventdefault)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5436

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

**Returns:** *void*

___

###  stopImmediatePropagation

▸ **stopImmediatePropagation**(): *void*

*Inherited from [FrameEvent](_item_.frameevent.md).[stopImmediatePropagation](_item_.frameevent.md#stopimmediatepropagation)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5440

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

**Returns:** *void*

___

###  stopPropagation

▸ **stopPropagation**(): *void*

*Inherited from [FrameEvent](_item_.frameevent.md).[stopPropagation](_item_.frameevent.md#stoppropagation)*

Defined in common/temp/node_modules/.pnpm/registry.npmjs.org/typescript/3.7.2/node_modules/typescript/lib/lib.dom.d.ts:5444

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

**Returns:** *void*
