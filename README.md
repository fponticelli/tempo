# Mood

Mood is a framework to build dynamic front end applications.

[TODO MVC demo](./docs/demo/todomvc/index.html)

# Sample Application

A Mood application, pivots around two main instances:

  * **Store** as in data-store, or state holder
  * **Template**: an object with a function `render(state: State, context: Context): View<State>`

These two instances work together applying `Mood.render`.

Here is a full example for a little widget that allows to increment/decrement a counter.

```ts
import { Mood } from '@mood/dom/lib/mood'
import { html } from '@mood/dom/lib/web'
const { div, button } = html
import { mapState } from '@mood/dom/lib/map'
import { Store } from '@mood/store/lib/store'

interface State { count: number }

const state = { count: 0 }

interface Increment { kind: 'increment' }
interface Decrement { kind: 'decrement' }
type Action = Increment | Decrement

const decrement = (_: MouseEvent): Action => ({ kind: 'decrement' })
const increment = (_: MouseEvent): Action => ({ kind: 'increment' })

const reducer = (state: State, action: Action) => {
  switch (action.kind) {
    case 'increment': return { count: state.count + 1 }
    case 'decrement': return { count: state.count - 1 }
    default: throw `this should never happen`
  }
}

const store = Store.ofState({ state, reducer })

const template = div<State, Action>(
  { className: 'app' },
  mapState(
    { map: state => state.count },
    div(
      { className: 'count' },
      count => `count: ${count} `
    ),
    div(
      { className: 'buttons' },
      button({ onclick: decrement, disabled: (count: number) => count <= 0 }, '-'),
      button({ onclick: increment }, '+')
    )
  )
)

Mood.render({ store, template })
```

You can find this [demo running here](./docs/demo/readme/index.html)

Let's analyze what is going on there.

```ts
interface State { count: number }

const state = { count: 0 }
```

We start declaring the shape for our state. In this case a simple object containing a count value.

The UI rendering fully depends on the State and on that only. A nice is that the way the UI will display is fully represented by a specific State. This makes testing the UI simple and consistent.

We also clear an initial State that represents the default state for our application.

```ts
interface Increment { kind: 'increment' }
interface Decrement { kind: 'decrement' }
type Action = Increment | Decrement

const decrement = (_: MouseEvent): Action => ({ kind: 'decrement' })
const increment = (_: MouseEvent): Action => ({ kind: 'increment' })
```

Each interaction with the application is performed using Actions. Actions, like State, are defined per-application. Since actions are usually alternatives, they are generally well represented by union types like in the example above.

To make the code cleaner, we implement two functions that map to those actions. These replace the traditional event handlers found in the browser Dom.

Where in a traditional JS application an event can be mapped to an event handler with the following shape

```ts
(event: Event) => void
```

in Mood, the event handler has the following one:

```ts
(event: Event) => Action
```

Note that this is actually a shortcut, where the full representation is:

```ts
WrappedDerivedValue<State, (event: Event) => void>

// an instance of WrappedDerivedValue can be built using

handler<State, Action, E extends Event>(
  f: (state: State) => ((event: E) => Action | undefined) | undefined
)
```

This can be a mouthful, but in essence is just a function that takes another function. The function argument maps state to an optional event handler. If the event handler is returned, it will be invoked whenever the corresponding event is triggered. If the argument function returns `undefined` than the handler will not be applied. This allows to control the presence of event handlers based on the current state.

All attributes and text nodes in Mood can be either Derived Values (like in the example above) or Literal Values. If they are derived, the content generated in the web-page will depend on the current state. If they are literals, they are assigned on the first render and never altered again for the life-cycle of the wrapping elements.

```ts
const reducer = (state: State, action: Action) => {
  switch (action.kind) {
    case 'increment': return { count: state.count + 1 }
    case 'decrement': return { count: state.count - 1 }
    default: throw `this should never happen`
  }
}

const store = Store.ofState({ state, reducer })
```

In the code above we create an instance of `Store`. A Store wraps a `Property`. A Property is an observable instance that triggers its own listeners whenever the value that it holds is changed.

A Store adds to the story its capacity of changing its own state reacting to Actions or messages. That is why we need to define the `reducer` function above. A reducer as a simple signature of:

```ts
(state: State, action: Action) => State
```

The reducer takes the current state, an action that has been triggered (usually from some user interaction) and returns a new state to replace the original. A reducer function should not introduce side-effects, like server calls, or perform heavy computations.


If you want to perform async operations, you can do that observing `store.ebservable`. The listeners for this object take three arguments: `(state: State, action: Action, changed: boolean)`. In a listener you can call remote services, and once you have an async response, you can invoke `store.process(action)` with a new Action that will be applied to the store.

In our example, `reducer` is simply creating a new state where `count` is either incremented or decremented.

**Note**: `Property` doesn't trigger its own listeners unless the value is actually changed. Setting twice the same value will not trigger a change. This behavior can be controlled by passing an optional `equal: (a: State, b: State) => boolean` function. By default, the implementation provided will perform a deep structural comparison.

```ts
const template = div<State, Action>(
  { className: 'app' },
  mapState(
    { map: state => state.count },
    div(
      { className: 'count' },
      count => `count: ${count} `
    ),
    div(
      { className: 'buttons' },
      button({ onclick: decrement, disabled: (count: number) => count <= 0 }, '-'),
      button({ onclick: increment }, '+')
    )
  )
)

Mood.render({ store, template })
```

Finally the UI! Each element, like `div` above, takes a first argument for the element attributes and 0 or more other arguments. If an argument is a literal value like in `className` that is applied and it cannot be modified anymore. For dynamic values a function from State to the attribute type are required.

The following arguments are children nodes. The simplest child node is just a plain string that is mapped to a dom text node. A text node can also be dynamic when represented by a function `State => string`. The text in that case will change when the state is changed. That is the case for ``count => `count: ${count} ```.

We use `mapState` in the example to extract `count` and not avoid having to dereference that value every time it is used; this is really not necessary but it looks cool and it shows how State can be refined/transformed for inner elements.

Just for fun we added `disabled` and made it dependent on `count`. When it is zero or less we will not be able to click it.

When the template is defined, nothing really happens except that we have an instance of `DOMElement<State, Action, HTMLDivElement>`. This instance implements `DOMTemplate<State, Action>` which has a method `render: (ctx: DOMContext, state: State) => View<State>`. When that method is invoked, it will perform the actual modifications of the dom. The `View` returned by the method has a method `destroy()` to remove what has been generated and `change(state: State)` to update the its content.

These functions are managed and wired automatically when `store` and `template` are passed to `Mood.render`.

The entire app fits 7.3kb when gzipped!

# Elements

A template is built by assembling elements together. `@mood/dom/lib/web` contains all the definitions for all HTML and SVG elements. The are then special elements described below.

## mood_attributes

Each DOM element has four additional special attributes:

```ts
moodAfterRender?: MoodAttribute<State, El>
moodAfterChange?: MoodAttribute<State, El>
moodBeforeChange?: MoodAttribute<State, El>
moodBeforeDestroy?: (el: El) => void

// where MoodAttribute<State, El> is defined as

type MoodAttribute<State, El> = UnwrappedLiteralValue<(el: El) => void> | WrappedDerivedValue<State, (el: El) => void>
```

These special attributes are used to control the life-cycle of the current element. These can be used to mount/update/destroy widgets that are not defined in Mood and that need to be embedded in your app. The functions receive a reference to the current element.

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

A component takes an instance of `Store` to manage its state, it is in fact what `Mood.render` wraps the passed template around.

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
