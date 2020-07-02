import { DOMTemplate, DOMChild } from '../template'
import { ElementBuilder } from './internal'
import { DerivedOrLiteralValue, DerivedValue } from 'tempo-core/lib/value'
import { text } from '../impl/text'
import { el } from '../impl/html'
import {
  AnchorElementBuilder,
  AreaElementBuilder,
  AudioElementBuilder,
  BaseElementBuilder,
  ButtonElementBuilder,
  CanvasElementBuilder,
  childOrBuilderToTemplate,
  ComponentBuilder,
  DataElementBuilder,
  DetailsElementBuilder,
  DialogElementBuilder,
  EmbedElementBuilder,
  FieldSetElementBuilder,
  FormElementBuilder,
  FragmentBuilder,
  HtmlElementBuilder,
  IBuilder,
  IFrameElementBuilder,
  ImageElementBuilder,
  InputElementBuilder,
  LabelElementBuilder,
  LIElementBuilder,
  LinkElementBuilder,
  MapActionBuilder,
  MapElementBuilder,
  MapQueryBuilder,
  MapStateBuilder,
  MetaElementBuilder,
  MeterElementBuilder,
  ModElementBuilder,
  ObjectElementBuilder,
  OListElementBuilder,
  OptGroupElementBuilder,
  OptionElementBuilder,
  OutputElementBuilder,
  ParamElementBuilder,
  PictureElementBuilder,
  PortalBuilder,
  ProgressElementBuilder,
  QuoteElementBuilder,
  ScriptElementBuilder,
  SelectElementBuilder,
  SlotElementBuilder,
  SourceElementBuilder,
  StyleElementBuilder,
  TableColElementBuilder,
  TableDataCellElementBuilder,
  TableHeaderCellElementBuilder,
  TextAreaElementBuilder,
  TimeElementBuilder,
  TrackElementBuilder,
  UntilBuilder,
  VideoElementBuilder
} from './internal'
import { resolveAttribute, Attribute } from '../value'
import { LazyTemplate } from '../impl/lazy'
import { PropagateArg, AdapterTemplate } from '../impl/adapter'
import { ComponentTemplate } from '../impl/component'

function initBuilder<
  T extends ElementBuilder<any, any, any, any>,
  P extends BaseBuilder<any, any, any>
>(builder: T, init: undefined | ((builder: T) => void), parent: P): P {
  init && init(builder)
  return parent.append(builder.build())
}

export class BaseBuilder<State, Action, Query> {
  protected _children: DOMTemplate<State, Action, Query>[] = []
  constructor() {}
  // children
  append(
    el: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  ): this {
    this._children.push(childOrBuilderToTemplate(el))
    return this
  }
  el(
    init: (
      builder: ElementBuilder<State, Action, Query, HTMLElement>
    ) => void = () => {}
  ): this {
    const builder = el<State, Action, Query>(name)
    init(builder)
    this._children.push(builder.build())
    return this
  }
  text(value: DerivedOrLiteralValue<State, string>): this {
    this._children.push(text(value))
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

  component(
    reducer: (state: State, action: Action) => State,
    init: (builder: ComponentBuilder<State, Action, Query>) => void
  ) {
    const builder = new ComponentBuilder<State, Action, Query>(reducer)
    init(builder)
    return this.append(builder.build())
  }

  mapState<StateB>(
    map: (state: State) => StateB | undefined,
    init: (builder: MapStateBuilder<State, StateB, Action, Query>) => void
  ) {
    const builder = new MapStateBuilder<State, StateB, Action, Query>(map)
    init(builder)
    return this.append(builder.build())
  }

  mapField<Key extends keyof State>(
    field: Key,
    init: (builder: MapStateBuilder<State, State[Key], Action, Query>) => void
  ) {
    return this.mapState<State[Key]>((v: State): State[Key] => v[field], init)
  }

  mapStateAndKeep<StateB>(
    map: (state: State) => StateB | undefined,
    init: (
      builder: MapStateBuilder<State, [StateB, State], Action, Query>
    ) => void
  ) {
    const builder = new MapStateBuilder<State, [StateB, State], Action, Query>(
      (state: State) => {
        const inner = resolveAttribute(map)(state)
        if (inner !== undefined) {
          return [inner, state]
        } else {
          return undefined
        }
      }
    )
    init(builder)
    return this.append(builder.build())
  }

  mapAction<ActionB>(
    map: DerivedValue<ActionB, Action>,
    init: (builder: MapActionBuilder<State, Action, ActionB, Query>) => void
  ) {
    const builder = new MapActionBuilder<State, Action, ActionB, Query>(map)
    init(builder)
    return this.append(builder.build())
  }

  mapQuery<QueryB>(
    map: DerivedValue<Query, QueryB>,
    init: (builder: MapQueryBuilder<State, Action, Query, QueryB>) => void
  ) {
    const builder = new MapQueryBuilder<State, Action, Query, QueryB>(map)
    init(builder)
    return this.append(builder.build())
  }

  lazy(lazyf: () => DOMTemplate<State, Action, Query>) {
    return this.append(new LazyTemplate(lazyf))
  }

  forEach(
    init: (
      builder: UntilBuilder<
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

  fragment(init: (builder: FragmentBuilder<State, Action, Query>) => void) {
    const builder = new FragmentBuilder<State, Action, Query>()
    init(builder)
    return this.append(builder.build())
  }

  iterate<Items extends any[]>(
    map: DerivedValue<State, Items>,
    init: (
      builder: UntilBuilder<
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
      n => {
        n.until<[Items[number], State, number]>(
          ({ state: [items, state], index }) =>
            items[index] && [items[index], state, index],
          init
        )
      }
    )
  }

  portal(
    getParent: (doc: Document) => Element,
    init: (builder: PortalBuilder<State, Action, Query>) => void
  ) {
    const builder = new PortalBuilder<State, Action, Query>(getParent)
    init(builder)
    return this.append(builder.build())
  }

  portalWithSelector(
    selector: string,
    init: (builder: PortalBuilder<State, Action, Query>) => void
  ) {
    return this.portal(doc => {
      const el = doc.querySelector(selector)
      if (!el) {
        throw new Error(`selector doesn't match any element: "${selector}"`)
      }
      return el
    }, init)
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
    init: (builder: MapStateBuilder<State, State, Action, Query>) => void
  ) {
    return this.when(s => !condition(s), init)
  }

  until<StateB>(
    next: DerivedValue<{ state: State; index: number }, StateB>,
    init: (builder: UntilBuilder<State, StateB, Action, Query>) => void
  ) {
    const builder = new UntilBuilder<State, StateB, Action, Query>(next)
    init(builder)
    return this.append(builder.build())
  }

  when(
    condition: DerivedValue<State, boolean>,
    init: (builder: MapStateBuilder<State, State, Action, Query>) => void
  ) {
    const builder = new MapStateBuilder<State, State, Action, Query>(s => {
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
    init?: (builder: AnchorElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new AnchorElementBuilder<State, Action, Query>('a'),
      init,
      this
    )
  }
  abbr(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('abbr'),
      init,
      this
    )
  }
  address(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('address'),
      init,
      this
    )
  }
  area(
    init?: (builder: AreaElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new AreaElementBuilder<State, Action, Query>('area'),
      init,
      this
    )
  }
  article(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('article'),
      init,
      this
    )
  }
  aside(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('aside'),
      init,
      this
    )
  }
  audio(
    init?: (builder: AudioElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new AudioElementBuilder<State, Action, Query>('audio'),
      init,
      this
    )
  }
  b(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('b'),
      init,
      this
    )
  }
  base(
    init?: (builder: BaseElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new BaseElementBuilder<State, Action, Query>('base'),
      init,
      this
    )
  }
  bdi(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('bdi'),
      init,
      this
    )
  }
  bdo(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('bdo'),
      init,
      this
    )
  }
  blockquote(
    init?: (builder: QuoteElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new QuoteElementBuilder<State, Action, Query>('blockquote'),
      init,
      this
    )
  }
  body(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLBodyElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLBodyElement>('body'),
      init,
      this
    )
  }
  br(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLBRElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLBRElement>('br'),
      init,
      this
    )
  }
  button(
    init?: (builder: ButtonElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new ButtonElementBuilder<State, Action, Query>('button'),
      init,
      this
    )
  }
  canvas(
    init?: (builder: CanvasElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new CanvasElementBuilder<State, Action, Query>('canvas'),
      init,
      this
    )
  }
  caption(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLTableCaptionElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLTableCaptionElement>(
        'caption'
      ),
      init,
      this
    )
  }
  cite(
    init?: (builder: QuoteElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new QuoteElementBuilder<State, Action, Query>('cite'),
      init,
      this
    )
  }
  code(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('code'),
      init,
      this
    )
  }
  col(
    init?: (builder: TableColElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new TableColElementBuilder<State, Action, Query>('col'),
      init,
      this
    )
  }
  colgroup(
    init?: (builder: TableColElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new TableColElementBuilder<State, Action, Query>('colgroup'),
      init,
      this
    )
  }
  dataEl(
    init?: (builder: DataElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new DataElementBuilder<State, Action, Query>('data'),
      init,
      this
    )
  }
  datalist(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLDataListElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLDataListElement>('datalist'),
      init,
      this
    )
  }
  dd(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('dd'),
      init,
      this
    )
  }
  del(init?: (builder: ModElementBuilder<State, Action, Query>) => void): this {
    return initBuilder(
      new ModElementBuilder<State, Action, Query>('del'),
      init,
      this
    )
  }
  details(
    init?: (builder: DetailsElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new DetailsElementBuilder<State, Action, Query>('details'),
      init,
      this
    )
  }
  dfn(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('dfn'),
      init,
      this
    )
  }
  dialog(
    init?: (builder: DialogElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new DialogElementBuilder<State, Action, Query>('dialog'),
      init,
      this
    )
  }
  div(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLDivElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLDivElement>('div'),
      init,
      this
    )
  }
  dl(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLDListElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLDListElement>('dl'),
      init,
      this
    )
  }
  dt(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('dt'),
      init,
      this
    )
  }
  em(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('em'),
      init,
      this
    )
  }
  embed(
    init?: (builder: EmbedElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new EmbedElementBuilder<State, Action, Query>('embed'),
      init,
      this
    )
  }
  fieldset(
    init?: (builder: FieldSetElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new FieldSetElementBuilder<State, Action, Query>('fieldset'),
      init,
      this
    )
  }
  figcaption(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('figcaption'),
      init,
      this
    )
  }
  figure(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('figure'),
      init,
      this
    )
  }
  footer(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('footer'),
      init,
      this
    )
  }
  formEl(
    init?: (builder: FormElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new FormElementBuilder<State, Action, Query>('form'),
      init,
      this
    )
  }
  h1(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLHeadingElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLHeadingElement>('h1'),
      init,
      this
    )
  }
  h2(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLHeadingElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLHeadingElement>('h2'),
      init,
      this
    )
  }
  h3(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLHeadingElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLHeadingElement>('h3'),
      init,
      this
    )
  }
  h4(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLHeadingElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLHeadingElement>('h4'),
      init,
      this
    )
  }
  h5(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('h5'),
      init,
      this
    )
  }
  h6(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('h6'),
      init,
      this
    )
  }
  head(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLHeadElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLHeadElement>('head'),
      init,
      this
    )
  }
  header(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('header'),
      init,
      this
    )
  }
  hgroup(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('hgroup'),
      init,
      this
    )
  }
  hr(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLHRElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLHRElement>('hr'),
      init,
      this
    )
  }
  html(
    init?: (builder: HtmlElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HtmlElementBuilder<State, Action, Query>('html'),
      init,
      this
    )
  }
  i(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('i'),
      init,
      this
    )
  }
  iframe(
    init?: (builder: IFrameElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new IFrameElementBuilder<State, Action, Query>('iframe'),
      init,
      this
    )
  }
  img(
    init?: (builder: ImageElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new ImageElementBuilder<State, Action, Query>('img'),
      init,
      this
    )
  }
  input(
    init?: (builder: InputElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new InputElementBuilder<State, Action, Query>('input'),
      init,
      this
    )
  }
  ins(init?: (builder: ModElementBuilder<State, Action, Query>) => void): this {
    return initBuilder(
      new ModElementBuilder<State, Action, Query>('ins'),
      init,
      this
    )
  }
  kbd(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('kbd'),
      init,
      this
    )
  }
  label(
    init?: (builder: LabelElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new LabelElementBuilder<State, Action, Query>('label'),
      init,
      this
    )
  }
  legend(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLLegendElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLLegendElement>('legend'),
      init,
      this
    )
  }
  li(init?: (builder: LIElementBuilder<State, Action, Query>) => void): this {
    return initBuilder(
      new LIElementBuilder<State, Action, Query>('li'),
      init,
      this
    )
  }
  link(
    init?: (builder: LinkElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new LinkElementBuilder<State, Action, Query>('link'),
      init,
      this
    )
  }
  main(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('main'),
      init,
      this
    )
  }
  mapEl(
    init?: (builder: MapElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new MapElementBuilder<State, Action, Query>('map'),
      init,
      this
    )
  }
  mark(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('mark'),
      init,
      this
    )
  }
  meta(
    init?: (builder: MetaElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new MetaElementBuilder<State, Action, Query>('meta'),
      init,
      this
    )
  }
  meter(
    init?: (builder: MeterElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new MeterElementBuilder<State, Action, Query>('meter'),
      init,
      this
    )
  }
  nav(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('nav'),
      init,
      this
    )
  }
  noscript(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('noscript'),
      init,
      this
    )
  }
  object(
    init?: (builder: ObjectElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new ObjectElementBuilder<State, Action, Query>('object'),
      init,
      this
    )
  }
  ol(
    init?: (builder: OListElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new OListElementBuilder<State, Action, Query>('ol'),
      init,
      this
    )
  }
  optgroup(
    init?: (builder: OptGroupElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new OptGroupElementBuilder<State, Action, Query>('optgroup'),
      init,
      this
    )
  }
  option(
    init?: (builder: OptionElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new OptionElementBuilder<State, Action, Query>('option'),
      init,
      this
    )
  }
  output(
    init?: (builder: OutputElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new OutputElementBuilder<State, Action, Query>('output'),
      init,
      this
    )
  }
  p(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLParagraphElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLParagraphElement>('p'),
      init,
      this
    )
  }
  param(
    init?: (builder: ParamElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new ParamElementBuilder<State, Action, Query>('param'),
      init,
      this
    )
  }
  picture(
    init?: (builder: PictureElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new PictureElementBuilder<State, Action, Query>('picture'),
      init,
      this
    )
  }
  pre(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLPreElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLPreElement>('pre'),
      init,
      this
    )
  }
  progress(
    init?: (builder: ProgressElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new ProgressElementBuilder<State, Action, Query>('progress'),
      init,
      this
    )
  }
  q(init?: (builder: QuoteElementBuilder<State, Action, Query>) => void): this {
    return initBuilder(
      new QuoteElementBuilder<State, Action, Query>('q'),
      init,
      this
    )
  }
  rp(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('rp'),
      init,
      this
    )
  }
  rt(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('rt'),
      init,
      this
    )
  }
  ruby(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('ruby'),
      init,
      this
    )
  }
  s(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('s'),
      init,
      this
    )
  }
  samp(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('samp'),
      init,
      this
    )
  }
  script(
    init?: (builder: ScriptElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new ScriptElementBuilder<State, Action, Query>('script'),
      init,
      this
    )
  }
  section(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('section'),
      init,
      this
    )
  }
  select(
    init?: (builder: SelectElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SelectElementBuilder<State, Action, Query>('select'),
      init,
      this
    )
  }
  slotEl(
    init?: (builder: SlotElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SlotElementBuilder<State, Action, Query>('slot'),
      init,
      this
    )
  }
  small(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('small'),
      init,
      this
    )
  }
  source(
    init?: (builder: SourceElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SourceElementBuilder<State, Action, Query>('source'),
      init,
      this
    )
  }
  span(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLSpanElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLSpanElement>('span'),
      init,
      this
    )
  }
  strong(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('strong'),
      init,
      this
    )
  }
  styleEl(
    init?: (builder: StyleElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new StyleElementBuilder<State, Action, Query>('style'),
      init,
      this
    )
  }
  sub(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('sub'),
      init,
      this
    )
  }
  summary(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('summary'),
      init,
      this
    )
  }
  sup(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('sup'),
      init,
      this
    )
  }
  table(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLTableElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLTableElement>('table'),
      init,
      this
    )
  }
  tbody(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLTableSectionElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLTableSectionElement>(
        'tbody'
      ),
      init,
      this
    )
  }
  td(
    init?: (builder: TableDataCellElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new TableDataCellElementBuilder<State, Action, Query>('td'),
      init,
      this
    )
  }
  template(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLTemplateElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLTemplateElement>('template'),
      init,
      this
    )
  }
  textarea(
    init?: (builder: TextAreaElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new TextAreaElementBuilder<State, Action, Query>('textarea'),
      init,
      this
    )
  }
  tfoot(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLTableSectionElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLTableSectionElement>(
        'tfoot'
      ),
      init,
      this
    )
  }
  th(
    init?: (
      builder: TableHeaderCellElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new TableHeaderCellElementBuilder<State, Action, Query>('th'),
      init,
      this
    )
  }
  thead(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('thead'),
      init,
      this
    )
  }
  time(
    init?: (builder: TimeElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new TimeElementBuilder<State, Action, Query>('time'),
      init,
      this
    )
  }
  titleEl(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLTitleElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLTitleElement>('title'),
      init,
      this
    )
  }
  tr(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLTableRowElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLTableRowElement>('tr'),
      init,
      this
    )
  }
  track(
    init?: (builder: TrackElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new TrackElementBuilder<State, Action, Query>('track'),
      init,
      this
    )
  }
  u(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('u'),
      init,
      this
    )
  }
  ul(
    init?: (
      builder: ElementBuilder<State, Action, Query, HTMLUListElement>
    ) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLUListElement>('ul'),
      init,
      this
    )
  }
  varEl(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('varEl'),
      init,
      this
    )
  }
  video(
    init?: (builder: VideoElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new VideoElementBuilder<State, Action, Query>('video'),
      init,
      this
    )
  }
  wbr(
    init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
  ): this {
    return initBuilder(
      new ElementBuilder<State, Action, Query, HTMLElement>('wbr'),
      init,
      this
    )
  }
}
