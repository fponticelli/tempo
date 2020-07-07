import { HoldF, HoldStateTemplate } from './hold_state'
import {
  DOMBuilder,
  IBuilder,
  extractLiterals,
  extractDerived,
  booleanToString,
  ListOrRecordValue,
  listOrRecordToSpaceSeparated,
  stylesToString,
  numbersListToString,
  numberPairsListToString
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
import { text } from './text'

export const SVG_NS = 'http://www.w3.org/2000/svg'

export class BaseSVGBuilder<State, Action, Query> extends DOMBuilder<
  State,
  Action,
  Query
> {
  SvgEl(
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
  Adapter<StateB, ActionB>(props: {
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
    return this.Append(
      new AdapterTemplate(
        props.bootstrapState,
        props.mergeStates,
        props.propagate || (() => undefined),
        props.child
      )
    )
  }

  Component(
    reducer: (state: State, action: Action) => State,
    init: (builder: ComponentSVGBuilder<State, Action, Query>) => void
  ) {
    const builder = new ComponentSVGBuilder<State, Action, Query>(reducer)
    init(builder)
    return this.Append(builder.build())
  }

  LocalAdapter(props: {
    propagate?: (args: PropagateArg<State, State, Action, Action>) => void
    child: ComponentTemplate<State, Action, Query>
  }) {
    return this.Append(
      new AdapterTemplate(
        state => state,
        ({ outerState }) => outerState,
        props.propagate || (() => undefined),
        props.child
      )
    )
  }

  HoldState<StateB, StateC>(
    holdf: HoldF<
      State,
      StateB,
      StateC,
      Action,
      Query,
      FragmentSVGBuilder<StateC, Action, Query>
    >
  ): this {
    return this.Append(
      new HoldStateTemplate(
        holdf,
        new FragmentSVGBuilder<StateC, Action, Query>()
      )
    )
  }

  MapState<StateB>(
    map: (state: State) => StateB | undefined,
    init: (builder: MapStateSVGBuilder<State, StateB, Action, Query>) => void
  ) {
    const builder = new MapStateSVGBuilder<State, StateB, Action, Query>(map)
    init(builder)
    return this.Append(builder.build())
  }

  MapField<Key extends keyof State>(
    field: Key,
    init: (
      builder: MapStateSVGBuilder<State, State[Key], Action, Query>
    ) => void
  ) {
    return this.MapState<State[Key]>((v: State): State[Key] => v[field], init)
  }

  MapStateAndKeep<StateB>(
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
    return this.Append(builder.build())
  }

  MapAction<ActionB>(
    map: DerivedValue<ActionB, Action>,
    init: (builder: MapActionSVGBuilder<State, Action, ActionB, Query>) => void
  ) {
    const builder = new MapActionSVGBuilder<State, Action, ActionB, Query>(map)
    init(builder)
    return this.Append(builder.build())
  }

  MapQuery<QueryB>(
    map: DerivedValue<Query, QueryB>,
    init: (builder: MapQuerySVGBuilder<State, Action, Query, QueryB>) => void
  ) {
    const builder = new MapQuerySVGBuilder<State, Action, Query, QueryB>(map)
    init(builder)
    return this.Append(builder.build())
  }

  MatchBool(props: {
    condition: Attribute<State, boolean>
    true: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
    false: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  }): this {
    return this.Append(
      new MatchBoolTemplate<State, Action, Query>(
        props.condition,
        props.true,
        props.false
      )
    )
  }

  Lazy(
    lazyf: () =>
      | DOMTemplate<State, Action, Query>
      | IBuilder<State, Action, Query>
  ) {
    return this.Append(new LazyTemplate(lazyf))
  }

  ForEach(
    init: (
      builder: UntilSVGBuilder<
        State,
        State extends any[] ? State[number] : never,
        Action,
        Query
      >
    ) => void
  ): this {
    return this.Until(
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

  Fragment(init: (builder: FragmentSVGBuilder<State, Action, Query>) => void) {
    const builder = new FragmentSVGBuilder<State, Action, Query>()
    init(builder)
    return this.Append(builder.build())
  }

  Iterate<Items extends any[]>(
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
    return this.MapState<[Items, State]>(
      (outer: State): [Items, State] | undefined => {
        const items = resolveAttribute(map)(outer)
        return items !== undefined ? [items, outer] : undefined
      },
      $ => {
        $.Until<[Items[number], State, number]>(
          ({ state: [items, state], index }) =>
            items[index] && [items[index], state, index],
          init
        )
      }
    )
  }

  Portal(
    appendChild: (doc: Document, node: Node) => void,
    init: (builder: PortalSVGBuilder<State, Action, Query>) => void
  ): this {
    const builder = new PortalSVGBuilder<State, Action, Query>(appendChild)
    init(builder)
    return this.Append(builder.build())
  }

  PortalWithSelector(
    selector: string,
    init: (builder: PortalSVGBuilder<State, Action, Query>) => void
  ): this {
    return this.Portal((doc, node) => {
      const el = doc.querySelector(selector)
      if (!el) {
        throw new Error(`selector doesn't match any element: "${selector}"`)
      }
      el.appendChild(node)
    }, init)
  }

  HeadPortal(
    init: (builder: PortalSVGBuilder<State, Action, Query>) => void
  ): this {
    return this.Portal((doc, node) => doc.head.appendChild(node), init)
  }

  BodyPortal(
    init: (builder: PortalSVGBuilder<State, Action, Query>) => void
  ): this {
    return this.Portal((doc, node) => doc.body.appendChild(node), init)
  }

  // SimpleComponent(
  //   init: (builder: SimpleComponentBuilder<State, Query>) => void
  // ) {
  //   const builder = new SimpleComponentBuilder<State, Query>()
  //   init(builder)
  //   return this.append(builder.build())
  // }

  Unless(
    condition: DerivedValue<State, boolean>,
    init: (builder: MapStateSVGBuilder<State, State, Action, Query>) => void
  ) {
    return this.When(s => !condition(s), init)
  }

  Until<StateB>(
    next: DerivedValue<{ state: State; index: number }, StateB>,
    init: (builder: UntilSVGBuilder<State, StateB, Action, Query>) => void
  ) {
    const builder = new UntilSVGBuilder<State, StateB, Action, Query>(next)
    init(builder)
    return this.Append(builder.build())
  }

  When(
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
    return this.Append(builder.build())
  }

  // derived children
  A(
    init?: (builder: SVGAnchorElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGAnchorElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  CIRCLE(
    init?: (builder: SVGCircleElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGCircleElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  CLIP_PATH(
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
  DEFS(
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
  DESC(
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
  ELLIPSE(
    init?: (builder: SVGEllipseElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGEllipseElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_BLEND(
    init?: (builder: SVGFEBlendElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEBlendElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_COLOR_MATRIX(
    init?: (
      builder: SVGFEColorMatrixElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFEColorMatrixElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_COMPONENT_TRANSFER(
    init?: (
      builder: SVGFEComponentTransferElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFEComponentTransferElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_COMPOSITE(
    init?: (builder: SVGFeCompositeElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFeCompositeElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_CONVOLVE_MATRIX(
    init?: (
      builder: SVGFEConvolveMatrixElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFEConvolveMatrixElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_DIFFUSE_LIGHTING(
    init?: (
      builder: SVGFEDiffuseLightingElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFEDiffuseLightingElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_DISPLACEMENT_MAP(
    init?: (
      builder: SVGFEDisplacementMapElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFEDisplacementMapElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_DISTANT_LIGHT(
    init?: (
      builder: SVGFEDistantLightElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFEDistantLightElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_FLOOD(
    init?: (builder: SVGFEFloodElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEFloodElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_FUNC_A(
    init?: (builder: SVGFEFuncAElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEFuncAElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_FUNC_B(
    init?: (builder: SVGFEFuncBElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEFuncBElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_FUNC_G(
    init?: (builder: SVGFEFuncGElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEFuncGElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_FUNC_R(
    init?: (builder: SVGFEFuncRElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEFuncRElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_GAUSSIAN_BLUR(
    init?: (
      builder: SVGFEGaussianBlurElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFEGaussianBlurElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_IMAGE(
    init?: (builder: SVGFEImageElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEImageElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_MERGE(
    init?: (builder: SVGFEMergeElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEMergeElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_MERGE_NODE(
    init?: (builder: SVGFEMergeNodeElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEMergeNodeElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_MORPHOLOGY(
    init?: (
      builder: SVGFEMorphologyElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFEMorphologyElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_OFFSET(
    init?: (builder: SVGFEOffsetElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFEOffsetElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_POINT_LIGHT(
    init?: (
      builder: SVGFEPointLightElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFEPointLightElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_SPECULAR_LIGHTING(
    init?: (
      builder: SVGFESpecularLightingElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFESpecularLightingElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_SPOTLIGHT(
    init?: (builder: SVGFESpotLightElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFESpotLightElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_TILE(
    init?: (builder: SVGFETileElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFETileElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FE_TURBULENCE(
    init?: (
      builder: SVGFETurbulenceElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGFETurbulenceElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FILTER(
    init?: (builder: SVGFilterElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGFilterElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  FOREIGN_OBJECT(
    init?: (
      builder: SVGForeignObjectElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGForeignObjectElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  G(init?: (builder: SVGGElementBuilder<State, Action, Query>) => void): this {
    return initBuilder(
      new SVGGElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  IMAGE(
    init?: (builder: SVGImageElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGImageElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  LINE(
    init?: (builder: SVGLineElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGLineElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  LINEAR_GRADIENT(
    init?: (
      builder: SVGLinearGradientElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGLinearGradientElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  MARKER(
    init?: (builder: SVGMarkerElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGMarkerElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  MASK(
    init?: (builder: SVGMaskElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGMaskElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  METADATA(
    init?: (builder: SVGMetadataElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGMetadataElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  PATH(
    init?: (builder: SVGPathElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGPathElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  PATTERN(
    init?: (builder: SVGPatternElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGPatternElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  POLYGON(
    init?: (builder: SVGPolygonElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGPolygonElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  POLYLINE(
    init?: (builder: SVGPolylineElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGPolylineElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  RADIALGRADIENT(
    init?: (
      builder: SVGRadialGradientElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new SVGRadialGradientElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  RECT(
    init?: (builder: SVGRectElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGRectElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  SCRIPT(
    init?: (builder: SVGScriptElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGScriptElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  STOP(
    init?: (builder: SVGStopElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGStopElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  STYLE(
    init?: (builder: SVGStyleElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGStyleElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  SVG(
    init?: (builder: SVGSVGElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGSVGElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  SWITCH(
    init?: (builder: SVGSwitchElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGSwitchElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  SYMBOL(
    init?: (builder: SVGSymbolElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGSymbolElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  TEXT(
    init?: (builder: SVGTextElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGTextElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  TEXT_PATH(
    init?: (builder: SVGTextPathElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGTextPathElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  TITLE(
    init?: (builder: SVGTitleElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGTitleElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  TSPAN(
    init?: (builder: SVGTSpanElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGTSpanElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  USE(
    init?: (builder: SVGUseElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGUseElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  VIEW(
    init?: (builder: SVGViewElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGViewElementBuilder<State, Action, Query>(),
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
  Lifecycle(makeLifecycle: MakeLifecycle<State, Action>): this {
    this._lifecycle = makeLifecycle
    return this
  }
  Respond(
    response: (query: Query, el: El, ctx: DOMContext<Action>) => void
  ): this {
    this._respond = response
    return this
  }

  // attribute shortcuts
  aria(name: string, value: Attribute<State, string>) {
    return this.attr(`aria-${name}`, value)
  }
  class(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr('class', mapAttribute(value, listOrRecordToSpaceSeparated))
  }
  data(name: string, value: Attribute<State, string>) {
    return this.attr(`data-${name}`, value)
  }
  id(value: Attribute<State, string>) {
    return this.attr('id', value)
  }
  lang(value: Attribute<State, string>) {
    return this.attr('lang', value)
  }
  styles(value: Attribute<State, string | Record<string, string>>) {
    return this.attr('style', mapAttribute(value, stylesToString))
  }
  systemLanguage(value: Attribute<State, string>) {
    return this.attr('systemLanguage', value)
  }
  tabIndex(value: Attribute<State, number>) {
    return this.attr('tabindex', mapAttribute(value, String))
  }

  // presentation attributes // TODO
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-path
  alignmentBaseline(
    value: Attribute<
      State,
      | 'baseline'
      | 'text-before-edge'
      | 'middle'
      | 'central'
      | 'text-after-edge'
      | 'ideographic'
      | 'alphabetic'
      | 'hanging'
      | 'mathematical'
      | 'top'
      | 'center'
      | 'bottom'
    >
  ) {
    return this.attr('alignment-baseline', value)
  }
  baselineShift(value: Attribute<State, string>) {
    return this.attr('baseline-shift', value)
  }
  clipPath(value: Attribute<State, string>) {
    return this.attr('clip-path', value)
  }
  clipRule(value: Attribute<State, 'nonzero' | 'evenodd'>) {
    return this.attr('clip-rule', value)
  }
  color(value: Attribute<State, string>) {
    return this.attr('color', value)
  }
  colorInterpolation(value: Attribute<State, 'auto' | 'sRGB' | 'linearRGB'>) {
    return this.attr('color-interpolation', value)
  }
  colorInterpolationFilters(
    value: Attribute<State, 'auto' | 'sRGB' | 'linearRGB'>
  ) {
    return this.attr('color-interpolation-filters', value)
  }
  cursor(value: Attribute<State, string>) {
    return this.attr('cursor', value)
  }
  direction(value: Attribute<State, 'ltr' | 'rtl'>) {
    return this.attr('direction', value)
  }
  display(value: Attribute<State, string>) {
    return this.attr('display', value)
  }
  dominantBaseline(
    value: Attribute<
      State,
      | 'auto'
      | 'text-bottom'
      | 'alphabetic'
      | 'ideographic'
      | 'middle'
      | 'central'
      | 'mathematical'
      | 'hanging'
      | 'text-top'
    >
  ) {
    return this.attr('dominant-baseline', value)
  }

  fill(value: Attribute<State, string>) {
    return this.attr('fill', value)
  }
  fillOpacity(value: Attribute<State, number | string>): this {
    return this.attr('fill-opacity', mapAttribute(value, String))
  }
  fillRule(value: Attribute<State, 'nonzero' | 'evenodd'>): this {
    return this.attr('fill-rule', value)
  }
  filter(value: Attribute<State, ListOrRecordValue<string>>): this {
    return this.attr(
      'filter',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  floodColor(value: Attribute<State, string>) {
    return this.attr('flood-color', value)
  }
  floodOpacity(value: Attribute<State, number | string>): this {
    return this.attr('flood-opacity', mapAttribute(value, String))
  }
  fontFamily(value: Attribute<State, string>) {
    return this.attr('font-family', value)
  }
  fontSize(value: Attribute<State, number | string>): this {
    return this.attr('font-size', mapAttribute(value, String))
  }
  fontSizeAdjust(value: Attribute<State, number | string>): this {
    return this.attr('font-size-adjust', mapAttribute(value, String))
  }
  fontStretch(value: Attribute<State, string>) {
    return this.attr('font-stretch', value)
  }
  fontStyle(value: Attribute<State, 'normal' | 'italic' | 'oblique'>) {
    return this.attr('font-style', value)
  }
  fontVariant(value: Attribute<State, string>) {
    return this.attr('font-variant', value)
  }
  fontWeight(
    value: Attribute<State, number | 'normal' | 'bold' | 'bolder' | 'lighter'>
  ) {
    return this.attr('font-weight', mapAttribute(value, String))
  }
  imageRendering(
    value: Attribute<State, 'auto' | 'optimizeSpeed' | 'optimizeQuality'>
  ) {
    return this.attr('image-rendering', value)
  }
  letterSpacing(value: Attribute<State, number | string>): this {
    return this.attr('letter-spacing', mapAttribute(value, String))
  }
  lightingColor(value: Attribute<State, string>) {
    return this.attr('lighting-color', value)
  }
  markerEnd(value: Attribute<State, string>) {
    return this.attr('marker-end', value)
  }
  markerMid(value: Attribute<State, string>) {
    return this.attr('marker-mid', value)
  }
  markerStart(value: Attribute<State, string>) {
    return this.attr('marker-start', value)
  }
  mask(value: Attribute<State, string>) {
    return this.attr('mask', value)
  }
  opacity(value: Attribute<State, number>) {
    return this.attr('opacity', mapAttribute(value, String))
  }
  overflow(value: Attribute<State, 'visible' | 'hidden' | 'scroll' | 'auto'>) {
    return this.attr('overflow', value)
  }
  pointerEvents(
    value: Attribute<
      State,
      | 'bounding-box'
      | 'visiblePainted'
      | 'visibleFill'
      | 'visibleStroke'
      | 'visible'
      | 'painted'
      | 'fill'
      | 'stroke'
      | 'all'
      | 'none'
    >
  ) {
    return this.attr('pointer-events', value)
  }
  shapeRendering(
    value: Attribute<
      State,
      'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision'
    >
  ) {
    return this.attr('shape-rendering', value)
  }
  stopColor(value: Attribute<State, string>) {
    return this.attr('stop-color', value)
  }
  stopOpacity(value: Attribute<State, number | string>) {
    return this.attr('stop-opacity', mapAttribute(value, String))
  }
  stroke(value: Attribute<State, string>) {
    return this.attr('stroke', value)
  }
  strokeDashArray(value: Attribute<State, string>) {
    return this.attr('stroke-dasharray', value)
  }
  strokeDashoffset(value: Attribute<State, number | string>) {
    return this.attr('stroke-dashoffset', mapAttribute(value, String))
  }
  strokeLineCap(value: Attribute<State, 'butt' | 'round' | 'square'>) {
    return this.attr('stroke-linecap', value)
  }
  strokeLineJoin(
    value: Attribute<State, 'arcs' | 'bevel |miter' | 'miter-clip' | 'round'>
  ) {
    return this.attr('stroke-linejoin', value)
  }
  strokeMiterLimit(value: Attribute<State, number>) {
    return this.attr('stroke-miterlimit', mapAttribute(value, String))
  }
  strokeOpacity(value: Attribute<State, number | string>): this {
    return this.attr('stroke-opacity', mapAttribute(value, String))
  }
  strokeWidth(value: Attribute<State, number | string>): this {
    return this.attr('stroke-width', mapAttribute(value, String))
  }
  textAnchor(value: Attribute<State, 'start' | 'middle' | 'end'>) {
    return this.attr('text-anchor', value)
  }
  textDecoration(value: Attribute<State, string>) {
    return this.attr('text-decoration', value)
  }
  textRendering(
    value: Attribute<
      State,
      'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision'
    >
  ) {
    return this.attr('text-rendering', value)
  }
  transform(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr(
      'transform',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  unicodeBidi(
    value: Attribute<
      State,
      | 'normal'
      | 'embed'
      | 'isolate'
      | 'bidi-override'
      | 'isolate-override'
      | 'plaintext'
    >
  ) {
    return this.attr('unicode-bidi', value)
  }
  vectorEffect(
    value: Attribute<
      State,
      | 'none'
      | 'non-scaling-stroke'
      | 'non-scaling-size'
      | 'non-rotation'
      | 'fixed-position'
    >
  ) {
    return this.attr('vector-effect', value)
  }
  visibility(value: Attribute<State, 'visible' | 'hidden' | 'collapse'>) {
    return this.attr('visibility', value)
  }
  wordSpacing(value: Attribute<State, number | string>) {
    return this.attr('word-spacing', mapAttribute(value, String))
  }
  writingMode(
    value: Attribute<State, 'horizontal-tb' | 'vertical-rl' | 'vertical-lr'>
  ) {
    return this.attr('writing-mode', value)
  }

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

export class ComponentSVGBuilder<State, Action, Query>
  extends BaseSVGBuilder<State, Action, Query>
  implements IBuilder<State, Action, Query> {
  private _delayed = false
  private _equals: undefined | ((a: State, b: State) => boolean)
  constructor(readonly reducer: (state: State, action: Action) => State) {
    super()
  }
  Equals(equals: undefined | ((a: State, b: State) => boolean)) {
    if (equals !== undefined) {
      this._equals = equals
    }
    return this
  }
  Delayed(delayed: undefined | boolean) {
    if (delayed !== undefined) {
      this._delayed = delayed
    }
    return this
  }
  build() {
    return new ComponentTemplate<State, Action, Query>(
      this._delayed,
      this.reducer,
      this._equals,
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
  private _orElse: FragmentSVGBuilder<State, Action, Query> | undefined
  private _equals: undefined | ((a: StateB, b: StateB) => boolean)
  constructor(protected map: Attribute<State, StateB>) {
    super()
  }
  Equals(equals: undefined | ((a: StateB, b: StateB) => boolean)) {
    if (equals !== undefined) {
      this._equals = equals
    }
    return this
  }
  OrElse(init: (builder: FragmentSVGBuilder<State, Action, Query>) => void) {
    this._orElse = new FragmentSVGBuilder<State, Action, Query>()
    init(this._orElse!)
    return this
  }
  build() {
    return new MapStateTemplate<State, StateB, Action, Query>(
      this.map,
      (this._orElse && this._orElse.build()) ?? text(''),
      this._equals,
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
  public _delayed = false
  constructor() {
    super()
  }
  Delayed(delayed: undefined | boolean) {
    if (delayed !== undefined) {
      this._delayed = delayed
    }
    return this
  }
  build() {
    return new SimpleComponentTemplate<State, Query>(
      this._delayed,
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
  return parent.Append(builder.build())
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

export class SVGFEColorMatrixElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEColorMatrixElement> {
  constructor() {
    super('feColorMatrix')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
  type(
    value: Attribute<
      State,
      'matrix' | 'saturate' | 'hueRotate' | 'luminanceToAlpha'
    >
  ): this {
    return this.attr('type', value)
  }
  values(
    value: Attribute<
      State,
      | number
      | [
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number
        ]
    >
  ): this {
    return this.attr(
      'mode',
      mapAttribute(value, v => (Array.isArray(v) ? v.join(' ') : String(v)))
    )
  }
}

export class SVGFEComponentTransferElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEColorMatrixElement> {
  constructor() {
    super('feComponentTransfer')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
}

export class SVGFeCompositeElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEColorMatrixElement> {
  constructor() {
    super('feComposite')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
  in2(value: Attribute<State, string>): this {
    return this.attr('in2', value)
  }
  operator(
    value: Attribute<
      State,
      'over' | 'in' | 'out' | 'atop' | 'xor' | 'lighter' | 'arithmetic'
    >
  ): this {
    return this.attr('operator', value)
  }
  k1(value: Attribute<State, number>): this {
    return this.attr('k1', mapAttribute(value, String))
  }
  k2(value: Attribute<State, number>): this {
    return this.attr('k2', mapAttribute(value, String))
  }
  k3(value: Attribute<State, number>): this {
    return this.attr('k3', mapAttribute(value, String))
  }
  k4(value: Attribute<State, number>): this {
    return this.attr('k4', mapAttribute(value, String))
  }
}

export class SVGFEConvolveMatrixElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEConvolveMatrixElement> {
  constructor() {
    super('feConvolveMatrix')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
  order(value: Attribute<State, number | string>): this {
    return this.attr('order', mapAttribute(value, String))
  }
  kernelMatrix(value: Attribute<State, number[]>): this {
    return this.attr('kernelMatrix', mapAttribute(value, numbersListToString))
  }
  divisor(value: Attribute<State, number>): this {
    return this.attr('divisor', mapAttribute(value, String))
  }
  bias(value: Attribute<State, number>): this {
    return this.attr('bias', mapAttribute(value, String))
  }
  targetX(value: Attribute<State, number>): this {
    return this.attr('targetX', mapAttribute(value, String))
  }
  targetY(value: Attribute<State, number>): this {
    return this.attr('targetY', mapAttribute(value, String))
  }
  edgeMode(value: Attribute<State, 'duplicate' | 'wrap' | 'none'>): this {
    return this.attr('edgeMode', value)
  }
  preserveAlpha(value: Attribute<State, boolean>): this {
    return this.attr('preserveAlpha', mapAttribute(value, booleanToString))
  }
}

export class SVGFEDiffuseLightingElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEColorMatrixElement> {
  constructor() {
    super('feDiffuseLighting')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
  surfaceScale(value: Attribute<State, number>): this {
    return this.attr('surfaceScale', mapAttribute(value, String))
  }
  diffuseConstant(value: Attribute<State, number>): this {
    return this.attr('diffuseConstant', mapAttribute(value, String))
  }
}

export class SVGFEDisplacementMapElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEDisplacementMapElement> {
  constructor() {
    super('feDisplacementMap')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
  in2(value: Attribute<State, string>): this {
    return this.attr('in2', value)
  }
  scale(value: Attribute<State, number>): this {
    return this.attr('scale', mapAttribute(value, String))
  }
  xChannelSelector(value: Attribute<State, 'R' | 'G' | 'B' | 'A'>): this {
    return this.attr('xChannelSelector', value)
  }
  yChannelSelector(value: Attribute<State, 'R' | 'G' | 'B' | 'A'>): this {
    return this.attr('yChannelSelector', value)
  }
}

export class SVGFEDistantLightElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEDistantLightElement> {
  constructor() {
    super('feDistantLight')
  }
  azimuth(value: Attribute<State, number>): this {
    return this.attr('azimuth', mapAttribute(value, String))
  }
  elevation(value: Attribute<State, number>): this {
    return this.attr('elevation', mapAttribute(value, String))
  }
}
export class SVGFEFloodElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEFloodElement> {
  constructor() {
    super('feFlood')
  }
  floodColor(value: Attribute<State, string>): this {
    return this.attr('flood-color', value)
  }
  floodOpacity(value: Attribute<State, number | string>): this {
    return this.attr('flood-opacity', mapAttribute(value, String))
  }
}
export class SVGFEFuncAElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEFuncAElement> {
  constructor() {
    super('feFuncA')
  }
}
export class SVGFEFuncBElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEFuncBElement> {
  constructor() {
    super('feFuncB')
  }
}
export class SVGFEFuncGElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEFuncGElement> {
  constructor() {
    super('feFuncG')
  }
}
export class SVGFEFuncRElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEFuncRElement> {
  constructor() {
    super('feFuncR')
  }
}
export class SVGFEGaussianBlurElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEGaussianBlurElement> {
  constructor() {
    super('feGaussianBlur')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
  stdDeviation(value: Attribute<State, number | string>): this {
    return this.attr('stdDeviation', mapAttribute(value, String))
  }
  edgeMode(value: Attribute<State, 'duplicate' | 'wrap' | 'none'>): this {
    return this.attr('edgeMode', value)
  }
}
export class SVGFEImageElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEImageElement> {
  constructor() {
    super('feImage')
  }
  preserveAspectRatio(value: Attribute<State, string>): this {
    return this.attr('preserveAspectRatio', value)
  }
  href(value: Attribute<State, string>): this {
    return this.attr('href', value)
  }
}
export class SVGFEMergeElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEMergeElement> {
  constructor() {
    super('feMerge')
  }
}
export class SVGFEMergeNodeElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEMergeNodeElement> {
  constructor() {
    super('feMergeNode')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
}
export class SVGFEMorphologyElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEMorphologyElement> {
  constructor() {
    super('feMorphology')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
  operator(
    value: Attribute<
      State,
      'over' | 'in' | 'out' | 'atop' | 'xor' | 'lighter' | 'arithmetic'
    >
  ): this {
    return this.attr('operator', value)
  }
  radius(value: Attribute<State, number | string>): this {
    return this.attr('radius', mapAttribute(value, String))
  }
}
export class SVGFEOffsetElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEOffsetElement> {
  constructor() {
    super('feOffset')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
  dx(value: Attribute<State, number>): this {
    return this.attr('dx', mapAttribute(value, String))
  }
  dy(value: Attribute<State, number>): this {
    return this.attr('dy', mapAttribute(value, String))
  }
}
export class SVGFEPointLightElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFEPointLightElement> {
  constructor() {
    super('fePointLight')
  }
  x(value: Attribute<State, number | string>): this {
    return this.attr('x', mapAttribute(value, String))
  }
  y(value: Attribute<State, number | string>): this {
    return this.attr('y', mapAttribute(value, String))
  }
  z(value: Attribute<State, number | string>): this {
    return this.attr('z', mapAttribute(value, String))
  }
}
export class SVGFESpecularLightingElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<
  State,
  Action,
  Query,
  SVGFESpecularLightingElement
> {
  constructor() {
    super('feSpecularLighting')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
  surfaceScale(value: Attribute<State, number>): this {
    return this.attr('surfaceScale', mapAttribute(value, String))
  }
  specularConstant(value: Attribute<State, number>): this {
    return this.attr('specularConstant', mapAttribute(value, String))
  }
  specularExponent(value: Attribute<State, number>): this {
    return this.attr('specularExponent', mapAttribute(value, String))
  }
}
export class SVGFESpotLightElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFESpotLightElement> {
  constructor() {
    super('feSpotLight')
  }
  x(value: Attribute<State, number | string>): this {
    return this.attr('x', mapAttribute(value, String))
  }
  y(value: Attribute<State, number | string>): this {
    return this.attr('y', mapAttribute(value, String))
  }
  z(value: Attribute<State, number | string>): this {
    return this.attr('z', mapAttribute(value, String))
  }
  pointsAtX(value: Attribute<State, number | string>): this {
    return this.attr('pointsAtX', mapAttribute(value, String))
  }
  pointsAtY(value: Attribute<State, number | string>): this {
    return this.attr('pointsAtY', mapAttribute(value, String))
  }
  pointsAtZ(value: Attribute<State, number | string>): this {
    return this.attr('pointsAtZ', mapAttribute(value, String))
  }
  specularComponent(value: Attribute<State, number | string>): this {
    return this.attr('specularComponent', mapAttribute(value, String))
  }
  limitingConeAngle(value: Attribute<State, number | string>): this {
    return this.attr('limitingConeAngle', mapAttribute(value, String))
  }
}
export class SVGFETileElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFETileElement> {
  constructor() {
    super('feTile')
  }
  in(value: Attribute<State, string>): this {
    return this.attr('in', value)
  }
}
export class SVGFETurbulenceElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFETurbulenceElement> {
  constructor() {
    super('feTurbulence')
  }
  baseFrequency(value: Attribute<State, number | string>): this {
    return this.attr('baseFrequency', mapAttribute(value, String))
  }
  numOctaves(value: Attribute<State, number>): this {
    return this.attr('numOctaves', mapAttribute(value, String))
  }
  seed(value: Attribute<State, number>): this {
    return this.attr('seed', mapAttribute(value, String))
  }
  stitchTiles(value: Attribute<State, 'noStitch' | 'stitch'>): this {
    return this.attr('stitchTiles', value)
  }
  type(value: Attribute<State, 'fractalNoise' | 'turbulence'>): this {
    return this.attr('type', value)
  }
}

export class SVGFilterElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGFilterElement> {
  constructor() {
    super('filter')
  }
  x(value: Attribute<State, number | string>): this {
    return this.attr('x', mapAttribute(value, String))
  }
  y(value: Attribute<State, number | string>): this {
    return this.attr('y', mapAttribute(value, String))
  }
  height(value: Attribute<State, number | string>): this {
    return this.attr('height', mapAttribute(value, String))
  }
  width(value: Attribute<State, number | string>): this {
    return this.attr('width', mapAttribute(value, String))
  }
  filterUnits(
    value: Attribute<State, 'userSpaceOnUse' | 'objectBoundingBox'>
  ): this {
    return this.attr('filterUnits', value)
  }
  primitiveUnits(
    value: Attribute<State, 'userSpaceOnUse' | 'objectBoundingBox'>
  ): this {
    return this.attr('primitiveUnits', value)
  }
  href(value: Attribute<State, string>): this {
    return this.attr('href', value)
  }
}
export class SVGForeignObjectElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGForeignObjectElement> {
  constructor() {
    super('foreignObject')
  }
  x(value: Attribute<State, number | string>): this {
    return this.attr('x', mapAttribute(value, String))
  }
  y(value: Attribute<State, number | string>): this {
    return this.attr('y', mapAttribute(value, String))
  }
  height(value: Attribute<State, number | string>): this {
    return this.attr('height', mapAttribute(value, String))
  }
  width(value: Attribute<State, number | string>): this {
    return this.attr('width', mapAttribute(value, String))
  }
}
export class SVGGElementBuilder<State, Action, Query> extends SVGElementBuilder<
  State,
  Action,
  Query,
  SVGGElement
> {
  constructor() {
    super('g')
  }
}
export class SVGImageElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGImageElement> {
  constructor() {
    super('image')
  }
  x(value: Attribute<State, number | string>): this {
    return this.attr('x', mapAttribute(value, String))
  }
  y(value: Attribute<State, number | string>): this {
    return this.attr('y', mapAttribute(value, String))
  }
  height(value: Attribute<State, number | string>): this {
    return this.attr('height', mapAttribute(value, String))
  }
  width(value: Attribute<State, number | string>): this {
    return this.attr('width', mapAttribute(value, String))
  }
  href(value: Attribute<State, string>): this {
    return this.attr('href', value)
  }
  preserveAspectRatio(value: Attribute<State, string>): this {
    return this.attr('preserveAspectRatio', value)
  }
}
export class SVGLineElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGLineElement> {
  constructor() {
    super('line')
  }
  x1(value: Attribute<State, number | string>): this {
    return this.attr('x1', mapAttribute(value, String))
  }
  y1(value: Attribute<State, number | string>): this {
    return this.attr('y1', mapAttribute(value, String))
  }
  x2(value: Attribute<State, number | string>): this {
    return this.attr('x2', mapAttribute(value, String))
  }
  y2(value: Attribute<State, number | string>): this {
    return this.attr('y2', mapAttribute(value, String))
  }
  pathLength(value: Attribute<State, number | string>): this {
    return this.attr('pathLength', mapAttribute(value, String))
  }
}
export class SVGLinearGradientElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGLinearGradientElement> {
  constructor() {
    super('linearGradient')
  }
  gradientUnits(
    value: Attribute<State, 'userSpaceOnUse' | 'objectBoundingBox'>
  ): this {
    return this.attr('gradientUnits', value)
  }
  gradientTransform(value: Attribute<State, ListOrRecordValue<string>>): this {
    return this.attr(
      'gradientTransform',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  href(value: Attribute<State, string>): this {
    return this.attr('href', value)
  }
  spreadMethod(value: Attribute<State, 'pad' | 'reflect' | 'repeat'>): this {
    return this.attr('spreadMethod', value)
  }
  x1(value: Attribute<State, number | string>): this {
    return this.attr('x1', mapAttribute(value, String))
  }
  y1(value: Attribute<State, number | string>): this {
    return this.attr('y1', mapAttribute(value, String))
  }
  x2(value: Attribute<State, number | string>): this {
    return this.attr('x2', mapAttribute(value, String))
  }
  y2(value: Attribute<State, number | string>): this {
    return this.attr('y2', mapAttribute(value, String))
  }
}
export class SVGMarkerElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGMarkerElement> {
  constructor() {
    super('marker')
  }
  markerHeight(value: Attribute<State, number | string>): this {
    return this.attr('markerHeight', mapAttribute(value, String))
  }
  markerUnits(value: Attribute<State, 'userSpaceOnUse' | 'strokeWidth'>): this {
    return this.attr('markerUnits', value)
  }
  markerWidth(value: Attribute<State, number | string>): this {
    return this.attr('markerWidth', mapAttribute(value, String))
  }
  orient(value: Attribute<State, string>): this {
    return this.attr('orient', value)
  }
  preserveAspectRatio(value: Attribute<State, string>): this {
    return this.attr('preserveAspectRatio', value)
  }
  refX(value: Attribute<State, string>): this {
    return this.attr('refX', value)
  }
  refY(value: Attribute<State, string>): this {
    return this.attr('refY', value)
  }
  viewBox(value: Attribute<State, [number, number, number, number]>): this {
    return this.attr('viewBox', mapAttribute(value, numbersListToString))
  }
}
export class SVGMaskElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGMaskElement> {
  constructor() {
    super('mask')
  }
  height(value: Attribute<State, number | string>): this {
    return this.attr('height', mapAttribute(value, String))
  }
  maskContentUnits(
    value: Attribute<State, 'userSpaceOnUse' | 'objectBoundingBox'>
  ): this {
    return this.attr('maskContentUnits', value)
  }
  maskUnits(
    value: Attribute<State, 'userSpaceOnUse' | 'objectBoundingBox'>
  ): this {
    return this.attr('maskUnits', value)
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
}
export class SVGMetadataElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGMetadataElement> {
  constructor() {
    super('metadata')
  }
}
export class SVGPathElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGPathElement> {
  constructor() {
    super('path')
  }
  d(value: Attribute<State, ListOrRecordValue<string>>): this {
    return this.attr('d', mapAttribute(value, listOrRecordToSpaceSeparated))
  }
  pathLength(value: Attribute<State, number | string>): this {
    return this.attr('pathLength', mapAttribute(value, String))
  }
}
export class SVGPatternElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGPatternElement> {
  constructor() {
    super('pattern')
  }
  height(value: Attribute<State, number | string>): this {
    return this.attr('height', mapAttribute(value, String))
  }
  href(value: Attribute<State, string>): this {
    return this.attr('href', value)
  }
  patternContentUnits(
    value: Attribute<State, 'userSpaceOnUse' | 'objectBoundingBox'>
  ): this {
    return this.attr('patternContentUnits', value)
  }
  patternTransform(value: Attribute<State, ListOrRecordValue<string>>): this {
    return this.attr(
      'patternTransform',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  patternUnits(
    value: Attribute<State, 'userSpaceOnUse' | 'objectBoundingBox'>
  ): this {
    return this.attr('patternUnits', value)
  }
  preserveAspectRatio(value: Attribute<State, string>): this {
    return this.attr('preserveAspectRatio', value)
  }
  viewBox(value: Attribute<State, [number, number, number, number]>): this {
    return this.attr('viewBox', mapAttribute(value, numbersListToString))
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
}
export class SVGPolygonElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGPolygonElement> {
  constructor() {
    super('polygon')
  }
  points(value: Attribute<State, [number, number][]>): this {
    return this.attr('points', mapAttribute(value, numberPairsListToString))
  }
  pathLength(value: Attribute<State, number | string>): this {
    return this.attr('pathLength', mapAttribute(value, String))
  }
}
export class SVGPolylineElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGPolylineElement> {
  constructor() {
    super('polyline')
  }
  points(value: Attribute<State, [number, number][]>): this {
    return this.attr('points', mapAttribute(value, numberPairsListToString))
  }
  pathLength(value: Attribute<State, number | string>): this {
    return this.attr('pathLength', mapAttribute(value, String))
  }
}
export class SVGRadialGradientElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGRadialGradientElement> {
  constructor() {
    super('radialGradient')
  }
  cx(value: Attribute<State, number | string>): this {
    return this.attr('cx', mapAttribute(value, String))
  }
  cy(value: Attribute<State, number | string>): this {
    return this.attr('cy', mapAttribute(value, String))
  }
  fr(value: Attribute<State, number | string>): this {
    return this.attr('fr', mapAttribute(value, String))
  }
  fx(value: Attribute<State, number | string>): this {
    return this.attr('fx', mapAttribute(value, String))
  }
  fy(value: Attribute<State, number | string>): this {
    return this.attr('fy', mapAttribute(value, String))
  }
  gradientUnits(
    value: Attribute<State, 'userSpaceOnUse' | 'objectBoundingBox'>
  ): this {
    return this.attr('gradientUnits', value)
  }
  gradientTransform(value: Attribute<State, ListOrRecordValue<string>>): this {
    return this.attr(
      'gradientTransform',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  href(url: Attribute<State, string>): this {
    return this.attr('href', url)
  }
  r(value: Attribute<State, number | string>): this {
    return this.attr('r', mapAttribute(value, String))
  }
  spreadMethod(value: Attribute<State, 'pad' | 'reflect' | 'repeat'>): this {
    return this.attr('spreadMethod', value)
  }
}
export class SVGScriptElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGScriptElement> {
  constructor() {
    super('script')
  }
  crossorigin(value: Attribute<State, string>): this {
    return this.attr('crossorigin', value)
  }
  href(url: Attribute<State, string>): this {
    return this.attr('href', url)
  }
  type(value: Attribute<State, string>): this {
    return this.attr('type', value)
  }
}
export class SVGStopElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGStopElement> {
  constructor() {
    super('stop')
  }
  offset(value: Attribute<State, number | string>): this {
    return this.attr('offset', mapAttribute(value, String))
  }
  stopColor(value: Attribute<State, string>): this {
    return this.attr('stop-color', value)
  }
  stopOpacity(value: Attribute<State, number>): this {
    return this.attr('stop-opacity', mapAttribute(value, String))
  }
}
export class SVGStyleElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGStyleElement> {
  constructor() {
    super('style')
  }
  type(value: Attribute<State, string>): this {
    return this.attr('type', value)
  }
  media(value: Attribute<State, string>): this {
    return this.attr('media', value)
  }
  title(value: Attribute<State, string>): this {
    return this.attr('title', value)
  }
}
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
  viewBox(value: Attribute<State, [number, number, number, number]>): this {
    return this.attr('viewBox', mapAttribute(value, numbersListToString))
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
export class SVGSwitchElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGSwitchElement> {
  constructor() {
    super('switch')
  }
}
export class SVGSymbolElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGSymbolElement> {
  constructor() {
    super('symbol')
  }
}
export class SVGTextElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGTextElement> {
  constructor() {
    super('text')
  }
  x(value: Attribute<State, number>): this {
    return this.attr('x', mapAttribute(value, String))
  }
  y(value: Attribute<State, number>): this {
    return this.attr('y', mapAttribute(value, String))
  }
  dx(value: Attribute<State, number>): this {
    return this.attr('dx', mapAttribute(value, String))
  }
  dy(value: Attribute<State, number>): this {
    return this.attr('dy', mapAttribute(value, String))
  }
  rotate(value: Attribute<State, number[]>): this {
    return this.attr('rotate', mapAttribute(value, numbersListToString))
  }
  lengthAdjust(value: Attribute<State, 'spacing' | 'spacingAndGlyphs'>): this {
    return this.attr('lengthAdjust', value)
  }
  textLength(value: Attribute<State, number | string>): this {
    return this.attr('textLength', mapAttribute(value, String))
  }
  text(value: DerivedOrLiteralValue<State, string>): this {
    this._children.push(text(value))
    return this
  }
}
export class SVGTextPathElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGTextPathElement> {
  constructor() {
    super('textPath')
  }
  href(url: Attribute<State, string>): this {
    return this.attr('href', url)
  }
  lengthAdjust(value: Attribute<State, 'spacing' | 'spacingAndGlyphs'>): this {
    return this.attr('lengthAdjust', value)
  }
  method(value: Attribute<State, 'align' | 'stretch'>): this {
    return this.attr('method', value)
  }
  path(value: Attribute<State, string>): this {
    return this.attr('path', value)
  }
  side(value: Attribute<State, 'left' | 'right'>): this {
    return this.attr('side', value)
  }
  spacing(value: Attribute<State, 'auto' | 'exact'>): this {
    return this.attr('spacing', value)
  }
  start(value: Attribute<State, number | string>): this {
    return this.attr('start', mapAttribute(value, String))
  }
  offset(value: Attribute<State, number | string>): this {
    return this.attr('offset', mapAttribute(value, String))
  }
  text(value: DerivedOrLiteralValue<State, string>): this {
    this._children.push(text(value))
    return this
  }
  textLength(value: Attribute<State, number | string>): this {
    return this.attr('textLength', mapAttribute(value, String))
  }
}
export class SVGTitleElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGTitleElement> {
  constructor() {
    super('title')
  }
}
export class SVGTSpanElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGTSpanElement> {
  constructor() {
    super('tSpan')
  }
  x(value: Attribute<State, number>): this {
    return this.attr('x', mapAttribute(value, String))
  }
  y(value: Attribute<State, number>): this {
    return this.attr('y', mapAttribute(value, String))
  }
  dx(value: Attribute<State, number>): this {
    return this.attr('dx', mapAttribute(value, String))
  }
  dy(value: Attribute<State, number>): this {
    return this.attr('dy', mapAttribute(value, String))
  }
  rotate(value: Attribute<State, number[]>): this {
    return this.attr('rotate', mapAttribute(value, numbersListToString))
  }
  lengthAdjust(value: Attribute<State, 'spacing' | 'spacingAndGlyphs'>): this {
    return this.attr('lengthAdjust', value)
  }
  textLength(value: Attribute<State, number | string>): this {
    return this.attr('textLength', mapAttribute(value, String))
  }
  text(value: DerivedOrLiteralValue<State, string>): this {
    this._children.push(text(value))
    return this
  }
}
export class SVGUseElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGUseElement> {
  constructor() {
    super('use')
  }
  href(value: Attribute<State, string>): this {
    return this.attr('href', value)
  }
  x(value: Attribute<State, number>): this {
    return this.attr('x', mapAttribute(value, String))
  }
  y(value: Attribute<State, number>): this {
    return this.attr('y', mapAttribute(value, String))
  }
  height(value: Attribute<State, number>): this {
    return this.attr('height', mapAttribute(value, String))
  }
  width(value: Attribute<State, number>): this {
    return this.attr('width', mapAttribute(value, String))
  }
}
export class SVGViewElementBuilder<
  State,
  Action,
  Query
> extends SVGElementBuilder<State, Action, Query, SVGViewElement> {
  constructor() {
    super('view')
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
