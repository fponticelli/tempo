import { ElementBuilder } from './internal'
import { EventHandlerTE, EventHandler } from '../value'

export class ProgressElementBuilder<
  State,
  Action,
  Query
> extends ElementBuilder<State, Action, Query, HTMLProgressElement> {
  // TODO https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
  onLoadEnd(
    handler: EventHandlerTE<State, Action, ProgressEvent, HTMLProgressElement>
  ) {
    return this.handle('loaddnd', handler as EventHandler<State, Action>)
  }
  onLoadStart(
    handler: EventHandlerTE<State, Action, ProgressEvent, HTMLProgressElement>
  ) {
    return this.handle('loadstart', handler as EventHandler<State, Action>)
  }
  onProgress(
    handler: EventHandlerTE<State, Action, ProgressEvent, HTMLProgressElement>
  ) {
    return this.handle('progress', handler as EventHandler<State, Action>)
  }
  onRateChange(
    handler: EventHandlerTE<State, Action, PointerEvent, HTMLProgressElement>
  ) {
    return this.handle('ratechange', handler as EventHandler<State, Action>)
  }
}
