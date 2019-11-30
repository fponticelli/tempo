[![Actions Status](https://github.com/fponticelli/tempo/workflows/Build%20and%20Test/badge.svg)](https://github.com/fponticelli/tempo/actions?query=workflow%3A"Build+and+Test")

Tempo is a framework to build dynamic front end applications.

This is not an officially supported Google product

[TODO MVC demo](./docs/demo/todomvc/)

[HNPWA demo](./docs/demo/hnpwa/)

# Sample Application

A Tempo application operates on two main instances:

  * **Store** as in data-store, or state holder
  * **Template**: an object with a function `render(state: State, context: Context): View<State>`

These two instances work together applying `Tempo.render` to create your application.

Here is a full example of a little widget that increments and decrements a counter, updating as the value changes.

You can try out the [demo running here](./docs/demo/readme/).

```ts
import { Tempo } from '@tempo/dom/lib/tempo'
import { html } from '@tempo/dom/lib/web'
const { div, button } = html
import { mapState } from '@tempo/dom/lib/map'
import { Store } from '@tempo/store/lib/store'

interface State {
  count: number
}

const state = { count: 0 }

interface Increment {
  kind: 'increment'
}
interface Decrement {
  kind: 'decrement'
}
type Action = Increment | Decrement

const decrement = (_: MouseEvent): Action => ({ kind: 'decrement' })
const increment = (_: MouseEvent): Action => ({ kind: 'increment' })

const reducer = (state: State, action: Action): State => {
  switch (action.kind) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw `this should never happen`
  }
}

const store = Store.ofState({ state, reducer })

const template = div<State, Action>(
  { attrs: { className: 'app' } },
  mapState(
    { map: (state: State) => state.count },
    div({ attrs: { className: 'count count-small' } }, 'count'),
    div({ attrs: { className: 'count' } }, String),
    div(
      {  attrs: { className: 'buttons' } },
      button({ events: { click: decrement }, attrs: { disabled: (count: number) => count <= 0 } }, '-'),
      button({ events: { click: increment } }, '+')
    )
  )
)

Tempo.render({ store, template })
```

Let's analyze what is going on in this example.

```ts
interface State {
  count: number
}

const state = { count: 0 }
```

We start by declaring the signature for our State. In this case, our state is a simple object containing a numerical count.

The UI rendering can only depend on the State and nothing else. This is one of the major advantages of Tempo; the way a UI renders is entirely contained within its State. Testing the UI is greatly simplified using this principle as it will consistently render with a given state.

We also declare an initial State that is the default for our application.

```ts
interface Increment {
  kind: 'increment'
}
interface Decrement {
  kind: 'decrement'
}
type Action = Increment | Decrement

const decrement = (): Action => ({ kind: 'decrement' })
const increment = (): Action => ({ kind: 'increment' })
```

Each interaction with the application is performed using Actions. Actions, like State, are defined per-application. Since actions are usually alternatives, they are well represented by union types like above. Actions can contain more data than just their kind, but this simple example's Actions don't require any additional information.

To make the code cleaner, we implement two functions that map to these actions. These functions can be used to replace the traditional event handlers found in the browser DOM. See how they're used in the template to handle user clicks.

In a traditional JavaScript application, an event can be mapped to an event handler with the following signature.

```ts
(event: Event) => void
```

In Tempo, the event handler has a more advanced signature:

```ts
<State, Action, Ev extends Event = Event, El extends Element = Element> = (state: State, event: Ev, element: El) => Action | undefined
```

The function takes the current state, the DOM event, and the element associated with the event. If it returns an Action, the reducer function that updates the state will be invoked with the returned Action. If it returns `undefined`, the reducer function will not be invoked.

All attributes and text nodes in Tempo can be either Derived or Literal values. If they are derived, the content generated in the web-page will depend on the current state. If they are literals, they are assigned on the first render and never altered again for the life-cycle of the wrapping elements.

```ts
const reducer = (state: State, action: Action) => {
  switch (action.kind) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw `this should never happen`
  }
}

const store = Store.ofState({ state, reducer })
```

In the code above we create an instance of `Store`. A Store wraps a `Property`. A Property is an observable instance that triggers its own listeners whenever the value that it holds is changed.

A Store adds to the application its ability to change state in reaction to Actions. This State update is defined by the `reducer` function above. A reducer as the simple signature of:

```ts
(state: State, action: Action) => State
```

The reducer takes the current State and an Action that has happened (usually from some user interaction) and returns a new state to replace the original. A reducer function should not introduce side-effects, like server calls, or perform heavy computations.

If you want to perform async operations, you can do that by observing `store.observable`. The listeners for this object take three arguments: `(state: State, action: Action, changed: boolean)`. In a listener you can, for example, call a remote service. Once you have an async response, you can invoke `store.process(action)` with a new Action that will be applied to the store.

In our example, `reducer` is simply creating a new state where `count` is either incremented or decremented.

**Note**: `Property` doesn't trigger its listeners unless the value is actually changed. Setting the same value twice will not trigger a second change. This behavior can be controlled by passing an optional equivalence `equal: (a: State, b: State) => boolean` function. By default, the implementation provided will perform a deep structural comparison.

```ts
const template = div<State, Action>(
  { attrs: { className: 'app' } },
  mapState(
    { map: (state: State) => state.count },
    div({ attrs: { className: 'count count-small' } }, 'count'),
    div({ attrs: { className: 'count' } }, String),
    div(
      {  attrs: { className: 'buttons' } },
      button({ events: { click: decrement }, attrs: { disabled: (count: number) => count <= 0 } }, '-'),
      button({ events: { click: increment } }, '+')
    )
  )
)

Tempo.render({ store, template })
```

Finally the UI! Each element, like `div` above, takes one or more arguments.

The first argument is for the element's attributes. If passed a literal value, like the attributes `className: 'app'` above, it will be rendered once and cannot be updated dynamically. For dynamic values a function from State to the attribute type is required.

The rest of the arguments are optional children of the element. The simplest child node is a plain string that is mapped to a DOM text node. A text node can also be dynamic when represented by a function `State => string`. The text will then change when the state is changed. In our example, the `String` constructor is used in the template to render the `count` as a text node and will update when the state changes.

We use `mapState` in the example to extract `count` and avoid having to dereference that value every time it is used; this is not necessary but it shows how State can be refined/transformed for inner elements, simplifying and scoping what they can represent. This helps to clarify the intent of the code.

Just for fun we added `disabled` and made it dependent on `count`. When `count` is zero or less we will not be able to click it.

When the template is defined, nothing happens except that we have an instance of `DOMElement<State, Action, HTMLDivElement>`. This instance implements `DOMTemplate<State, Action>` which contains the method `render: (ctx: DOMContext, state: State) => View<State>`. When that method is invoked, it will perform the actual creation and modification of the browser's DOM. The `View` returned by the `render` method has a method `destroy()` to remove what has been generated and `change(state: State)` to update the its content.

These functions are managed and wired automatically when `store` and `template` are passed to `Tempo.render`.

The entire app fits 6.6kb when gzipped!

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

This [simple app tracks performance](./docs/demo/benchmark/) improvements/regressions with new versions of the library.
