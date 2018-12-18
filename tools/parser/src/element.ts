import { Tag } from './attribute'

export enum Category {
  all = 'all',
  text = 'text',
  transparent = 'transparent',
  flow = 'flow',
  phrasing = 'phrasing',
  metadata = 'metadata',
  sectioning = 'sectioning',
  heading = 'heading',
  embedded = 'embedded',
  interactive = 'interactive',
  palpable = 'palpable',
  formAssociated = 'form-associated',
  scriptSupporting = 'script-supporting'
}

export class ContentCategory {
  readonly kind: 'content-category' = 'content-category'
  constructor(readonly category: Category) {}
}
export class ElementContent {
  readonly kind: 'element-content' = 'element-content'
  constructor(readonly elements: string[]) {}
}
export class NoContent {
  readonly kind: 'np-content' = 'np-content'
}
export type PermittedContent = NoContent | (ContentCategory | ElementContent)[]

export const contentCategory = (category: Category) => new ContentCategory(category)
export const elementContent = (elements: string[]) => new ElementContent(elements)
export const noContent = new NoContent() as PermittedContent

export class Element {
  constructor(
    readonly name: string,
    readonly codeName: string,
    readonly domName: string,
    readonly domInterface: string,
    readonly tags: Tag[],
    readonly ariaRoles: string[],
    readonly permittedContent: PermittedContent,
    readonly category: Category | undefined,
    readonly attributes: string[],
    readonly events: string[]
  ) {}
}
