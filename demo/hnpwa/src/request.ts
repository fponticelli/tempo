import { DecodeResult } from 'partsing/core/result'
import { Result } from './result'
import { HttpError } from './http_error'
import { Feed } from './route'
import { decodeItem, decodeUser, decodeFeed } from './decoders'

const RESET_CACHE_AFTER = 120000
const base = 'https://api.hnpwa.com'

const makeUrl = (path: string[]) => {
  return `${base}/${path.join('/')}`
}

const cache = new Map<string, any>()

const makeRequest = async <Out>(path: string[], parse: (input: any) => DecodeResult<any, Out, string>): Promise<Result<Out, HttpError>> => {
  const endpoint = makeUrl(path)
  if (cache.has(endpoint)) {
    return cache.get(endpoint)
  } else {
    const output = await (async () => {
      const response = await fetch(endpoint)
      try {
        if (response.status === 200) {
          const json = await response.json()
          const result = parse(json)
          if (result.isSuccess()) {
            return Result.success<Out, HttpError>(result.value)
          } else {
            return Result.error<Out, HttpError>(HttpError.badBody(result.failures.join(';')))
          }
        } else {
          return Result.error<Out, HttpError>(HttpError.badStatus(response.status))
        }
      } catch (e) {
        console.error(e)
        return Result.error<Out, HttpError>(HttpError.networkError)
      }
    })()
    cache.set(endpoint, output)
    setTimeout(() => { cache.delete(endpoint) }, RESET_CACHE_AFTER) // reset cache entry after elapsed time
    return output
  }
}

const feedName = (feed: Feed) => {
  switch (feed) {
    case Feed.ask: return 'ask'
    case Feed.jobs: return 'jobs'
    case Feed.new: return 'newest'
    case Feed.top: return 'news'
    case Feed.show: return 'show'
    default: throw `unkown value ${feed}`
  }
}

export const Request = {
  item(id: number) {
    const path = ['v0', 'item', `${id}.json`]
    return makeRequest(path, decodeItem)
  },
  user(id: string) {
    const path = ['v0', 'user', `${id}.json`]
    return makeRequest(path, decodeUser)
  },
  feed(feed: Feed, page: number) {
    const name = feedName(feed)
    const path = ['v0', name, `${page}.json`]
    return makeRequest(path, decodeFeed)
  }
}
