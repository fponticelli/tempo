# tempo-core

`tempo-core` includes the basic types and building blocks for `tempo` implementations. The only one available right now is [`tempo-dom`](https://fponticelli.github.io/tempo/).

The `tempo` concept is quite simple. You describe your UI creating templates. A template has a `render` method that takes a `context` (provide the DOM context for example) and a `state` (the data to render).

The side-effect of `render` is to create a piece of UI and return a new `View` instance to control it.

`View` has a method `destroy` and when it is a `Dynamic` view a `change(state: State)` method.
