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
  SimpleComponentSVGBuilder,
  PortalSVGBuilder,
  SVGAnchorElementBuilder,
  SVGCircleElementBuilder,
  SVGElementBuilder,
  SVGFEColorMatrixElementBuilder,
  SVGFEComponentTransferElementBuilder,
  SVGEllipseElementBuilder,
  SVGFEBlendElementBuilder,
  SVGFeCompositeElementBuilder,
  SVGFEConvolveMatrixElementBuilder,
  SVGFEDiffuseLightingElementBuilder,
  SVGFEDisplacementMapElementBuilder,
  SVGFEDistantLightElementBuilder,
  SVGFEFloodElementBuilder,
  SVGFEFuncAElementBuilder,
  SVGFEFuncBElementBuilder,
  SVGFEFuncGElementBuilder,
  SVGFEFuncRElementBuilder,
  SVGFEGaussianBlurElementBuilder,
  SVGFEImageElementBuilder,
  SVGFEMergeElementBuilder,
  SVGFEMergeNodeElementBuilder,
  SVGFEMorphologyElementBuilder,
  SVGFEOffsetElementBuilder,
  SVGFEPointLightElementBuilder,
  SVGFESpecularLightingElementBuilder,
  SVGFESpotLightElementBuilder,
  SVGFETileElementBuilder,
  SVGFETurbulenceElementBuilder,
  SVGFilterElementBuilder,
  SVGForeignObjectElementBuilder,
  SVGGElementBuilder,
  SVGImageElementBuilder,
  SVGLineElementBuilder,
  SVGLinearGradientElementBuilder,
  SVGMarkerElementBuilder,
  SVGMaskElementBuilder,
  SVGMetadataElementBuilder,
  SVGPathElementBuilder,
  SVGPatternElementBuilder,
  SVGPolygonElementBuilder,
  SVGPolylineElementBuilder,
  SVGRadialGradientElementBuilder,
  SVGRectElementBuilder,
  SVGScriptElementBuilder,
  SVGStopElementBuilder,
  SVGStyleElementBuilder,
  SVGSwitchElementBuilder,
  SVGSymbolElementBuilder,
  SVGTextElementBuilder,
  SVGTextPathElementBuilder,
  SVGTitleElementBuilder,
  SVGTSpanElementBuilder,
  SVGUseElementBuilder,
  SVGViewElementBuilder
} from './svg_builder'
import { HoldF, HoldStateTemplate } from './hold_state'

export { svgEl }

// transform
export function HoldState<State, StateB, StateC, Action, Query>(
  holdf: HoldF<
    State,
    StateB,
    StateC,
    Action,
    Query,
    FragmentSVGBuilder<StateC, Action, Query>
  >
) {
  const builder = new FragmentSVGBuilder<StateC, Action, Query>()
  return new HoldStateTemplate(holdf, builder)
}

export function ForEach<State, Action, Query>(
  init: (
    builder: UntilSVGBuilder<
      State,
      State extends any[] ? State[number] : never,
      Action,
      Query
    >
  ) => void
) {
  return Until(
    ({
      state,
      index
    }: {
      state: State
      index: number
    }): State extends any[] ? State[number] : never => (state as any)[index],
    init
  )
}

export function Portal<State, Action, Query>(
  appendChild: (doc: Document, node: Node) => void,
  init: (builder: PortalSVGBuilder<State, Action, Query>) => void
) {
  const builder = new PortalSVGBuilder<State, Action, Query>(appendChild)
  if (init !== undefined) init(builder)
  return builder
}

export function PortalWithSelector<State, Action, Query>(
  selector: string,
  init: (builder: PortalSVGBuilder<State, Action, Query>) => void
) {
  return Portal(doc => {
    const el = doc.querySelector(selector)
    if (!el) {
      throw new Error(`selector doesn't match any element: "${selector}"`)
    }
    return el
  }, init)
}

export function HeadPortal<State, Action, Query>(
  init: (builder: PortalSVGBuilder<State, Action, Query>) => void
) {
  return Portal((doc, node) => doc.head.appendChild(node), init)
}

export function BodyPortal<State, Action, Query>(
  init: (builder: PortalSVGBuilder<State, Action, Query>) => void
) {
  return Portal((doc, node) => doc.body.appendChild(node), init)
}

// SimpleComponent(
//   init: (builder: SimpleComponentBuilder<State, Query>) => void
// ) {
//   const builder = new SimpleComponentBuilder<State, Query>()
//   init(builder)
//   return this.append(builder.build())
// }

// derived children
export function A<State, Action, Query>(
  init?: (builder: SVGAnchorElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGAnchorElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function CIRCLE<State, Action, Query>(
  init?: (builder: SVGCircleElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGCircleElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function CLIP_PATH<State, Action, Query>(
  init?: (
    builder: SVGElementBuilder<State, Action, Query, SVGClipPathElement>
  ) => void
) {
  const builder = new SVGElementBuilder<
    State,
    Action,
    Query,
    SVGClipPathElement
  >('clipPath')
  if (init !== undefined) init(builder)
  return builder
}
export function DEFS<State, Action, Query>(
  init?: (
    builder: SVGElementBuilder<State, Action, Query, SVGDefsElement>
  ) => void
) {
  const builder = new SVGElementBuilder<State, Action, Query, SVGDefsElement>(
    'defs'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function DESC<State, Action, Query>(
  init?: (
    builder: SVGElementBuilder<State, Action, Query, SVGDescElement>
  ) => void
) {
  const builder = new SVGElementBuilder<State, Action, Query, SVGDescElement>(
    'desc'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function ELLIPSE<State, Action, Query>(
  init?: (builder: SVGEllipseElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGEllipseElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_BLEND<State, Action, Query>(
  init?: (builder: SVGFEBlendElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEBlendElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_COLOR_MATRIX<State, Action, Query>(
  init?: (builder: SVGFEColorMatrixElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEColorMatrixElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_COMPONENT_TRANSFER<State, Action, Query>(
  init?: (
    builder: SVGFEComponentTransferElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new SVGFEComponentTransferElementBuilder<
    State,
    Action,
    Query
  >()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_COMPOSITE<State, Action, Query>(
  init?: (builder: SVGFeCompositeElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFeCompositeElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_CONVOLVE_MATRIX<State, Action, Query>(
  init?: (
    builder: SVGFEConvolveMatrixElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new SVGFEConvolveMatrixElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_DIFFUSE_LIGHTING<State, Action, Query>(
  init?: (
    builder: SVGFEDiffuseLightingElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new SVGFEDiffuseLightingElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_DISPLACEMENT_MAP<State, Action, Query>(
  init?: (
    builder: SVGFEDisplacementMapElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new SVGFEDisplacementMapElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_DISTANT_LIGHT<State, Action, Query>(
  init?: (
    builder: SVGFEDistantLightElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new SVGFEDistantLightElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_FLOOD<State, Action, Query>(
  init?: (builder: SVGFEFloodElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEFloodElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_FUNC_A<State, Action, Query>(
  init?: (builder: SVGFEFuncAElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEFuncAElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_FUNC_B<State, Action, Query>(
  init?: (builder: SVGFEFuncBElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEFuncBElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_FUNC_G<State, Action, Query>(
  init?: (builder: SVGFEFuncGElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEFuncGElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_FUNC_R<State, Action, Query>(
  init?: (builder: SVGFEFuncRElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEFuncRElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_GAUSSIAN_BLUR<State, Action, Query>(
  init?: (
    builder: SVGFEGaussianBlurElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new SVGFEGaussianBlurElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_IMAGE<State, Action, Query>(
  init?: (builder: SVGFEImageElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEImageElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_MERGE<State, Action, Query>(
  init?: (builder: SVGFEMergeElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEMergeElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_MERGE_NODE<State, Action, Query>(
  init?: (builder: SVGFEMergeNodeElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEMergeNodeElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_MORPHOLOGY<State, Action, Query>(
  init?: (builder: SVGFEMorphologyElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEMorphologyElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_OFFSET<State, Action, Query>(
  init?: (builder: SVGFEOffsetElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEOffsetElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_POINTLIGHT<State, Action, Query>(
  init?: (builder: SVGFEPointLightElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFEPointLightElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_SPECULAR_LIGHTING<State, Action, Query>(
  init?: (
    builder: SVGFESpecularLightingElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new SVGFESpecularLightingElementBuilder<
    State,
    Action,
    Query
  >()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_SPOTLIGHT<State, Action, Query>(
  init?: (builder: SVGFESpotLightElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFESpotLightElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_TILE<State, Action, Query>(
  init?: (builder: SVGFETileElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFETileElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FE_TURBULENCE<State, Action, Query>(
  init?: (builder: SVGFETurbulenceElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFETurbulenceElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FILTER<State, Action, Query>(
  init?: (builder: SVGFilterElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGFilterElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function FOREIGN_OBJECT<State, Action, Query>(
  init?: (builder: SVGForeignObjectElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGForeignObjectElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function G<State, Action, Query>(
  init?: (builder: SVGGElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGGElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function IMAGE<State, Action, Query>(
  init?: (builder: SVGImageElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGImageElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function LINE<State, Action, Query>(
  init?: (builder: SVGLineElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGLineElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function LINEAR_GRADIENT<State, Action, Query>(
  init?: (
    builder: SVGLinearGradientElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new SVGLinearGradientElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function MARKER<State, Action, Query>(
  init?: (builder: SVGMarkerElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGMarkerElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function MASK<State, Action, Query>(
  init?: (builder: SVGMaskElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGMaskElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function METADATA<State, Action, Query>(
  init?: (builder: SVGMetadataElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGMetadataElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function PATH<State, Action, Query>(
  init?: (builder: SVGPathElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGPathElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function PATTERN<State, Action, Query>(
  init?: (builder: SVGPatternElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGPatternElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function POLYGON<State, Action, Query>(
  init?: (builder: SVGPolygonElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGPolygonElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function POLYLINE<State, Action, Query>(
  init?: (builder: SVGPolylineElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGPolylineElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function RADIAL_GRADIENT<State, Action, Query>(
  init?: (
    builder: SVGRadialGradientElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new SVGRadialGradientElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function RECT<State, Action, Query>(
  init?: (builder: SVGRectElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGRectElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function SCRIPT<State, Action, Query>(
  init?: (builder: SVGScriptElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGScriptElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function STOP<State, Action, Query>(
  init?: (builder: SVGStopElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGStopElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function STYLE<State, Action, Query>(
  init?: (builder: SVGStyleElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGStyleElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function SVG<State, Action, Query>(
  init?: (builder: SVGSVGElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGSVGElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function SWITCH<State, Action, Query>(
  init?: (builder: SVGSwitchElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGSwitchElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function SYMBOL<State, Action, Query>(
  init?: (builder: SVGSymbolElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGSymbolElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function TEXT<State, Action, Query>(
  init?: (builder: SVGTextElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGTextElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function TEXT_PATH<State, Action, Query>(
  init?: (builder: SVGTextPathElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGTextPathElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function TITLE<State, Action, Query>(
  init?: (builder: SVGTitleElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGTitleElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function TSPAN<State, Action, Query>(
  init?: (builder: SVGTSpanElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGTSpanElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function USE<State, Action, Query>(
  init?: (builder: SVGUseElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGUseElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}
export function VIEW<State, Action, Query>(
  init?: (builder: SVGViewElementBuilder<State, Action, Query>) => void
) {
  const builder = new SVGViewElementBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}

// transforms
export function Adapter<State, StateB, Action, ActionB, Query>(props: {
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

export function LocalAdapter<State, Action, Query>(props: {
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

export function Component<State, Action, Query>(
  reducer: (state: State, action: Action) => State,
  init: (builder: ComponentSVGBuilder<State, Action, Query>) => void
) {
  const builder = new ComponentSVGBuilder<State, Action, Query>(reducer)
  if (init !== undefined) init(builder)
  return builder
}

export function Iterate<State, Items extends any[], Action, Query>(
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
  return MapState<State, [Items, State], Action, Query>(
    (outer: State): [Items, State] | undefined => {
      const items = resolveAttribute(map)(outer)
      return items !== undefined ? [items, outer] : undefined
    },
    n => {
      n.Until<[Items[number], State, number]>(
        ({ state: [items, state], index }) =>
          items[index] && [items[index], state, index],
        init
      )
    }
  )
}

export function MapState<State, StateB, Action, Query>(
  map: (state: State) => StateB | undefined,
  init: (builder: MapStateSVGBuilder<State, StateB, Action, Query>) => void
) {
  const builder = new MapStateSVGBuilder<State, StateB, Action, Query>(map)
  if (init !== undefined) init(builder)
  return builder
}

export function MapField<
  State,
  Action,
  Query,
  K extends keyof State = keyof State
>(
  field: K,
  init: (builder: MapStateSVGBuilder<State, State[K], Action, Query>) => void
) {
  return MapState<State, State[K], Action, Query>(
    (v: State): State[K] => v[field],
    init
  )
}

export function MapStateAndKeep<State, StateB, Action, Query>(
  map: (state: State) => StateB | undefined,
  init: (
    builder: MapStateSVGBuilder<State, [StateB, State], Action, Query>
  ) => void
) {
  return MapState<State, [StateB, State], Action, Query>((state: State) => {
    const inner = resolveAttribute(map)(state)
    if (inner !== undefined) {
      return [inner, state]
    } else {
      return undefined
    }
  }, init)
}

export function MapAction<State, Action, ActionB, Query>(
  map: DerivedValue<ActionB, Action>,
  init: (builder: MapActionSVGBuilder<State, Action, ActionB, Query>) => void
) {
  const builder = new MapActionSVGBuilder<State, Action, ActionB, Query>(map)
  if (init !== undefined) init(builder)
  return builder
}

export function MapQuery<State, Action, Query, QueryB>(
  map: DerivedValue<Query, QueryB>,
  init: (builder: MapQuerySVGBuilder<State, Action, Query, QueryB>) => void
) {
  const builder = new MapQuerySVGBuilder<State, Action, Query, QueryB>(map)
  if (init !== undefined) init(builder)
  return builder
}

export function Match<
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

export function MatchKind<
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
  return Match<['kind'], State, Action, Query>({
    path: ['kind'],
    matcher
  })
}

export function MatchBool<State, Action, Query = unknown>(props: {
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

export function MatchValue<
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

export function MatchOption<State, Action, Query = unknown>(props: {
  Some: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  None: DOMChild<unknown, Action, Query> | IBuilder<unknown, Action, Query>
}): DOMTemplate<Option<State>, Action, Query> {
  return MatchKind({
    Some: MapField('value', n => n.Append(props.Some)),
    None: MapState(
      () => null,
      n => n.Append(props.None)
    )
  })
}

export function MatchMaybe<State, Action, Query = unknown>(props: {
  Just: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  Nothing?: DOMChild<unknown, Action, Query> | IBuilder<State, Action, Query>
}): DOMTemplate<Maybe<State>, Action, Query> {
  return new MatchBoolTemplate<Maybe<State>, Action, Query>(
    v => v !== undefined,
    MapState(
      (opt: Maybe<State>) => opt as Just<State>,
      n => n.Append(props.Just)
    ),
    props.Nothing as DOMChild<unknown, Action, Query>
  )
}

export function MatchResult<State, Error, Action, Query = unknown>(props: {
  Success: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  Failure: DOMChild<Error, Action, Query> | IBuilder<Error, Action, Query>
}): DOMTemplate<Result<State, Error>, Action, Query> {
  return MatchKind({
    Success: MapField('value', n => n.Append(props.Success)),
    Failure: MapField('error', n => n.Append(props.Failure))
  })
}

export function MatchAsync<State, Progress, Action, Query = unknown>(props: {
  Outcome: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  NotAsked: DOMChild<unknown, Action, Query> | IBuilder<unknown, Action, Query>
  Loading: DOMChild<Progress, Action, Query> | IBuilder<Progress, Action, Query>
}): DOMTemplate<Async<State, Progress>, Action, Query> {
  return MatchKind({
    Outcome: MapField('value', n => n.Append(props.Outcome)),
    Loading: MapField('progress', n => n.Append(props.Loading)),
    NotAsked: MapState(
      () => null,
      n => n.Append(props.NotAsked)
    )
  })
}

export function MatchAsyncResult<
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
  return MatchKind<AsyncResult<State, Error, Progress>, Action, Query>({
    Outcome: MapState(
      (o: Outcome<Result<State, Error>>) => o.value,
      n =>
        n.Append(
          MatchResult<State, Error, Action, Query>({
            Success: props.Success,
            Failure: props.Failure
          })
        )
    ),
    Loading: MapField('progress', n => n.Append(props.Loading)),
    NotAsked: MapState(
      () => null,
      n => n.Append(props.NotAsked)
    )
  })
}

export function Lazy<State, Action, Query>(
  lazyf: () =>
    | DOMTemplate<State, Action, Query>
    | IBuilder<State, Action, Query>
) {
  return new LazyTemplate(lazyf)
}

export function Fragment<State, Action, Query>(
  init: (builder: FragmentSVGBuilder<State, Action, Query>) => void
) {
  const builder = new FragmentSVGBuilder<State, Action, Query>()
  if (init !== undefined) init(builder)
  return builder
}

export function SimpleComponent<State, Query>(
  init: (builder: SimpleComponentSVGBuilder<State, Query>) => void
) {
  const builder = new SimpleComponentSVGBuilder<State, Query>()
  if (init !== undefined) init(builder)
  return builder
}

export function Unless<State, Action, Query>(
  condition: DerivedValue<State, boolean>,
  init: (builder: MapStateSVGBuilder<State, State, Action, Query>) => void
) {
  return When(s => !condition(s), init)
}

export function Until<State, StateB, Action, Query>(
  next: DerivedValue<{ state: State; index: number }, StateB>,
  init: (builder: UntilSVGBuilder<State, StateB, Action, Query>) => void
) {
  const builder = new UntilSVGBuilder<State, StateB, Action, Query>(next)
  if (init !== undefined) init(builder)
  return builder
}

export function When<State, Action, Query>(
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
  if (init !== undefined) init(builder)
  return builder
}
