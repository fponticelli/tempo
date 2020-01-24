import { Async } from 'tempo-std/lib/async'
import { Result } from 'tempo-std/lib/result'
import { Toc } from './toc'
import { HttpError } from './request'

export type Action =
  | { kind: 'RequestToc' }
  | { kind: 'LoadedToc'; toc: Async<Result<Toc, HttpError>, unknown> }
