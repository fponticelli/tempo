---
title: Home
order: 0
---

[![Actions Status](https://github.com/fponticelli/tempo/workflows/Build%20and%20Test/badge.svg)](https://github.com/fponticelli/tempo/actions?query=workflow%3A"Build+and+Test")
[![GitHub stars](https://img.shields.io/github/stars/fponticelli/tempo?label=Star%20me%20on%20Github&style=social)](https://github.com/fponticelli/tempo)

<p style="text-align: center">
  <img src="./assets/icon-512x512.png" style="width: 128px" alt="Tempo logo" />
</p>

[Github Repository](https://github.com/fponticelli/tempo)

Tempo is a framework to build dynamic front-end applications.

This is not an officially supported Google product.

# Sample Application

A Tempo application operates on two main instances:

  * **Store** as in data-store, or state holder
  * **Template**: an instance with a function `render(state: State, context: Context): View<State>`

`Tempo.render` uses these two instances to create and manage your application.

Here is a full example of a little widget that increments and decrements a counter, updating as the value changes.

You can try out the [demo running here](./demo/readme/).

```ts
import { Tempo } from 'tempo-dom/lib/tempo'
import { div, button } from 'tempo-dom/lib/html'
import { Store } from 'tempo-store/lib/store'

const state = 0

type Action = 'increment' | 'decrement'

const reducer = (state: number, action: Action): number => {
  switch (action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    default: throw `this should never happen`
  }
}

const store = Store.ofState({ state, reducer })

const template = div<number, Action>(
  { attrs: { class: 'app' } },
  div({ attrs: { class: 'count count-small' } }, 'count'),
  div({ attrs: { class: 'count' } }, String),
  div(
    { attrs: { class: 'buttons' } },
    button(
      {
        events: { click: () => 'decrement' },
        attrs: { disabled: count => count <= 0 }
      },
      '-'
    ),
    button({ events: { click: () => 'increment' } }, '+')
  )
)

Tempo.render({ store, template })
```

In this simple example `State` is just a plain `number`. In a more sophisticated examples it usually a data object.

The UI rendering will only depend on the `State` and nothing else. This is one of the major advantages of Tempo; the way a UI renders is entirely contained within its State. Testing the UI is greatly simplified using this principle as it will consistently render the same result for any given state.

We declare an initial `State` that is the default for our application.

```ts
const state = 0
```

Each interaction with the application is performed using Actions. Actions, like State, are defined per-application. Since actions are usually alternatives, they are well represented by union types (tagged union types are ideal to pair an alternative with additional data). Actions can contain more data than just their kind, but this simple example's Actions don't require any additional information.

```ts
type Action = 'increment' | 'decrement'
```

In a traditional JavaScript application, an event can be mapped to an event handler with the following signature.

```ts
type EventHandler = (event: Event) => void
```

In Tempo, the event handler has a more advanced signature:

```ts
type EventHandler = <State, Action, Ev extends Event = Event, El extends Element = Element> =
  (state: State, event: Ev, element: El) => Action | undefined
```

The function takes the current state, the DOM event, and the element associated with the event. If it returns an Action, the reducer function that updates the state will be invoked with the returned Action. If it returns `undefined`, the reducer function will not be invoked at all.

```ts
button({ events: { click: () => 'increment' } }, '+')
```

Events are declared in the `events` property of an element options.

All attributes and text nodes in Tempo can be either Derived or Literal values. If they are derived, the content generated in the web-page will depend on the current state. If they are literals, they are assigned on the first render and never altered again for the life-cycle of the wrapping elements. Attributes are assigned in the `attrs` property of the options.

```ts
const reducer = (state: number, action: Action): number => {
  switch (action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    default: throw `this should never happen`
  }
}

const store = Store.ofState({ state, reducer })
```

In the code above we create an instance of `Store`. A Store wraps a `Property`. A Property is an observable instance that triggers its own listeners whenever the value that it holds is changed.

A Store adds to the application its ability to change state in reaction to Actions. This State update is defined by the `reducer` function above. A reducer as the simple signature of:

```ts
type Reducer = (state: State, action: Action) => State
```

The reducer takes the current State and an Action that just occurred (usually from some user interaction) and returns a new State to replace the original. A reducer function should not introduce side-effects, like server calls, or perform heavy computations.

If you want to perform async operations, you can do that by observing `store.observable`. The listeners for this object take four arguments: `(state: State, action: Action, previousState: State, changed: boolean)`. In a listener you can, for example, call a remote service. Once you have an async response, you can invoke `store.process(action)` with a new Action that will be applied to the store.

In our example, `reducer` is simply creating a new state where `count` is either incremented or decremented.

**Note**: `Property` doesn't trigger its listeners unless the value is actually changed. Setting the same value twice will not trigger a second change. This behavior can be controlled by passing an optional equivalence `equal: (a: State, b: State) => boolean` function. By default, the implementation provided will perform a strict comparison.

```ts
const template = div<number, Action>(
  { attrs: { class: 'app' } },
  div({ attrs: { class: 'count count-small' } }, 'count'),
  div({ attrs: { class: 'count' } }, String),
  div(
    { attrs: { class: 'buttons' } },
    button(
      {
        events: { click: () => 'decrement' },
        attrs: { disabled: count => count <= 0 }
      },
      '-'
    ),
    button({ events: { click: () => 'increment' } }, '+')
  )
)

Tempo.render({ store, template })
```

Finally the UI! Each element, like `div` above, takes one or more arguments.

The first argument is for the element's options. In `attrs` if a literal value is plassed, like the attribute `class: 'app'` above, it will be rendered once and cannot be updated dynamically. For dynamic values a function from `State` to the attribute type is required.

The rest of the arguments are optional children of the element. The simplest child node is a plain `string` that is mapped to a DOM text node. A text node can also be dynamic when represented by a function `State => string`. The text will then change when the state is changed. In our example, the `String` function is used in the template to render the `count` as a text node and will update when the state changes.

Just for fun we added `disabled` and made it dependent on `count`. When `count` is zero or less we will not be able to click it.

When the template is defined, nothing happens except that we have an instance of `DOMElement<State, Action, HTMLDivElement>`. This instance implements `DOMTemplate<State, Action>` which exposes the method `render: (ctx: DOMContext, state: State) => View<State>`. When that method is invoked, it will perform the actual creation and modification of the browser's DOM elements. The `View` returned by the `render` method has a method `destroy()` to remove what has been generated and `change(state: State)` to update its content.

These methods are managed and wired automatically when `store` and `template` are passed to `Tempo.render()`.

The entire app fits 6.3kb when gzipped!

This [simple app tracks performance](./demo/benchmark/) improvements/regressions with new versions of the library.
