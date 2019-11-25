import { button } from '@tempo/dom/lib/html'

export const event = button<string, string>(
  {
    events: {
      click: (state: string): string => {
        return state
      }
    }
  },
  'click me'
)
