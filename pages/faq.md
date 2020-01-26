---
title: FAQ
order: 4
---

# FAQ

### Why no JSX/TSX?

It wouls be really great to have TSX support in Tempo. Unforunately the current implementation doesn't work well with generics. That means that all of the inferred typing for State and Action would get lost using TSX. If someone wants to give it another try, I'd love to consider a PR.

### Why no version 1 of `tempo-dom` yet?

There are a few areas still that I would like to improve or reconsider:

* Some elements use objects to capture options, some other do not.
* TSX or an HTML-like syntax would be a great addition and might affect how attributes are passed.
* Attributes/Events/Styles are passed in nested objects. While that makes for less runtime guessing and better typing, it makes the DSL to assemble UI a little more bloated than I'd like.
* Passing outer scopes to inner elements is not great. It requires that you glue smaller pieces of state together with their parents using mapState. React Context is trying to address a similar problem but I am not sure that strategy would work nicely here because typing would be impossible (?).
* Function and element names could use some improvements in consistency and clarity. *Match* functions are especially critical because they are used in many different places and their names conflict.
* Type inference breaks at time and I need to understand why. I observed that in *match* functions and *mapState* element.

### Can I use the rendering engine without `Tempo.render` and `Store`?

TBD

### Why attributes do not use camelCase? Why style properties do? And what about the style attribute?

TBD

### How do I embed a native JS widget or one that has been written with another framework like Angular or React?

TBD

### Is a Tempo Component the same as a React Component?

TBD

### Does Tempo use a Virtual Dom?

TBD
