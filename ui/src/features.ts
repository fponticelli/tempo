// import { flatten } from 'tempo-std/lib/arrays'

export interface RuleDescription {
  selector: string
  rules: string[]
}

export interface ClassDescription {
  cls: string
  desc: RuleDescription[]
}

// export interface FeatureDescription {
//   cls: string
//   key: string
//   variables: string[]
//   desc: RuleDescription[]
// }

export const features = {
  orientation: {
    row: {
      cls: 'r',
      desc: [
        {
          selector: '.r',
          rules: ['display: flex']
        }
      ]
    },
    col: {
      cls: 'c',
      desc: [
        {
          selector: '.c',
          rules: ['display: flex', 'flex-direction: column']
        }
      ]
    }
  },
  background: (prefix: string, pseudo: string) => ({
    cls: `${prefix}bg`,
    desc: [
      {
        selector: `.${prefix}bg${pseudo}`,
        rules: [`background: var(--${prefix}bg)`]
      }
    ]
  }),
  padding: (prefix: string, pseudo: string) => ({
    cls: `${prefix}p`,
    desc: [
      {
        selector: `.${prefix}p${pseudo}`,
        rules: [
          `padding-top: var(--${prefix}p-t, var(--${prefix}p))`,
          `padding-right: var(--${prefix}p-r, var(--${prefix}p))`,
          `padding-bottom: var(--${prefix}p-b, var(--${prefix}p))`,
          `padding-left: var(--${prefix}p-l, var(--${prefix}p))`
        ]
      }
    ]
  }),
  transition: (prefix: string, pseudo: string) => ({
    cls: `${prefix}t`,
    desc: [
      {
        selector: `.${prefix}t${pseudo}`,
        rules: [`transition: var(--${prefix}t)`]
      }
    ]
  }),
  width: (prefix: string, pseudo: string) => ({
    cls: `${prefix}w`,
    desc: [
      {
        selector: `.${prefix}w${pseudo}`,
        rules: [`min-width: var(--${prefix}w)`, `max-width: var(--${prefix}w)`]
      }
    ]
  }),
  height: (prefix: string, pseudo: string) => ({
    cls: `${prefix}h`,
    desc: [
      {
        selector: `.${prefix}h${pseudo}`,
        rules: [
          `min-height: var(--${prefix}h)`,
          `max-height: var(--${prefix}h)`
        ]
      }
    ]
  }),
  fill: (prefix: string, pseudo: string) => ({
    cls: `${prefix}f`,
    desc: [
      {
        selector: `.r > .${prefix}f${pseudo}`,
        rules: [
          `flex-grow: var(--${prefix}f)`,
          `flex-shrink: var(--${prefix}f)`,
          `flex-basis: 10%`
        ]
      },
      {
        selector: `.c > .${prefix}f${pseudo}`,
        rules: [
          `flex-grow: var(--${prefix}f)`,
          `flex-shrink: var(--${prefix}f)`,
          `flex-basis: 10%`
        ]
      }
    ]
  }),
  border: (prefix: string, pseudo: string) => ({
    cls: `${prefix}b`,
    desc: [
      {
        selector: `.${prefix}b${pseudo}`,
        rules: [`border: var(--${prefix}b)`, `border-image: var(--${prefix}bi)`]
      }
    ]
  })
  // overflowHorizontal: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}oh`,
  //   key: `${prefix}:oh`,
  //   variables: [`${prefix}oh`],
  //   desc: [{
  //     selector: '.oh',
  //     rules: [`overflow-x: var(--${prefix}oh)`]
  //   }],
  // }),
  // overflowVertical: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}ov`,
  //   key: `${prefix}:ov`,
  //   variables: [`${prefix}ov`],
  //   desc: [{
  //     selector: '.ov',
  //     rules: [`overflow-y: var(--${prefix}ov)`]
  //   }],
  // }),
  // border: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}b`,
  //   key: `${prefix}:b`,
  //   variables: [
  //     `${prefix}b-t`, `${prefix}b-r`, `${prefix}b-b`,
  //     `${prefix}b-l`, `${prefix}b-a`
  //   ],
  //   desc: [{
  //     selector: '.b',
  //     rules: [
  //       `border-top: var(--${prefix}b-t, var(--${prefix}b-a))`,
  //       `border-right: var(--${prefix}b-r, var(--${prefix}b-a))`,
  //       `border-bottom: var(--${prefix}b-b, var(--${prefix}b-a))`,
  //       `border-left: var(--${prefix}b-l, var(--${prefix}b-a))`
  //     ]
  //   }]
  // }),
  // borderRadius: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}br`,
  //   key: `${prefix}:br`,
  //   variables: [
  //     `${prefix}br-tl`, `${prefix}br-tr`, `${prefix}br-br`,
  //     `${prefix}br-bl`, `${prefix}br-a`
  //   ],
  //   desc: [{
  //     selector: '.br',
  //     rules: [
  //       `border-radius: var(--${prefix}br-tl, var(--${prefix}br-a)) ` +
  //       `var(--${prefix}br-tr, var(--${prefix}br-a)) var(--${prefix}br-br, ` +
  //       `var(--${prefix}br-a)) var(--${prefix}br-bl, var(--${prefix}br-a))`
  //     ]
  //   }]
  // }),
  // distribution: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}d`,
  //   key: `${prefix}:d`,
  //   variables: [`${prefix}d`],
  //   desc: [{
  //     selector: '.d',
  //     rules: [`justify-content: var(--${prefix}d)`]
  //   }]
  // }),
  // padding: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}p`,
  //   key: `${prefix}:p`,
  //   variables: [
  //     `${prefix}p-t`, `${prefix}p-r`, `${prefix}p-b`,
  //     `${prefix}p-l`, `${prefix}p-a`
  //   ],
  //   desc: [{
  //     selector: '.p',
  //     rules: [
  //       `padding-top: var(--${prefix}p-t, var(--${prefix}p-a))`,
  //       `padding-right: var(--${prefix}p-r, var(--${prefix}p-a))`,
  //       `padding-bottom: var(--${prefix}p-b, var(--${prefix}p-a))`,
  //       `padding-left: var(--${prefix}p-l, var(--${prefix}p-a))`
  //     ]
  //   }]
  // }),
  // row: (prefix: string) => ({
  //   cls: `${prefix}r`,
  //   key: `${prefix}:r`,
  //   variables: [],
  //   desc: [{
  //     selector: '.r',
  //     rules: ['display: flex']
  //   }, {
  //     selector: '.r > *',
  //     rules: ['flex: 1 1']
  //   }]
  // }),
  // column: (prefix: string) => ({
  //   cls: `${prefix}c`,
  //   key: `${prefix}:c`,
  //   variables: [],
  //   desc: [{
  //     selector: '.c',
  //     rules: ['display: flex', 'flex-direction: column']
  //   }, {
  //     selector: '.c > *',
  //     rules: ['flex: 1 1']
  //   }]
  // }),
  // spacing: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}sp`,
  //   key: `${prefix}:sp`,
  //   variables: [`${prefix}sp`],
  //   desc: [{
  //     selector: '.r.sp > *',
  //     rules: [`margin-right: var(--${prefix}sp)`]
  //   }, {
  //     selector: '.r.sp > *:last-child',
  //     rules: [`margin-right: 0`]
  //   }, {
  //     selector: '.c.sp > *',
  //     rules: [`margin-bottom: var(--${prefix}sp)`]
  //   }, {
  //     selector: '.c.sp > *:last-child',
  //     rules: [`margin-bottom: 0`]
  //   }, {
  //     selector: '.sp > p:last-child',
  //     rules: [`margin-bottom: 0`]
  //   }, {
  //     selector: '.sp > p',
  //     rules: [`margin-bottom: var(--${prefix}sp)`]
  //   }]
  // }),
  // alignItems: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}a`,
  //   key: `${prefix}:a`,
  //   variables: [`${prefix}a`],
  //   desc: [{
  //     selector: '.a',
  //     rules: [`align-items: var(--${prefix}a)`]
  //   }]
  // }),
  // alignSelf: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}sa`,
  //   key: `${prefix}:sa`,
  //   variables: [`${prefix}sa`],
  //   desc: [{
  //     selector: '.sa',
  //     rules: [`align-self: var(--${prefix}sa)`]
  //   }]
  // }),
  // boxShadow: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}bs`,
  //   key: `${prefix}:bs`,
  //   variables: [`${prefix}bs`],
  //   desc: [{
  //     selector: '.bs',
  //     rules: [`box-shadow: var(--${prefix}bs)`]
  //   }]
  // }),
  // textShadow: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}ts`,
  //   key: `${prefix}:ts`,
  //   variables: [`${prefix}ts`],
  //   desc: [{
  //     selector: '.ts',
  //     rules: [`text-shadow: var(--${prefix}ts)`]
  //   }]
  // }),
  // textColor: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}tc`,
  //   key: `${prefix}:tc`,
  //   variables: [`${prefix}tc`],
  //   desc: [{
  //     selector: '.tc',
  //     rules: [`color: var(--${prefix}tc)`]
  //   }]
  // }),
  // textDirection: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}td`,
  //   key: `${prefix}:td`,
  //   variables: [`${prefix}td`],
  //   desc: [{
  //     selector: '.td',
  //     rules: [`direction: var(--${prefix}td)`]
  //   }]
  // }),
  // fontFamily: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}ff`,
  //   key: `${prefix}:ff`,
  //   variables: [`${prefix}ff`],
  //   desc: [{
  //     selector: '.ff',
  //     rules: [`font-family: var(--${prefix}ff)`]
  //   }]
  // }),
  // fontSize: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}fs`,
  //   key: `${prefix}:fs`,
  //   variables: [`${prefix}fs`],
  //   desc: [{
  //     selector: '.fs',
  //     rules: [`font-size: var(--${prefix}fs)`]
  //   }]
  // }),
  // fontVariantLigatures: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}fl`,
  //   key: `${prefix}:fl`,
  //   variables: [`${prefix}fl`],
  //   desc: [{
  //     selector: '.fl',
  //     rules: [`font-variant-ligatures: var(--${prefix}fl)`]
  //   }]
  // }),
  // fontVariantNumeric: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}fn`,
  //   key: `${prefix}:fn`,
  //   variables: [`${prefix}fn`],
  //   desc: [{
  //     selector: '.fn',
  //     rules: [`font-variant-numeric: var(--${prefix}fn)`]
  //   }]
  // }),
  // fontWeight: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}fw`,
  //   key: `${prefix}:fw`,
  //   variables: [`${prefix}fw`],
  //   desc: [{
  //     selector: '.fw',
  //     rules: [`font-weight: var(--${prefix}fw)`]
  //   }]
  // }),
  // letterSpacing: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}ls`,
  //   key: `${prefix}:ls`,
  //   variables: [`${prefix}ls`],
  //   desc: [{
  //     selector: '.ls',
  //     rules: [`letter-spacing: var(--${prefix}ls)`]
  //   }]
  // }),
  // lineHeight: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}lh`,
  //   key: `${prefix}:lh`,
  //   variables: [`${prefix}lh`],
  //   desc: [{
  //     selector: '.lh',
  //     rules: [`line-height: var(--${prefix}lh)`]
  //   }]
  // }),
  // tabSize: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}tts`,
  //   key: `${prefix}:tts`,
  //   variables: [`${prefix}tts`],
  //   desc: [{
  //     selector: '.tts',
  //     rules: [
  //       `white-space: var(--tts${prefix}-ws, pre-wrap)`,
  //       `tab-size: var(--tts${prefix})`
  //     ]
  //   }]
  // }),
  // whiteSpace: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}ws`,
  //   key: `${prefix}:ws`,
  //   variables: [`${prefix}ws`],
  //   desc: [{
  //     selector: '.ws',
  //     rules: [`white-space: var(--${prefix}ws)`]
  //   }]
  // }),
  // textAlign: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}ta`,
  //   key: `${prefix}:ta`,
  //   variables: [`${prefix}ta`],
  //   desc: [{
  //     selector: '.ta',
  //     rules: [`text-align: var(--${prefix}ta)`]
  //   }]
  // }),
  // textOverflow: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}to`,
  //   key: `${prefix}:to`,
  //   variables: [`${prefix}to`],
  //   desc: [{
  //     selector: '.to',
  //     rules: [
  //       `white-space: nowrap`,
  //       `overflow: hidden`,
  //       `text-overflow: var(--${prefix}to)`
  //     ]
  //   }]
  // }),
  // textDecoration: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}tde`,
  //   key: `${prefix}:tde`,
  //   variables: [`${prefix}tde`],
  //   desc: [{
  //     selector: '.tde',
  //     rules: [`text-decoration: var(--${prefix}tde)`]
  //   }]
  // }),
  // textTransform: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}tt`,
  //   key: `${prefix}:tt`,
  //   variables: [`${prefix}tt`],
  //   desc: [{
  //     selector: '.tt',
  //     rules: [`text-transform: var(--${prefix}tt)`]
  //   }]
  // }),
  // wordBreak: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}wb`,
  //   key: `${prefix}:wb`,
  //   variables: [`${prefix}wb`],
  //   desc: [{
  //     selector: '.wb',
  //     rules: [`word-break: var(--${prefix}wb)`]
  //   }]
  // }),
  // wordSpacing: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}wsp`,
  //   key: `${prefix}:wsp`,
  //   variables: [`${prefix}wsp`],
  //   desc: [{
  //     selector: '.wsp',
  //     rules: [`word-spacing: var(--${prefix}wsp)`]
  //   }]
  // }),
  // writingMode: (prefix: string): FeatureDescription => ({
  //   cls: `${prefix}wm`,
  //   key: `${prefix}:wm`,
  //   variables: [`${prefix}wm`],
  //   desc: [{
  //     selector: '.wm',
  //     rules: [`writing-mode: var(--${prefix}wm)`]
  //   }]
  // }),
  // content: (prefix: string): FeatureDescription => {
  //   const feats = [
  //     features.background,
  //     features.width,
  //     features.height,
  //     features.overflowHorizontal,
  //     features.overflowVertical,
  //     features.border,
  //     features.borderRadius,
  //     features.padding,
  //     features.boxShadow,
  //     features.textShadow,
  //     features.textColor,
  //     features.textDirection,
  //     features.fontFamily,
  //     features.fontSize,
  //     features.fontVariantLigatures,
  //     features.fontVariantNumeric,
  //     features.fontWeight,
  //     features.letterSpacing,
  //     features.textAlign,
  //     features.textDecoration,
  //     features.textTransform,
  //     features.wordSpacing,
  //     features.writingMode
  //   ]
  //   const descs = feats.map(f => f('co-'))
  //   const variables = flatten(descs.map(o => o.variables))
  //   const rules = flatten(flatten(descs.map(o => o.desc)).map(r => r.rules))
  //   rules.push(`display: var(--co-di, inline-block)`)

  //   return {
  //     cls: `${prefix}co`,
  //     key: `${prefix}:co`,
  //     variables: [
  //       `${prefix}co-a`, `${prefix}co-sp-a`, `${prefix}co-sp`,
  //       `${prefix}co-b`, `${prefix}co-sp-b`
  //     ].concat(variables),
  //     desc: [{
  //       selector: '.co::after',
  //       rules: [
  //         `content: var(--${prefix}co-a)`,
  //         `margin-left: var(--${prefix}co-sp-a, var(--${prefix}co-sp))`
  //       ]
  //     }, {
  //       selector: '.co::before',
  //       rules: [
  //         `content: var(--${prefix}co-b)`,
  //         `margin-right: var(--${prefix}co-sp-b, var(--${prefix}co-sp))`
  //       ]
  //     }, {
  //       selector: '.co::after, .co::before',
  //       rules
  //     }]
  //   }
  // }
}

// export type FontFormat = 'embedded-opentype' | 'opentype' | 'svg' | 'truetype' | 'woff' | 'woff2'

// export const fontFace = (
//   family: string,
//   sources: [string, FontFormat][],
//   fontStyle?: string,
//   fontWeight?: string,
//   fontDisplay?: string,
//   unicodeRange?: string
// ) => {
//   const parts = []
//   parts.push(`font-family: '${family}'`)
//   parts.push(`src: ` + sources.map((url, format) => `url('${url}') format('${format}')`).join(', '))

//   if (typeof fontStyle !== 'undefined') {
//     parts.push(`font-style: ${fontStyle}`)
//   }
//   if (typeof fontWeight !== 'undefined') {
//     parts.push(`font-weight: ${fontWeight}`)
//   }
//   if (typeof fontDisplay !== 'undefined') {
//     parts.push(`font-display: ${fontDisplay}`)
//   }
//   if (typeof unicodeRange !== 'undefined') {
//     parts.push(`unicode-range: ${unicodeRange}`)
//   }
//   return parts
// }
