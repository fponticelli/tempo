---
layout: default
title: Common Elements
nav_order: 2
---

# Elements

A template is built by assembling elements together. `@tempo/dom/lib/web` contains all the definitions for all HTML and SVG elements. The are then special elements described below.

## tempo_attributes

Each DOM element has four additional special attributes:

```ts
afterrender?:   (state: State, el: El, ctx: DOMContext<Action>) => T | undefined
beforechange?:  (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
afterchange?:   (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
beforedestroy?: ((el: El, ctx: DOMContext<Action>, value: T | undefined) => void)
```

These special attributes are used to control the life-cycle of the current element. These can be used to mount/update/destroy widgets that are not defined in Tempo and that need to be embedded in your app. The functions receive a reference to the current element.

## Map state and action

We already saw `mapState` above. Its counter part `mapAction` is used to transform an `action` from a sub-element up to its ancestors.

## forEach

The `forEach` element takes a state whose shape is an array (`State extends any[]`) and applies individually each element in the array to the children nodes. This is useful for lists or tables.

## portal

A `portal` allows to mount a node outside of the natural nesting. The portal module provides the following nodes:

```ts
const portal = <State, Action>(
  options: {
    getParent: (doc: Document) => Element
    append: (doc: Document, node: Node) => void
  },
  ...children: DOMChild<State, Action>[]
) => DOMTemplate<State, Action>

const portalWithSelector = <State, Action>(
    options: { selector: string },
    ...children: DOMChild<State, Action>[]
  ) => DOMTemplate<State, Action>

const headPortal = <State, Action>(...children: DOMChild<State, Action>[]) => DOMTemplate<State, Action>

const bodyPortal = <State, Action>(...children: DOMChild<State, Action>[]) => DOMTemplate<State, Action>
```

## until

The `until` node, much like the `forEach` is for state that represent collections or repeatable elements. Its implementation requires that a function `repeatUntil` is provided with the following signature:

```ts
repeatUntil: (state: OuterState, index: number) => InnerState | undefined
```

The function is invoked `n` times until a result of `undefined` is returned. For each successful invocation, the children nodes will be rendered with the returned result.

## when

`when` and `unless` nodes are for containers that will display their contents conditionally. A `condition` function needs to be provided:

```ts
condition: (state: State) => boolean
```

# Component

A `component` is a special kind of node that manages its own state. When embedded in other nodes it does not automatically propagate actions up the hierarchy, nor changes its own contents when the outer state is updated.

A component takes an instance of `Store` to manage its state, it is in fact what `Tempo.render` wraps the passed template around.

## Adapter

An adapter is needed if you need for a component to be able to communicate with its container. An adapter takes an optional `mergeStates` attribute:

```ts
mergeStates?: (outerState: OuterState, innerState: InnerState) => InnerState | undefined
```

This function allows for the `OuterState` to be merged into the `InnerState` and trigger a template change. If the function returns `undefined` then the inner state will not be updated.

It can also take a `propagate` function:

```ts
propagate?: (args: PropagateArg<OuterState, InnerState, OuterAction, InnerAction>) => void

// where PropagateArg is

interface PropagateArg<OuterState, InnerState, OuterAction, InnerAction> {
  action: InnerAction
  innerState: InnerState
  outerState: OuterState
  dispatchInner: (action: InnerAction) => void
  dispatchOuter: (action: OuterAction) => void
}
```

This function allows to react to inner actions. When the `propagate` function is invoked, the implementor can decide to trigger new inner actions `dispatchInner` or outer actions `dispatchOuter`.