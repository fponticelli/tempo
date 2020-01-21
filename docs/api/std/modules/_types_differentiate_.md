[tempo-std - v0.2.0](../README.md) › [Globals](../globals.md) › ["types/differentiate"](_types_differentiate_.md)

# External module: "types/differentiate"

## Index

### Type aliases

* [Differentiate](_types_differentiate_.md#differentiate)
* [DifferentiateAt](_types_differentiate_.md#differentiateat)
* [DifferentiateByKind](_types_differentiate_.md#differentiatebykind)

## Type aliases

###  Differentiate

Ƭ **Differentiate**: *State extends ObjectWithField<Field, ExpectedType> ? State : never*

*Defined in [types/differentiate.ts:18](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/types/differentiate.ts#L18)*

___

###  DifferentiateAt

Ƭ **DifferentiateAt**: *Path extends [] ? State : Path extends [infer T] ? T extends keyof State ? ExpectedType extends State[T] ? Differentiate<T, State, ExpectedType> : never : never : Path extends [infer K, any] ? K extends keyof State ? Tail<Path> extends infer Rest ? Rest extends IndexType[] ? State & object : never : never : never : never*

*Defined in [types/differentiate.ts:29](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/types/differentiate.ts#L29)*

___

###  DifferentiateByKind

Ƭ **DifferentiateByKind**: *[Differentiate](_types_differentiate_.md#differentiate)‹"kind", State, K›*

*Defined in [types/differentiate.ts:24](https://github.com/fponticelli/tempo/blob/d1a1f4f/std/src/types/differentiate.ts#L24)*
