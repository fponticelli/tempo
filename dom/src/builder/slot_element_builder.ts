import { ElementBuilder } from './internal'
import { EventHandlerTE, EventHandler } from '../value'

export class SlotElementBuilder<State, Action, Query> extends ElementBuilder<
  State,
  Action,
  Query,
  HTMLSlotElement
> {
  // TODO https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
  onSlotChange(
    handler: EventHandlerTE<State, Action, UIEvent, HTMLSlotElement>
  ) {
    return this.handle('slotchange', handler as EventHandler<State, Action>)
  }
}
