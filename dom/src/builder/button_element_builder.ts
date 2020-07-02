import { ElementBuilder, toggleToString } from './element_builder'
import { DerivedOrLiteralValue } from 'tempo-core/lib/value'
import { mapAttribute } from '../value'

export class ButtonElementBuilder<State, Action, Query> extends ElementBuilder<
  State,
  Action,
  Query,
  HTMLButtonElement
> {
  // TODO https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

  autofocus(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr(
      'autofocus',
      mapAttribute(value, toggleToString('autofocus'))
    )
  }

  disabled(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr(
      'disabled',
      mapAttribute(value, toggleToString('disabled'))
    )
  }

  form(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('form', value)
  }

  formAction(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('formaction', value)
  }

  formEncType(
    value: DerivedOrLiteralValue<
      State,
      | 'application/x-www-form-urlencoded'
      | 'multipart/form-data'
      | 'text/plain'
      | undefined
    >
  ) {
    return this.attr('formenctype', value)
  }

  formMethod(value: DerivedOrLiteralValue<State, 'post' | 'get' | undefined>) {
    return this.attr('formmethod', value)
  }

  formNoValidate(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr(
      'formnovalidate',
      mapAttribute(value, toggleToString('formnovalidate'))
    )
  }

  formTarget(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('formtarget', value)
  }

  name(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('name', value)
  }

  type(
    value: DerivedOrLiteralValue<
      State,
      'submit' | 'reset' | 'button' | undefined
    >
  ) {
    return this.attr('type', value)
  }

  value(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('value', value)
  }
}
