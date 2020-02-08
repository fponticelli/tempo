import { Newtype, NewtypeClass } from './newtype'

/**
 * Helper functions to generate and validate [UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier)
 * strings (version 4).
 */

const random = (max: number) => Math.floor(Math.random() * max)
const srandom = () => '0123456789abcdef'.charAt(random(0x10))

/**
 * `Uuid.create()` returns a string value representing a random UUID string.
 */
export const create = () => {
  const s = [] as string[]
  let i = 0
  for (i = 0; i < 8; i++)
    s[i] = srandom()
  s[8]  = '-'
  for (i = 9; i < 13; i++)
    s[i] = srandom()
  s[13] = '-'
  s[14] = '4'
  for (i = 15; i < 18; i++)
    s[i] = srandom()
  s[18] = '-'
  s[19] = '89AB'.charAt(random(0x3))
  for (i = 20; i < 23; i++)
    s[i] = srandom()
  s[23] = '-'
  for (i = 24; i < 36; i++)
    s[i] = srandom()
  return UUID.unsafeOf(s.join(''))
}

const pattern = /^[0123456789abcdef]{8}-[0123456789abcdef]{4}-4[0123456789abcdef]{3}-[89ab][0123456789abcdef]{3}-[0123456789abcdef]{12}$/i

/**
 * Returns `true` if the passed `uuid` conforms to the UUID v.4 format.
 */
export type UUID = Newtype<string, { readonly UUID: unique symbol }>

export const UUID = new class extends NewtypeClass<UUID> {
  isValid(uuid: string) { return pattern.test(uuid) }
}()

export const toString = (uuid: UUID) => UUID.get(uuid)
