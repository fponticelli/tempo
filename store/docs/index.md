---
id: "index"
title: "tempo-store - v1.1.2"
sidebar_label: "README"
---

# tempo-store

`tempo-store` contains utilities to wrap a value into a `Store` instance and track its lifecycle.

## Property

A `Property` instance wraps a single generic value of type `T`. It exposes a field `observable` where you can add your own listeners. These will be triggered any time `Property.set` is invoked but only if the value differs from its previous state. To control such behavior it is possible to pass a function `equal`. The default implementation performs a structural equality test.

## Store

A `Store` instance wraps a property and adds a `reducer` function to the mix. With the `reducer` it is possible to influence the value of store by invoking `process(action: Action)`. Whenver that method is called, `reducer(currentState: State, action: Action): State` is invoked and the value of store is accordinlgy updated. It is possible to monitor state changes and action triggers by adding listeners to the `observable` field. Note that these listeners should have the shape `(state: State, action: Action, changed: boolean) => void`.

More info on the `tempo` architecture can be found [here](https://fponticelli.github.io/tempo/).
