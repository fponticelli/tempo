import { ElementBuilder, spaceSeparatedToString } from './internal'
import { Attribute, mapAttribute } from '../value'

export class AnchorElementBuilder<State, Action, Query> extends ElementBuilder<
  State,
  Action,
  Query,
  HTMLAnchorElement
> {
  download(filename: Attribute<State, string | undefined>) {
    this.attr('download', filename)
  }
  href(url: Attribute<State, string | undefined>) {
    this.attr('href', url)
  }
  hreflang(lang: Attribute<State, string | undefined>) {
    this.attr('hreflang', lang)
  }
  ping(
    url: Attribute<
      State,
      string | string[] | Record<string, boolean> | undefined
    >
  ) {
    this.attr('ping', mapAttribute(url, spaceSeparatedToString))
  }
  rel(
    value: Attribute<
      State,
      string | string[] | Record<string, boolean> | undefined
    >
  ) {
    this.attr('rel', mapAttribute(value, spaceSeparatedToString))
  }
  target(name: Attribute<State, string | undefined>) {
    this.attr('target', name)
  }
  type(name: Attribute<State, string | undefined>) {
    this.attr('type', name)
  }
}
