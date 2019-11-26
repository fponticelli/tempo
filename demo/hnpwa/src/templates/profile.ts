import { div } from '@tempo/dom/lib/html'
import { Profile } from '../state'
import { Action } from '../action'

export const profile = div<Profile, Action>({}, 'profile')
