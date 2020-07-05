/*
Copyright 2020 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { IBuilder } from './dom_builder'
import { Attribute, resolveAttribute } from '../value'
import { ComponentTemplate } from './component'
import { PropagateArg, AdapterTemplate } from './adapter'
import { DerivedValue } from 'tempo-core/lib/value'
import { IndexType } from 'tempo-std/lib/types/index_type'
import {
  ObjectWithPath,
  TypeAtPath,
  ObjectWithField
} from 'tempo-std/lib/types/objects'
import { DOMChild, DOMTemplate } from '../template'
import { DifferentiateAt } from 'tempo-std/lib/types/differentiate'
import { MatchTemplate } from './match_template'
import { MatchBoolTemplate } from './match_bool_template'
import { MatchValueTemplate } from './match_value_template'
import { Option } from 'tempo-std/lib/option'
import { Maybe, Just } from 'tempo-std/lib/maybe'
import { Result } from 'tempo-std/lib/result'
import { Async, Outcome } from 'tempo-std/lib/async'
import { AsyncResult } from 'tempo-std/lib/async_result'
import { LazyTemplate } from './lazy'
import {
  svgEl,
  SVGSVGElementBuilder,
  ComponentSVGBuilder,
  MapStateSVGBuilder,
  MapActionSVGBuilder,
  MapQuerySVGBuilder,
  UntilSVGBuilder,
  FragmentSVGBuilder,
  SimpleComponentSVGBuilder
} from './svg_builder'

export { svgEl }

// dom specific
export function svg<State, Action, Query>(
  init?: (builder: SVGSVGElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGSVGElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}

// transforms
export function adapter<State, StateB, Action, ActionB, Query>(props: {
  bootstrapState: (outer: State) => StateB
  mergeStates?: Attribute<
    {
      outerState: State
      innerState: StateB
    },
    StateB
  >
  propagate?: (args: PropagateArg<State, StateB, Action, ActionB>) => void
  child: ComponentTemplate<StateB, ActionB, Query>
}) {
  return new AdapterTemplate(
    props.bootstrapState,
    props.mergeStates,
    props.propagate || (() => undefined),
    props.child
  )
}

export function localAdapter<State, Action, Query>(props: {
  propagate?: (args: PropagateArg<State, State, Action, Action>) => void
  child: ComponentTemplate<State, Action, Query>
}) {
  return new AdapterTemplate(
    state => state,
    ({ outerState }) => outerState,
    props.propagate || (() => undefined),
    props.child
  )
}

export function component<State, Action, Query>(
  reducer: (state: State, action: Action) => State,
  init: (builder: ComponentSVGBuilder<State, Action, Query>) => void
) {
  const builder = new ComponentSVGBuilder<State, Action, Query>(reducer)
  init(builder)
  return builder
}

export function iterate<State, Items extends any[], Action, Query>(
  map: DerivedValue<State, Items>,
  init: (
    builder: UntilSVGBuilder<
      [Items, State],
      [Items[number], State, number],
      Action,
      Query
    >
  ) => void
) {
  return mapState<State, [Items, State], Action, Query>(
    (outer: State): [Items, State] | undefined => {
      const items = resolveAttribute(map)(outer)
      return items !== undefined ? [items, outer] : undefined
    },
    n => {
      n.until<[Items[number], State, number]>(
        ({ state: [items, state], index }) =>
          items[index] && [items[index], state, index],
        init
      )
    }
  )
}

export function mapState<State, StateB, Action, Query>(
  map: (state: State) => StateB | undefined,
  init: (builder: MapStateSVGBuilder<State, StateB, Action, Query>) => void
) {
  const builder = new MapStateSVGBuilder<State, StateB, Action, Query>(map)
  init(builder)
  return builder
}

export function mapField<
  State,
  Action,
  Query,
  K extends keyof State = keyof State
>(
  field: K,
  init: (builder: MapStateSVGBuilder<State, State[K], Action, Query>) => void
) {
  return mapState<State, State[K], Action, Query>(
    (v: State): State[K] => v[field],
    init
  )
}

export function mapStateAndKeep<State, StateB, Action, Query>(
  map: (state: State) => StateB | undefined,
  init: (
    builder: MapStateSVGBuilder<State, [StateB, State], Action, Query>
  ) => void
) {
  return mapState<State, [StateB, State], Action, Query>((state: State) => {
    const inner = resolveAttribute(map)(state)
    if (inner !== undefined) {
      return [inner, state]
    } else {
      return undefined
    }
  }, init)
}

export function mapAction<State, Action, ActionB, Query>(
  map: DerivedValue<ActionB, Action>,
  init: (builder: MapActionSVGBuilder<State, Action, ActionB, Query>) => void
) {
  const builder = new MapActionSVGBuilder<State, Action, ActionB, Query>(map)
  init(builder)
  return builder
}

export function mapQuery<State, Action, Query, QueryB>(
  map: DerivedValue<Query, QueryB>,
  init: (builder: MapQuerySVGBuilder<State, Action, Query, QueryB>) => void
) {
  const builder = new MapQuerySVGBuilder<State, Action, Query, QueryB>(map)
  init(builder)
  return builder
}

export function match<
  Path extends IndexType[],
  State extends ObjectWithPath<Path, any>,
  Action,
  Query = unknown
>(props: {
  path: Path
  matcher: {
    [k in TypeAtPath<Path, State>]:
      | DOMChild<DifferentiateAt<Path, State, k>, Action, Query>
      | IBuilder<DifferentiateAt<Path, State, k>, Action, Query>
  }
}): DOMTemplate<State, Action, Query> {
  return new MatchTemplate<Path, State, Action, Query>(
    props.path,
    props.matcher
  )
}

export function matchKind<
  State extends ObjectWithField<'kind', any>,
  Action,
  Query = unknown
>(
  matcher: {
    [k in State['kind']]:
      | DOMChild<DifferentiateAt<['kind'], State, k>, Action, Query>
      | IBuilder<DifferentiateAt<['kind'], State, k>, Action, Query>
  }
): DOMTemplate<State, Action, Query> {
  return match<['kind'], State, Action, Query>({
    path: ['kind'],
    matcher
  })
}

export function matchBool<State, Action, Query = unknown>(props: {
  condition: Attribute<State, boolean>
  true: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  false: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
}): DOMTemplate<State, Action, Query> {
  return new MatchBoolTemplate<State, Action, Query>(
    props.condition,
    props.true,
    props.false
  )
}

export function matchValue<
  Path extends IndexType[],
  State extends ObjectWithPath<Path, string>,
  Action,
  Query = unknown
>(props: {
  path: Path
  matcher: {
    [_ in string | number]:
      | DOMChild<State, Action, Query>
      | IBuilder<State, Action, Query>
  }
  orElse: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
}): DOMTemplate<State, Action, Query> {
  return new MatchValueTemplate<State, Action, Query>(
    props.path,
    props.matcher,
    props.orElse
  )
}

export function matchOption<State, Action, Query = unknown>(props: {
  Some: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  None: DOMChild<unknown, Action, Query> | IBuilder<unknown, Action, Query>
}): DOMTemplate<Option<State>, Action, Query> {
  return matchKind({
    Some: mapField('value', n => n.append(props.Some)),
    None: mapState(
      () => null,
      n => n.append(props.None)
    )
  })
}

export function matchMaybe<State, Action, Query = unknown>(props: {
  Just: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  Nothing?: DOMChild<unknown, Action, Query> | IBuilder<State, Action, Query>
}): DOMTemplate<Maybe<State>, Action, Query> {
  return new MatchBoolTemplate<Maybe<State>, Action, Query>(
    v => v !== undefined,
    mapState(
      (opt: Maybe<State>) => opt as Just<State>,
      n => n.append(props.Just)
    ),
    props.Nothing as DOMChild<unknown, Action, Query>
  )
}

export function matchResult<State, Error, Action, Query = unknown>(props: {
  Success: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  Failure: DOMChild<Error, Action, Query> | IBuilder<Error, Action, Query>
}): DOMTemplate<Result<State, Error>, Action, Query> {
  return matchKind({
    Success: mapField('value', n => n.append(props.Success)),
    Failure: mapField('error', n => n.append(props.Failure))
  })
}

export function matchAsync<State, Progress, Action, Query = unknown>(props: {
  Outcome: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  NotAsked: DOMChild<unknown, Action, Query> | IBuilder<unknown, Action, Query>
  Loading: DOMChild<Progress, Action, Query> | IBuilder<Progress, Action, Query>
}): DOMTemplate<Async<State, Progress>, Action, Query> {
  return matchKind({
    Outcome: mapField('value', n => n.append(props.Outcome)),
    Loading: mapField('progress', n => n.append(props.Loading)),
    NotAsked: mapState(
      () => null,
      n => n.append(props.NotAsked)
    )
  })
}

export function matchAsyncResult<
  State,
  Error,
  Progress,
  Action,
  Query = unknown
>(props: {
  Success: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  Failure: DOMChild<Error, Action, Query> | IBuilder<Error, Action, Query>
  NotAsked: DOMChild<unknown, Action, Query> | IBuilder<unknown, Action, Query>
  Loading: DOMChild<Progress, Action, Query> | IBuilder<Progress, Action, Query>
}): DOMTemplate<AsyncResult<State, Error, Progress>, Action, Query> {
  return matchKind<AsyncResult<State, Error, Progress>, Action, Query>({
    Outcome: mapState(
      (o: Outcome<Result<State, Error>>) => o.value,
      n =>
        n.append(
          matchResult<State, Error, Action, Query>({
            Success: props.Success,
            Failure: props.Failure
          })
        )
    ),
    Loading: mapField('progress', n => n.append(props.Loading)),
    NotAsked: mapState(
      () => null,
      n => n.append(props.NotAsked)
    )
  })
}

export function lazy<State, Action, Query>(
  lazyf: () =>
    | DOMTemplate<State, Action, Query>
    | IBuilder<State, Action, Query>
) {
  return new LazyTemplate(lazyf)
}

export function fragment<State, Action, Query>(
  init: (builder: FragmentSVGBuilder<State, Action, Query>) => void
) {
  const builder = new FragmentSVGBuilder<State, Action, Query>()
  init(builder)
  return builder
}

// export function portal<State, Action, Query>(
//   appendChild: (doc: Document, node: Node) => void,
//   init: (builder: PortalBuilder<State, Action, Query>) => void
// ) {
//   const builder = new PortalBuilder<State, Action, Query>(appendChild)
//   init(builder)
//   return builder
// }

// export function portalWithSelector<State, Action, Query>(
//   selector: string,
//   init: (builder: PortalBuilder<State, Action, Query>) => void
// ) {
//   return portal((doc: HTMLDocument, node: Node) => {
//     const el = doc.querySelector(selector)
//     if (!el) {
//       throw new Error(`selector doesn't match any element: "${selector}"`)
//     }
//     el.appendChild(node)
//   }, init)
// }

export function simpleComponent<State, Query>(
  init: (builder: SimpleComponentSVGBuilder<State, Query>) => void
) {
  const builder = new SimpleComponentSVGBuilder<State, Query>()
  init(builder)
  return builder
}

export function unless<State, Action, Query>(
  condition: DerivedValue<State, boolean>,
  init: (builder: MapStateSVGBuilder<State, State, Action, Query>) => void
) {
  return when(s => !condition(s), init)
}

export function until<State, StateB, Action, Query>(
  next: DerivedValue<{ state: State; index: number }, StateB>,
  init: (builder: UntilSVGBuilder<State, StateB, Action, Query>) => void
) {
  const builder = new UntilSVGBuilder<State, StateB, Action, Query>(next)
  init(builder)
  return builder
}

export function when<State, Action, Query>(
  condition: DerivedValue<State, boolean>,
  init: (builder: MapStateSVGBuilder<State, State, Action, Query>) => void
) {
  const builder = new MapStateSVGBuilder<State, State, Action, Query>(s => {
    if (condition(s)) {
      return s
    } else {
      return undefined
    }
  })
  init(builder)
  return builder
}
