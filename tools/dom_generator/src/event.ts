import { Tag } from './attribute'

export class Event {
  constructor(
    readonly name: string,
    readonly codeName: string,
    readonly domName: string,
    readonly type: string[],
    readonly tags: Tag[]
  ) {}
}
