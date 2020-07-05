import { DOMTemplate, DOMChild } from '../template'
import { makeCreateElement } from './dom'
import { DerivedOrLiteralValue, DerivedValue } from 'tempo-core/lib/value'
import { text } from './text'
import {
  Attribute,
  mapAttribute,
  EventHandlerTE,
  EventHandler,
  resolveAttribute
} from '../value'
import { ComponentTemplate } from './component'
import { keys } from 'tempo-std/lib/objects'
import { DOMContext } from '../context'
import { makeEmptyLifecycle, MakeLifecycle } from '../lifecycle'
import { DOMElement } from './element'
import { MapStateTemplate } from './map_state'
import { FragmentTemplate } from './fragment'
import { MapActionTemplate } from './map_action'
import { MapQueryTemplate } from './map_query'
import { UntilTemplate } from './until'
import { SimpleComponentTemplate } from './simple_component'
import { PortalTemplate } from './portal'
import { LazyTemplate } from './lazy'
import { MatchBoolTemplate } from './match_bool_template'
import { HoldF, HoldStateTemplate } from './hold_state'
import {
  IBuilder,
  childOrBuilderToTemplate,
  extractLiterals,
  extractDerived,
  ListOrRecordValue,
  listOrRecordToSpaceSeparated,
  toggleToString,
  booleanToString,
  stylesToString,
  lostOrRecordToCommaSeparated,
  DOMBuilder
} from './dom_builder'
import { AdapterTemplate, PropagateArg } from './adapter'
import { SVGSVGElementBuilder } from './svg_builder'

export class BaseHTMLBuilder<State, Action, Query> extends DOMBuilder<
  State,
  Action,
  Query
> {
  el(
    init: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
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

  component(
    reducer: (state: State, action: Action) => State,
    init: (builder: ComponentHTMLBuilder<State, Action, Query>) => void
  ) {
    const builder = new ComponentHTMLBuilder<State, Action, Query>(reducer)
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
      FragmentHTMLBuilder<StateC, Action, Query>
    >
  ): this {
    return this.append(
      new HoldStateTemplate(
        holdf,
        new FragmentHTMLBuilder<StateC, Action, Query>()
      )
    )
  }

  mapState<StateB>(
    map: (state: State) => StateB | undefined,
    init: (builder: MapStateHTMLBuilder<State, StateB, Action, Query>) => void
  ) {
    const builder = new MapStateHTMLBuilder<State, StateB, Action, Query>(map)
    init(builder)
    return this.append(builder.build())
  }

  mapField<Key extends keyof State>(
    field: Key,
    init: (
      builder: MapStateHTMLBuilder<State, State[Key], Action, Query>
    ) => void
  ) {
    return this.mapState<State[Key]>((v: State): State[Key] => v[field], init)
  }

  mapStateAndKeep<StateB>(
    map: (state: State) => StateB | undefined,
    init: (
      builder: MapStateHTMLBuilder<State, [StateB, State], Action, Query>
    ) => void
  ) {
    const builder = new MapStateHTMLBuilder<
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
    init: (builder: MapActionHTMLBuilder<State, Action, ActionB, Query>) => void
  ) {
    const builder = new MapActionHTMLBuilder<State, Action, ActionB, Query>(map)
    init(builder)
    return this.append(builder.build())
  }

  mapQuery<QueryB>(
    map: DerivedValue<Query, QueryB>,
    init: (builder: MapQueryHTMLBuilder<State, Action, Query, QueryB>) => void
  ) {
    const builder = new MapQueryHTMLBuilder<State, Action, Query, QueryB>(map)
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
      builder: UntilHTMLBuilder<
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

  fragment(init: (builder: FragmentHTMLBuilder<State, Action, Query>) => void) {
    const builder = new FragmentHTMLBuilder<State, Action, Query>()
    init(builder)
    return this.append(builder.build())
  }

  iterate<Items extends any[]>(
    map: DerivedValue<State, Items>,
    init: (
      builder: UntilHTMLBuilder<
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
    init: (builder: PortalBuilder<State, Action, Query>) => void
  ): this {
    const builder = new PortalBuilder<State, Action, Query>(appendChild)
    init(builder)
    return this.append(builder.build())
  }

  portalWithSelector(
    selector: string,
    init: (builder: PortalBuilder<State, Action, Query>) => void
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
    init: (builder: PortalBuilder<State, Action, Query>) => void
  ): this {
    return this.portal(doc => doc.head, init)
  }

  bodyPortal(
    init: (builder: PortalBuilder<State, Action, Query>) => void
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
    init: (builder: MapStateHTMLBuilder<State, State, Action, Query>) => void
  ) {
    return this.when(s => !condition(s), init)
  }

  until<StateB>(
    next: DerivedValue<{ state: State; index: number }, StateB>,
    init: (builder: UntilHTMLBuilder<State, StateB, Action, Query>) => void
  ) {
    const builder = new UntilHTMLBuilder<State, StateB, Action, Query>(next)
    init(builder)
    return this.append(builder.build())
  }

  when(
    condition: DerivedValue<State, boolean>,
    init: (builder: MapStateHTMLBuilder<State, State, Action, Query>) => void
  ) {
    const builder = new MapStateHTMLBuilder<State, State, Action, Query>(s => {
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
    init?: (builder: HTMLAnchorElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLAnchorElementBuilder<State, Action, Query>('a'),
      init,
      this
    )
  }
  abbrEl(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('abbr'),
      init,
      this
    )
  }
  address(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('address'),
      init,
      this
    )
  }
  area(
    init?: (builder: HTMLAreaElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLAreaElementBuilder<State, Action, Query>('area'),
      init,
      this
    )
  }
  article(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('article'),
      init,
      this
    )
  }
  aside(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('aside'),
      init,
      this
    )
  }
  audio(
    init?: (builder: HTMLAudioElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLAudioElementBuilder<State, Action, Query>('audio'),
      init,
      this
    )
  }
  b(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('b'),
      init,
      this
    )
  }
  base(
    init?: (builder: HTMLBaseElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLBaseElementBuilder<State, Action, Query>('base'),
      init,
      this
    )
  }
  bdi(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('bdi'),
      init,
      this
    )
  }
  bdo(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('bdo'),
      init,
      this
    )
  }
  blockquote(
    init?: (builder: HTMLQuoteElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLQuoteElementBuilder<State, Action, Query>('blockquote'),
      init,
      this
    )
  }
  body(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLBodyElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLBodyElement>('body'),
      init,
      this
    )
  }
  br(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLBRElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLBRElement>('br'),
      init,
      this
    )
  }
  button(
    init?: (builder: HTMLButtonElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLButtonElementBuilder<State, Action, Query>('button'),
      init,
      this
    )
  }
  canvas(
    init?: (builder: HTMLCanvasElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLCanvasElementBuilder<State, Action, Query>('canvas'),
      init,
      this
    )
  }
  caption(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLTableCaptionElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLTableCaptionElement>(
        'caption'
      ),
      init,
      this
    )
  }
  citeEl(
    init?: (builder: HTMLQuoteElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLQuoteElementBuilder<State, Action, Query>('cite'),
      init,
      this
    )
  }
  code(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('code'),
      init,
      this
    )
  }
  col(
    init?: (builder: HTMLTableColElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLTableColElementBuilder<State, Action, Query>('col'),
      init,
      this
    )
  }
  colgroup(
    init?: (builder: HTMLTableColElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLTableColElementBuilder<State, Action, Query>('colgroup'),
      init,
      this
    )
  }
  dataEl(
    init?: (builder: HTMLDataElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLDataElementBuilder<State, Action, Query>('data'),
      init,
      this
    )
  }
  datalist(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLDataListElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLDataListElement>(
        'datalist'
      ),
      init,
      this
    )
  }
  dd(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('dd'),
      init,
      this
    )
  }
  del(
    init?: (builder: HTMLModElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLModElementBuilder<State, Action, Query>('del'),
      init,
      this
    )
  }
  details(
    init?: (builder: HTMLDetailsElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLDetailsElementBuilder<State, Action, Query>('details'),
      init,
      this
    )
  }
  dfn(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('dfn'),
      init,
      this
    )
  }
  dialog(
    init?: (builder: HTMLDialogElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLDialogElementBuilder<State, Action, Query>('dialog'),
      init,
      this
    )
  }
  div(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLDivElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLDivElement>('div'),
      init,
      this
    )
  }
  dl(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLDListElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLDListElement>('dl'),
      init,
      this
    )
  }
  dt(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('dt'),
      init,
      this
    )
  }
  em(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('em'),
      init,
      this
    )
  }
  embed(
    init?: (builder: HTMLEmbedElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLEmbedElementBuilder<State, Action, Query>('embed'),
      init,
      this
    )
  }
  fieldset(
    init?: (builder: HTMLFieldSetElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLFieldSetElementBuilder<State, Action, Query>('fieldset'),
      init,
      this
    )
  }
  figcaption(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('figcaption'),
      init,
      this
    )
  }
  figure(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('figure'),
      init,
      this
    )
  }
  footer(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('footer'),
      init,
      this
    )
  }
  formEl(
    init?: (builder: HTMLFormElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLFormElementBuilder<State, Action, Query>('form'),
      init,
      this
    )
  }
  h1(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>('h1'),
      init,
      this
    )
  }
  h2(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>('h2'),
      init,
      this
    )
  }
  h3(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>('h3'),
      init,
      this
    )
  }
  h4(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>('h4'),
      init,
      this
    )
  }
  h5(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('h5'),
      init,
      this
    )
  }
  h6(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('h6'),
      init,
      this
    )
  }
  head(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLHeadElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLHeadElement>('head'),
      init,
      this
    )
  }
  header(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('header'),
      init,
      this
    )
  }
  hgroup(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('hgroup'),
      init,
      this
    )
  }
  hr(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLHRElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLHRElement>('hr'),
      init,
      this
    )
  }
  html(
    init?: (builder: HTMLHtmlElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLHtmlElementBuilder<State, Action, Query>('html'),
      init,
      this
    )
  }
  i(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('i'),
      init,
      this
    )
  }
  iframe(
    init?: (builder: HTMLIFrameElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLIFrameElementBuilder<State, Action, Query>('iframe'),
      init,
      this
    )
  }
  img(
    init?: (builder: HTMLImageElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLImageElementBuilder<State, Action, Query>('img'),
      init,
      this
    )
  }
  input(
    init?: (builder: HTMLInputElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLInputElementBuilder<State, Action, Query>('input'),
      init,
      this
    )
  }

  inputButton(
    init?: (builder: HTMLInputElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputElementBuilder<State, Action, Query>('input')
    builder.type('button')
    return initBuilder(builder, init, this)
  }
  inputCheckbox(
    init?: (
      builder: HTMLInputCheckedElementBuilder<State, Action, Query>
    ) => void
  ): this {
    const builder = new HTMLInputCheckedElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('checkbox')
    return initBuilder(builder, init, this)
  }
  inputColor(
    init?: (builder: HTMLInputElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputElementBuilder<State, Action, Query>('input')
    builder.type('color')
    return initBuilder(builder, init, this)
  }
  inputDate(
    init?: (builder: HTMLInputDateElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputDateElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('date')
    return initBuilder(builder, init, this)
  }
  inputDatetimeLocal(
    init?: (builder: HTMLInputDateElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputDateElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('datetime-local')
    return initBuilder(builder, init, this)
  }
  inputEmail(
    init?: (builder: HTMLInputEmailElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputEmailElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('email')
    return initBuilder(builder, init, this)
  }
  inputFile(
    init?: (builder: HTMLInputFileElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputFileElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('file')
    return initBuilder(builder, init, this)
  }
  inputHidden(
    init?: (builder: HTMLInputElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputElementBuilder<State, Action, Query>('input')
    builder.type('hidden')
    return initBuilder(builder, init, this)
  }
  inputImage(
    init?: (builder: HTMLInputImageElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputImageElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('image')
    return initBuilder(builder, init, this)
  }
  inputMonth(
    init?: (builder: HTMLInputDateElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputDateElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('month')
    return initBuilder(builder, init, this)
  }
  inputNumber(
    init?: (
      builder: HTMLInputNumberElementBuilder<State, Action, Query>
    ) => void
  ): this {
    const builder = new HTMLInputNumberElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('number')
    return initBuilder(builder, init, this)
  }
  inputPassword(
    init?: (
      builder: HTMLInputPasswordElementBuilder<State, Action, Query>
    ) => void
  ): this {
    const builder = new HTMLInputPasswordElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('password')
    return initBuilder(builder, init, this)
  }
  inputRadio(
    init?: (
      builder: HTMLInputCheckedElementBuilder<State, Action, Query>
    ) => void
  ): this {
    const builder = new HTMLInputCheckedElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('radio')
    return initBuilder(builder, init, this)
  }
  inputRange(
    init?: (
      builder: HTMLInputNumberElementBuilder<State, Action, Query>
    ) => void
  ): this {
    const builder = new HTMLInputNumberElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('range')
    return initBuilder(builder, init, this)
  }
  inputReset(
    init?: (builder: HTMLInputElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputElementBuilder<State, Action, Query>('input')
    builder.type('reset')
    return initBuilder(builder, init, this)
  }
  inputSearch(
    init?: (
      builder: HTMLInputSearchElementBuilder<State, Action, Query>
    ) => void
  ): this {
    const builder = new HTMLInputSearchElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('search')
    return initBuilder(builder, init, this)
  }
  inputSubmit(
    init?: (
      builder: HTMLInputSubmitElementBuilder<State, Action, Query>
    ) => void
  ): this {
    const builder = new HTMLInputSubmitElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('submit')
    return initBuilder(builder, init, this)
  }
  inputTel(
    init?: (builder: HTMLInputTelElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputTelElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('tel')
    return initBuilder(builder, init, this)
  }
  inputText(
    init?: (builder: InputTextElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new InputTextElementBuilder<State, Action, Query>('input')
    builder.type('text')
    return initBuilder(builder, init, this)
  }
  inputTime(
    init?: (builder: HTMLInputDateElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputDateElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('time')
    return initBuilder(builder, init, this)
  }
  inputUrl(
    init?: (builder: HTMLInputUrlElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputUrlElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('url')
    return initBuilder(builder, init, this)
  }
  inputWeek(
    init?: (builder: HTMLInputDateElementBuilder<State, Action, Query>) => void
  ): this {
    const builder = new HTMLInputDateElementBuilder<State, Action, Query>(
      'input'
    )
    builder.type('week')
    return initBuilder(builder, init, this)
  }

  ins(
    init?: (builder: HTMLModElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLModElementBuilder<State, Action, Query>('ins'),
      init,
      this
    )
  }
  kbd(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('kbd'),
      init,
      this
    )
  }
  labelEl(
    init?: (builder: HTMLLabelElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLLabelElementBuilder<State, Action, Query>('label'),
      init,
      this
    )
  }
  legend(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLLegendElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLLegendElement>('legend'),
      init,
      this
    )
  }
  li(
    init?: (builder: HTMLLIElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLLIElementBuilder<State, Action, Query>('li'),
      init,
      this
    )
  }
  link(
    init?: (builder: HTMLLinkElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLLinkElementBuilder<State, Action, Query>('link'),
      init,
      this
    )
  }
  main(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('main'),
      init,
      this
    )
  }
  mapEl(
    init?: (builder: HTMLMapElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLMapElementBuilder<State, Action, Query>('map'),
      init,
      this
    )
  }
  mark(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('mark'),
      init,
      this
    )
  }
  meta(
    init?: (builder: HTMLMetaElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLMetaElementBuilder<State, Action, Query>('meta'),
      init,
      this
    )
  }
  meter(
    init?: (builder: HTMLMeterElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLMeterElementBuilder<State, Action, Query>('meter'),
      init,
      this
    )
  }
  nav(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('nav'),
      init,
      this
    )
  }
  noscript(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('noscript'),
      init,
      this
    )
  }
  object(
    init?: (builder: HTMLObjectElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLObjectElementBuilder<State, Action, Query>('object'),
      init,
      this
    )
  }
  ol(
    init?: (builder: HTMLOListElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLOListElementBuilder<State, Action, Query>('ol'),
      init,
      this
    )
  }
  optgroup(
    init?: (builder: HTMLOptGroupElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLOptGroupElementBuilder<State, Action, Query>('optgroup'),
      init,
      this
    )
  }
  option(
    init?: (builder: HTMLOptionElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLOptionElementBuilder<State, Action, Query>('option'),
      init,
      this
    )
  }
  output(
    init?: (builder: HTMLOutputElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLOutputElementBuilder<State, Action, Query>('output'),
      init,
      this
    )
  }
  p(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLParagraphElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLParagraphElement>('p'),
      init,
      this
    )
  }
  param(
    init?: (builder: HTMLParamElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLParamElementBuilder<State, Action, Query>('param'),
      init,
      this
    )
  }
  picture(
    init?: (builder: HTMLPictureElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLPictureElementBuilder<State, Action, Query>('picture'),
      init,
      this
    )
  }
  pre(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLPreElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLPreElement>('pre'),
      init,
      this
    )
  }
  progress(
    init?: (builder: HTMLProgressElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLProgressElementBuilder<State, Action, Query>('progress'),
      init,
      this
    )
  }
  q(
    init?: (builder: HTMLQuoteElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLQuoteElementBuilder<State, Action, Query>('q'),
      init,
      this
    )
  }
  rp(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('rp'),
      init,
      this
    )
  }
  rt(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('rt'),
      init,
      this
    )
  }
  ruby(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('ruby'),
      init,
      this
    )
  }
  s(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('s'),
      init,
      this
    )
  }
  samp(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('samp'),
      init,
      this
    )
  }
  script(
    init?: (builder: HTMLScriptElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLScriptElementBuilder<State, Action, Query>('script'),
      init,
      this
    )
  }
  section(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('section'),
      init,
      this
    )
  }
  select(
    init?: (builder: HTMLSelectElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLSelectElementBuilder<State, Action, Query>('select'),
      init,
      this
    )
  }
  slotEl(
    init?: (builder: HTMLSlotElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLSlotElementBuilder<State, Action, Query>('slot'),
      init,
      this
    )
  }
  small(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('small'),
      init,
      this
    )
  }
  source(
    init?: (builder: HTMLSourceElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLSourceElementBuilder<State, Action, Query>('source'),
      init,
      this
    )
  }
  spanEl(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLSpanElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLSpanElement>('span'),
      init,
      this
    )
  }
  strong(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('strong'),
      init,
      this
    )
  }
  styleEl(
    init?: (builder: HTMLStyleElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLStyleElementBuilder<State, Action, Query>('style'),
      init,
      this
    )
  }
  sub(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('sub'),
      init,
      this
    )
  }
  summary(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('summary'),
      init,
      this
    )
  }
  sup(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('sup'),
      init,
      this
    )
  }
  svg(
    init?: (builder: SVGSVGElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new SVGSVGElementBuilder<State, Action, Query>(),
      init,
      this
    )
  }
  table(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLTableElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLTableElement>('table'),
      init,
      this
    )
  }
  tbody(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLTableSectionElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLTableSectionElement>(
        'tbody'
      ),
      init,
      this
    )
  }
  td(
    init?: (
      builder: HTMLTableDataCellElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new HTMLTableDataCellElementBuilder<State, Action, Query>('td'),
      init,
      this
    )
  }
  template(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLTemplateElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLTemplateElement>(
        'template'
      ),
      init,
      this
    )
  }
  textarea(
    init?: (builder: HTMLTextAreaElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLTextAreaElementBuilder<State, Action, Query>('textarea'),
      init,
      this
    )
  }
  tfoot(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLTableSectionElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLTableSectionElement>(
        'tfoot'
      ),
      init,
      this
    )
  }
  th(
    init?: (
      builder: HTMLTableHeaderCellElementBuilder<State, Action, Query>
    ) => void
  ): this {
    return initBuilder(
      new HTMLTableHeaderCellElementBuilder<State, Action, Query>('th'),
      init,
      this
    )
  }
  thead(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('thead'),
      init,
      this
    )
  }
  time(
    init?: (builder: HTMLTimeElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLTimeElementBuilder<State, Action, Query>('time'),
      init,
      this
    )
  }
  titleEl(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLTitleElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLTitleElement>('title'),
      init,
      this
    )
  }
  tr(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLTableRowElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLTableRowElement>('tr'),
      init,
      this
    )
  }
  track(
    init?: (builder: HTMLTrackElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLTrackElementBuilder<State, Action, Query>('track'),
      init,
      this
    )
  }
  u(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('u'),
      init,
      this
    )
  }
  ul(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLUListElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLUListElement>('ul'),
      init,
      this
    )
  }
  varEl(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('var'),
      init,
      this
    )
  }
  video(
    init?: (builder: HTMLVideoElementBuilder<State, Action, Query>) => void
  ): this {
    return initBuilder(
      new HTMLVideoElementBuilder<State, Action, Query>('video'),
      init,
      this
    )
  }
  wbr(
    init?: (
      builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
    ) => void
  ): this {
    return initBuilder(
      new HTMLElementBuilder<State, Action, Query, HTMLElement>('wbr'),
      init,
      this
    )
  }
}

export type AriaRole =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'checkbox'
  | 'cell'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'searchbox'
  | 'separator'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'textbox'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem'

// dom generic
export function el<State, Action, Query, El extends HTMLElement = HTMLElement>(
  tagName: string = 'div'
) {
  return new HTMLElementBuilder<State, Action, Query, El>(tagName)
}

export class HTMLElementBuilder<State, Action, Query, El extends HTMLElement>
  extends BaseHTMLBuilder<State, Action, Query>
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
      makeCreateElement(this.tagName),
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
      ) => {}) ?? ((query: Query, el: El, ctx: DOMContext<Action>) => {}), // TODO better typing needed
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
  accessKey(value: Attribute<State, string>) {
    return this.attr('accesskey', value)
  }
  aria(name: string, value: Attribute<State, string>) {
    return this.attr(`aria-${name}`, value)
  }
  class(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr('class', mapAttribute(value, listOrRecordToSpaceSeparated))
  }
  contentEditable(value: Attribute<State, boolean>) {
    return this.attr('contenteditable', mapAttribute(value, booleanToString))
  }
  data(name: string, value: Attribute<State, string>) {
    return this.attr(`data-${name}`, value)
  }
  dir(value: Attribute<State, 'ltr' | 'rtl' | 'auto'>) {
    return this.attr('role', value)
  }
  draggable(value: Attribute<State, boolean>) {
    return this.attr('draggable', mapAttribute(value, booleanToString))
  }
  hidden(value: Attribute<State, boolean>) {
    return this.attr('hidden', mapAttribute(value, toggleToString('hidden')))
  }
  id(value: Attribute<State, string>) {
    return this.attr('id', value)
  }
  inputMode(
    value: Attribute<
      State,
      | 'none'
      | 'text'
      | 'decimal'
      | 'numeric'
      | 'tel'
      | 'search'
      | 'email'
      | 'url'
    >
  ) {
    return this.attr('inputmode', value)
  }
  is(value: Attribute<State, string>) {
    return this.attr('is', value)
  }
  itemId(value: Attribute<State, string>) {
    return this.attr('itemid', value)
  }
  itemProp(value: Attribute<State, string>) {
    return this.attr('itemprop', value)
  }
  itemRef(value: Attribute<State, string>) {
    return this.attr('itemref', value)
  }
  itemScope(value: Attribute<State, string>) {
    return this.attr('itemscope', value)
  }
  itemType(value: Attribute<State, string>) {
    return this.attr('itemtype', value)
  }
  lang(value: Attribute<State, string>) {
    return this.attr('lang', value)
  }
  part(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr('part', mapAttribute(value, listOrRecordToSpaceSeparated))
  }
  role(value: Attribute<State, AriaRole>) {
    return this.attr('role', value)
  }
  slot(value: Attribute<State, string>) {
    return this.attr('slot', value)
  }
  spellCheck(value: Attribute<State, boolean>) {
    return this.attr('spellcheck', mapAttribute(value, booleanToString))
  }
  styles(value: Attribute<State, string | Record<string, string>>) {
    return this.attr('style', mapAttribute(value, stylesToString))
  }
  tabIndex(value: Attribute<State, number>) {
    return this.attr('tabindex', mapAttribute(value, String))
  }
  title(value: Attribute<State, string>) {
    return this.attr('title', value)
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

function initBuilder<
  T extends IBuilder<any, any, any>,
  P extends BaseHTMLBuilder<any, any, any>
>(builder: T, init: undefined | ((builder: T) => void), parent: P): P {
  init && init(builder)
  return parent.append(builder.build())
}

export type PreloadValue = 'none' | 'metadata' | 'auto'

export class HTMLMediaElementBuilder<
  State,
  Action,
  Query,
  El extends HTMLMediaElement
> extends HTMLElementBuilder<State, Action, Query, El> {
  autoPlay(value: Attribute<State, boolean>): this {
    return this.attr(
      'autoplay',
      mapAttribute(value, toggleToString('autoplay'))
    )
  }
  controls(value: Attribute<State, boolean>): this {
    return this.attr(
      'controls',
      mapAttribute(value, toggleToString('controls'))
    )
  }
  crossOrigin(value: Attribute<State, CrossOriginValue>) {
    return this.attr('crossorigin', value)
  }
  loop(value: Attribute<State, boolean>): this {
    return this.attr('loop', mapAttribute(value, toggleToString('loop')))
  }
  muted(value: Attribute<State, boolean>): this {
    return this.attr('muted', mapAttribute(value, toggleToString('muted')))
  }
  preload(value: Attribute<State, PreloadValue>) {
    return this.attr('preload', value)
  }
  src(value: Attribute<State, string>) {
    return this.attr('src', value)
  }

  onAbortMedia(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('abort', handler as EventHandler<State, Action>)
  }
  onCanPlay(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('canplay', handler as EventHandler<State, Action>)
  }
  onCanPlayThrough(
    handler: EventHandlerTE<State, Action, Event, El> | undefined
  ) {
    return this.handle('canplaythrough', handler as EventHandler<State, Action>)
  }
  onComplete(
    handler:
      | EventHandlerTE<State, Action, OfflineAudioCompletionEvent, El>
      | undefined
  ) {
    return this.handle('complete', handler as EventHandler<State, Action>)
  }
  onDurationChange(
    handler: EventHandlerTE<State, Action, Event, El> | undefined
  ) {
    return this.handle('durationchange', handler as EventHandler<State, Action>)
  }
  onEmptied(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('emptied', handler as EventHandler<State, Action>)
  }
  onEnded(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('ended', handler as EventHandler<State, Action>)
  }
  onLoadedData(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('loadeddata', handler as EventHandler<State, Action>)
  }
  onLoadedMetadata(
    handler: EventHandlerTE<State, Action, Event, El> | undefined
  ) {
    return this.handle('loadedmetadata', handler as EventHandler<State, Action>)
  }
  onPause(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('pause', handler as EventHandler<State, Action>)
  }
  onPlay(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('play', handler as EventHandler<State, Action>)
  }
  onPlaying(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('playing', handler as EventHandler<State, Action>)
  }
  onSeeked(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('seeked', handler as EventHandler<State, Action>)
  }
  onSeeking(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('seeking', handler as EventHandler<State, Action>)
  }
  onStalled(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('stalled', handler as EventHandler<State, Action>)
  }
  onSuspend(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('suspend', handler as EventHandler<State, Action>)
  }
  onTimeUpdate(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('timeupdate', handler as EventHandler<State, Action>)
  }
  onVolumeChange(
    handler: EventHandlerTE<State, Action, Event, El> | undefined
  ) {
    return this.handle('volumechange', handler as EventHandler<State, Action>)
  }
  onWaiting(handler: EventHandlerTE<State, Action, Event, El> | undefined) {
    return this.handle('waiting', handler as EventHandler<State, Action>)
  }
}

export class HTMLAnchorElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLAnchorElement> {
  download(filename: Attribute<State, string>): this {
    return this.attr('download', filename)
  }
  href(url: Attribute<State, string>): this {
    return this.attr('href', url)
  }
  hreflang(lang: Attribute<State, string>): this {
    return this.attr('hreflang', lang)
  }
  ping(url: Attribute<State, ListOrRecordValue<string>>): this {
    return this.attr('ping', mapAttribute(url, listOrRecordToSpaceSeparated))
  }
  rel(value: Attribute<State, ListOrRecordValue<string>>): this {
    return this.attr('rel', mapAttribute(value, listOrRecordToSpaceSeparated))
  }
  target(name: Attribute<State, string>): this {
    return this.attr('target', name)
  }
  type(name: Attribute<State, string>): this {
    return this.attr('type', name)
  }
}

export class HTMLAreaElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLAreaElement> {
  alt(name: Attribute<State, string>): this {
    return this.attr('alt', name)
  }
  coords(name: Attribute<State, string>): this {
    return this.attr('coords', name)
  }
  download(name: Attribute<State, string>): this {
    return this.attr('download', name)
  }
  href(name: Attribute<State, string>): this {
    return this.attr('href', name)
  }
  hreflang(name: Attribute<State, string>): this {
    return this.attr('hreflang', name)
  }
  ping(name: Attribute<State, string>): this {
    return this.attr('ping', name)
  }
  rel(name: Attribute<State, string>): this {
    return this.attr('rel', name)
  }
  shape(name: Attribute<State, 'rect' | 'circle' | 'poly' | 'default'>): this {
    return this.attr('shape', name)
  }
  target(name: Attribute<State, string>): this {
    return this.attr('target', name)
  }
}

export class HTMLAudioElementBuilder<
  State,
  Action,
  Query
> extends HTMLMediaElementBuilder<State, Action, Query, HTMLAudioElement> {}

export class HTMLBaseElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLBaseElement> {
  href(name: Attribute<State, string>): this {
    return this.attr('href', name)
  }
  target(name: Attribute<State, string>): this {
    return this.attr('target', name)
  }
}

export type FormEncTypeValue =
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'text/plain'

export type FormMethodValue = 'post' | 'get' | 'dialog'

export class HTMLButtonElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLButtonElement> {
  autofocus(value: Attribute<State, boolean>) {
    return this.attr(
      'autofocus',
      mapAttribute(value, toggleToString('autofocus'))
    )
  }
  disabled(value: Attribute<State, boolean>) {
    return this.attr(
      'disabled',
      mapAttribute(value, toggleToString('disabled'))
    )
  }
  form(value: Attribute<State, string>) {
    return this.attr('form', value)
  }
  formAction(value: Attribute<State, string>) {
    return this.attr('formaction', value)
  }
  formEncType(value: Attribute<State, FormEncTypeValue>) {
    return this.attr('formenctype', value)
  }
  formMethod(value: Attribute<State, FormMethodValue>) {
    return this.attr('formmethod', value)
  }
  formNoValidate(value: Attribute<State, boolean>) {
    return this.attr(
      'formnovalidate',
      mapAttribute(value, toggleToString('formnovalidate'))
    )
  }
  formTarget(value: Attribute<State, string>) {
    return this.attr('formtarget', value)
  }
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
  type(value: Attribute<State, 'submit' | 'reset' | 'button'>) {
    return this.attr('type', value)
  }
  value(value: Attribute<State, string>) {
    return this.attr('value', value)
  }
}

export class HTMLCanvasElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLCanvasElement> {
  height(value: Attribute<State, number>) {
    return this.attr('height', mapAttribute(value, String))
  }
  width(value: Attribute<State, number>) {
    return this.attr('width', mapAttribute(value, String))
  }
}

export class HTMLDataElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLDataElement> {
  value(value: Attribute<State, string>) {
    return this.attr('value', value)
  }
}

export class HTMLDetailsElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLDetailsElement> {
  open(value: Attribute<State, boolean>) {
    return this.attr('open', mapAttribute(value, toggleToString('open')))
  }
}

export class HTMLDialogElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLDialogElement> {
  open(value: Attribute<State, boolean>) {
    return this.attr('open', mapAttribute(value, toggleToString('open')))
  }
}

export class HTMLEmbedElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLEmbedElement> {
  height(value: Attribute<State, number>) {
    return this.attr('height', mapAttribute(value, String))
  }
  src(value: Attribute<State, string>) {
    return this.attr('src', value)
  }
  type(value: Attribute<State, string>) {
    return this.attr('type', value)
  }
  width(value: Attribute<State, number>) {
    return this.attr('width', mapAttribute(value, String))
  }
}

export class HTMLFieldSetElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLFieldSetElement> {
  disabled(value: Attribute<State, boolean>) {
    return this.attr(
      'disabled',
      mapAttribute(value, toggleToString('disabled'))
    )
  }
  form(value: Attribute<State, string>) {
    return this.attr('form', value)
  }
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
}

export class HTMLFormElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLFormElement> {
  acceptCharset(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr(
      'accept-charset',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  action(value: Attribute<State, string>) {
    return this.attr('action', value)
  }
  autoComplete(value: Attribute<State, 'on' | 'off'>) {
    return this.attr('autocomplete', value)
  }
  encType(value: Attribute<State, FormEncTypeValue>) {
    return this.attr('enctype', value)
  }
  method(value: Attribute<State, FormMethodValue>) {
    return this.attr('method', value)
  }
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
  noValidate(value: Attribute<State, boolean>) {
    return this.attr(
      'novalidate',
      mapAttribute(value, toggleToString('novalidate'))
    )
  }
  rel(value: Attribute<State, string>) {
    return this.attr('rel', value)
  }
  target(value: Attribute<State, string>) {
    return this.attr('target', value)
  }
}

export class HTMLHtmlElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLHtmlElement> {
  xmlns(value: Attribute<State, string>) {
    return this.attr('xmlns', value)
  }
}

export class HTMLIFrameElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLIFrameElement> {
  allow(value: Attribute<State, string>) {
    return this.attr('allow', value)
  }
  allowfullscreen(value: Attribute<State, boolean>) {
    return this.attr('allowfullscreen', mapAttribute(value, booleanToString))
  }
  allowpaymentrequest(value: Attribute<State, boolean>) {
    return this.attr(
      'allowpaymentrequest',
      mapAttribute(value, booleanToString)
    )
  }
  height(value: Attribute<State, number>) {
    return this.attr('height', mapAttribute(value, String))
  }
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
  referrerpolicy(
    value: Attribute<
      State,
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'origin'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url'
    >
  ) {
    return this.attr('referrerpolicy', value)
  }
  sandbox(
    value: Attribute<
      State,
      | 'allow-forms'
      | 'allow-modals'
      | 'allow-orientation-lock'
      | 'allow-pointer-lock'
      | 'allow-popups'
      | 'allow-popups-to-escape-sandbox'
      | 'allow-presentation'
      | 'allow-same-origin'
      | 'allow-scripts'
      | 'allow-top-navigation'
      | 'allow-top-navigation-by-user-activation'
    >
  ) {
    return this.attr('sandbox', value)
  }
  src(value: Attribute<State, string>) {
    return this.attr('src', value)
  }
  srcdoc(value: Attribute<State, string>) {
    return this.attr('srcdoc', value)
  }
  width(value: Attribute<State, number>) {
    return this.attr('width', mapAttribute(value, String))
  }
}

export type CrossOriginValue = 'anonymous' | 'use-credentials'

export class HTMLImageElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLImageElement> {
  alt(value: Attribute<State, string>) {
    return this.attr('alt', value)
  }
  crossOrigin(value: Attribute<State, CrossOriginValue>) {
    return this.attr('crossorigin', value)
  }
  decoding(value: Attribute<State, 'sync' | 'async' | 'auto'>) {
    return this.attr('decoding', value)
  }
  height(value: Attribute<State, number>) {
    return this.attr('height', mapAttribute(value, String))
  }
  ismap(value: Attribute<State, boolean>) {
    return this.attr('ismap', mapAttribute(value, toggleToString('ismap')))
  }
  loading(value: Attribute<State, 'eager' | 'lazy'>) {
    return this.attr('loading', value)
  }
  sizes(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr('sizes', mapAttribute(value, lostOrRecordToCommaSeparated))
  }
  src(value: Attribute<State, string>) {
    return this.attr('src', value)
  }
  srcset(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr(
      'srcset',
      mapAttribute(value, lostOrRecordToCommaSeparated)
    )
  }
  usemap(value: Attribute<State, string>) {
    return this.attr('usemap', value)
  }
  width(value: Attribute<State, number>) {
    return this.attr('width', mapAttribute(value, String))
  }
}

export type AutoCompleteValue =
  | 'on'
  | 'off'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'email'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-extension'
  | 'impp'
  | 'url'
  | 'photo'

export type InputTypeValue =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

export class HTMLInputElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLInputElement> {
  type(value: Attribute<State, InputTypeValue>) {
    return this.attr('type', value)
  }
  autoComplete(value: Attribute<State, ListOrRecordValue<AutoCompleteValue>>) {
    return this.attr(
      'autocomplete',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  autoFocus(value: Attribute<State, boolean>) {
    return this.attr(
      'autofocus',
      mapAttribute(value, toggleToString('disabled'))
    )
  }
  disabled(value: Attribute<State, boolean>) {
    return this.attr(
      'disabled',
      mapAttribute(value, toggleToString('disabled'))
    )
  }
  form(value: Attribute<State, string>) {
    return this.attr('form', value)
  }
  list(value: Attribute<State, string>) {
    return this.attr('list', value)
  }
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
  readonly(value: Attribute<State, boolean>) {
    return this.attr(
      'readonly',
      mapAttribute(value, toggleToString('readonly'))
    )
  }
  required(value: Attribute<State, boolean>) {
    return this.attr(
      'required',
      mapAttribute(value, toggleToString('required'))
    )
  }
  value(value: Attribute<State, string>) {
    return this.attr('value', value)
  }
}

export class HTMLInputCheckedElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  checked(value: Attribute<State, boolean>) {
    return this.attr('checked', mapAttribute(value, toggleToString('checked')))
  }
}

export class HTMLInputDateElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  max(value: Attribute<State, string>) {
    return this.attr('max', value)
  }
  min(value: Attribute<State, string>) {
    return this.attr('min', value)
  }
  step(value: Attribute<State, number>) {
    return this.attr('step', mapAttribute(value, String))
  }
}

export class HTMLInputEmailElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  multiple(value: Attribute<State, boolean>) {
    return this.attr(
      'multiple',
      mapAttribute(value, toggleToString('multiple'))
    )
  }
  size(value: Attribute<State, number>) {
    return this.attr('size', mapAttribute(value, String))
  }
}

export class HTMLInputFileElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  accept(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr(
      'accept',
      mapAttribute(value, lostOrRecordToCommaSeparated)
    )
  }
  capture(value: Attribute<State, string>) {
    return this.attr('capture', value)
  }
  multiple(value: Attribute<State, boolean>) {
    return this.attr(
      'multiple',
      mapAttribute(value, toggleToString('multiple'))
    )
  }
}

export class HTMLInputImageElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  alt(value: Attribute<State, string>) {
    return this.attr('alt', value)
  }
  formAction(value: Attribute<State, string>) {
    return this.attr('formaction', value)
  }
  formEncType(value: Attribute<State, FormEncTypeValue>) {
    return this.attr('formenctype', value)
  }
  formMethod(value: Attribute<State, FormMethodValue>) {
    return this.attr('formmethod', value)
  }
  formValidate(value: Attribute<State, string>) {
    return this.attr('formvalidate', value)
  }
  formTarget(value: Attribute<State, string>) {
    return this.attr('formtarget', value)
  }
  height(value: Attribute<State, number>) {
    return this.attr('height', mapAttribute(value, String))
  }
  src(value: Attribute<State, string>) {
    return this.attr('src', value)
  }
  width(value: Attribute<State, number>) {
    return this.attr('width', mapAttribute(value, String))
  }
}

export class HTMLInputNumberElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  max(value: Attribute<State, number>) {
    return this.attr('max', mapAttribute(value, String))
  }
  min(value: Attribute<State, number>) {
    return this.attr('min', mapAttribute(value, String))
  }
  step(value: Attribute<State, number>) {
    return this.attr('step', mapAttribute(value, String))
  }
  value(value: Attribute<State, string | number>) {
    return this.attr('value', mapAttribute(value, String))
  }
}

export class HTMLInputPasswordElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  maxlength(value: Attribute<State, number>) {
    return this.attr('maxlength', mapAttribute(value, String))
  }
  minlength(value: Attribute<State, number>) {
    return this.attr('minlength', mapAttribute(value, String))
  }
  pattern(value: Attribute<State, string>) {
    return this.attr('pattern', value)
  }
  placeholder(value: Attribute<State, string>) {
    return this.attr('placeholder', value)
  }
  size(value: Attribute<State, number>) {
    return this.attr('size', mapAttribute(value, String))
  }
}

export class HTMLInputSearchElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  dirname(value: Attribute<State, string>) {
    return this.attr('dirname', value)
  }
  maxlength(value: Attribute<State, number>) {
    return this.attr('maxlength', mapAttribute(value, String))
  }
  minlength(value: Attribute<State, number>) {
    return this.attr('minlength', mapAttribute(value, String))
  }
  placeholder(value: Attribute<State, string>) {
    return this.attr('placeholder', value)
  }
}

export class HTMLInputSubmitElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  formAction(value: Attribute<State, string>) {
    return this.attr('formaction', value)
  }
  formEncType(value: Attribute<State, FormEncTypeValue>) {
    return this.attr('formenctype', value)
  }
  formMethod(value: Attribute<State, FormMethodValue>) {
    return this.attr('formmethod', value)
  }
  formValidate(value: Attribute<State, boolean>) {
    return this.attr(
      'formvalidate',
      mapAttribute(value, toggleToString('formvalidate'))
    )
  }
  formTarget(value: Attribute<State, string>) {
    return this.attr('formtarget', value)
  }
}

export class HTMLInputTelElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  maxlength(value: Attribute<State, number>) {
    return this.attr('maxlength', mapAttribute(value, String))
  }
  minlength(value: Attribute<State, number>) {
    return this.attr('minlength', mapAttribute(value, String))
  }
  pattern(value: Attribute<State, string>) {
    return this.attr('pattern', value)
  }
  placeholder(value: Attribute<State, string>) {
    return this.attr('placeholder', value)
  }
  size(value: Attribute<State, number>) {
    return this.attr('size', mapAttribute(value, String))
  }
}

export class InputTextElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  dirname(value: Attribute<State, string>) {
    return this.attr('dirname', value)
  }
  maxlength(value: Attribute<State, number>) {
    return this.attr('maxlength', mapAttribute(value, String))
  }
  minlength(value: Attribute<State, number>) {
    return this.attr('minlength', mapAttribute(value, String))
  }
  pattern(value: Attribute<State, string>) {
    return this.attr('pattern', value)
  }
  placeholder(value: Attribute<State, string>) {
    return this.attr('placeholder', value)
  }
  size(value: Attribute<State, number>) {
    return this.attr('size', mapAttribute(value, String))
  }
}

export class HTMLInputUrlElementBuilder<
  State,
  Action,
  Query
> extends HTMLInputElementBuilder<State, Action, Query> {
  maxlength(value: Attribute<State, number>) {
    return this.attr('maxlength', mapAttribute(value, String))
  }
  minlength(value: Attribute<State, number>) {
    return this.attr('minlength', mapAttribute(value, String))
  }
  placeholder(value: Attribute<State, string>) {
    return this.attr('placeholder', value)
  }
}

export class HTMLLabelElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLLabelElement> {
  for(value: DerivedOrLiteralValue<State, string>) {
    return this.attr('for', value)
  }
}

export class HTMLLIElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLLIElement> {
  value(value: DerivedOrLiteralValue<State, string>) {
    return this.attr('value', value)
  }
}

export class HTMLLinkElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLLinkElement> {
  as(
    value: DerivedOrLiteralValue<
      State,
      | 'audio'
      | 'document'
      | 'embed'
      | 'fetch'
      | 'font'
      | 'image'
      | 'object'
      | 'script'
      | 'style'
      | 'track'
      | 'video'
      | 'worker'
    >
  ) {
    return this.attr('as', value)
  }
  crossOrigin(value: Attribute<State, CrossOriginValue>) {
    return this.attr('crossorigin', value)
  }
  disabled(value: Attribute<State, boolean>) {
    return this.attr(
      'disabled',
      mapAttribute(value, toggleToString('disabled'))
    )
  }
  href(value: Attribute<State, string>) {
    return this.attr('href', value)
  }
  hreflang(value: Attribute<State, string>) {
    return this.attr('hreflang', value)
  }
  media(value: Attribute<State, string>) {
    return this.attr('media', value)
  }
  rel(value: Attribute<State, string>) {
    return this.attr('rel', value)
  }
  sizes(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr('sizes', mapAttribute(value, lostOrRecordToCommaSeparated))
  }
  title(value: Attribute<State, string>) {
    return this.attr('title', value)
  }
  type(value: Attribute<State, string>) {
    return this.attr('type', value)
  }
}

export class HTMLMapElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLMapElement> {
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
}

export type HttpEquivValue =
  | 'content-security-policy'
  | 'content-type'
  | 'default-style'
  | 'x-ua-compatible'
  | 'refresh'

export class HTMLMetaElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLMetaElement> {
  charset(value: Attribute<State, string>) {
    return this.attr('charset', value)
  }
  content(value: Attribute<State, string>) {
    return this.attr('content', value)
  }
  httpEquiv(value: Attribute<State, HttpEquivValue>) {
    return this.attr('http-equiv', value)
  }
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
}

export class HTMLMeterElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLMeterElement> {
  form(value: Attribute<State, string>) {
    return this.attr('step', value)
  }
  high(value: Attribute<State, number>) {
    return this.attr('high', mapAttribute(value, String))
  }
  low(value: Attribute<State, number>) {
    return this.attr('low', mapAttribute(value, String))
  }
  max(value: Attribute<State, number>) {
    return this.attr('max', mapAttribute(value, String))
  }
  min(value: Attribute<State, number>) {
    return this.attr('min', mapAttribute(value, String))
  }
  optimum(value: Attribute<State, number>) {
    return this.attr('optimum', mapAttribute(value, String))
  }
  value(value: Attribute<State, number>) {
    return this.attr('value', mapAttribute(value, String))
  }
}

export class HTMLModElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLModElement> {
  cite(value: Attribute<State, string>) {
    return this.attr('cite', value)
  }
  dateTime(value: Attribute<State, string>) {
    return this.attr('datetime', value)
  }
}

export class HTMLObjectElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLObjectElement> {
  data(value: Attribute<State, string>) {
    return this.attr('data', value)
  }
  form(value: Attribute<State, string>) {
    return this.attr('form', value)
  }
  height(value: Attribute<State, number>) {
    return this.attr('height', mapAttribute(value, String))
  }
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
  type(value: Attribute<State, string>) {
    return this.attr('type', value)
  }
  typemustmatch(value: Attribute<State, string>) {
    return this.attr('typemustmatch', value)
  }
  usemap(value: Attribute<State, string>) {
    return this.attr('usemap', value)
  }
  width(value: Attribute<State, number>) {
    return this.attr('width', mapAttribute(value, String))
  }
}

export type OLTypeValue = 'a' | 'A' | 'i' | 'I' | '1' | 1

export class HTMLOListElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLOListElement> {
  reversed(value: Attribute<State, boolean>) {
    return this.attr(
      'reversed',
      mapAttribute(value, toggleToString('reversed'))
    )
  }
  start(value: Attribute<State, number>) {
    return this.attr('start', mapAttribute(value, String))
  }
  type(value: Attribute<State, OLTypeValue>) {
    return this.attr('type', mapAttribute(value, String))
  }
}

export class HTMLOptGroupElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLOptGroupElement> {
  disabled(value: Attribute<State, boolean>) {
    return this.attr(
      'disabled',
      mapAttribute(value, toggleToString('disabled'))
    )
  }
  label(value: Attribute<State, string>) {
    return this.attr('label', value)
  }
}

export class HTMLOptionElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLOptionElement> {
  disabled(value: Attribute<State, boolean>) {
    return this.attr(
      'disabled',
      mapAttribute(value, toggleToString('disabled'))
    )
  }
  label(value: Attribute<State, string>) {
    return this.attr('label', value)
  }
  selected(value: Attribute<State, boolean>) {
    return this.attr(
      'selected',
      mapAttribute(value, toggleToString('selected'))
    )
  }
  value(value: Attribute<State, string>) {
    return this.attr('value', value)
  }
}

export class HTMLOutputElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLOutputElement> {
  for(value: Attribute<State, string>) {
    return this.attr('for', value)
  }
  form(value: Attribute<State, string>) {
    return this.attr('form', value)
  }
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
}

export class HTMLParamElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLParamElement> {
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
  value(value: Attribute<State, string>) {
    return this.attr('value', value)
  }
}

export class HTMLPictureElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLPictureElement> {
  // This element includes only global attributes.
}

export class HTMLProgressElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLProgressElement> {
  max(value: Attribute<State, number>) {
    return this.attr('max', mapAttribute(value, String))
  }
  value(value: Attribute<State, number>) {
    return this.attr('value', mapAttribute(value, String))
  }
  onLoadEnd(
    handler:
      | EventHandlerTE<State, Action, ProgressEvent, HTMLProgressElement>
      | undefined
  ) {
    return this.handle('loaddnd', handler as EventHandler<State, Action>)
  }
  onLoadStart(
    handler:
      | EventHandlerTE<State, Action, ProgressEvent, HTMLProgressElement>
      | undefined
  ) {
    return this.handle('loadstart', handler as EventHandler<State, Action>)
  }
  onProgress(
    handler:
      | EventHandlerTE<State, Action, ProgressEvent, HTMLProgressElement>
      | undefined
  ) {
    return this.handle('progress', handler as EventHandler<State, Action>)
  }
  onRateChange(
    handler:
      | EventHandlerTE<State, Action, PointerEvent, HTMLProgressElement>
      | undefined
  ) {
    return this.handle('ratechange', handler as EventHandler<State, Action>)
  }
}

export class HTMLQuoteElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLQuoteElement> {
  cite(value: Attribute<State, string>) {
    return this.attr('cite', value)
  }
}

export class HTMLScriptElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLScriptElement> {
  async(value: Attribute<State, boolean>) {
    return this.attr('async', mapAttribute(value, toggleToString('async')))
  }
  crossOrigin(value: Attribute<State, CrossOriginValue>) {
    return this.attr('crossorigin', value)
  }
  defer(value: Attribute<State, boolean>) {
    return this.attr('defer', mapAttribute(value, toggleToString('defer')))
  }
  integrity(value: Attribute<State, string>) {
    return this.attr('integrity', value)
  }
  nomodule(value: Attribute<State, boolean>) {
    return this.attr(
      'nomodule',
      mapAttribute(value, toggleToString('nomodule'))
    )
  }
  nonce(value: Attribute<State, string>) {
    return this.attr('nonce', value)
  }
  referrerpolicy(
    value: Attribute<
      State,
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'origin'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url'
    >
  ) {
    return this.attr('referrerpolicy', value)
  }
  src(value: Attribute<State, string>) {
    return this.attr('src', value)
  }
  type(value: Attribute<State, string>) {
    return this.attr('type', value)
  }
}

export class HTMLSelectElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLSelectElement> {
  autoComplete(value: Attribute<State, ListOrRecordValue<AutoCompleteValue>>) {
    return this.attr(
      'autocomplete',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  autoFocus(value: Attribute<State, boolean>) {
    return this.attr(
      'autofocus',
      mapAttribute(value, toggleToString('disabled'))
    )
  }
  disabled(value: Attribute<State, boolean>) {
    return this.attr(
      'disabled',
      mapAttribute(value, toggleToString('disabled'))
    )
  }
  form(value: Attribute<State, string>) {
    return this.attr('form', value)
  }
  multiple(value: Attribute<State, boolean>) {
    return this.attr(
      'multiple',
      mapAttribute(value, toggleToString('multiple'))
    )
  }
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
  required(value: Attribute<State, boolean>) {
    return this.attr(
      'required',
      mapAttribute(value, toggleToString('required'))
    )
  }
  size(value: Attribute<State, number>) {
    return this.attr('size', mapAttribute(value, String))
  }
}

export class HTMLSlotElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLSlotElement> {
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
  onSlotChange(
    handler: EventHandlerTE<State, Action, UIEvent, HTMLSlotElement> | undefined
  ) {
    return this.handle('slotchange', handler as EventHandler<State, Action>)
  }
}

export class HTMLSourceElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLSourceElement> {
  media(value: Attribute<State, string>) {
    return this.attr('media', value)
  }
  sizes(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr('sizes', mapAttribute(value, lostOrRecordToCommaSeparated))
  }
  src(value: Attribute<State, string>) {
    return this.attr('src', value)
  }
  srcset(value: Attribute<State, string>) {
    return this.attr('srcset', value)
  }
  type(value: Attribute<State, string>) {
    return this.attr('type', value)
  }
}

export class HTMLStyleElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLStyleElement> {
  type(value: Attribute<State, string>) {
    return this.attr('type', value)
  }
  media(value: Attribute<State, string>) {
    return this.attr('media', value)
  }
  nonce(value: Attribute<State, string>) {
    return this.attr('nonce', value)
  }
  title(value: Attribute<State, string>) {
    return this.attr('title', value)
  }
}

export class HTMLTableColElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLTableColElement> {
  span(value: Attribute<State, number>) {
    return this.attr('span', mapAttribute(value, String))
  }
}

export class HTMLTableDataCellElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLTableDataCellElement> {
  colSpan(value: Attribute<State, number>) {
    return this.attr('colspan', mapAttribute(value, String))
  }
  headers(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr(
      'headers',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  rowSpan(value: Attribute<State, number>) {
    return this.attr('rowspan', mapAttribute(value, String))
  }
}

export type THCellScope = 'row' | 'col' | 'rowgroup' | 'colgroup' | 'auto'

export class HTMLTableHeaderCellElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLTableHeaderCellElement> {
  abbr(value: Attribute<State, number>) {
    return this.attr('abbr', mapAttribute(value, String))
  }
  colSpan(value: Attribute<State, number>) {
    return this.attr('colspan', mapAttribute(value, String))
  }
  headers(value: Attribute<State, ListOrRecordValue<string>>) {
    return this.attr(
      'headers',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  rowSpan(value: Attribute<State, number>) {
    return this.attr('rowspan', mapAttribute(value, String))
  }
  scope(value: Attribute<State, THCellScope>) {
    return this.attr('scope', value)
  }
}

export type SpellCheckValue = true | false | 'true' | 'false' | 'default'
export type WrapValue = 'hard' | 'soft'

export class HTMLTextAreaElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLTextAreaElement> {
  autoComplete(value: Attribute<State, ListOrRecordValue<AutoCompleteValue>>) {
    return this.attr(
      'autocomplete',
      mapAttribute(value, listOrRecordToSpaceSeparated)
    )
  }
  autoFocus(value: Attribute<State, boolean>) {
    return this.attr(
      'autofocus',
      mapAttribute(value, toggleToString('autofocus'))
    )
  }
  cols(value: Attribute<State, number>) {
    return this.attr('cols', mapAttribute(value, String))
  }
  disabled(value: Attribute<State, boolean>) {
    return this.attr(
      'disabled',
      mapAttribute(value, toggleToString('disabled'))
    )
  }
  form(value: Attribute<State, string>) {
    return this.attr('form', value)
  }
  maxlength(value: Attribute<State, number>) {
    return this.attr('maxlength', mapAttribute(value, String))
  }
  minlength(value: Attribute<State, number>) {
    return this.attr('minlength', mapAttribute(value, String))
  }
  name(value: Attribute<State, string>) {
    return this.attr('name', value)
  }
  placeholder(value: Attribute<State, string>) {
    return this.attr('placeholder', value)
  }
  readonly(value: Attribute<State, boolean>) {
    return this.attr(
      'readonly',
      mapAttribute(value, toggleToString('readonly'))
    )
  }
  required(value: Attribute<State, boolean>) {
    return this.attr(
      'required',
      mapAttribute(value, toggleToString('required'))
    )
  }
  rows(value: Attribute<State, number>) {
    return this.attr('rows', mapAttribute(value, String))
  }
  spellCheck(value: Attribute<State, SpellCheckValue>) {
    return this.attr('spellcheck', mapAttribute(value, String))
  }
  wrap(value: Attribute<State, WrapValue>) {
    return this.attr('wrap', mapAttribute(value, String))
  }
}

export class HTMLTimeElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLTimeElement> {
  dateTime(value: Attribute<State, string>) {
    return this.attr('datetime', value)
  }
}

export type TrackKindValue =
  | 'subtitles'
  | 'captions'
  | 'descriptions'
  | 'chapters'
  | 'metadata'

export class HTMLTrackElementBuilder<
  State,
  Action,
  Query
> extends HTMLElementBuilder<State, Action, Query, HTMLTrackElement> {
  default(value: Attribute<State, boolean>) {
    return this.attr('default', mapAttribute(value, toggleToString('default')))
  }
  kind(value: Attribute<State, TrackKindValue>) {
    return this.attr('kind', value)
  }
  label(value: Attribute<State, string>) {
    return this.attr('label', value)
  }
  src(value: Attribute<State, string>) {
    return this.attr('src', value)
  }
  srclang(value: Attribute<State, string>) {
    return this.attr('srclang', value)
  }
  onCueChange(
    handler: EventHandlerTE<State, Action, Event, HTMLTrackElement> | undefined
  ) {
    return this.handle('cuechange', handler as EventHandler<State, Action>)
  }
}

export class HTMLVideoElementBuilder<
  State,
  Action,
  Query
> extends HTMLMediaElementBuilder<State, Action, Query, HTMLVideoElement> {
  height(value: Attribute<State, number>) {
    return this.attr('height', mapAttribute(value, String))
  }
  playsInline(value: Attribute<State, boolean>): this {
    return this.attr(
      'playsinline',
      mapAttribute(value, toggleToString('playsinline'))
    )
  }
  poster(value: Attribute<State, string>) {
    return this.attr('poster', value)
  }
  width(value: Attribute<State, number>) {
    return this.attr('width', mapAttribute(value, String))
  }
}

// transforms
export class ComponentHTMLBuilder<State, Action, Query>
  extends BaseHTMLBuilder<State, Action, Query>
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

export class FragmentHTMLBuilder<State, Action, Query>
  extends BaseHTMLBuilder<State, Action, Query>
  implements IBuilder<State, Action, Query> {
  build() {
    return new FragmentTemplate<State, Action, Query>(this._children)
  }
}

export class MapActionHTMLBuilder<State, Action, ActionB, Query>
  extends BaseHTMLBuilder<State, ActionB, Query>
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

export class MapQueryHTMLBuilder<State, Action, Query, QueryB>
  extends BaseHTMLBuilder<State, Action, QueryB>
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

export class MapStateHTMLBuilder<State, StateB, Action, Query>
  extends BaseHTMLBuilder<StateB, Action, Query>
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

export class PortalBuilder<State, Action, Query>
  extends BaseHTMLBuilder<State, Action, Query>
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

export class SimpleComponentHTMLBuilder<State, Query>
  extends BaseHTMLBuilder<State, State, Query>
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

export class UntilHTMLBuilder<State, StateB, Action, Query>
  extends BaseHTMLBuilder<StateB, Action, Query>
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
