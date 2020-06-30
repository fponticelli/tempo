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

import { ElementBuilder } from './builder/element_builder'
import { AnchorElementBuilder } from './builder/anchor_element_builder'
import { AreaElementBuilder } from './builder/area_element_builder'
import { AudioElementBuilder } from './builder/audio_element_builder'
import { BaseElementBuilder } from './builder/base_element_builder'
import { QuoteElementBuilder } from './builder/quote_element_builder'
import { ButtonElementBuilder } from './builder/button_element_builder'
import { CanvasElementBuilder } from './builder/canvas_element_builder'
import { TableColElementBuilder } from './builder/tablecol_element_builder'
import { DataElementBuilder } from './builder/data_element_builder'
import { ModElementBuilder } from './builder/mod_element_builder'
import { DialogElementBuilder } from './builder/dialog_element_builder'
import { EmbedElementBuilder } from './builder/embed_element_builder'
import { FieldSetElementBuilder } from './builder/fieldset_element_builder'
import { DetailsElementBuilder } from './builder/details_element_builder'
import { FormElementBuilder } from './builder/form_element_builder'
import { IFrameElementBuilder } from './builder/iframe_element_builder'
import { ImageElementBuilder } from './builder/image_element_builder'
import { InputElementBuilder } from './builder/input_element_builder'
import { HtmlElementBuilder } from './builder/html_element_builder'
import { LabelElementBuilder } from './builder/label_element_builder'
import { LIElementBuilder } from './builder/li_element_builder'
import { LinkElementBuilder } from './builder/link_element_builder'
import { MetaElementBuilder } from './builder/meta_element_builder'
import { MapElementBuilder } from './builder/map_element_builder'
import { MeterElementBuilder } from './builder/meter_element_builder'
import { ObjectElementBuilder } from './builder/object_element_builder'
import { OListElementBuilder } from './builder/olist_element_builder'
import { OptGroupElementBuilder } from './builder/optgroup_element_builder'
import { OptionElementBuilder } from './builder/option_element_builder'
import { OutputElementBuilder } from './builder/output_element_builder'
import { ParamElementBuilder } from './builder/param_element_builder'
import { PictureElementBuilder } from './builder/picture_element_builder'
import { ProgressElementBuilder } from './builder/progress_element_builder'
import { ScriptElementBuilder } from './builder/script_element_builder'
import { SelectElementBuilder } from './builder/select_element_builder'
import { SlotElementBuilder } from './builder/slot_element_builder'
import { SourceElementBuilder } from './builder/source_element_builder'
import { StyleElementBuilder } from './builder/style_element_builder'
import { TableDataCellElementBuilder } from './builder/tabledatacell_element_builder'
import { TextAreaElementBuilder } from './builder/textarea_element_builder'
import { TableHeaderCellElementBuilder } from './builder/tableheadercell_element_builder'
import { TimeElementBuilder } from './builder/time_element_builder'
import { TrackElementBuilder } from './builder/track_element_builder'
import { VideoElementBuilder } from './builder/video_element_builder'
import { ComponentBuilder } from './builder/component_builder'
import { MapStateBuilder } from './builder/map_state_builder'
import { resolveAttribute, Attribute } from './value'
import { DerivedValue } from 'tempo-core/lib/value'
import { MapActionBuilder } from './builder/map_action_builder'
import { MapQueryBuilder } from './builder/map_query_builder'
import { DOMTemplate } from './template'
import { LazyTemplate } from './impl/lazy'
import { FragmentBuilder } from './builder/fragment_builder'
import { UntilBuilder } from './builder/until_builder'
import { PortalBuilder } from './builder/portal_builder'
import { SimpleComponentBuilder } from './builder/simple_component_builder'
import { AdapterTemplate, PropagateArg } from './adapter'
import { ComponentTemplate } from './impl/component'

// dom generic
export function el<State, Action, Query, El extends HTMLElement = HTMLElement>(
  name: string = 'div'
) {
  return new ElementBuilder<State, Action, Query, El>()
}

// dom specific
export function a<State, Action, Query>(
  init?: (builder: AnchorElementBuilder<State, Action, Query>) => void
) {
  const builder = new AnchorElementBuilder<State, Action, Query>('a')
  if (init !== undefined) init(builder)
  return builder
}
export function abbr<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('abbr')
  if (init !== undefined) init(builder)
  return builder
}
export function address<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'address'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function area<State, Action, Query>(
  init?: (builder: AreaElementBuilder<State, Action, Query>) => void
) {
  const builder = new AreaElementBuilder<State, Action, Query>('area')
  if (init !== undefined) init(builder)
  return builder
}
export function article<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'article'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function aside<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('aside')
  if (init !== undefined) init(builder)
  return builder
}
export function audio<State, Action, Query>(
  init?: (builder: AudioElementBuilder<State, Action, Query>) => void
) {
  const builder = new AudioElementBuilder<State, Action, Query>('audio')
  if (init !== undefined) init(builder)
  return builder
}
export function b<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('b')
  if (init !== undefined) init(builder)
  return builder
}
export function base<State, Action, Query>(
  init?: (builder: BaseElementBuilder<State, Action, Query>) => void
) {
  const builder = new BaseElementBuilder<State, Action, Query>('base')
  if (init !== undefined) init(builder)
  return builder
}
export function bdi<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('bdi')
  if (init !== undefined) init(builder)
  return builder
}
export function bdo<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('bdo')
  if (init !== undefined) init(builder)
  return builder
}
export function blockquote<State, Action, Query>(
  init?: (builder: QuoteElementBuilder<State, Action, Query>) => void
) {
  const builder = new QuoteElementBuilder<State, Action, Query>('blockquote')
  if (init !== undefined) init(builder)
  return builder
}
export function body<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLBodyElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLBodyElement>(
    'body'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function br<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLBRElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLBRElement>('br')
  if (init !== undefined) init(builder)
  return builder
}
export function button<State, Action, Query>(
  init?: (builder: ButtonElementBuilder<State, Action, Query>) => void
) {
  const builder = new ButtonElementBuilder<State, Action, Query>('button')
  if (init !== undefined) init(builder)
  return builder
}
export function canvas<State, Action, Query>(
  init?: (builder: CanvasElementBuilder<State, Action, Query>) => void
) {
  const builder = new CanvasElementBuilder<State, Action, Query>('canvas')
  if (init !== undefined) init(builder)
  return builder
}
export function caption<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLTableCaptionElement>
  ) => void
) {
  const builder = new ElementBuilder<
    State,
    Action,
    Query,
    HTMLTableCaptionElement
  >('caption')
  if (init !== undefined) init(builder)
  return builder
}
export function cite<State, Action, Query>(
  init?: (builder: QuoteElementBuilder<State, Action, Query>) => void
) {
  const builder = new QuoteElementBuilder<State, Action, Query>('cite')
  if (init !== undefined) init(builder)
  return builder
}
export function code<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('code')
  if (init !== undefined) init(builder)
  return builder
}
export function col<State, Action, Query>(
  init?: (builder: TableColElementBuilder<State, Action, Query>) => void
) {
  const builder = new TableColElementBuilder<State, Action, Query>('col')
  if (init !== undefined) init(builder)
  return builder
}
export function colgroup<State, Action, Query>(
  init?: (builder: TableColElementBuilder<State, Action, Query>) => void
) {
  const builder = new TableColElementBuilder<State, Action, Query>('colgroup')
  if (init !== undefined) init(builder)
  return builder
}
export function data<State, Action, Query>(
  init?: (builder: DataElementBuilder<State, Action, Query>) => void
) {
  const builder = new DataElementBuilder<State, Action, Query>('data')
  if (init !== undefined) init(builder)
  return builder
}
export function datalist<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLDataListElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLDataListElement>(
    'datalist'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function dd<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('dd')
  if (init !== undefined) init(builder)
  return builder
}
export function del<State, Action, Query>(
  init?: (builder: ModElementBuilder<State, Action, Query>) => void
) {
  const builder = new ModElementBuilder<State, Action, Query>('del')
  if (init !== undefined) init(builder)
  return builder
}
export function details<State, Action, Query>(
  init?: (builder: DetailsElementBuilder<State, Action, Query>) => void
) {
  const builder = new DetailsElementBuilder<State, Action, Query>('details')
  if (init !== undefined) init(builder)
  return builder
}
export function dfn<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('dfn')
  if (init !== undefined) init(builder)
  return builder
}
export function dialog<State, Action, Query>(
  init?: (builder: DialogElementBuilder<State, Action, Query>) => void
) {
  const builder = new DialogElementBuilder<State, Action, Query>('dialog')
  if (init !== undefined) init(builder)
  return builder
}
export function div<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLDivElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLDivElement>(
    'div'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function dl<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLDListElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLDListElement>(
    'dl'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function dt<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('dt')
  if (init !== undefined) init(builder)
  return builder
}
export function em<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('em')
  if (init !== undefined) init(builder)
  return builder
}
export function embed<State, Action, Query>(
  init?: (builder: EmbedElementBuilder<State, Action, Query>) => void
) {
  const builder = new EmbedElementBuilder<State, Action, Query>('embed')
  if (init !== undefined) init(builder)
  return builder
}
export function fieldset<State, Action, Query>(
  init?: (builder: FieldSetElementBuilder<State, Action, Query>) => void
) {
  const builder = new FieldSetElementBuilder<State, Action, Query>('fieldset')
  if (init !== undefined) init(builder)
  return builder
}
export function figcaption<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'figcaption'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function figure<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'figure'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function footer<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'footer'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function form<State, Action, Query>(
  init?: (builder: FormElementBuilder<State, Action, Query>) => void
) {
  const builder = new FormElementBuilder<State, Action, Query>('form')
  if (init !== undefined) init(builder)
  return builder
}
export function h1<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLHeadingElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLHeadingElement>(
    'h1'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function h2<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLHeadingElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLHeadingElement>(
    'h2'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function h3<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLHeadingElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLHeadingElement>(
    'h3'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function h4<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLHeadingElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLHeadingElement>(
    'h4'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function h5<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('h5')
  if (init !== undefined) init(builder)
  return builder
}
export function h6<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('h6')
  if (init !== undefined) init(builder)
  return builder
}
export function head<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLHeadElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLHeadElement>(
    'head'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function header<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'header'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function hgroup<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'hgroup'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function hr<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLHRElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLHRElement>('hr')
  if (init !== undefined) init(builder)
  return builder
}
export function html<State, Action, Query>(
  init?: (builder: HtmlElementBuilder<State, Action, Query>) => void
) {
  const builder = new HtmlElementBuilder<State, Action, Query>('html')
  if (init !== undefined) init(builder)
  return builder
}
export function i<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('i')
  if (init !== undefined) init(builder)
  return builder
}
export function iframe<State, Action, Query>(
  init?: (builder: IFrameElementBuilder<State, Action, Query>) => void
) {
  const builder = new IFrameElementBuilder<State, Action, Query>('iframe')
  if (init !== undefined) init(builder)
  return builder
}
export function img<State, Action, Query>(
  init?: (builder: ImageElementBuilder<State, Action, Query>) => void
) {
  const builder = new ImageElementBuilder<State, Action, Query>('img')
  if (init !== undefined) init(builder)
  return builder
}
export function input<State, Action, Query>(
  init?: (builder: InputElementBuilder<State, Action, Query>) => void
) {
  const builder = new InputElementBuilder<State, Action, Query>('input')
  if (init !== undefined) init(builder)
  return builder
}
export function ins<State, Action, Query>(
  init?: (builder: ModElementBuilder<State, Action, Query>) => void
) {
  const builder = new ModElementBuilder<State, Action, Query>('ins')
  if (init !== undefined) init(builder)
  return builder
}
export function kbd<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('kbd')
  if (init !== undefined) init(builder)
  return builder
}
export function label<State, Action, Query>(
  init?: (builder: LabelElementBuilder<State, Action, Query>) => void
) {
  const builder = new LabelElementBuilder<State, Action, Query>('label')
  if (init !== undefined) init(builder)
  return builder
}
export function legend<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLLegendElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLLegendElement>(
    'legend'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function li<State, Action, Query>(
  init?: (builder: LIElementBuilder<State, Action, Query>) => void
) {
  const builder = new LIElementBuilder<State, Action, Query>('li')
  if (init !== undefined) init(builder)
  return builder
}
export function link<State, Action, Query>(
  init?: (builder: LinkElementBuilder<State, Action, Query>) => void
) {
  const builder = new LinkElementBuilder<State, Action, Query>('link')
  if (init !== undefined) init(builder)
  return builder
}
export function main<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('main')
  if (init !== undefined) init(builder)
  return builder
}
export function map<State, Action, Query>(
  init?: (builder: MapElementBuilder<State, Action, Query>) => void
) {
  const builder = new MapElementBuilder<State, Action, Query>('map')
  if (init !== undefined) init(builder)
  return builder
}
export function mark<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('mark')
  if (init !== undefined) init(builder)
  return builder
}
export function meta<State, Action, Query>(
  init?: (builder: MetaElementBuilder<State, Action, Query>) => void
) {
  const builder = new MetaElementBuilder<State, Action, Query>('meta')
  if (init !== undefined) init(builder)
  return builder
}
export function meter<State, Action, Query>(
  init?: (builder: MeterElementBuilder<State, Action, Query>) => void
) {
  const builder = new MeterElementBuilder<State, Action, Query>('meter')
  if (init !== undefined) init(builder)
  return builder
}
export function nav<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('nav')
  if (init !== undefined) init(builder)
  return builder
}
export function noscript<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'noscript'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function object<State, Action, Query>(
  init?: (builder: ObjectElementBuilder<State, Action, Query>) => void
) {
  const builder = new ObjectElementBuilder<State, Action, Query>('object')
  if (init !== undefined) init(builder)
  return builder
}
export function ol<State, Action, Query>(
  init?: (builder: OListElementBuilder<State, Action, Query>) => void
) {
  const builder = new OListElementBuilder<State, Action, Query>('ol')
  if (init !== undefined) init(builder)
  return builder
}
export function optgroup<State, Action, Query>(
  init?: (builder: OptGroupElementBuilder<State, Action, Query>) => void
) {
  const builder = new OptGroupElementBuilder<State, Action, Query>('optgroup')
  if (init !== undefined) init(builder)
  return builder
}
export function option<State, Action, Query>(
  init?: (builder: OptionElementBuilder<State, Action, Query>) => void
) {
  const builder = new OptionElementBuilder<State, Action, Query>('option')
  if (init !== undefined) init(builder)
  return builder
}
export function output<State, Action, Query>(
  init?: (builder: OutputElementBuilder<State, Action, Query>) => void
) {
  const builder = new OutputElementBuilder<State, Action, Query>('output')
  if (init !== undefined) init(builder)
  return builder
}
export function p<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLParagraphElement>
  ) => void
) {
  const builder = new ElementBuilder<
    State,
    Action,
    Query,
    HTMLParagraphElement
  >('p')
  if (init !== undefined) init(builder)
  return builder
}
export function param<State, Action, Query>(
  init?: (builder: ParamElementBuilder<State, Action, Query>) => void
) {
  const builder = new ParamElementBuilder<State, Action, Query>('param')
  if (init !== undefined) init(builder)
  return builder
}
export function picture<State, Action, Query>(
  init?: (builder: PictureElementBuilder<State, Action, Query>) => void
) {
  const builder = new PictureElementBuilder<State, Action, Query>('picture')
  if (init !== undefined) init(builder)
  return builder
}
export function pre<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLPreElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLPreElement>(
    'pre'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function progress<State, Action, Query>(
  init?: (builder: ProgressElementBuilder<State, Action, Query>) => void
) {
  const builder = new ProgressElementBuilder<State, Action, Query>('progress')
  if (init !== undefined) init(builder)
  return builder
}
export function q<State, Action, Query>(
  init?: (builder: QuoteElementBuilder<State, Action, Query>) => void
) {
  const builder = new QuoteElementBuilder<State, Action, Query>('q')
  if (init !== undefined) init(builder)
  return builder
}
export function rp<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('rp')
  if (init !== undefined) init(builder)
  return builder
}
export function rt<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('rt')
  if (init !== undefined) init(builder)
  return builder
}
export function ruby<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('ruby')
  if (init !== undefined) init(builder)
  return builder
}
export function s<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('s')
  if (init !== undefined) init(builder)
  return builder
}
export function samp<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('samp')
  if (init !== undefined) init(builder)
  return builder
}
export function script<State, Action, Query>(
  init?: (builder: ScriptElementBuilder<State, Action, Query>) => void
) {
  const builder = new ScriptElementBuilder<State, Action, Query>('script')
  if (init !== undefined) init(builder)
  return builder
}
export function section<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'section'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function select<State, Action, Query>(
  init?: (builder: SelectElementBuilder<State, Action, Query>) => void
) {
  const builder = new SelectElementBuilder<State, Action, Query>('select')
  if (init !== undefined) init(builder)
  return builder
}
export function slot<State, Action, Query>(
  init?: (builder: SlotElementBuilder<State, Action, Query>) => void
) {
  const builder = new SlotElementBuilder<State, Action, Query>('slot')
  if (init !== undefined) init(builder)
  return builder
}
export function small<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('small')
  if (init !== undefined) init(builder)
  return builder
}
export function source<State, Action, Query>(
  init?: (builder: SourceElementBuilder<State, Action, Query>) => void
) {
  const builder = new SourceElementBuilder<State, Action, Query>('source')
  if (init !== undefined) init(builder)
  return builder
}
export function span<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLSpanElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLSpanElement>(
    'span'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function strong<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'strong'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function styleEl<State, Action, Query>(
  init?: (builder: StyleElementBuilder<State, Action, Query>) => void
) {
  const builder = new StyleElementBuilder<State, Action, Query>('style')
  if (init !== undefined) init(builder)
  return builder
}
export function sub<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('sub')
  if (init !== undefined) init(builder)
  return builder
}
export function summary<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>(
    'summary'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function sup<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('sup')
  if (init !== undefined) init(builder)
  return builder
}
export function table<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLTableElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLTableElement>(
    'table'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function tbody<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLTableSectionElement>
  ) => void
) {
  const builder = new ElementBuilder<
    State,
    Action,
    Query,
    HTMLTableSectionElement
  >('tbody')
  if (init !== undefined) init(builder)
  return builder
}
export function td<State, Action, Query>(
  init?: (builder: TableDataCellElementBuilder<State, Action, Query>) => void
) {
  const builder = new TableDataCellElementBuilder<State, Action, Query>('td')
  if (init !== undefined) init(builder)
  return builder
}
export function template<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLTemplateElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLTemplateElement>(
    'template'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function textarea<State, Action, Query>(
  init?: (builder: TextAreaElementBuilder<State, Action, Query>) => void
) {
  const builder = new TextAreaElementBuilder<State, Action, Query>('textarea')
  if (init !== undefined) init(builder)
  return builder
}
export function tfoot<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLTableSectionElement>
  ) => void
) {
  const builder = new ElementBuilder<
    State,
    Action,
    Query,
    HTMLTableSectionElement
  >('tfoot')
  if (init !== undefined) init(builder)
  return builder
}
export function th<State, Action, Query>(
  init?: (builder: TableHeaderCellElementBuilder<State, Action, Query>) => void
) {
  const builder = new TableHeaderCellElementBuilder<State, Action, Query>('th')
  if (init !== undefined) init(builder)
  return builder
}
export function thead<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('thead')
  if (init !== undefined) init(builder)
  return builder
}
export function time<State, Action, Query>(
  init?: (builder: TimeElementBuilder<State, Action, Query>) => void
) {
  const builder = new TimeElementBuilder<State, Action, Query>('time')
  if (init !== undefined) init(builder)
  return builder
}
export function title<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLTitleElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLTitleElement>(
    'title'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function tr<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLTableRowElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLTableRowElement>(
    'tr'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function track<State, Action, Query>(
  init?: (builder: TrackElementBuilder<State, Action, Query>) => void
) {
  const builder = new TrackElementBuilder<State, Action, Query>('track')
  if (init !== undefined) init(builder)
  return builder
}
export function u<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('u')
  if (init !== undefined) init(builder)
  return builder
}
export function ul<State, Action, Query>(
  init?: (
    builder: ElementBuilder<State, Action, Query, HTMLUListElement>
  ) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLUListElement>(
    'ul'
  )
  if (init !== undefined) init(builder)
  return builder
}
export function varEl<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('varEl')
  if (init !== undefined) init(builder)
  return builder
}
export function video<State, Action, Query>(
  init?: (builder: VideoElementBuilder<State, Action, Query>) => void
) {
  const builder = new VideoElementBuilder<State, Action, Query>('video')
  if (init !== undefined) init(builder)
  return builder
}
export function wbr<State, Action, Query>(
  init?: (builder: ElementBuilder<State, Action, Query, HTMLElement>) => void
) {
  const builder = new ElementBuilder<State, Action, Query, HTMLElement>('wbr')
  if (init !== undefined) init(builder)
  return builder
}

// transform
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
  init: (builder: ComponentBuilder<State, Action, Query>) => void
) {
  const builder = new ComponentBuilder<State, Action, Query>(reducer)
  init(builder)
  return builder
}

export function iterate<State, Items extends any[], Action, Query>(
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
  init: (builder: MapStateBuilder<State, StateB, Action, Query>) => void
) {
  const builder = new MapStateBuilder<State, StateB, Action, Query>(map)
  init(builder)
  return builder
}

export function mapField<State, Action, Query>(
  field: keyof State,
  init: (
    builder: MapStateBuilder<State, State[typeof field], Action, Query>
  ) => void
) {
  return mapState<State, State[typeof field], Action, Query>(
    (v: State): State[typeof field] => v[field],
    init
  )
}

export function mapStateAndKeep<State, StateB, Action, Query>(
  map: (state: State) => StateB | undefined,
  init: (
    builder: MapStateBuilder<State, [StateB, State], Action, Query>
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
  init: (builder: MapActionBuilder<State, Action, ActionB, Query>) => void
) {
  const builder = new MapActionBuilder<State, Action, ActionB, Query>(map)
  init(builder)
  return builder
}

export function mapQuery<State, Action, Query, QueryB>(
  map: DerivedValue<Query, QueryB>,
  init: (builder: MapQueryBuilder<State, Action, Query, QueryB>) => void
) {
  const builder = new MapQueryBuilder<State, Action, Query, QueryB>(map)
  init(builder)
  return builder
}

export function lazy<State, Action, Query>(
  lazyf: () => DOMTemplate<State, Action, Query>
) {
  return new LazyTemplate(lazyf)
}

export function fragment<State, Action, Query>(
  init: (builder: FragmentBuilder<State, Action, Query>) => void
) {
  const builder = new FragmentBuilder<State, Action, Query>()
  init(builder)
  return builder
}

export function portal<State, Action, Query>(
  getParent: (doc: Document) => Element,
  init: (builder: PortalBuilder<State, Action, Query>) => void
) {
  const builder = new PortalBuilder<State, Action, Query>(getParent)
  init(builder)
  return builder
}

export function portalWithSelector<State, Action, Query>(
  selector: string,
  init: (builder: PortalBuilder<State, Action, Query>) => void
) {
  return portal(doc => {
    const el = doc.querySelector(selector)
    if (!el) {
      throw new Error(`selector doesn't match any element: "${selector}"`)
    }
    return el
  }, init)
}

export function simpleComponent<State, Query>(
  init: (builder: SimpleComponentBuilder<State, Query>) => void
) {
  const builder = new SimpleComponentBuilder<State, Query>()
  init(builder)
  return builder
}

export function unless<State, Action, Query>(
  condition: DerivedValue<State, boolean>,
  init: (builder: MapStateBuilder<State, State, Action, Query>) => void
) {
  return when(s => !condition(s), init)
}

export function until<State, StateB, Action, Query>(
  next: DerivedValue<{ state: State; index: number }, StateB>,
  init: (builder: UntilBuilder<State, StateB, Action, Query>) => void
) {
  const builder = new UntilBuilder<State, StateB, Action, Query>(next)
  init(builder)
  return builder
}

export function when<State, Action, Query>(
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
  return builder
}
