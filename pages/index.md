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

Tempo is a framework to build dynamic front end applications.

This is not an officially supported Google product.

[TODO MVC demo](./demo/todomvc/)

[HNPWA demo](./demo/hnpwa/)

[PaperJS integration demo](./demo/paper/)

# Sample Application

A Tempo application operates on two main instances:

  * **Store** as in data-store, or state holder
  * **Template**: an object with a function `render(state: State, context: Context): View<State>`

These two instances work together applying `Tempo.render` to create your application.

Here is a full example of a little widget that increments and decrements a counter, updating as the value changes.

You can try out the [demo running here](./demo/readme/).

```ts
import { Tempo } from 'tempo-dom/lib/tempo'
import { div, button } from 'tempo-dom/lib/html'
import { mapState } from 'tempo-dom/lib/map'
import { Store } from 'tempo-store/lib/store'

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

const decrement = (): Action => ({ kind: 'decrement' })
const increment = (): Action => ({ kind: 'increment' })

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
      { attrs: { className: 'buttons' } },
      button(
        {
          events: { click: decrement },
          attrs: { disabled: (count: number) => count <= 0 }
        },
        '-'
      ),
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
<State, Action, Ev extends Event = Event, El extends Element = Element> =
  (state: State, event: Ev, element: El) => Action | undefined
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

**Note**: `Property` doesn't trigger its listeners unless the value is actually changed. Setting the same value twice will not trigger a second change. This behavior can be controlled by passing an optional equivalence `equal: (a: State, b: State) => boolean` function. By default, the implementation provided will perform a strict comparison.

```ts
const template = div<State, Action>(
  { attrs: { className: 'app' } },
  mapState(
    { map: (state: State) => state.count },
    div({ attrs: { className: 'count count-small' } }, 'count'),
    div({ attrs: { className: 'count' } }, String),
    div(
      { attrs: { className: 'buttons' } },
      button(
        {
          events: { click: decrement },
          attrs: { disabled: (count: number) => count <= 0 }
        },
        '-'
      ),
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

This [simple app tracks performance](./demo/benchmark/) improvements/regressions with new versions of the library.
