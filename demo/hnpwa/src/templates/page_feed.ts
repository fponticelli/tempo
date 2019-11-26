import { div } from '@tempo/dom/lib/html'
import { PageFeed } from '../state'
import { Action } from '../action'

export const pageFeed = div<PageFeed, Action>({}, 'page feed')
