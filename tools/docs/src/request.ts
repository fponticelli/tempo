import { Result, success, failure } from 'tempo-std/lib/result'
import { JSONValue } from 'tempo-std/lib/json'

export type HttpError = { kind: 'HttpError'; message: string }

export const loadText = async (
  path: string
): Promise<Result<string, HttpError>> => {
  try {
    const response = await fetch(path)
    return success(await response.text())
  } catch (e) {
    return failure({ kind: 'HttpError', message: String(e) })
  }
}

export const loadJson = async (
  path: string
): Promise<Result<JSONValue, HttpError>> => {
  try {
    const response = await fetch(path)
    return success(await response.json())
  } catch (e) {
    return failure({ kind: 'HttpError', message: String(e) })
  }
}
