import { Item, ItemUrl, User } from './state'
import { sanitize } from 'dompurify'

import {
  ValueDecoder,
  decodeValue,
  objectValue,
  integerValue,
  stringValue,
  arrayValue,
  nullValue
} from 'partsing/value'

import { lazy } from 'partsing/core/decoder'

const itemUrlDecoder = stringValue.map((s: string): ItemUrl => {
  if (s.indexOf('item?id=') >= 0) {
    return ItemUrl.internal
  } else {
    return ItemUrl.external(s)
  }
})

const itemDecoder: ValueDecoder<Item> = objectValue({
    id: integerValue,
    title: stringValue,
    points: nullValue.map(() => 0).or(integerValue),
    user: nullValue.map(() => '').or(stringValue),
    time_ago: stringValue,
    url: itemUrlDecoder,
    domain: stringValue,
    comments_count: integerValue,
    comments: lazy(() => arrayValue(itemDecoder)),
    content: stringValue.map(s => sanitize(s)),
    type: stringValue
  }, ['comments', 'content', 'domain', 'points', 'title', 'user'])

export const decodeItem = decodeValue<Item>(itemDecoder)
export const decodeFeed = decodeValue<Item[]>(arrayValue(itemDecoder))

const userDecoder = objectValue({
  about: stringValue.map(s => sanitize(s)),
  created: stringValue,
  id: stringValue,
  karma: integerValue
}, ['about'])

export const decodeUser = decodeValue<User>(userDecoder)
