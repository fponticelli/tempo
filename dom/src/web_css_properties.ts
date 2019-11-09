/* istanbul ignore file */
import { DOMAttribute } from './value'

export interface CSSProperties {
  'clip-rule'?: string
  'color-interpolation'?: string
  'color-rendering'?: string
  'fill-opacity'?: string
  'fill-rule'?: string
  'shape-rendering'?: string
  'stroke-dasharray'?: string
  'stroke-dashoffset'?: string
  'stroke-linecap'?: string
  'stroke-linejoin'?: string
  'stroke-miterlimit'?: string
  'stroke-opacity'?: string
  'stroke-width'?: string
  'vector-effect'?: string

  'additive-symbols'?: string
  'align-content'?: string
  'align-items'?: string
  'align-self'?: string
  'animation-delay'?: string
  'animation-direction'?: string
  'animation-duration'?: string
  'animation-fill-mode'?: string
  'animation-iteration-count'?: string
  'animation-name'?: string
  'animation-play-state'?: string
  'animation-timing-function'?: string
  'backface-visibility'?: string
  'background-attachment'?: string
  'background-blend-mode'?: string
  'background-clip'?: string
  'background-color'?: string
  'background-image'?: string
  'background-origin'?: string
  'background-position'?: string
  'background-repeat'?: string
  'background-size'?: string
  'block-size'?: string
  'border-block'?: string
  'border-block-color'?: string
  'border-block-end'?: string
  'border-block-end-color'?: string
  'border-block-end-style'?: string
  'border-block-end-width'?: string
  'border-block-start'?: string
  'border-block-start-color'?: string
  'border-block-start-style'?: string
  'border-block-start-width'?: string
  'border-block-style'?: string
  'border-block-width'?: string
  'border-bottom'?: string
  'border-bottom-color'?: string
  'border-bottom-left-radius'?: string
  'border-bottom-right-radius'?: string
  'border-bottom-style'?: string
  'border-bottom-width'?: string
  'border-collapse'?: string
  'border-color'?: string
  'border-end-end-radius'?: string
  'border-end-start-radius'?: string
  'border-image'?: string
  'border-image-outset'?: string
  'border-image-repeat'?: string
  'border-image-slice'?: string
  'border-image-source'?: string
  'border-image-width'?: string
  'border-inline'?: string
  'border-inline-color'?: string
  'border-inline-end'?: string
  'border-inline-end-color'?: string
  'border-inline-end-style'?: string
  'border-inline-end-width'?: string
  'border-inline-start'?: string
  'border-inline-start-color'?: string
  'border-inline-start-style'?: string
  'border-inline-start-width'?: string
  'border-inline-style'?: string
  'border-inline-width'?: string
  'border-left'?: string
  'border-left-color'?: string
  'border-left-style'?: string
  'border-left-width'?: string
  'border-radius'?: string
  'border-right'?: string
  'border-right-color'?: string
  'border-right-style'?: string
  'border-right-width'?: string
  'border-spacing'?: string
  'border-start-end-radius'?: string
  'border-start-start-radius'?: string
  'border-style'?: string
  'border-top'?: string
  'border-top-color'?: string
  'border-top-left-radius'?: string
  'border-top-right-radius'?: string
  'border-top-style'?: string
  'border-top-width'?: string
  'border-width'?: string
  'box-decoration-break'?: string
  'box-shadow'?: string
  'box-sizing'?: string
  'break-after'?: string
  'break-before'?: string
  'break-inside'?: string
  'caption-side'?: string
  'caret-color'?: string
  'clip-path'?: string
  'color-adjust'?: string
  'column-count'?: string
  'column-fill'?: string
  'column-gap'?: string
  'column-rule'?: string
  'column-rule-color'?: string
  'column-rule-style'?: string
  'column-rule-width'?: string
  'column-span'?: string
  'column-width'?: string
  'counter-increment'?: string
  'counter-reset'?: string
  'empty-cells'?: string
  'flex-basis'?: string
  'flex-direction'?: string
  'flex-flow'?: string
  'flex-grow'?: string
  'flex-shrink'?: string
  'flex-wrap'?: string
  'font-family'?: string
  'font-feature-settings'?: string
  'font-kerning'?: string
  'font-language-override'?: string
  'font-optical-sizing'?: string
  'font-size'?: string
  'font-size-adjust'?: string
  'font-stretch'?: string
  'font-style'?: string
  'font-synthesis'?: string
  'font-variant'?: string
  'font-variant-alternates'?: string
  'font-variant-caps'?: string
  'font-variant-east-asian'?: string
  'font-variant-ligatures'?: string
  'font-variant-numeric'?: string
  'font-variant-position'?: string
  'font-variation-settings'?: string
  'font-weight'?: string
  'grid-area'?: string
  'grid-auto-columns'?: string
  'grid-auto-flow'?: string
  'grid-auto-rows'?: string
  'grid-column'?: string
  'grid-column-end'?: string
  'grid-column-start'?: string
  'grid-row'?: string
  'grid-row-end'?: string
  'grid-row-start'?: string
  'grid-template'?: string
  'grid-template-areas'?: string
  'grid-template-columns'?: string
  'grid-template-rows'?: string
  'hanging-punctuation'?: string
  'image-orientation'?: string
  'image-rendering'?: string
  'inline-size'?: string
  'inset-block'?: string
  'inset-block-end'?: string
  'inset-block-start'?: string
  'inset-inline'?: string
  'inset-inline-end'?: string
  'inset-inline-start'?: string
  'justify-content'?: string
  'justify-items'?: string
  'justify-self'?: string
  'letter-spacing'?: string
  'line-break'?: string
  'line-height'?: string
  'list-style'?: string
  'list-style-image'?: string
  'list-style-position'?: string
  'list-style-type'?: string
  'margin-block'?: string
  'margin-block-end'?: string
  'margin-block-start'?: string
  'margin-bottom'?: string
  'margin-inline'?: string
  'margin-inline-end'?: string
  'margin-inline-start'?: string
  'margin-left'?: string
  'margin-right'?: string
  'margin-top'?: string
  'mask-clip'?: string
  'mask-composite'?: string
  'mask-image'?: string
  'mask-mode'?: string
  'mask-origin'?: string
  'mask-position'?: string
  'mask-repeat'?: string
  'mask-size'?: string
  'mask-type'?: string
  'max-height'?: string
  'max-width'?: string
  'max-zoom'?: string
  'min-block-size'?: string
  'min-height'?: string
  'min-inline-size'?: string
  'min-width'?: string
  'min-zoom'?: string
  'mix-blend-mode'?: string
  'object-fit'?: string
  'object-position'?: string
  'outline-color'?: string
  'outline-offset'?: string
  'outline-style'?: string
  'outline-width'?: string
  'overflow-wrap'?: string
  'overflow-x'?: string
  'overflow-y'?: string
  'padding-block'?: string
  'padding-block-end'?: string
  'padding-block-start'?: string
  'padding-bottom'?: string
  'padding-inline'?: string
  'padding-inline-end'?: string
  'padding-inline-start'?: string
  'padding-left'?: string
  'padding-right'?: string
  'padding-top'?: string
  'page-break-after'?: string
  'page-break-before'?: string
  'page-break-inside'?: string
  'perspective-origin'?: string
  'place-content'?: string
  'place-items'?: string
  'pointer-events'?: string
  'row-gap'?: string
  'scroll-behavior'?: string
  'scroll-margin'?: string
  'scroll-margin-block'?: string
  'scroll-margin-block-end'?: string
  'scroll-margin-block-start'?: string
  'scroll-margin-bottom'?: string
  'scroll-margin-inline'?: string
  'scroll-margin-inline-end'?: string
  'scroll-margin-inline-start'?: string
  'scroll-margin-left'?: string
  'scroll-margin-right'?: string
  'scroll-margin-top'?: string
  'scroll-padding'?: string
  'scroll-padding-block'?: string
  'scroll-padding-block-end'?: string
  'scroll-padding-block-start'?: string
  'scroll-padding-bottom'?: string
  'scroll-padding-inline'?: string
  'scroll-padding-inline-end'?: string
  'scroll-padding-inline-start'?: string
  'scroll-padding-left'?: string
  'scroll-padding-right'?: string
  'scroll-padding-top'?: string
  'scroll-snap-align'?: string
  'scroll-snap-stop'?: string
  'scroll-snap-type'?: string
  'scrollbar-color'?: string
  'scrollbar-width'?: string
  'shape-image-threshold'?: string
  'shape-margin'?: string
  'shape-outside'?: string
  'speak-as'?: string
  'tab-size'?: string
  'table-layout'?: string
  'text-align'?: string
  'text-align-last'?: string
  'text-combine-upright'?: string
  'text-decoration'?: string
  'text-decoration-color'?: string
  'text-decoration-line'?: string
  'text-decoration-style'?: string
  'text-emphasis'?: string
  'text-emphasis-color'?: string
  'text-emphasis-position'?: string
  'text-emphasis-style'?: string
  'text-indent'?: string
  'text-justify'?: string
  'text-orientation'?: string
  'text-overflow'?: string
  'text-rendering'?: string
  'text-shadow'?: string
  'text-transform'?: string
  'text-underline-position'?: string
  'touch-action'?: string
  'transform-box'?: string
  'transform-origin'?: string
  'transform-style'?: string
  'transition-delay'?: string
  'transition-duration'?: string
  'transition-property'?: string
  'transition-timing-function'?: string
  'unicode-bidi'?: string
  'unicode-range'?: string
  'user-zoom'?: string
  'vertical-align'?: string
  'white-space'?: string
  'will-change'?: string
  'word-break'?: string
  'word-spacing'?: string
  'word-wrap'?: string
  'writing-mode'?: string
  'z-index'?: string

  fill?: string
  stroke?: string

  all?: string
  animation?: string
  background?: string
  border?: string
  bottom?: string
  clear?: string
  clip?: string
  color?: string
  columns?: string
  content?: string
  cursor?: string
  direction?: string
  display?: string
  fallback?: string
  filter?: string
  flex?: string
  float?: string
  font?: string
  gap?: string
  grid?: string
  height?: string
  hyphens?: string
  inset?: string
  isolation?: string
  left?: string
  margin?: string
  mask?: string
  negative?: string
  opacity?: string
  order?: string
  orientation?: string
  orphans?: string
  outline?: string
  overflow?: string
  pad?: string
  padding?: string
  perspective?: string
  position?: string
  prefix?: string
  quotes?: string
  range?: string
  resize?: string
  revert?: string
  right?: string
  rotate?: string
  scale?: string
  src?: string
  suffix?: string
  symbols?: string
  system?: string
  top?: string
  transform?: string
  transition?: string
  translate?: string
  unset?: string
  visibility?: string
  whiteSpace?: string
  widows?: string
  width?: string
  zoom?: string
}

export interface CSSAttributes<State> {
  '$clip-rule'?: DOMAttribute<State, string>
  '$color-interpolation'?: DOMAttribute<State, string>
  '$color-rendering'?: DOMAttribute<State, string>
  '$fill-opacity'?: DOMAttribute<State, string>
  '$fill-rule'?: DOMAttribute<State, string>
  '$shape-rendering'?: DOMAttribute<State, string>
  '$stroke-dasharray'?: DOMAttribute<State, string>
  '$stroke-dashoffset'?: DOMAttribute<State, string>
  '$stroke-linecap'?: DOMAttribute<State, string>
  '$stroke-linejoin'?: DOMAttribute<State, string>
  '$stroke-miterlimit'?: DOMAttribute<State, string>
  '$stroke-opacity'?: DOMAttribute<State, string>
  '$stroke-width'?: DOMAttribute<State, string>
  '$vector-effect'?: DOMAttribute<State, string>

  '$additive-symbols'?: DOMAttribute<State, string>
  '$align-content'?: DOMAttribute<State, string>
  '$align-items'?: DOMAttribute<State, string>
  '$align-self'?: DOMAttribute<State, string>
  '$animation-delay'?: DOMAttribute<State, string>
  '$animation-direction'?: DOMAttribute<State, string>
  '$animation-duration'?: DOMAttribute<State, string>
  '$animation-fill-mode'?: DOMAttribute<State, string>
  '$animation-iteration-count'?: DOMAttribute<State, string>
  '$animation-name'?: DOMAttribute<State, string>
  '$animation-play-state'?: DOMAttribute<State, string>
  '$animation-timing-function'?: DOMAttribute<State, string>
  '$backface-visibility'?: DOMAttribute<State, string>
  '$background-attachment'?: DOMAttribute<State, string>
  '$background-blend-mode'?: DOMAttribute<State, string>
  '$background-clip'?: DOMAttribute<State, string>
  '$background-color'?: DOMAttribute<State, string>
  '$background-image'?: DOMAttribute<State, string>
  '$background-origin'?: DOMAttribute<State, string>
  '$background-position'?: DOMAttribute<State, string>
  '$background-repeat'?: DOMAttribute<State, string>
  '$background-size'?: DOMAttribute<State, string>
  '$block-size'?: DOMAttribute<State, string>
  '$border-block'?: DOMAttribute<State, string>
  '$border-block-color'?: DOMAttribute<State, string>
  '$border-block-end'?: DOMAttribute<State, string>
  '$border-block-end-color'?: DOMAttribute<State, string>
  '$border-block-end-style'?: DOMAttribute<State, string>
  '$border-block-end-width'?: DOMAttribute<State, string>
  '$border-block-start'?: DOMAttribute<State, string>
  '$border-block-start-color'?: DOMAttribute<State, string>
  '$border-block-start-style'?: DOMAttribute<State, string>
  '$border-block-start-width'?: DOMAttribute<State, string>
  '$border-block-style'?: DOMAttribute<State, string>
  '$border-block-width'?: DOMAttribute<State, string>
  '$border-bottom'?: DOMAttribute<State, string>
  '$border-bottom-color'?: DOMAttribute<State, string>
  '$border-bottom-left-radius'?: DOMAttribute<State, string>
  '$border-bottom-right-radius'?: DOMAttribute<State, string>
  '$border-bottom-style'?: DOMAttribute<State, string>
  '$border-bottom-width'?: DOMAttribute<State, string>
  '$border-collapse'?: DOMAttribute<State, string>
  '$border-color'?: DOMAttribute<State, string>
  '$border-end-end-radius'?: DOMAttribute<State, string>
  '$border-end-start-radius'?: DOMAttribute<State, string>
  '$border-image'?: DOMAttribute<State, string>
  '$border-image-outset'?: DOMAttribute<State, string>
  '$border-image-repeat'?: DOMAttribute<State, string>
  '$border-image-slice'?: DOMAttribute<State, string>
  '$border-image-source'?: DOMAttribute<State, string>
  '$border-image-width'?: DOMAttribute<State, string>
  '$border-inline'?: DOMAttribute<State, string>
  '$border-inline-color'?: DOMAttribute<State, string>
  '$border-inline-end'?: DOMAttribute<State, string>
  '$border-inline-end-color'?: DOMAttribute<State, string>
  '$border-inline-end-style'?: DOMAttribute<State, string>
  '$border-inline-end-width'?: DOMAttribute<State, string>
  '$border-inline-start'?: DOMAttribute<State, string>
  '$border-inline-start-color'?: DOMAttribute<State, string>
  '$border-inline-start-style'?: DOMAttribute<State, string>
  '$border-inline-start-width'?: DOMAttribute<State, string>
  '$border-inline-style'?: DOMAttribute<State, string>
  '$border-inline-width'?: DOMAttribute<State, string>
  '$border-left'?: DOMAttribute<State, string>
  '$border-left-color'?: DOMAttribute<State, string>
  '$border-left-style'?: DOMAttribute<State, string>
  '$border-left-width'?: DOMAttribute<State, string>
  '$border-radius'?: DOMAttribute<State, string>
  '$border-right'?: DOMAttribute<State, string>
  '$border-right-color'?: DOMAttribute<State, string>
  '$border-right-style'?: DOMAttribute<State, string>
  '$border-right-width'?: DOMAttribute<State, string>
  '$border-spacing'?: DOMAttribute<State, string>
  '$border-start-end-radius'?: DOMAttribute<State, string>
  '$border-start-start-radius'?: DOMAttribute<State, string>
  '$border-style'?: DOMAttribute<State, string>
  '$border-top'?: DOMAttribute<State, string>
  '$border-top-color'?: DOMAttribute<State, string>
  '$border-top-left-radius'?: DOMAttribute<State, string>
  '$border-top-right-radius'?: DOMAttribute<State, string>
  '$border-top-style'?: DOMAttribute<State, string>
  '$border-top-width'?: DOMAttribute<State, string>
  '$border-width'?: DOMAttribute<State, string>
  '$box-decoration-break'?: DOMAttribute<State, string>
  '$box-shadow'?: DOMAttribute<State, string>
  '$box-sizing'?: DOMAttribute<State, string>
  '$break-after'?: DOMAttribute<State, string>
  '$break-before'?: DOMAttribute<State, string>
  '$break-inside'?: DOMAttribute<State, string>
  '$caption-side'?: DOMAttribute<State, string>
  '$caret-color'?: DOMAttribute<State, string>
  '$clip-path'?: DOMAttribute<State, string>
  '$color-adjust'?: DOMAttribute<State, string>
  '$column-count'?: DOMAttribute<State, string>
  '$column-fill'?: DOMAttribute<State, string>
  '$column-gap'?: DOMAttribute<State, string>
  '$column-rule'?: DOMAttribute<State, string>
  '$column-rule-color'?: DOMAttribute<State, string>
  '$column-rule-style'?: DOMAttribute<State, string>
  '$column-rule-width'?: DOMAttribute<State, string>
  '$column-span'?: DOMAttribute<State, string>
  '$column-width'?: DOMAttribute<State, string>
  '$counter-increment'?: DOMAttribute<State, string>
  '$counter-reset'?: DOMAttribute<State, string>
  '$empty-cells'?: DOMAttribute<State, string>
  '$flex-basis'?: DOMAttribute<State, string>
  '$flex-direction'?: DOMAttribute<State, string>
  '$flex-flow'?: DOMAttribute<State, string>
  '$flex-grow'?: DOMAttribute<State, string>
  '$flex-shrink'?: DOMAttribute<State, string>
  '$flex-wrap'?: DOMAttribute<State, string>
  '$font-family'?: DOMAttribute<State, string>
  '$font-feature-settings'?: DOMAttribute<State, string>
  '$font-kerning'?: DOMAttribute<State, string>
  '$font-language-override'?: DOMAttribute<State, string>
  '$font-optical-sizing'?: DOMAttribute<State, string>
  '$font-size'?: DOMAttribute<State, string>
  '$font-size-adjust'?: DOMAttribute<State, string>
  '$font-stretch'?: DOMAttribute<State, string>
  '$font-style'?: DOMAttribute<State, string>
  '$font-synthesis'?: DOMAttribute<State, string>
  '$font-variant'?: DOMAttribute<State, string>
  '$font-variant-alternates'?: DOMAttribute<State, string>
  '$font-variant-caps'?: DOMAttribute<State, string>
  '$font-variant-east-asian'?: DOMAttribute<State, string>
  '$font-variant-ligatures'?: DOMAttribute<State, string>
  '$font-variant-numeric'?: DOMAttribute<State, string>
  '$font-variant-position'?: DOMAttribute<State, string>
  '$font-variation-settings'?: DOMAttribute<State, string>
  '$font-weight'?: DOMAttribute<State, string>
  '$grid-area'?: DOMAttribute<State, string>
  '$grid-auto-columns'?: DOMAttribute<State, string>
  '$grid-auto-flow'?: DOMAttribute<State, string>
  '$grid-auto-rows'?: DOMAttribute<State, string>
  '$grid-column'?: DOMAttribute<State, string>
  '$grid-column-end'?: DOMAttribute<State, string>
  '$grid-column-start'?: DOMAttribute<State, string>
  '$grid-row'?: DOMAttribute<State, string>
  '$grid-row-end'?: DOMAttribute<State, string>
  '$grid-row-start'?: DOMAttribute<State, string>
  '$grid-template'?: DOMAttribute<State, string>
  '$grid-template-areas'?: DOMAttribute<State, string>
  '$grid-template-columns'?: DOMAttribute<State, string>
  '$grid-template-rows'?: DOMAttribute<State, string>
  '$hanging-punctuation'?: DOMAttribute<State, string>
  '$image-orientation'?: DOMAttribute<State, string>
  '$image-rendering'?: DOMAttribute<State, string>
  '$inline-size'?: DOMAttribute<State, string>
  '$inset-block'?: DOMAttribute<State, string>
  '$inset-block-end'?: DOMAttribute<State, string>
  '$inset-block-start'?: DOMAttribute<State, string>
  '$inset-inline'?: DOMAttribute<State, string>
  '$inset-inline-end'?: DOMAttribute<State, string>
  '$inset-inline-start'?: DOMAttribute<State, string>
  '$justify-content'?: DOMAttribute<State, string>
  '$justify-items'?: DOMAttribute<State, string>
  '$justify-self'?: DOMAttribute<State, string>
  '$letter-spacing'?: DOMAttribute<State, string>
  '$line-break'?: DOMAttribute<State, string>
  '$line-height'?: DOMAttribute<State, string>
  '$list-style'?: DOMAttribute<State, string>
  '$list-style-image'?: DOMAttribute<State, string>
  '$list-style-position'?: DOMAttribute<State, string>
  '$list-style-type'?: DOMAttribute<State, string>
  '$margin-block'?: DOMAttribute<State, string>
  '$margin-block-end'?: DOMAttribute<State, string>
  '$margin-block-start'?: DOMAttribute<State, string>
  '$margin-bottom'?: DOMAttribute<State, string>
  '$margin-inline'?: DOMAttribute<State, string>
  '$margin-inline-end'?: DOMAttribute<State, string>
  '$margin-inline-start'?: DOMAttribute<State, string>
  '$margin-left'?: DOMAttribute<State, string>
  '$margin-right'?: DOMAttribute<State, string>
  '$margin-top'?: DOMAttribute<State, string>
  '$mask-clip'?: DOMAttribute<State, string>
  '$mask-composite'?: DOMAttribute<State, string>
  '$mask-image'?: DOMAttribute<State, string>
  '$mask-mode'?: DOMAttribute<State, string>
  '$mask-origin'?: DOMAttribute<State, string>
  '$mask-position'?: DOMAttribute<State, string>
  '$mask-repeat'?: DOMAttribute<State, string>
  '$mask-size'?: DOMAttribute<State, string>
  '$mask-type'?: DOMAttribute<State, string>
  '$max-height'?: DOMAttribute<State, string>
  '$max-width'?: DOMAttribute<State, string>
  '$max-zoom'?: DOMAttribute<State, string>
  '$min-block-size'?: DOMAttribute<State, string>
  '$min-height'?: DOMAttribute<State, string>
  '$min-inline-size'?: DOMAttribute<State, string>
  '$min-width'?: DOMAttribute<State, string>
  '$min-zoom'?: DOMAttribute<State, string>
  '$mix-blend-mode'?: DOMAttribute<State, string>
  '$object-fit'?: DOMAttribute<State, string>
  '$object-position'?: DOMAttribute<State, string>
  '$outline-color'?: DOMAttribute<State, string>
  '$outline-offset'?: DOMAttribute<State, string>
  '$outline-style'?: DOMAttribute<State, string>
  '$outline-width'?: DOMAttribute<State, string>
  '$overflow-wrap'?: DOMAttribute<State, string>
  '$overflow-x'?: DOMAttribute<State, string>
  '$overflow-y'?: DOMAttribute<State, string>
  '$padding-block'?: DOMAttribute<State, string>
  '$padding-block-end'?: DOMAttribute<State, string>
  '$padding-block-start'?: DOMAttribute<State, string>
  '$padding-bottom'?: DOMAttribute<State, string>
  '$padding-inline'?: DOMAttribute<State, string>
  '$padding-inline-end'?: DOMAttribute<State, string>
  '$padding-inline-start'?: DOMAttribute<State, string>
  '$padding-left'?: DOMAttribute<State, string>
  '$padding-right'?: DOMAttribute<State, string>
  '$padding-top'?: DOMAttribute<State, string>
  '$page-break-after'?: DOMAttribute<State, string>
  '$page-break-before'?: DOMAttribute<State, string>
  '$page-break-inside'?: DOMAttribute<State, string>
  '$perspective-origin'?: DOMAttribute<State, string>
  '$place-content'?: DOMAttribute<State, string>
  '$place-items'?: DOMAttribute<State, string>
  '$pointer-events'?: DOMAttribute<State, string>
  '$row-gap'?: DOMAttribute<State, string>
  '$scroll-behavior'?: DOMAttribute<State, string>
  '$scroll-margin'?: DOMAttribute<State, string>
  '$scroll-margin-block'?: DOMAttribute<State, string>
  '$scroll-margin-block-end'?: DOMAttribute<State, string>
  '$scroll-margin-block-start'?: DOMAttribute<State, string>
  '$scroll-margin-bottom'?: DOMAttribute<State, string>
  '$scroll-margin-inline'?: DOMAttribute<State, string>
  '$scroll-margin-inline-end'?: DOMAttribute<State, string>
  '$scroll-margin-inline-start'?: DOMAttribute<State, string>
  '$scroll-margin-left'?: DOMAttribute<State, string>
  '$scroll-margin-right'?: DOMAttribute<State, string>
  '$scroll-margin-top'?: DOMAttribute<State, string>
  '$scroll-padding'?: DOMAttribute<State, string>
  '$scroll-padding-block'?: DOMAttribute<State, string>
  '$scroll-padding-block-end'?: DOMAttribute<State, string>
  '$scroll-padding-block-start'?: DOMAttribute<State, string>
  '$scroll-padding-bottom'?: DOMAttribute<State, string>
  '$scroll-padding-inline'?: DOMAttribute<State, string>
  '$scroll-padding-inline-end'?: DOMAttribute<State, string>
  '$scroll-padding-inline-start'?: DOMAttribute<State, string>
  '$scroll-padding-left'?: DOMAttribute<State, string>
  '$scroll-padding-right'?: DOMAttribute<State, string>
  '$scroll-padding-top'?: DOMAttribute<State, string>
  '$scroll-snap-align'?: DOMAttribute<State, string>
  '$scroll-snap-stop'?: DOMAttribute<State, string>
  '$scroll-snap-type'?: DOMAttribute<State, string>
  '$scrollbar-color'?: DOMAttribute<State, string>
  '$scrollbar-width'?: DOMAttribute<State, string>
  '$shape-image-threshold'?: DOMAttribute<State, string>
  '$shape-margin'?: DOMAttribute<State, string>
  '$shape-outside'?: DOMAttribute<State, string>
  '$speak-as'?: DOMAttribute<State, string>
  '$tab-size'?: DOMAttribute<State, string>
  '$table-layout'?: DOMAttribute<State, string>
  '$text-align'?: DOMAttribute<State, string>
  '$text-align-last'?: DOMAttribute<State, string>
  '$text-combine-upright'?: DOMAttribute<State, string>
  '$text-decoration'?: DOMAttribute<State, string>
  '$text-decoration-color'?: DOMAttribute<State, string>
  '$text-decoration-line'?: DOMAttribute<State, string>
  '$text-decoration-style'?: DOMAttribute<State, string>
  '$text-emphasis'?: DOMAttribute<State, string>
  '$text-emphasis-color'?: DOMAttribute<State, string>
  '$text-emphasis-position'?: DOMAttribute<State, string>
  '$text-emphasis-style'?: DOMAttribute<State, string>
  '$text-indent'?: DOMAttribute<State, string>
  '$text-justify'?: DOMAttribute<State, string>
  '$text-orientation'?: DOMAttribute<State, string>
  '$text-overflow'?: DOMAttribute<State, string>
  '$text-rendering'?: DOMAttribute<State, string>
  '$text-shadow'?: DOMAttribute<State, string>
  '$text-transform'?: DOMAttribute<State, string>
  '$text-underline-position'?: DOMAttribute<State, string>
  '$touch-action'?: DOMAttribute<State, string>
  '$transform-box'?: DOMAttribute<State, string>
  '$transform-origin'?: DOMAttribute<State, string>
  '$transform-style'?: DOMAttribute<State, string>
  '$transition-delay'?: DOMAttribute<State, string>
  '$transition-duration'?: DOMAttribute<State, string>
  '$transition-property'?: DOMAttribute<State, string>
  '$transition-timing-function'?: DOMAttribute<State, string>
  '$unicode-bidi'?: DOMAttribute<State, string>
  '$unicode-range'?: DOMAttribute<State, string>
  '$user-zoom'?: DOMAttribute<State, string>
  '$vertical-align'?: DOMAttribute<State, string>
  '$white-space'?: DOMAttribute<State, string>
  '$will-change'?: DOMAttribute<State, string>
  '$word-break'?: DOMAttribute<State, string>
  '$word-spacing'?: DOMAttribute<State, string>
  '$word-wrap'?: DOMAttribute<State, string>
  '$writing-mode'?: DOMAttribute<State, string>
  '$z-index'?: DOMAttribute<State, string>

  $fill?: DOMAttribute<State, string>
  $stroke?: DOMAttribute<State, string>

  $all?: DOMAttribute<State, string>
  $animation?: DOMAttribute<State, string>
  $background?: DOMAttribute<State, string>
  $border?: DOMAttribute<State, string>
  $bottom?: DOMAttribute<State, string>
  $clear?: DOMAttribute<State, string>
  $clip?: DOMAttribute<State, string>
  $color?: DOMAttribute<State, string>
  $columns?: DOMAttribute<State, string>
  $content?: DOMAttribute<State, string>
  $cursor?: DOMAttribute<State, string>
  $direction?: DOMAttribute<State, string>
  $display?: DOMAttribute<State, string>
  $fallback?: DOMAttribute<State, string>
  $filter?: DOMAttribute<State, string>
  $flex?: DOMAttribute<State, string>
  $float?: DOMAttribute<State, string>
  $font?: DOMAttribute<State, string>
  $gap?: DOMAttribute<State, string>
  $grid?: DOMAttribute<State, string>
  $height?: DOMAttribute<State, string>
  $hyphens?: DOMAttribute<State, string>
  $inset?: DOMAttribute<State, string>
  $isolation?: DOMAttribute<State, string>
  $left?: DOMAttribute<State, string>
  $margin?: DOMAttribute<State, string>
  $mask?: DOMAttribute<State, string>
  $negative?: DOMAttribute<State, string>
  $opacity?: DOMAttribute<State, string>
  $order?: DOMAttribute<State, string>
  $orientation?: DOMAttribute<State, string>
  $orphans?: DOMAttribute<State, string>
  $outline?: DOMAttribute<State, string>
  $overflow?: DOMAttribute<State, string>
  $pad?: DOMAttribute<State, string>
  $padding?: DOMAttribute<State, string>
  $perspective?: DOMAttribute<State, string>
  $position?: DOMAttribute<State, string>
  $prefix?: DOMAttribute<State, string>
  $quotes?: DOMAttribute<State, string>
  $range?: DOMAttribute<State, string>
  $resize?: DOMAttribute<State, string>
  $revert?: DOMAttribute<State, string>
  $right?: DOMAttribute<State, string>
  $rotate?: DOMAttribute<State, string>
  $scale?: DOMAttribute<State, string>
  $src?: DOMAttribute<State, string>
  $suffix?: DOMAttribute<State, string>
  $symbols?: DOMAttribute<State, string>
  $system?: DOMAttribute<State, string>
  $top?: DOMAttribute<State, string>
  $transform?: DOMAttribute<State, string>
  $transition?: DOMAttribute<State, string>
  $translate?: DOMAttribute<State, string>
  $unset?: DOMAttribute<State, string>
  $visibility?: DOMAttribute<State, string>
  $whiteSpace?: DOMAttribute<State, string>
  $widows?: DOMAttribute<State, string>
  $width?: DOMAttribute<State, string>
  $zoom?: DOMAttribute<State, string>
}
