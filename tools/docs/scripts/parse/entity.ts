import { BaseDoc } from './jsdoc'

export interface Entity extends BaseDoc {
  name: string
  line: number
  signatures: string[]
}
