---
title: Common Elements
order: 2
---

# Elements

A template is built by assembling elements together. `@tempo/dom/lib/html` contains all the definitions for all HTML SVG elements (`@tempo/dom/lib/svg` for SVG elements).

## HTML DSL

The best way to describe a Tempo template is to use the provided HTML builders. Each element and transform operation is described both as a function or as a method of the builder to allow chaining and nesting.

For example to create a `<div>` element there is an equivalent `DIV()` function. If you want to have two sibbling `<div>` elements you can chain them using `DIV().DIV()`. To nest elements and attributes you can use an `init` function:

```ts
DIV(
  $ => $.class('header').H1($ => $.text('Title'))
)
.DIV($ => $.class('body))
```

This generates the following HTML:

```html
<div class="header">
  <h1>Title</h1>
</div>
<div class="body"></div>
```

The Tempo DSL uses a few name conventions to make it simpler to distinguish between the composing members and to avoid name conflicts between attribute, elements and transform methods.

The DSL uses

* all capital-case names for native HTML (and SVG) elements.
* all lower-case names for element attributes and for the special `text` attribute.
* capitalized names prefixed with `on` for event handling.
* capitalized names for lifecycle and transform functions/methods.

Almost all values in the DSL can be either literal values or functions from State to a literal value.

## Tempo Lifecycle

Each DOM element has four additional special attributes:

TODO

## Transform Elements

TODO

## Map state and action

TODO

## Iterate

TODO

Adapter
LocalAdapter
Component
CaptureState
ReleaseState
Iterate
MapState
MapStateAndKeep
MapAction
MapQuery
Match
MatchKind
MatchBool
MatchValue
MatchOption
MatchResult
MatchAsync
MatchAsyncResult
Lazy
Fragment
ForEach
Portal
PortalWithSelector
HeadPortal
BodyPortal
SimpleComponent
Unless
Until
When

## ForEach

The `ForEach` element takes a state whose shape is an array (`State extends any[]`) and applies individually each element in the array to the children nodes. This is useful for lists or tables.

## Portal

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
