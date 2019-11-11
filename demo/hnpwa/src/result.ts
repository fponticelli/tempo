export interface Success<T, E> {
  readonly kind: 'success'
  readonly value: T
}

export interface Error<T, E> {
  readonly kind: 'error'
  readonly error: E
}

export type Result<T, E> = Success<T, E> | Error<T, E>

export const Result = {
  success: <T, E>(value: T): Result<T, E> => ({ kind: 'success', value }),
  error: <T, E>(error: E): Result<T, E> => ({ kind: 'error', error })
}

export const match = <T, E, B>(result: Result<T, E>, successf: (value: T) => B, errorf: (error: E) => B): B => {
  if (result.kind === 'success')
    return successf(result.value)
  else
    return errorf(result.error)
}
