import { Theme } from './theme'
import { resetStyles } from 'tempo-ui/lib/reset'

let defaultTheme: undefined | Theme<any>

export const Uood = {
  get theme(): Theme<any> {
    if (typeof defaultTheme === 'undefined') {
      defaultTheme = require('./theme/default').theme
    }
    return defaultTheme!
  },
  setDefaultTheme(theme: Theme<any>) {
    defaultTheme = theme
  },
  resetStyles(selector = 'body', doc = document) {
    resetStyles(selector, doc)
  }
}
