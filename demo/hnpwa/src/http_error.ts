/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
