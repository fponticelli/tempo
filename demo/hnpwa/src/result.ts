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
