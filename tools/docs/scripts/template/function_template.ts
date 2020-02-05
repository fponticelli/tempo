import { fragment } from 'tempo-dom/lib/fragment'
import { Function } from '../parse/function'
import { baseDoc } from './base_doc'
import { h3 } from 'tempo-dom/lib/html'
import { mapState } from 'tempo-dom/lib/map'
import { forEach } from 'tempo-dom/lib/for_each'
import { signature } from './signature'

export const functionTemplate = fragment<Function, unknown>(
  h3({}, s => s.name),
  baseDoc,
  mapState(
    { map: s => s.signatures },
    forEach(
      {},
      signature
    )
  )
)
