import { fragment } from 'tempo-dom/lib/fragment'
import { Function } from '../parse/function'
import { baseDoc } from './base_doc'
import { mapState } from 'tempo-dom/lib/map'
import { forEach } from 'tempo-dom/lib/for_each'
import { signature } from './signature'
import { title } from './title'

export const functionTemplate = fragment<Function, unknown>(
  title,
  baseDoc,
  mapState(
    { map: s => s.signatures },
    forEach(
      {},
      signature
    )
  )
)
