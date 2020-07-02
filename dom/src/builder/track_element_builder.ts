import { ElementBuilder } from './internal'
import { EventHandlerTE, EventHandler } from '../value'

export class TrackElementBuilder<State, Action, Query> extends ElementBuilder<
  State,
  Action,
  Query,
  HTMLTrackElement
> {
  // TODO https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
  onCueChange(handler: EventHandlerTE<State, Action, Event, HTMLTrackElement>) {
    return this.handle('cuechange', handler as EventHandler<State, Action>)
  }
}
