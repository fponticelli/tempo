import { fragment } from 'tempo-dom/lib/fragment'
import { Variable } from '../parse/variable'
import { baseDoc } from './base_doc'
import { mapState } from 'tempo-dom/lib/map'
import { signature } from './signature'
import { title } from './title'

export const variableTemplate = fragment<Variable, unknown>(
  title,
  baseDoc,
  mapState(
    { map: s => s.signature },
    signature
  )
)
