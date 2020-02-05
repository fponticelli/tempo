import { fragment } from 'tempo-dom/lib/fragment'
import { Export } from '../parse/export'
import { h3 } from 'tempo-dom/lib/html'
import { baseDoc } from './base_doc'
import { mapState } from 'tempo-dom/lib/map'
import { signature } from './signature'

export const exportTemplate = fragment<Export, unknown>(
  h3({}, s => s.name),
  baseDoc,
  mapState(
    { map: s => s.signature },
    signature
  )
)
