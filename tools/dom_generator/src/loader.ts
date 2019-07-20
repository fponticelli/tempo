import { Resolver } from '@stoplight/json-ref-resolver'
import { safeLoad } from 'js-yaml'
import * as fs from 'fs'

const resolver = new Resolver()

export const loader = async (path: string) => {
  const content = fs.readFileSync(path, 'utf8')
  const yaml = safeLoad(content)
  return (await resolver.resolve(yaml)).result
}
