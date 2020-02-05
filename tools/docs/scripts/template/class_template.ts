import { fragment } from 'tempo-dom/lib/fragment'
import { ClassT } from '../parse/class'
import { h3 } from 'tempo-dom/lib/html'
import { baseDoc } from './base_doc'

export const classTemplate = fragment<ClassT, unknown>(
  h3({}, s => s.name),
  baseDoc
)
