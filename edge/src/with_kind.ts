import { IndexType } from 'tempo-std/lib/types/index_type'

export type WithKind<K extends IndexType> = { kind: K }

export type WithSKind = WithKind<string>
