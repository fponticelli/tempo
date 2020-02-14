import { fragment } from 'tempo-dom/lib/fragment'
import { ClassT } from '../parse/class'
import { entityTemplate } from './entity_template'

export const classTemplate = fragment<ClassT & { project: string, module: string }, unknown>(
  entityTemplate
)
