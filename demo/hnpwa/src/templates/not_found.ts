import { notification } from './notification'
import { NotFound } from '../state'
import { Action } from '../action'

export const notFound = notification<NotFound, Action>('404')
