import { ElementBuilder } from './internal'
import { EventHandlerTE, EventHandler } from '../value'

export class MediaElementBuilder<
  State,
  Action,
  Query,
  El extends HTMLMediaElement
> extends ElementBuilder<State, Action, Query, El> {
  // TODO https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
  onAbortMedia(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('abort', handler as EventHandler<State, Action>)
  }
  onCanPlay(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('canplay', handler as EventHandler<State, Action>)
  }
  onCanPlayThrough(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('canplaythrough', handler as EventHandler<State, Action>)
  }
  onDurationChange(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('durationchange', handler as EventHandler<State, Action>)
  }
  onEmptied(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('emptied', handler as EventHandler<State, Action>)
  }
  onEnded(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('ended', handler as EventHandler<State, Action>)
  }
  onLoadedData(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('loadeddata', handler as EventHandler<State, Action>)
  }
  onLoadedMetadata(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('loadedmetadata', handler as EventHandler<State, Action>)
  }
  onPause(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('pause', handler as EventHandler<State, Action>)
  }
  onPlay(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('play', handler as EventHandler<State, Action>)
  }
  onPlaying(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('playing', handler as EventHandler<State, Action>)
  }
  onSeeked(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('seeked', handler as EventHandler<State, Action>)
  }
  onSeeking(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('seeking', handler as EventHandler<State, Action>)
  }
  onStalled(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('stalled', handler as EventHandler<State, Action>)
  }
  onSuspend(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('suspend', handler as EventHandler<State, Action>)
  }
  onTimeUpdate(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('timeupdate', handler as EventHandler<State, Action>)
  }
  onVolumeChange(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('volumechange', handler as EventHandler<State, Action>)
  }
  onWaiting(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('waiting', handler as EventHandler<State, Action>)
  }
}
