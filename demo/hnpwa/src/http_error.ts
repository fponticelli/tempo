import { matchKind } from '@tempo/core/lib/util/match'

export interface HttpTimeout {
  kind: 'HttpTimeout'
}

export interface HttpNetworkError {
  kind: 'HttpNetworkError'
}

export interface HttpBadStatus {
  kind: 'HttpBadStatus'
  status: number
}

export interface HttpBadBody {
  kind: 'HttpBadBody'
}

export interface HttpBadUrl {
  kind: 'HttpBadUrl'
}

export type HttpError = HttpTimeout | HttpNetworkError | HttpBadStatus | HttpBadBody | HttpBadUrl

export const HttpError = {
  timeout: (): HttpError => ({ kind: 'HttpTimeout' }),
  networkError: (): HttpError => ({ kind: 'HttpNetworkError' }),
  badStatus: (status: number): HttpError => ({ kind: 'HttpBadStatus', status }),
  badBody: (): HttpError => ({ kind: 'HttpBadBody' }),
  badUrl: (): HttpError => ({ kind: 'HttpBadUrl' })
}

export const errorToMessage = (error: HttpError) => matchKind<HttpError, string>({
    HttpTimeout: () => 'Timeout',
    HttpNetworkError: () => 'NetworkError | You seem to be offline',
    HttpBadStatus: (e) => `BadStatus | The server gave me a ${e.status} error`,
    HttpBadBody: () => 'BadPayload | The server gave me back something I did not expect',
    HttpBadUrl: () => 'The Hackernews API seems to have changed'
  })(error)
