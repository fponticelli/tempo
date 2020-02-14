import { fragment } from 'tempo-dom/lib/fragment'
import { Export } from '../parse/export'
import { entityTemplate } from './entity_template'

export const exportTemplate = fragment<Export & { project: string, module: string }, unknown>(
  entityTemplate
)
