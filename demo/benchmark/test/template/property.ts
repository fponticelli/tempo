import { input } from '@tempo/dom/lib/html'

export interface TestProperties {
  value: string
  disabled: boolean
}

export const property = input<TestProperties, unknown>(
  { attrs: { value: s => s.value, disabled: s => s.disabled } }
)
