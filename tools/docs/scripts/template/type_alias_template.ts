import { fragment } from 'tempo-dom/lib/fragment'
import { TypeAlias } from '../parse/type_alias'
import { entityTemplate } from './entity_template'

export const typeAliasTemplate = fragment<TypeAlias & { project: string, module: string }, unknown>(
  entityTemplate
)
