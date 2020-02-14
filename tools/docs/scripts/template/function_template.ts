import { fragment } from 'tempo-dom/lib/fragment'
import { Function } from '../parse/function'
import { entityTemplate } from './entity_template'

export const functionTemplate = fragment<Function & { project: string, module: string }, unknown>(
  entityTemplate
)
