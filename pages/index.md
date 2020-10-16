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
import { SimpleComponent } from 'tempo-dom/lib/html'

const component = SimpleComponent<number, unknown>($ =>
  $.DIV($ =>
    $.class('app').DIV($ =>
      $.DIV($ => $.class(['count', 'count-small']).text('count'))
        .DIV($ => $.class('count').text(String))
        .DIV($ =>
          $.class('buttons')
            .BUTTON($ =>
              $.onClick(count => count - 1)
                .disabled(count => count <= 0)
                .text('-')
            )
            .BUTTON($ => $.onClick(count => count + 1).text('+'))
        )
    )
  )
)

Tempo.renderSimple({ component, state: 0 })
```

In this simple example `State` is just a plain `number`. In a more sophisticated examples it usually a data object.

The UI rendering will only depend on the `State` and nothing else. This is one of the major advantages of Tempo. Testing the UI is greatly simplified using this principle as it will consistently render the same result for any given state.

Interactions in a Tempo application are controlled by Actions. Event handlers in the DOM API are functions that produce side-effects (they do not return any value). In Tempo event handlers must return an Action type value (or undefined when no action should be taken). An event handler takes 3 arguments:

```
state: State, event: Event, element: Element
```

These arguments give the full context to be able to generate Actions. When using `SimpleComponent` like in the example above the type of `State` and `Action` match. That means that `SimpleComponent` doesn't need a `reducer` function to apply changes to state. This is usually convenient when `State` and `Action` are really simple models.

This [simple app tracks performance](./demo/benchmark/) improvements/regressions with new versions of the library.
