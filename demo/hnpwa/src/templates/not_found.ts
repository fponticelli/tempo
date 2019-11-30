import { notification } from './notification'
import { NotFound } from '../state'
import { Action } from '../action'

export const notFoundTemplate = notification<NotFound, Action>('404')
