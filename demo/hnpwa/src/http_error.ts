import { matchKind } from '@tempo/core/lib/util/match'

export interface HttpNetworkError {
  kind: 'HttpNetworkError'
}

export interface HttpBadStatus {
  kind: 'HttpBadStatus'
  status: number
}

export interface HttpBadBody {
  kind: 'HttpBadBody'
  message: string
}

export type HttpError = HttpNetworkError | HttpBadStatus | HttpBadBody

export const HttpError = {
  networkError: { kind: 'HttpNetworkError' } as HttpError,
  badStatus: (status: number): HttpError => ({ kind: 'HttpBadStatus', status }),
  badBody: (message: string): HttpError => ({ kind: 'HttpBadBody', message })
}

export const errorToMessage = (error: HttpError) => matchKind<HttpError, string>({
  HttpNetworkError: () => 'NetworkError | You seem to be offline',
  HttpBadStatus: (e) => `BadStatus | The server gave me a ${e.status} error`,
  HttpBadBody: () => 'BadPayload | The server gave me back something I did not expect'
})(error)
