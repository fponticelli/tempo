import { DOMAttribute, DOMEventHandler } from './value'
import { CSSProperties } from './css_properties'
import { MoodAttributes } from './mood_attributes'

export interface DOMAttributes<State, Action, El> extends MoodAttributes<State, El> {
  abbr?: DOMAttribute<State, string>
  accept?: DOMAttribute<State, string>
  acceptCharset?: DOMAttribute<State, string>
  accessKey?: DOMAttribute<State, string>
  action?: DOMAttribute<State, string>
  allow?: DOMAttribute<State, string>
  allowFullscreen?: DOMAttribute<State, boolean>
  allowPaymentRequest?: DOMAttribute<State, boolean>
  alt?: DOMAttribute<State, string>
  as?: DOMAttribute<State, string>
  async?: DOMAttribute<State, boolean>
  autocapitalize?: DOMAttribute<State, string>
  autocomplete?: DOMAttribute<State, string>
  autofocus?: DOMAttribute<State, boolean>
  autoplay?: DOMAttribute<State, boolean>
  bgProperties?: DOMAttribute<State, string>
  checked?: DOMAttribute<State, boolean>
  cite?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  colSpan?: DOMAttribute<State, number>
  color?: DOMAttribute<State, string>
  cols?: DOMAttribute<State, number>
  content?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  controls?: DOMAttribute<State, boolean>
  coords?: DOMAttribute<State, string>
  crossOrigin?: DOMAttribute<State, string>
  currentScale?: DOMAttribute<State, number>
  currentTime?: DOMAttribute<State, number>
  data?: DOMAttribute<State, string>
  dateTime?: DOMAttribute<State, string>
  decoding?: DOMAttribute<State, 'async' | 'sync' | 'auto'>
  default?: DOMAttribute<State, boolean>
  defaultChecked?: DOMAttribute<State, boolean>
  defaultMuted?: DOMAttribute<State, boolean>
  defaultPlaybackRate?: DOMAttribute<State, number>
  defaultSelected?: DOMAttribute<State, boolean>
  defaultValue?: DOMAttribute<State, string>
  defer?: DOMAttribute<State, boolean>
  dir?: DOMAttribute<State, string>
  dirName?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  download?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  encoding?: DOMAttribute<State, string>
  enctype?: DOMAttribute<State, string>
  files?: DOMAttribute<State, FileList | null>
  formAction?: DOMAttribute<State, string>
  formEnctype?: DOMAttribute<State, string>
  formMethod?: DOMAttribute<State, string>
  formNoValidate?: DOMAttribute<State, boolean>
  formTarget?: DOMAttribute<State, string>
  hash?: DOMAttribute<State, string>
  headers?: DOMAttribute<State, string>
  height?: DOMAttribute<State, number | string>
  hidden?: DOMAttribute<State, boolean>
  high?: DOMAttribute<State, number>
  host?: DOMAttribute<State, string>
  hostname?: DOMAttribute<State, string>
  href?: DOMAttribute<State, string>
  hreflang?: DOMAttribute<State, string>
  htmlFor?: DOMAttribute<State, string>
  httpEquiv?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  imageSizes?: DOMAttribute<State, string>
  imageSrcset?: DOMAttribute<State, string>
  indeterminate?: DOMAttribute<State, boolean>
  inputMode?: DOMAttribute<State, string>
  integrity?: DOMAttribute<State, string>
  isMap?: DOMAttribute<State, boolean>
  kind?: DOMAttribute<State, string>
  label?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  length?: DOMAttribute<State, number>
  loop?: DOMAttribute<State, boolean>
  low?: DOMAttribute<State, number>
  max?: DOMAttribute<State, number | string>
  maxLength?: DOMAttribute<State, number>
  media?: DOMAttribute<State, string>
  method?: DOMAttribute<State, string>
  min?: DOMAttribute<State, number | string>
  minLength?: DOMAttribute<State, number>
  msAudioCategory?: DOMAttribute<State, string>
  msAudioDeviceType?: DOMAttribute<State, string>
  msHorizontalMirror?: DOMAttribute<State, boolean>
  msPlayToDisabled?: DOMAttribute<State, boolean>
  msPlayToPreferredSourceUri?: DOMAttribute<State, string>
  msPlayToPrimary?: DOMAttribute<State, boolean>
  msRealTime?: DOMAttribute<State, boolean>
  msStereo3DPackingMode?: DOMAttribute<State, string>
  msStereo3DRenderMode?: DOMAttribute<State, string>
  msZoom?: DOMAttribute<State, boolean>
  multiple?: DOMAttribute<State, boolean>
  muted?: DOMAttribute<State, boolean>
  name?: DOMAttribute<State, string>
  noModule?: DOMAttribute<State, boolean>
  noValidate?: DOMAttribute<State, boolean>
  nonce?: DOMAttribute<State, string>
  onMSVideoFormatChanged?: DOMEventHandler<State, Event, Action>
  onMSVideoFrameStepCompleted?: DOMEventHandler<State, Event, Action>
  onMSVideoOptimalLayoutChanged?: DOMEventHandler<State, Event, Action>
  onabort?: DOMEventHandler<State, UIEvent, Action>
  onafterprint?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onbeforeprint?: DOMEventHandler<State, Event, Action>
  onbeforeunload?: DOMEventHandler<State, BeforeUnloadEvent, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, MouseEvent, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onencrypted?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  onhashchange?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onlanguagechange?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmessage?: DOMEventHandler<State, Event, Action>
  onmessageerror?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onoffline?: DOMEventHandler<State, Event, Action>
  ononline?: DOMEventHandler<State, Event, Action>
  onpagehide?: DOMEventHandler<State, Event, Action>
  onpageshow?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onpopstate?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, ProgressEvent, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onrejectionhandled?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, UIEvent, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onstorage?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onunhandledrejection?: DOMEventHandler<State, Event, Action>
  onunload?: DOMEventHandler<State, Event | EventHandlerNonNull, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwaitingforkey?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
  onzoom?: DOMEventHandler<State, Event, Action>
  open?: DOMAttribute<State, boolean>
  optimum?: DOMAttribute<State, number>
  password?: DOMAttribute<State, string>
  pathname?: DOMAttribute<State, string>
  pattern?: DOMAttribute<State, string>
  ping?: DOMAttribute<State, string>
  placeholder?: DOMAttribute<State, string>
  playbackRate?: DOMAttribute<State, number>
  port?: DOMAttribute<State, string>
  poster?: DOMAttribute<State, string>
  preload?: DOMAttribute<State, string>
  protocol?: DOMAttribute<State, string>
  readOnly?: DOMAttribute<State, boolean>
  referrerPolicy?: DOMAttribute<State, string | ReferrerPolicy>
  rel?: DOMAttribute<State, string>
  required?: DOMAttribute<State, boolean>
  returnValue?: DOMAttribute<State, string>
  reversed?: DOMAttribute<State, boolean>
  rowSpan?: DOMAttribute<State, number>
  rows?: DOMAttribute<State, number>
  scope?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  search?: DOMAttribute<State, string>
  selected?: DOMAttribute<State, boolean>
  selectedIndex?: DOMAttribute<State, number>
  selectionDirection?: DOMAttribute<State, string>
  selectionEnd?: DOMAttribute<State, number>
  selectionStart?: DOMAttribute<State, number>
  shape?: DOMAttribute<State, string>
  size?: DOMAttribute<State, number>
  sizes?: DOMAttribute<State, string>
  slot?: DOMAttribute<State, string>
  span?: DOMAttribute<State, number>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  srcObject?: DOMAttribute<State, MediaStream | MediaSource | Blob>
  srcdoc?: DOMAttribute<State, string>
  srclang?: DOMAttribute<State, string>
  srcset?: DOMAttribute<State, string>
  start?: DOMAttribute<State, number>
  step?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  target?: DOMAttribute<State, string>
  text?: DOMAttribute<State, string>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  type?: DOMAttribute<State, string>
  useMap?: DOMAttribute<State, string>
  username?: DOMAttribute<State, string>
  value?: DOMAttribute<State, string | number>
  valueAsDate?: DOMAttribute<State, Date | null>
  valueAsNumber?: DOMAttribute<State, number>
  volume?: DOMAttribute<State, number>
  width?: DOMAttribute<State, number | string>
  wrap?: DOMAttribute<State, string>
  zoomAndPan?: DOMAttribute<State, number>
}
