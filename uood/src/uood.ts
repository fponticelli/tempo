import { Theme } from './theme'

let defaultTheme: undefined | Theme<any>

export const Uood = {
  get theme(): Theme<any> {
    if (typeof defaultTheme === 'undefined') {
      defaultTheme = require('./theme/spectrum').theme
    }
    return defaultTheme!
  },
  setDefaultTheme(theme: Theme<any>) {
    defaultTheme = theme
  }
}
