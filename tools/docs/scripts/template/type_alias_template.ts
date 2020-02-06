import { fragment } from 'tempo-dom/lib/fragment'
import { TypeAlias } from '../parse/type_alias'
import { baseDoc } from './base_doc'
import { mapState } from 'tempo-dom/lib/map'
import { signature } from './signature'
import { title } from './title'

export const typeAliasTemplate = fragment<TypeAlias, unknown>(
  title,
  baseDoc,
  mapState(
    { map: s => s.signature },
    signature
  )
)
