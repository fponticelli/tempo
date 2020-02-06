import { fragment } from 'tempo-dom/lib/fragment'
import { ClassT } from '../parse/class'
import { baseDoc } from './base_doc'
import { title } from './title'

export const classTemplate = fragment<ClassT, unknown>(
  title,
  baseDoc
)
