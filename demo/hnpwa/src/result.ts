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

abstract class BaseResult<T, E> {
  abstract match<B>(
    successf: (value: T) => B,
    errorf: (error: E) => B
  ): B
}

export class Success<T, E> extends BaseResult<T, E> {
  readonly kind = 'success'
  constructor(
    readonly value: T
  ) {
    super()
  }
  match<B>(
    successf: (value: T) => B,
    _: (error: E) => B
  ): B {
    return successf(this.value)
  }
}

export class Error<T, E> extends BaseResult<T, E> {
  readonly kind = 'error'
  constructor(
    readonly error: E
  ) {
    super()
  }
  match<B>(
    _: (value: T) => B,
    errorf: (error: E) => B
  ): B {
    return errorf(this.error)
  }
}

export type Result<T, E> = Success<T, E> | Error<T, E>

export const Result = {
  success: <T, E>(value: T): Result<T, E> => new Success(value),
  error: <T, E>(error: E): Result<T, E> => new Error(error)
}
