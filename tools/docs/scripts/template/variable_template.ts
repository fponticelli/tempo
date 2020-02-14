import { fragment } from 'tempo-dom/lib/fragment'
import { Variable } from '../parse/variable'
import { entityTemplate } from './entity_template'

export const variableTemplate = fragment<Variable & { project: string, module: string }, unknown>(
  entityTemplate
)
