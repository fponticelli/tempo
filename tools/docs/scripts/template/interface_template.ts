import { fragment } from 'tempo-dom/lib/fragment'
import { Interface } from '../parse/interface'
import { baseDoc } from './base_doc'
import { mapState } from 'tempo-dom/lib/map'
import { signature } from './signature'
import { title } from './title'

export const interfaceTemplate = fragment<Interface, unknown>(
  title,
  baseDoc,
  mapState(
    { map: s => s.signature },
    signature
  )
)
