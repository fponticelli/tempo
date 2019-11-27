import { Error } from '../state'
import { Action } from '../action'
import { notification } from './notification'
import { errorToMessage } from '../http_error'

export const error = notification<Error, Action>(s => errorToMessage(s.error))
