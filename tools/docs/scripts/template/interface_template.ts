import { fragment } from 'tempo-dom/lib/fragment'
import { Interface } from '../parse/interface'
import { entityTemplate } from './entity_template'

export const interfaceTemplate = fragment<Interface & { project: string, module: string }, unknown>(
  entityTemplate
)
