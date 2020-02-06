import { fragment } from 'tempo-dom/lib/fragment'
import { Export } from '../parse/export'
import { baseDoc } from './base_doc'
import { mapState } from 'tempo-dom/lib/map'
import { signature } from './signature'
import { title } from './title'

export const exportTemplate = fragment<Export, unknown>(
  title,
  baseDoc,
  mapState(
    { map: s => s.signature },
    signature
  )
)
