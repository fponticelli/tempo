import { HoldF, HoldStateTemplate } from './hold_state'
import {
  DOMBuilder,
  IBuilder,
  extractLiterals,
  extractDerived,
  childOrBuilderToTemplate,
  booleanToString,
  ListValue,
  spaceSeparatedToString,
  stylesToString
} from './dom_builder'
import { DerivedOrLiteralValue, DerivedValue } from 'tempo-core/lib/value'
import {
  Attribute,
  resolveAttribute,
  mapAttribute,
  EventHandler,
  EventHandlerTE
} from '../value'
import { DOMContext } from '../context'
import { MakeLifecycle, makeEmptyLifecycle } from '../lifecycle'
import { makeCreateElementNS } from './dom'
import { keys } from 'tempo-std/lib/objects'
import { DOMElement } from './element'
import { FragmentTemplate as FragmentSVGTemplate } from './fragment'
import { PropagateArg, AdapterTemplate } from './adapter'
import { ComponentTemplate } from './component'
import { MapActionTemplate } from './map_action'
import { MapQueryTemplate } from './map_query'
import { DOMChild, DOMTemplate } from '../template'
import { MapStateTemplate } from './map_state'
import { PortalTemplate } from './portal'
import { SimpleComponentTemplate } from './simple_component'
import { UntilTemplate } from './until'
import { MatchBoolTemplate } from './match_bool_template'
import { LazyTemplate } from './lazy'

export const SVG_NS = 'http://www.w3.org/2000/svg'

export class BaseSVGBuilder<State, Action, Query> extends DOMBuilder<
  State,
  Action,
  Query
> {
  svgEl(
    init: (
      builder: SVGElementBuilder<State, Action, Query, SVGElement>
    ) => void = () => {}
  ): this {
    const builder = svgEl<State, Action, Query>(name)
    init(builder)
    this._children.push(builder.build())
    return this
  }

  // transform
  adapter<StateB, ActionB>(props: {
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
    return this.append(
      new AdapterTemplate(
        props.bootstrapState,
        props.mergeStates,
        props.propagate || (() => undefined),
        props.child
      )
    )
  }

  component(
    reducer: (state: State, action: Action) => State,
    init: (builder: ComponentSVGBuilder<State, Action, Query>) => void
  ) {
    const builder = new ComponentSVGBuilder<State, Action, Query>(reducer)
    init(builder)
    return this.append(builder.build())
  }

  localAdapter(props: {
    propagate?: (args: PropagateArg<State, State, Action, Action>) => void
    child: ComponentTemplate<State, Action, Query>
  }) {
    return this.append(
      new AdapterTemplate(
        state => state,
        ({ outerState }) => outerState,
        props.propagate || (() => undefined),
        props.child
      )
    )
  }

  holdState<StateB, StateC>(
    holdf: HoldF<
      State,
      StateB,
      StateC,
      Action,
      Query,
      FragmentSVGBuilder<StateC, Action, Query>
    >
  ): this {
    return this.append(
      new HoldStateTemplate(
        holdf,
        new FragmentSVGBuilder<StateC, Action, Query>()
      )
    )
  }

  mapState<StateB>(
    map: (state: State) => StateB | undefined,
    init: (builder: MapStateSVGBuilder<State, StateB, Action, Query>) => void
  ) {
    const builder = new MapStateSVGBuilder<State, StateB, Action, Query>(map)
    init(builder)
    return this.append(builder.build())
  }

  mapField<Key extends keyof State>(
    field: Key,
    init: (
      builder: MapStateSVGBuilder<State, State[Key], Action, Query>
    ) => void
  ) {
    return this.mapState<State[Key]>((v: State): State[Key] => v[field], init)
  }

  mapStateAndKeep<StateB>(
    map: (state: State) => StateB | undefined,
    init: (
      builder: MapStateSVGBuilder<State, [StateB, State], Action, Query>
    ) => void
  ) {
    const builder = new MapStateSVGBuilder<
      State,
      [StateB, State],
      Action,
      Query
    >((state: State) => {
      const inner = resolveAttribute(map)(state)
      if (inner !== undefined) {
        return [inner, state]
      } else {
        return undefined
      }
    })
    init(builder)
    return this.append(builder.build())
  }

  mapAction<ActionB>(
    map: DerivedValue<ActionB, Action>,
    init: (builder: MapActionSVGBuilder<State, Action, ActionB, Query>) => void
  ) {
    const builder = new MapActionSVGBuilder<State, Action, ActionB, Query>(map)
    init(builder)
    return this.append(builder.build())
  }

  mapQuery<QueryB>(
    map: DerivedValue<Query, QueryB>,
    init: (builder: MapQuerySVGBuilder<State, Action, Query, QueryB>) => void
  ) {
    const builder = new MapQuerySVGBuilder<State, Action, Query, QueryB>(map)
    init(builder)
    return this.append(builder.build())
  }

  matchBool(props: {
    condition: Attribute<State, boolean>
    true: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
    false: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  }): this {
    return this.append(
      new MatchBoolTemplate<State, Action, Query>(
        props.condition,
        props.true,
        props.false
      )
    )
  }

  lazy(
    lazyf: () =>
      | DOMTemplate<State, Action, Query>
      | IBuilder<State, Action, Query>
  ) {
    return this.append(new LazyTemplate(lazyf))
  }

  forEach(
    init: (
      builder: UntilSVGBuilder<
        State,
        State extends any[] ? State[number] : never,
        Action,
        Query
      >
    ) => void
  ): this {
    return this.until(
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

  fragment(init: (builder: FragmentSVGBuilder<State, Action, Query>) => void) {
    const builder = new FragmentSVGBuilder<State, Action, Query>()
    init(builder)
    return this.append(builder.build())
  }

  iterate<Items extends any[]>(
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
    return this.mapState<[Items, State]>(
      (outer: State): [Items, State] | undefined => {
        const items = resolveAttribute(map)(outer)
        return items !== undefined ? [items, outer] : undefined
      },
      $ => {
        $.until<[Items[number], State, number]>(
          ({ state: [items, state], index }) =>
            items[index] && [items[index], state, index],
          init
        )
      }
    )
  }

  portal(
    appendChild: (doc: Document) => Element,
    init: (builder: PortalSVGBuilder<State, Action, Query>) => void
  ): this {
    const builder = new PortalSVGBuilder<State, Action, Query>(appendChild)
    init(builder)
    return this.append(builder.build())
  }

  portalWithSelector(
    selector: string,
    init: (builder: PortalSVGBuilder<State, Action, Query>) => void
  ): this {
    return this.portal(doc => {
      const el = doc.querySelector(selector)
      if (!el) {
        throw new Error(`selector doesn't match any element: "${selector}"`)
      }
      return el
    }, init)
  }

  headPortal(
    init: (builder: PortalSVGBuilder<State, Action, Query>) => void
  ): this {
    return this.portal(doc => doc.head, init)
  }

  bodyPortal(
    init: (builder: PortalSVGBuilder<State, Action, Query>) => void
  ): this {
    return this.portal(doc => doc.body, init)
  }

  // simpleComponent(
  //   init: (builder: SimpleComponentBuilder<State, Query>) => void
  // ) {
  //   const builder = new SimpleComponentBuilder<State, Query>()
  //   init(builder)
  //   return this.append(builder.build())
  // }

  unless(
    condition: DerivedValue<State, boolean>,
    init: (builder: MapStateSVGBuilder<State, State, Action, Query>) => void
  ) {
    return this.when(s => !condition(s), init)
  }

  until<StateB>(
    next: DerivedValue<{ state: State; index: number }, StateB>,
    init: (builder: UntilSVGBuilder<State, StateB, Action, Query>) => void
  ) {
    const builder = new UntilSVGBuilder<State, StateB, Action, Query>(next)
    init(builder)
    return this.append(builder.build())
  }

  when(
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
    return this.append(builder.build())
  }

  // derived children
  a(
    init?: (builder: SVGAnchorElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGAnchorElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  circle(
    init?: (builder: SVGCircleElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGCircleElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  clipPath(
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGClipPathElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGClipPathElement>(
        'clipPath'
      ),
      init,
      this
    )
  }
  defs(
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGDefsElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGDefsElement>('defs'),
      init,
      this
    )
  }
  desc(
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGDescElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGDescElement>('desc'),
      init,
      this
    )
  }
  ellipse(
    init?: (builder: SVGEllipseElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGEllipseElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  feBlend(
    init?: (builder: SVGFEBlendElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEBlendElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  feColorMatrix(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEColorMatrixElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEColorMatrixElement>(
        'feColorMatrix'
      ),
      init,
      this
    )
  }
  feComponentTransfer(
    // TODO
    init?: (
      builder: SVGElementBuilder<
        State,
        Action,
        Query,
        SVGFEComponentTransferElement
      >
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<
        State,
        Action,
        Query,
        SVGFEComponentTransferElement
      >('feComponentTransfer'),
      init,
      this
    )
  }
  feComposite(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFECompositeElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFECompositeElement>(
        'feComposite'
      ),
      init,
      this
    )
  }
  feConvolveMatrix(
    // TODO
    init?: (
      builder: SVGElementBuilder<
        State,
        Action,
        Query,
        SVGFEConvolveMatrixElement
      >
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEConvolveMatrixElement>(
        'feConvolveMatrix'
      ),
      init,
      this
    )
  }
  feDiffuseLighting(
    // TODO
    init?: (
      builder: SVGElementBuilder<
        State,
        Action,
        Query,
        SVGFEDiffuseLightingElement
      >
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEDiffuseLightingElement>(
        'feDiffuseLighting'
      ),
      init,
      this
    )
  }
  feDisplacementMap(
    // TODO
    init?: (
      builder: SVGElementBuilder<
        State,
        Action,
        Query,
        SVGFEDisplacementMapElement
      >
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEDisplacementMapElement>(
        'feDisplacementMap'
      ),
      init,
      this
    )
  }
  feDistantLight(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEDistantLightElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEDistantLightElement>(
        'feDistantLight'
      ),
      init,
      this
    )
  }
  feFlood(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEFloodElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEFloodElement>('feFlood'),
      init,
      this
    )
  }
  feFuncA(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEFuncAElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEFuncAElement>('feFuncA'),
      init,
      this
    )
  }
  feFuncB(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEFuncBElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEFuncBElement>('feFuncB'),
      init,
      this
    )
  }
  feFuncG(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEFuncGElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEFuncGElement>('feFuncG'),
      init,
      this
    )
  }
  feFuncR(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEFuncRElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEFuncRElement>('feFuncR'),
      init,
      this
    )
  }
  feGaussianBlur(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEGaussianBlurElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEGaussianBlurElement>(
        'feGaussianBlur'
      ),
      init,
      this
    )
  }
  feImage(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEImageElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEImageElement>('feImage'),
      init,
      this
    )
  }
  feMerge(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEMergeElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEMergeElement>('feMerge'),
      init,
      this
    )
  }
  feMergeNode(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEMergeNodeElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEMergeNodeElement>(
        'feMergeNode'
      ),
      init,
      this
    )
  }
  feMorphology(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEMorphologyElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEMorphologyElement>(
        'feMorphology'
      ),
      init,
      this
    )
  }
  feOffset(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEOffsetElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEOffsetElement>(
        'feOffset'
      ),
      init,
      this
    )
  }
  fePointLight(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFEPointLightElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFEPointLightElement>(
        'fePointLight'
      ),
      init,
      this
    )
  }
  feSpecularLighting(
    // TODO
    init?: (
      builder: SVGElementBuilder<
        State,
        Action,
        Query,
        SVGFESpecularLightingElement
      >
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFESpecularLightingElement>(
        'feSpecularLighting'
      ),
      init,
      this
    )
  }
  feSpotLight(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFESpotLightElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFESpotLightElement>(
        'feSpotLight'
      ),
      init,
      this
    )
  }
  feTile(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFETileElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFETileElement>('feTile'),
      init,
      this
    )
  }
  feTurbulence(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFETurbulenceElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFETurbulenceElement>(
        'feTurbulence'
      ),
      init,
      this
    )
  }
  filter(
    // TODO https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGFilterElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGFilterElement>('filter'),
      init,
      this
    )
  }
  foreignObject(
    // TODO https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGForeignObjectElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGForeignObjectElement>(
        'foreignObject'
      ),
      init,
      this
    )
  }
  g(
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGGElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGGElement>('g'),
      init,
      this
    )
  }
  image(
    // TODO https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGImageElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGImageElement>('image'),
      init,
      this
    )
  }
  line(
    // TODO https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGLineElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGLineElement>('line'),
      init,
      this
    )
  }
  linearGradient(
    // TODO https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGLinearGradientElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGLinearGradientElement>(
        'linearGradient'
      ),
      init,
      this
    )
  }
  marker(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGMarkerElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGMarkerElement>('marker'),
      init,
      this
    )
  }
  mask(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGMaskElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGMaskElement>('mask'),
      init,
      this
    )
  }
  metadata(
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGMetadataElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGMetadataElement>(
        'metadata'
      ),
      init,
      this
    )
  }
  path(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGPathElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGPathElement>('path'),
      init,
      this
    )
  }
  pattern(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGPatternElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGPatternElement>('pattern'),
      init,
      this
    )
  }
  polygon(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGPolygonElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGPolygonElement>('polygon'),
      init,
      this
    )
  }
  polyline(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGPolylineElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGPolylineElement>(
        'polyline'
      ),
      init,
      this
    )
  }
  radialGradient(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGRadialGradientElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGRadialGradientElement>(
        'radialGradient'
      ),
      init,
      this
    )
  }
  rect(
    init?: (builder: SVGRectElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGRectElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  script(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGScriptElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGScriptElement>('script'),
      init,
      this
    )
  }
  stop(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGStopElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGStopElement>('stop'),
      init,
      this
    )
  }
  styleEl(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGStyleElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGStyleElement>('style'),
      init,
      this
    )
  }
  svg(
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGSVGElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGSVGElement>('svg'),
      init,
      this
    )
  }
  switchEl(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGSwitchElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGSwitchElement>('switchEl'),
      init,
      this
    )
  }
  symbol(
    // TODO https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGSymbolElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGSymbolElement>('symbol'),
      init,
      this
    )
  }
  text(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGTextElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGTextElement>('text'),
      init,
      this
    )
  }
  textPath(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGTextPathElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGTextPathElement>(
        'textPath'
      ),
      init,
      this
    )
  }
  title(
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGTitleElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGTitleElement>('title'),
      init,
      this
    )
  }
  tspan(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGTSpanElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGTSpanElement>('tspan'),
      init,
      this
    )
  }
  use(
    // TODO
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGUseElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGUseElement>('use'),
      init,
      this
    )
  }
  view(
    // TODO https://developer.mozilla.org/en-US/docs/Web/SVG/Element/view
    init?: (
      builder: SVGElementBuilder<State, Action, Query, SVGViewElement>
    ) => void
  ): this {
    return initBuilder(
      new SVGElementBuilder<State, Action, Query, SVGViewElement>('view'),
      init,
      this
    )
  }
}

// dom generic
export function svgEl<State, Action, Query, El extends SVGElement = SVGElement>(
  tagName: string
) {
  return new SVGElementBuilder<State, Action, Query, El>(tagName)
}

export class SVGElementBuilder<State, Action, Query, El extends SVGElement>
  extends BaseSVGBuilder<State, Action, Query>
  implements IBuilder<State, Action, Query> {
  private _attributes: Record<string, DerivedOrLiteralValue<State, string>> = {}
  private _styles: Record<string, DerivedOrLiteralValue<State, string>> = {}
  private _handlers: Record<string, EventHandler<State, Action>> = {}
  private _lifecycle: MakeLifecycle<State, Action> | undefined
  private _respond:
    | ((query: Query, el: El, ctx: DOMContext<Action>) => void)
    | undefined

  constructor(public tagName: string) {
    super()
  }

  build(): DOMElement<State, Action, Query> {
    return new DOMElement<State, Action, Query>(
      makeCreateElementNS(SVG_NS, this.tagName),
      extractLiterals(this._attributes),
      extractDerived(this._attributes),
      extractLiterals(this._styles),
      extractDerived(this._styles),
      keys(this._handlers).map(name => ({
        name,
        callback: this._handlers[name]
      })),
      this._lifecycle ?? makeEmptyLifecycle,
      (this._respond as (
        query: Query,
        el: any,
        ctx: DOMContext<Action>
      ) => {}) ?? ((query: Query, el: any, ctx: DOMContext<Action>) => {}), // TODO better typing required
      this._children
    )
  }

  // attributes, styles and handlers
  attr(name: string, value: Attribute<State, string>): this {
    if (value != null) {
      this._attributes[name] = value as DerivedOrLiteralValue<State, string>
    }
    return this
  }
  style(name: string, value: Attribute<State, string>): this {
    if (value != null) {
      this._styles[name] = value as DerivedOrLiteralValue<State, string>
    }
    return this
  }
  handle(name: string, callback: EventHandler<State, Action> | undefined) {
    if (callback != null) {
      this._handlers[name] = callback
    }
    return this
  }
  lifecycle(makeLifecycle: MakeLifecycle<State, Action>): this {
    this._lifecycle = makeLifecycle
    return this
  }
  respond(
    response: (query: Query, el: El, ctx: DOMContext<Action>) => void
  ): this {
    this._respond = response
    return this
  }

  // attribute shortcuts
  aria(name: string, value: Attribute<State, string>) {
    return this.attr(`aria-${name}`, value)
  }
  class(value: Attribute<State, ListValue<string>>) {
    return this.attr('class', mapAttribute(value, spaceSeparatedToString))
  }
  data(name: string, value: Attribute<State, string>) {
    return this.attr(`data-${name}`, value)
  }
  id(value: Attribute<State, string>) {
    return this.attr('id', value)
  }
  styles(value: Attribute<State, string | Record<string, string>>) {
    return this.attr('style', mapAttribute(value, stylesToString))
  }
  tabIndex(value: Attribute<State, number>) {
    return this.attr('tabindex', mapAttribute(value, String))
  }

  // presentation attributes // TODO
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-path
  // clip-path, clip-rule, color, color-interpolation, color-rendering, cursor, display,
  fill(value: Attribute<State, string>) {
    return this.attr('fill', value)
  }
  fillOpacity(value: Attribute<State, number | string>): this {
    return this.attr('fill-opacity', mapAttribute(value, String))
  }
  fillRule(value: Attribute<State, 'nonzero' | 'evenodd'>): this {
    return this.attr('fill-rule', value)
  }
  // filter, mask, opacity, pointer-events, shape-rendering,
  stroke(value: Attribute<State, string>) {
    return this.attr('stroke', value)
  }
  // stroke-dasharray, stroke-dashoffset, stroke-linecap, stroke-linejoin, stroke-miterlimit, stroke-opacity
  strokeWidth(value: Attribute<State, number | string>): this {
    return this.attr('stroke-width', mapAttribute(value, String))
  }
  // transform, vector-effect, visibility

  // aria
  ariaActiveDescendant(value: Attribute<State, string>) {
    return this.attr('aria-activedescendant', value)
  }
  ariaAtomic(value: Attribute<State, boolean>) {
    return this.attr('aria-atomic', mapAttribute(value, booleanToString))
  }
  ariaAutocomplete(
    value: Attribute<State, 'inline' | 'list' | 'both' | 'none'>
  ) {
    return this.attr('aria-autocomplete', value)
  }
  ariaBusy(value: Attribute<State, boolean>) {
    return this.attr('aria-busy', mapAttribute(value, booleanToString))
  }
  ariaChecked(
    value: Attribute<State, 'true' | 'false' | 'mixed' | true | false>
  ) {
    return this.attr(
      'aria-checked',
      mapAttribute(value, v =>
        v === true ? 'true' : v === false ? 'false' : v
      )
    )
  }
  ariaColCount(value: Attribute<State, number>) {
    return this.attr('aria-colcount', mapAttribute(value, String))
  }
  ariaColIndex(value: Attribute<State, number>) {
    return this.attr('aria-colindex', mapAttribute(value, String))
  }
  ariaColSpan(value: Attribute<State, number>) {
    return this.attr('aria-colspan', mapAttribute(value, String))
  }
  ariaControls(value: Attribute<State, string>) {
    return this.attr('aria-controls', value)
  }
  ariaCurrent(
    value: Attribute<
      State,
      | 'page'
      | 'step'
      | 'location'
      | 'date'
      | 'time'
      | 'true'
      | 'false'
      | true
      | false
    >
  ) {
    return this.attr(
      'aria-current',
      mapAttribute(value, v =>
        v === true ? 'true' : v === false ? 'false' : v
      )
    )
  }
  ariaDescribedBy(value: Attribute<State, string>) {
    return this.attr('aria-describedby', value)
  }
  ariaDetails(value: Attribute<State, string>) {
    return this.attr('aria-details', value)
  }
  ariaDisabled(value: Attribute<State, boolean>) {
    return this.attr('aria-disabled', mapAttribute(value, booleanToString))
  }
  ariaDropEffect(
    value: Attribute<
      State,
      'copy' | 'execute' | 'link' | 'move' | 'none' | 'popup'
    >
  ) {
    return this.attr('aria-dropeffect', value)
  }
  ariaErrorMessage(
    value: Attribute<
      State,
      'grammar' | 'false' | false | 'spelling' | 'true' | true
    >
  ) {
    return this.attr(
      'aria-errormessage',
      mapAttribute(value, v =>
        v === true ? 'true' : v === false ? 'false' : v
      )
    )
  }
  ariaExpanded(value: Attribute<State, boolean>) {
    return this.attr('aria-expanded', mapAttribute(value, booleanToString))
  }
  ariaFlowTo(value: Attribute<State, string>) {
    return this.attr('aria-flowto', value)
  }
  ariaGrabbed(value: Attribute<State, boolean>) {
    return this.attr('aria-grabbed', mapAttribute(value, booleanToString))
  }
  ariaHasPopup(
    value: Attribute<
      State,
      | 'true'
      | 'false'
      | 'menu'
      | 'listbox'
      | 'tree'
      | 'grid'
      | 'dialog'
      | true
      | false
    >
  ) {
    return this.attr(
      'aria-haspopup',
      mapAttribute(value, v =>
        v === true ? 'true' : v === false ? 'false' : v
      )
    )
  }
  ariaHidden(value: Attribute<State, boolean>) {
    return this.attr('aria-hidden', mapAttribute(value, booleanToString))
  }
  ariaInvalid(value: Attribute<State, string>) {
    return this.attr('aria-invalid', value)
  }
  ariaKeyShortcuts(value: Attribute<State, string>) {
    return this.attr('aria-keyshortcuts', value)
  }
  ariaLabel(value: Attribute<State, string>) {
    return this.attr('aria-label', value)
  }
  ariaLabelledBy(value: Attribute<State, string>) {
    return this.attr('aria-labelledby', value)
  }
  ariaLevel(value: Attribute<State, number>) {
    return this.attr('aria-level', mapAttribute(value, String))
  }
  ariaLive(value: Attribute<State, 'assertive' | 'off' | 'polite'>) {
    return this.attr('aria-live', value)
  }
  ariaModal(value: Attribute<State, boolean>) {
    return this.attr('aria-modal', mapAttribute(value, booleanToString))
  }
  ariaMultiLine(value: Attribute<State, boolean>) {
    return this.attr('aria-multiline', mapAttribute(value, booleanToString))
  }
  ariaMultiSelectable(value: Attribute<State, boolean>) {
    return this.attr(
      'aria-multiselectable',
      mapAttribute(value, booleanToString)
    )
  }
  ariaOrientation(value: Attribute<State, 'horizontal' | 'vertical'>) {
    return this.attr('aria-orientation', value)
  }
  ariaOwns(value: Attribute<State, string>) {
    return this.attr('aria-owns', value)
  }
  ariaPlaceHolder(value: Attribute<State, string>) {
    return this.attr('aria-placeholder', value)
  }
  ariaPointSet(value: Attribute<State, number>) {
    return this.attr('aria-pointset', mapAttribute(value, String))
  }
  ariaPosInSet(value: Attribute<State, string>) {
    return this.attr('aria-posinset', value)
  }
  ariaPressed(
    value: Attribute<State, 'true' | 'false' | 'mixed' | true | false>
  ) {
    return this.attr(
      'aria-pressed',
      mapAttribute(value, v =>
        v === true ? 'true' : v === false ? 'false' : v
      )
    )
  }
  ariaReadonly(value: Attribute<State, boolean>) {
    return this.attr('aria-readonly', mapAttribute(value, booleanToString))
  }
  ariaRequired(value: Attribute<State, boolean>) {
    return this.attr('aria-required', mapAttribute(value, booleanToString))
  }
  ariaRelevant(
    value: Attribute<
      State,
      'addition' | 'additions text' | 'all' | 'removals' | 'text'
    >
  ) {
    return this.attr('aria-relevant', value)
  }
  ariaRoleDescription(value: Attribute<State, string>) {
    return this.attr('aria-roledescription', value)
  }
  ariaRowCount(value: Attribute<State, number>) {
    return this.attr('aria-rowcount', mapAttribute(value, String))
  }
  ariaRowIndex(value: Attribute<State, number>) {
    return this.attr('aria-rowindex', mapAttribute(value, String))
  }
  ariaRowSpan(value: Attribute<State, number>) {
    return this.attr('aria-rowspan', mapAttribute(value, String))
  }
  ariaSelected(value: Attribute<State, boolean>) {
    return this.attr('aria-selected', mapAttribute(value, booleanToString))
  }
  ariaSetSize(value: Attribute<State, number>) {
    return this.attr('aria-setsize', mapAttribute(value, String))
  }
  ariaSort(
    value: Attribute<State, 'ascending' | 'descending' | 'none' | 'other'>
  ) {
    return this.attr('aria-sort', value)
  }
  ariaValueMax(value: Attribute<State, number>) {
    return this.attr('aria-valuemax', mapAttribute(value, String))
  }
  ariaValueMin(value: Attribute<State, number>) {
    return this.attr('aria-valuemin', mapAttribute(value, String))
  }
  ariaValueNow(value: Attribute<State, number>) {
    return this.attr('aria-valuenow', mapAttribute(value, String))
  }
  ariaValueText(value: Attribute<State, string>) {
    return this.attr('aria-valuetext', value)
  }

  // event shortcuts
  onAbort(handler: EventHandlerTE<State, Action, UIEvent, El> | undefined) {
    return this.handle('abort', handler as EventHandler<State, Action>)
  }
  onAutoComplete(
    handler: EventHandlerTE<State, Action, Event, El> | undefined
  ) {
    return this.handle('autocomplete', handler as EventHandler<State, Action>)
  }
  onAutoCompleteError(
    handler: EventHandlerTE<State, Action, Event, El> | undefined
  ) {
    return this.handle(
      'autocompleteerror',
      handler as EventHandler<State, Action>
    )
  }
  onBlur(handler: EventHandlerTE<State, Action, FocusEvent, El> | undefined) {
    return this.handle('blur', handler as EventHandler<State, Action>)
  }
  onCancel(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('cancel', handler as EventHandler<State, Action>)
  }
  onChange(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('change', handler as EventHandler<State, Action>)
  }
  onClick(handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined) {
    return this.handle('click', handler as EventHandler<State, Action>)
  }
  onCompositionEnd(
    handler: EventHandlerTE<State, Action, CompositionEvent, El> | undefined
  ) {
    return this.handle('compositionend', handler as EventHandler<State, Action>)
  }
  onCompositionStart(
    handler: EventHandlerTE<State, Action, CompositionEvent, El> | undefined
  ) {
    return this.handle(
      'compositionstart',
      handler as EventHandler<State, Action>
    )
  }
  onCompositionUpdate(
    handler: EventHandlerTE<State, Action, CompositionEvent, El> | undefined
  ) {
    return this.handle(
      'compositionupdate',
      handler as EventHandler<State, Action>
    )
  }
  onContextMenu(
    handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined
  ) {
    return this.handle('contextmenu', handler as EventHandler<State, Action>)
  }
  onDblClick(
    handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined
  ) {
    return this.handle('dblclick', handler as EventHandler<State, Action>)
  }
  onDrag(handler: EventHandlerTE<State, Action, DragEvent, El> | undefined) {
    return this.handle('drag', handler as EventHandler<State, Action>)
  }
  onDragEnd(handler: EventHandlerTE<State, Action, DragEvent, El> | undefined) {
    return this.handle('dragend', handler as EventHandler<State, Action>)
  }
  onDragEnter(
    handler: EventHandlerTE<State, Action, DragEvent, El> | undefined
  ) {
    return this.handle('dragenter', handler as EventHandler<State, Action>)
  }
  onDragExit(
    handler: EventHandlerTE<State, Action, DragEvent, El> | undefined
  ) {
    return this.handle('dragexit', handler as EventHandler<State, Action>)
  }
  onDragLeave(
    handler: EventHandlerTE<State, Action, DragEvent, El> | undefined
  ) {
    return this.handle('dragleave', handler as EventHandler<State, Action>)
  }
  onDragOver(
    handler: EventHandlerTE<State, Action, DragEvent, El> | undefined
  ) {
    return this.handle('dragover', handler as EventHandler<State, Action>)
  }
  onDragStart(
    handler: EventHandlerTE<State, Action, DragEvent, El> | undefined
  ) {
    return this.handle('dragstart', handler as EventHandler<State, Action>)
  }
  onDrop(handler: EventHandlerTE<State, Action, DragEvent, El> | undefined) {
    return this.handle('drop', handler as EventHandler<State, Action>)
  }
  onError(handler: EventHandlerTE<State, Action, UIEvent, El> | undefined) {
    return this.handle('error', handler as EventHandler<State, Action>)
  }
  onFocus(handler: EventHandlerTE<State, Action, FocusEvent, El> | undefined) {
    return this.handle('focus', handler as EventHandler<State, Action>)
  }
  onFocusIn(
    handler: EventHandlerTE<State, Action, FocusEvent, El> | undefined
  ) {
    return this.handle('focusin', handler as EventHandler<State, Action>)
  }
  onFocusOut(
    handler: EventHandlerTE<State, Action, FocusEvent, El> | undefined
  ) {
    return this.handle('focusout', handler as EventHandler<State, Action>)
  }
  onInput(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('input', handler as EventHandler<State, Action>)
  }
  onInvalid(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('invalid', handler as EventHandler<State, Action>)
  }
  onKeyDown(
    handler: EventHandlerTE<State, Action, KeyboardEvent, El> | undefined
  ) {
    return this.handle('keydown', handler as EventHandler<State, Action>)
  }
  onKeyUp(
    handler: EventHandlerTE<State, Action, KeyboardEvent, El> | undefined
  ) {
    return this.handle('keyup', handler as EventHandler<State, Action>)
  }
  onLoad(handler: EventHandlerTE<State, Action, UIEvent, El> | undefined) {
    return this.handle('load', handler as EventHandler<State, Action>)
  }
  onMouseDown(
    handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined
  ) {
    return this.handle('mousedown', handler as EventHandler<State, Action>)
  }
  onMouseEnter(
    handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined
  ) {
    return this.handle('mouseenter', handler as EventHandler<State, Action>)
  }
  onMouseLeave(
    handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined
  ) {
    return this.handle('mouseleave', handler as EventHandler<State, Action>)
  }
  onMouseMove(
    handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined
  ) {
    return this.handle('mousemove', handler as EventHandler<State, Action>)
  }
  onMouseOut(
    handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined
  ) {
    return this.handle('mouseout', handler as EventHandler<State, Action>)
  }
  onMouseOver(
    handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined
  ) {
    return this.handle('mouseover', handler as EventHandler<State, Action>)
  }
  onMouseUp(
    handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined
  ) {
    return this.handle('mouseup', handler as EventHandler<State, Action>)
  }
  onReset(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('reset', handler as EventHandler<State, Action>)
  }
  onScroll(handler: EventHandlerTE<State, Action, UIEvent, El> | undefined) {
    return this.handle('scroll', handler as EventHandler<State, Action>)
  }
  onSelect(handler: EventHandlerTE<State, Action, UIEvent, El> | undefined) {
    return this.handle('select', handler as EventHandler<State, Action>)
  }
  onShow(handler: EventHandlerTE<State, Action, MouseEvent, El> | undefined) {
    return this.handle('show', handler as EventHandler<State, Action>)
  }
  onSubmit(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('submit', handler as EventHandler<State, Action>)
  }
  onTouchCancel(
    handler: EventHandlerTE<State, Action, TouchEvent, El> | undefined
  ) {
    return this.handle('touchcancel', handler as EventHandler<State, Action>)
  }
  onTouchEnd(
    handler: EventHandlerTE<State, Action, TouchEvent, El> | undefined
  ) {
    return this.handle('touchend', handler as EventHandler<State, Action>)
  }
  onTouchMove(
    handler: EventHandlerTE<State, Action, TouchEvent, El> | undefined
  ) {
    return this.handle('touchmove', handler as EventHandler<State, Action>)
  }
  onTouchStart(
    handler: EventHandlerTE<State, Action, TouchEvent, El> | undefined
  ) {
    return this.handle('touchstart', handler as EventHandler<State, Action>)
  }
  onWheel(handler: EventHandlerTE<State, Action, WheelEvent, El> | undefined) {
    return this.handle('wheel', handler as EventHandler<State, Action>)
  }
}

export class SVGGraphicsElementBuilder<
  State,
  Action,
  Query,
  El extends SVGGraphicsElement
> extends SVGElementBuilder<State, Action, Query, El> {}

export class SVGSVGElementBuilder<
  State,
  Action,
  Query
> extends SVGGraphicsElementBuilder<State, Action, Query, SVGSVGElement> {
  constructor() {
    super('svg')
  }
  height(value: Attribute<State, number | string>): this {
    return this.attr('height', mapAttribute(value, String))
  }
  preserveAspectRatio(value: Attribute<State, string>): this {
    return this.attr('preserveAspectRatio', value)
  }
  viewBox(value: Attribute<State, string>) {
    return this.attr('viewBox', value)
  }
  width(value: Attribute<State, number | string>): this {
    return this.attr('width', mapAttribute(value, String))
  }
  x(value: Attribute<State, number | string>): this {
    return this.attr('x', mapAttribute(value, String))
  }
  y(value: Attribute<State, number | string>): this {
    return this.attr('y', mapAttribute(value, String))
  }
}

export class ComponentSVGBuilder<State, Action, Query>
  extends BaseSVGBuilder<State, Action, Query>
  implements IBuilder<State, Action, Query> {
  public delayed = false
  public equals: (a: State, b: State) => boolean = (a, b) => a === b
  constructor(readonly reducer: (state: State, action: Action) => State) {
    super()
  }
  build() {
    return new ComponentTemplate<State, Action, Query>(
      this.delayed,
      this.reducer,
      this.equals,
      this._children
    )
  }
}

export class FragmentSVGBuilder<State, Action, Query>
  extends BaseSVGBuilder<State, Action, Query>
  implements IBuilder<State, Action, Query> {
  build() {
    return new FragmentSVGTemplate<State, Action, Query>(this._children)
  }
}

export class MapActionSVGBuilder<State, Action, ActionB, Query>
  extends BaseSVGBuilder<State, ActionB, Query>
  implements IBuilder<State, Action, Query> {
  constructor(protected map: DerivedValue<ActionB, Action>) {
    super()
  }
  build() {
    return new MapActionTemplate<State, Action, ActionB, Query>(
      this.map,
      this._children
    )
  }
}

export class MapQuerySVGBuilder<State, Action, Query, QueryB>
  extends BaseSVGBuilder<State, Action, QueryB>
  implements IBuilder<State, Action, Query> {
  constructor(protected map: DerivedValue<Query, QueryB>) {
    super()
  }
  build() {
    return new MapQueryTemplate<State, Action, Query, QueryB>(
      this.map,
      this._children
    )
  }
}

export class MapStateSVGBuilder<State, StateB, Action, Query>
  extends BaseSVGBuilder<StateB, Action, Query>
  implements IBuilder<State, Action, Query> {
  public orElse:
    | DOMChild<State, Action, Query>
    | IBuilder<State, Action, Query>
    | undefined
  public equals: (a: StateB, b: StateB) => boolean = (a, b) => a === b
  constructor(protected map: Attribute<State, StateB>) {
    super()
  }
  build() {
    return new MapStateTemplate<State, StateB, Action, Query>(
      this.map,
      childOrBuilderToTemplate(this.orElse),
      this.equals,
      this._children
    )
  }
}

export class PortalSVGBuilder<State, Action, Query>
  extends BaseSVGBuilder<State, Action, Query>
  implements IBuilder<State, Action, Query> {
  constructor(readonly appendChild: (doc: Document, node: Node) => void) {
    super()
  }
  build() {
    return new PortalTemplate<State, Action, Query>(
      this.appendChild,
      this._children
    )
  }
}

export class SimpleComponentSVGBuilder<State, Query>
  extends BaseSVGBuilder<State, State, Query>
  implements IBuilder<State, State, Query> {
  public delayed = false
  constructor() {
    super()
  }
  build() {
    return new SimpleComponentTemplate<State, Query>(
      this.delayed,
      this._children
    )
  }
}

export class UntilSVGBuilder<State, StateB, Action, Query>
  extends BaseSVGBuilder<StateB, Action, Query>
  implements IBuilder<State, Action, Query> {
  constructor(
    readonly next: DerivedOrLiteralValue<
      { state: State; index: number },
      StateB
    >
  ) {
    super()
  }
  build() {
    return new UntilTemplate<State, StateB, Action, Query>(
      this.next,
      this._children
    )
  }
}

function initBuilder<
  T extends IBuilder<any, any, any>,
  P extends BaseSVGBuilder<any, any, any>
>(builder: T, init: undefined | ((builder: T) => void), parent: P): P {
  init && init(builder)
  return parent.append(builder.build())
}

export class SVGAnchorElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGAElement> {
  constructor() {
    super('a')
  }
  // download(filename: Attribute<State, string>): this {
  //   return this.attr('download', filename)
  // }
  href(url: Attribute<State, string>): this {
    return this.attr('href', url)
  }
  hreflang(lang: Attribute<State, string>): this {
    return this.attr('hreflang', lang)
  }
  // ping(url: Attribute<State, ListValue<string>>): this {
  //   return this.attr('ping', mapAttribute(url, spaceSeparatedToString))
  // }
  // rel(value: Attribute<State, ListValue<string>>): this {
  //   return this.attr('rel', mapAttribute(value, spaceSeparatedToString))
  // }
  target(name: Attribute<State, string>): this {
    return this.attr('target', name)
  }
  type(name: Attribute<State, string>): this {
    return this.attr('type', name)
  }
}

export class SVGCircleElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGCircleElement> {
  constructor() {
    super('circle')
  }
  cx(value: Attribute<State, number | string>): this {
    return this.attr('cx', mapAttribute(value, String))
  }
  cy(value: Attribute<State, number | string>): this {
    return this.attr('cy', mapAttribute(value, String))
  }
  r(value: Attribute<State, number | string>): this {
    return this.attr('r', mapAttribute(value, String))
  }
  pathLength(value: Attribute<State, number | string>): this {
    return this.attr('pathLength', mapAttribute(value, String))
  }
}

export class SVGEllipseElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGEllipseElement> {
  constructor() {
    super('ellipse')
  }
  cx(value: Attribute<State, number | string>): this {
    return this.attr('cx', mapAttribute(value, String))
  }
  cy(value: Attribute<State, number | string>): this {
    return this.attr('cy', mapAttribute(value, String))
  }
  rx(value: Attribute<State, number | string>): this {
    return this.attr('rx', mapAttribute(value, String))
  }
  ry(value: Attribute<State, number | string>): this {
    return this.attr('ry', mapAttribute(value, String))
  }
  pathLength(value: Attribute<State, number | string>): this {
    return this.attr('pathLength', mapAttribute(value, String))
  }
}

export type BlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'

export class SVGFEBlendElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEBlendElement> {
  constructor() {
    super('feBlend')
  }
  in1(value: Attribute<State, string>): this {
    return this.attr('in1', value)
  }
  in2(value: Attribute<State, string>): this {
    return this.attr('in2', value)
  }
  mode(value: Attribute<State, BlendMode>): this {
    return this.attr('mode', value)
  }
}

export class SVGRectElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGRectElement> {
  constructor() {
    super('rect')
  }
  x(value: Attribute<State, number | string>): this {
    return this.attr('x', mapAttribute(value, String))
  }
  y(value: Attribute<State, number | string>): this {
    return this.attr('y', mapAttribute(value, String))
  }
  width(value: Attribute<State, number | string>): this {
    return this.attr('width', mapAttribute(value, String))
  }
  height(value: Attribute<State, number | string>): this {
    return this.attr('height', mapAttribute(value, String))
  }
  rx(value: Attribute<State, number | string>): this {
    return this.attr('rx', mapAttribute(value, String))
  }
  ry(value: Attribute<State, number | string>): this {
    return this.attr('ry', mapAttribute(value, String))
  }
  pathLength(value: Attribute<State, number | string>): this {
    return this.attr('pathLength', mapAttribute(value, String))
  }
}
