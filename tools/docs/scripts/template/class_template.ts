import { fragment } from 'tempo-dom/lib/fragment'
import { ClassT } from '../parse/class'
import { baseDoc } from './base_doc'
import { title } from './title'
import { signature } from './signature'
import { mapState } from 'tempo-dom/lib/map'

export const classTemplate = fragment<ClassT, unknown>(
  title,
  baseDoc,
  mapState(
    { map: s => s.signature },
    signature
  )
)
