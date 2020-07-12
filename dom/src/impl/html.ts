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

import {
  HTMLElementBuilder,
  HTMLAnchorElementBuilder,
  HTMLAreaElementBuilder,
  HTMLAudioElementBuilder,
  HTMLBaseElementBuilder,
  HTMLQuoteElementBuilder,
  HTMLButtonElementBuilder,
  HTMLCanvasElementBuilder,
  HTMLTableColElementBuilder,
  HTMLDataElementBuilder,
  HTMLModElementBuilder,
  HTMLDialogElementBuilder,
  HTMLEmbedElementBuilder,
  HTMLFieldSetElementBuilder,
  HTMLDetailsElementBuilder,
  HTMLFormElementBuilder,
  HTMLIFrameElementBuilder,
  HTMLImageElementBuilder,
  HTMLInputElementBuilder,
  HTMLHtmlElementBuilder,
  HTMLLabelElementBuilder,
  HTMLLIElementBuilder,
  HTMLLinkElementBuilder,
  HTMLMetaElementBuilder,
  HTMLMapElementBuilder,
  HTMLMeterElementBuilder,
  HTMLObjectElementBuilder,
  HTMLOListElementBuilder,
  HTMLOptGroupElementBuilder,
  HTMLOptionElementBuilder,
  HTMLOutputElementBuilder,
  HTMLParamElementBuilder,
  HTMLPictureElementBuilder,
  HTMLProgressElementBuilder,
  HTMLScriptElementBuilder,
  HTMLSelectElementBuilder,
  HTMLSlotElementBuilder,
  HTMLSourceElementBuilder,
  HTMLStyleElementBuilder,
  HTMLTableDataCellElementBuilder,
  HTMLTextAreaElementBuilder,
  HTMLTableHeaderCellElementBuilder,
  HTMLTimeElementBuilder,
  HTMLTrackElementBuilder,
  HTMLVideoElementBuilder,
  El,
  ComponentHTMLBuilder,
  MapStateHTMLBuilder,
  MapActionHTMLBuilder,
  MapQueryHTMLBuilder,
  UntilHTMLBuilder,
  FragmentHTMLBuilder,
  PortalHTMLBuilder,
  SimpleComponentHTMLBuilder
} from './html_builder'
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
import { AsyncResult } from 'tempo-std/lib/async_result'
import { LazyTemplate } from './lazy'
import { HoldF, HoldStateTemplate } from './hold_state'
import { Async } from 'tempo-std/lib/async'

export { El }

// dom specific
export function A<State, Action, Query>(
  init?: (builder: HTMLAnchorElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLAnchorElementBuilder<State, Action, Query>('a')
  if (init !== undefined) init(builder)
  return builder
}
export function ABBR<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'abbr'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function ADDRESS<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'address'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function AREA<State, Action, Query>(
  init?: (builder: HTMLAreaElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLAreaElementBuilder<State, Action, Query>('area')
  if (init !== undefined) init(builder)
  return builder
}
export function ARTICLE<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'article'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function ASIDE<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'aside'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function AUDIO<State, Action, Query>(
  init?: (builder: HTMLAudioElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLAudioElementBuilder<State, Action, Query>('audio')
  if (init !== undefined) init(builder)
  return builder
}
export function B<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>('b')
  if (init !== undefined) init(builder)
  return builder
}
export function BASE<State, Action, Query>(
  init?: (builder: HTMLBaseElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLBaseElementBuilder<State, Action, Query>('base')
  if (init !== undefined) init(builder)
  return builder
}
export function BDI<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'bdi'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function BDO<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'bdo'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function BLOCKQUOTE<State, Action, Query>(
  init?: (builder: HTMLQuoteElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLQuoteElementBuilder<State, Action, Query>(
    'blockquote'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function BODY<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLBodyElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLBodyElement>(
    'body'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function BR<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLBRElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLBRElement>(
    'br'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function BUTTON<State, Action, Query>(
  init?: (builder: HTMLButtonElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLButtonElementBuilder<State, Action, Query>('button')
  if (init !== undefined) init(builder)
  return builder
}
export function CANVAS<State, Action, Query>(
  init?: (builder: HTMLCanvasElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLCanvasElementBuilder<State, Action, Query>('canvas')
  if (init !== undefined) init(builder)
  return builder
}
export function CAPTION<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLTableCaptionElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLTableCaptionElement
  >('caption')
  if (init !== undefined) init(builder)
  return builder
}
export function CITE<State, Action, Query>(
  init?: (builder: HTMLQuoteElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLQuoteElementBuilder<State, Action, Query>('cite')
  if (init !== undefined) init(builder)
  return builder
}
export function CODE<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'code'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function COL<State, Action, Query>(
  init?: (builder: HTMLTableColElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLTableColElementBuilder<State, Action, Query>('col')
  if (init !== undefined) init(builder)
  return builder
}
export function COLGROUP<State, Action, Query>(
  init?: (builder: HTMLTableColElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLTableColElementBuilder<State, Action, Query>(
    'colgroup'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function DATA<State, Action, Query>(
  init?: (builder: HTMLDataElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLDataElementBuilder<State, Action, Query>('data')
  if (init !== undefined) init(builder)
  return builder
}
export function DATALIST<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLDataListElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLDataListElement
  >('datalist')
  if (init !== undefined) init(builder)
  return builder
}
export function DD<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'dd'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function DEL<State, Action, Query>(
  init?: (builder: HTMLModElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLModElementBuilder<State, Action, Query>('del')
  if (init !== undefined) init(builder)
  return builder
}
export function DETAILS<State, Action, Query>(
  init?: (builder: HTMLDetailsElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLDetailsElementBuilder<State, Action, Query>('details')
  if (init !== undefined) init(builder)
  return builder
}
export function DFN<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'dfn'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function DIALOG<State, Action, Query>(
  init?: (builder: HTMLDialogElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLDialogElementBuilder<State, Action, Query>('dialog')
  if (init !== undefined) init(builder)
  return builder
}
export function DIV<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLDivElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLDivElement>(
    'div'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function DL<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLDListElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLDListElement
  >('dl')
  if (init !== undefined) init(builder)
  return builder
}
export function DT<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'dt'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function EM<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'em'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function EMBED<State, Action, Query>(
  init?: (builder: HTMLEmbedElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLEmbedElementBuilder<State, Action, Query>('embed')
  if (init !== undefined) init(builder)
  return builder
}
export function FIELDSET<State, Action, Query>(
  init?: (builder: HTMLFieldSetElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLFieldSetElementBuilder<State, Action, Query>(
    'fieldset'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function FIGCAPTION<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'figcaption'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function FIGURE<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'figure'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function FOOTER<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'footer'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function FORM<State, Action, Query>(
  init?: (builder: HTMLFormElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLFormElementBuilder<State, Action, Query>('form')
  if (init !== undefined) init(builder)
  return builder
}
export function H1<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLHeadingElement
  >('h1')
  if (init !== undefined) init(builder)
  return builder
}
export function H2<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLHeadingElement
  >('h2')
  if (init !== undefined) init(builder)
  return builder
}
export function H3<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLHeadingElement
  >('h3')
  if (init !== undefined) init(builder)
  return builder
}
export function H4<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLHeadingElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLHeadingElement
  >('h4')
  if (init !== undefined) init(builder)
  return builder
}
export function H5<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'h5'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function H6<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'h6'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function HEAD<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLHeadElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLHeadElement>(
    'head'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function HEADER<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'header'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function HGROUP<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'hgroup'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function HR<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLHRElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLHRElement>(
    'hr'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function HTML<State, Action, Query>(
  init?: (builder: HTMLHtmlElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLHtmlElementBuilder<State, Action, Query>('html')
  if (init !== undefined) init(builder)
  return builder
}
export function I<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>('i')
  if (init !== undefined) init(builder)
  return builder
}
export function IFRAME<State, Action, Query>(
  init?: (builder: HTMLIFrameElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLIFrameElementBuilder<State, Action, Query>('iframe')
  if (init !== undefined) init(builder)
  return builder
}
export function IMG<State, Action, Query>(
  init?: (builder: HTMLImageElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLImageElementBuilder<State, Action, Query>('img')
  if (init !== undefined) init(builder)
  return builder
}
export function INPUT<State, Action, Query>(
  init?: (builder: HTMLInputElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLInputElementBuilder<State, Action, Query>('input')
  if (init !== undefined) init(builder)
  return builder
}
export function INS<State, Action, Query>(
  init?: (builder: HTMLModElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLModElementBuilder<State, Action, Query>('ins')
  if (init !== undefined) init(builder)
  return builder
}
export function KBD<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'kbd'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function LABEL<State, Action, Query>(
  init?: (builder: HTMLLabelElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLLabelElementBuilder<State, Action, Query>('label')
  if (init !== undefined) init(builder)
  return builder
}
export function LEGEND<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLLegendElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLLegendElement
  >('legend')
  if (init !== undefined) init(builder)
  return builder
}
export function LI<State, Action, Query>(
  init?: (builder: HTMLLIElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLLIElementBuilder<State, Action, Query>('li')
  if (init !== undefined) init(builder)
  return builder
}
export function LINK<State, Action, Query>(
  init?: (builder: HTMLLinkElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLLinkElementBuilder<State, Action, Query>('link')
  if (init !== undefined) init(builder)
  return builder
}
export function MAIN<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'main'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function MAP<State, Action, Query>(
  init?: (builder: HTMLMapElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLMapElementBuilder<State, Action, Query>('map')
  if (init !== undefined) init(builder)
  return builder
}
export function MARK<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'mark'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function META<State, Action, Query>(
  init?: (builder: HTMLMetaElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLMetaElementBuilder<State, Action, Query>('meta')
  if (init !== undefined) init(builder)
  return builder
}
export function METER<State, Action, Query>(
  init?: (builder: HTMLMeterElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLMeterElementBuilder<State, Action, Query>('meter')
  if (init !== undefined) init(builder)
  return builder
}
export function NAV<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'nav'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function NOSCRIPT<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'noscript'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function OBJECT<State, Action, Query>(
  init?: (builder: HTMLObjectElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLObjectElementBuilder<State, Action, Query>('object')
  if (init !== undefined) init(builder)
  return builder
}
export function OL<State, Action, Query>(
  init?: (builder: HTMLOListElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLOListElementBuilder<State, Action, Query>('ol')
  if (init !== undefined) init(builder)
  return builder
}
export function OPTGROUP<State, Action, Query>(
  init?: (builder: HTMLOptGroupElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLOptGroupElementBuilder<State, Action, Query>(
    'optgroup'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function OPTION<State, Action, Query>(
  init?: (builder: HTMLOptionElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLOptionElementBuilder<State, Action, Query>('option')
  if (init !== undefined) init(builder)
  return builder
}
export function OUTPUT<State, Action, Query>(
  init?: (builder: HTMLOutputElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLOutputElementBuilder<State, Action, Query>('output')
  if (init !== undefined) init(builder)
  return builder
}
export function P<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLParagraphElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLParagraphElement
  >('p')
  if (init !== undefined) init(builder)
  return builder
}
export function PARAM<State, Action, Query>(
  init?: (builder: HTMLParamElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLParamElementBuilder<State, Action, Query>('param')
  if (init !== undefined) init(builder)
  return builder
}
export function PICTURE<State, Action, Query>(
  init?: (builder: HTMLPictureElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLPictureElementBuilder<State, Action, Query>('picture')
  if (init !== undefined) init(builder)
  return builder
}
export function PRE<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLPreElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLPreElement>(
    'pre'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function PROGRESS<State, Action, Query>(
  init?: (builder: HTMLProgressElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLProgressElementBuilder<State, Action, Query>(
    'progress'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function Q<State, Action, Query>(
  init?: (builder: HTMLQuoteElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLQuoteElementBuilder<State, Action, Query>('q')
  if (init !== undefined) init(builder)
  return builder
}
export function RP<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'rp'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function RT<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'rt'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function RUBY<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'ruby'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function S<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>('s')
  if (init !== undefined) init(builder)
  return builder
}
export function SAMP<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'samp'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function SCRIPT<State, Action, Query>(
  init?: (builder: HTMLScriptElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLScriptElementBuilder<State, Action, Query>('script')
  if (init !== undefined) init(builder)
  return builder
}
export function SECTION<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'section'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function SELECT<State, Action, Query>(
  init?: (builder: HTMLSelectElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLSelectElementBuilder<State, Action, Query>('select')
  if (init !== undefined) init(builder)
  return builder
}
export function SLOT<State, Action, Query>(
  init?: (builder: HTMLSlotElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLSlotElementBuilder<State, Action, Query>('slot')
  if (init !== undefined) init(builder)
  return builder
}
export function SMALL<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'small'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function SOURCE<State, Action, Query>(
  init?: (builder: HTMLSourceElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLSourceElementBuilder<State, Action, Query>('source')
  if (init !== undefined) init(builder)
  return builder
}
export function SPAN<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLSpanElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLSpanElement>(
    'span'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function STRONG<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'strong'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function STYLE<State, Action, Query>(
  init?: (builder: HTMLStyleElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLStyleElementBuilder<State, Action, Query>('style')
  if (init !== undefined) init(builder)
  return builder
}
export function SUB<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'sub'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function SUMMARY<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'summary'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function SUP<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'sup'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function TABLE<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLTableElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLTableElement
  >('table')
  if (init !== undefined) init(builder)
  return builder
}
export function TBODY<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLTableSectionElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLTableSectionElement
  >('tbody')
  if (init !== undefined) init(builder)
  return builder
}
export function TD<State, Action, Query>(
  init?: (
    builder: HTMLTableDataCellElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new HTMLTableDataCellElementBuilder<State, Action, Query>(
    'td'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function TEMPLATE<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLTemplateElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLTemplateElement
  >('template')
  if (init !== undefined) init(builder)
  return builder
}
export function TEXTAREA<State, Action, Query>(
  init?: (builder: HTMLTextAreaElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLTextAreaElementBuilder<State, Action, Query>(
    'textarea'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function TFOOT<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLTableSectionElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLTableSectionElement
  >('tfoot')
  if (init !== undefined) init(builder)
  return builder
}
export function TH<State, Action, Query>(
  init?: (
    builder: HTMLTableHeaderCellElementBuilder<State, Action, Query>
  ) => void
) {
  const builder = new HTMLTableHeaderCellElementBuilder<State, Action, Query>(
    'th'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function THEAD<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'thead'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function TIME<State, Action, Query>(
  init?: (builder: HTMLTimeElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLTimeElementBuilder<State, Action, Query>('time')
  if (init !== undefined) init(builder)
  return builder
}
export function TITLE<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLTitleElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLTitleElement
  >('title')
  if (init !== undefined) init(builder)
  return builder
}
export function TR<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLTableRowElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLTableRowElement
  >('tr')
  if (init !== undefined) init(builder)
  return builder
}
export function TRACK<State, Action, Query>(
  init?: (builder: HTMLTrackElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLTrackElementBuilder<State, Action, Query>('track')
  if (init !== undefined) init(builder)
  return builder
}
export function U<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>('u')
  if (init !== undefined) init(builder)
  return builder
}
export function UL<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLUListElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<
    State,
    Action,
    Query,
    HTMLUListElement
  >('ul')
  if (init !== undefined) init(builder)
  return builder
}
export function VAR<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'varEl'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function VIDEO<State, Action, Query>(
  init?: (builder: HTMLVideoElementBuilder<State, Action, Query>) => void
) {
  const builder = new HTMLVideoElementBuilder<State, Action, Query>('video')
  if (init !== undefined) init(builder)
  return builder
}
export function WBR<State, Action, Query>(
  init?: (
    builder: HTMLElementBuilder<State, Action, Query, HTMLElement>
  ) => void
) {
  const builder = new HTMLElementBuilder<State, Action, Query, HTMLElement>(
    'wbr'
  )
  if (init !== undefined) init(builder)
  return builder
}

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
  init: (builder: ComponentHTMLBuilder<State, Action, Query>) => void
) {
  const builder = new ComponentHTMLBuilder<State, Action, Query>(reducer)
  init(builder)
  return builder
}

export function HoldState<State, StateB, StateC, Action, Query>(
  holdf: HoldF<
    State,
    StateB,
    StateC,
    Action,
    Query,
    FragmentHTMLBuilder<StateC, Action, Query>
  >
) {
  const builder = new FragmentHTMLBuilder<StateC, Action, Query>()
  return new HoldStateTemplate(holdf, builder)
}

export function Iterate<State, Items extends any[], Action, Query>(
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
  init: (builder: MapStateHTMLBuilder<State, StateB, Action, Query>) => void
) {
  const builder = new MapStateHTMLBuilder<State, StateB, Action, Query>(map)
  init(builder)
  return builder
}

export function MapField<
  State,
  Action,
  Query,
  K extends keyof State = keyof State
>(
  field: K,
  init: (builder: MapStateHTMLBuilder<State, State[K], Action, Query>) => void
) {
  return MapState<State, State[K], Action, Query>(
    (v: State): State[K] => v[field],
    init
  )
}

export function MapStateAndKeep<State, StateB, Action, Query>(
  map: (state: State) => StateB | undefined,
  init: (
    builder: MapStateHTMLBuilder<State, [StateB, State], Action, Query>
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
  init: (builder: MapActionHTMLBuilder<State, Action, ActionB, Query>) => void
) {
  const builder = new MapActionHTMLBuilder<State, Action, ActionB, Query>(map)
  init(builder)
  return builder
}

export function MapQuery<State, Action, Query, QueryB>(
  map: DerivedValue<Query, QueryB>,
  init: (builder: MapQueryHTMLBuilder<State, Action, Query, QueryB>) => void
) {
  const builder = new MapQueryHTMLBuilder<State, Action, Query, QueryB>(map)
  init(builder)
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
    Failure: MapField('error', $ => $.Append(props.Failure)),
    Success: MapField('value', $ => $.Append(props.Success)),
    Loading: MapField('progress', $ => $.Append(props.Loading)),
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
  init: (builder: FragmentHTMLBuilder<State, Action, Query>) => void
) {
  const builder = new FragmentHTMLBuilder<State, Action, Query>()
  init(builder)
  return builder
}

export function ForEach<State, Action, Query>(
  init: (
    builder: UntilHTMLBuilder<
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
  init: (builder: PortalHTMLBuilder<State, Action, Query>) => void
) {
  const builder = new PortalHTMLBuilder<State, Action, Query>(appendChild)
  init(builder)
  return builder
}

export function PortalWithSelector<State, Action, Query>(
  selector: string,
  init: (builder: PortalHTMLBuilder<State, Action, Query>) => void
) {
  return Portal((doc: HTMLDocument, node: Node) => {
    const el = doc.querySelector(selector)
    if (!el) {
      throw new Error(`selector doesn't match any element: "${selector}"`)
    }
    el.appendChild(node)
  }, init)
}

export function HeadPortal<State, Action, Query>(
  init: (builder: PortalHTMLBuilder<State, Action, Query>) => void
) {
  return Portal((doc, node) => doc.head.appendChild(node), init)
}

export function BodyPortal<State, Action, Query>(
  init: (builder: PortalHTMLBuilder<State, Action, Query>) => void
) {
  return Portal((doc, node) => doc.body.appendChild(node), init)
}

export function SimpleComponent<State, Query>(
  init: (builder: SimpleComponentHTMLBuilder<State, Query>) => void
) {
  const builder = new SimpleComponentHTMLBuilder<State, Query>()
  init(builder)
  return builder
}

export function Unless<State, Action, Query>(
  condition: DerivedValue<State, boolean>,
  init: (builder: MapStateHTMLBuilder<State, State, Action, Query>) => void
) {
  return When(s => !condition(s), init)
}

export function Until<State, StateB, Action, Query>(
  next: DerivedValue<{ state: State; index: number }, StateB>,
  init: (builder: UntilHTMLBuilder<State, StateB, Action, Query>) => void
) {
  const builder = new UntilHTMLBuilder<State, StateB, Action, Query>(next)
  init(builder)
  return builder
}

export function When<State, Action, Query>(
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
  return builder
}
