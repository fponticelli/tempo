import { Tag } from './attribute'

export enum Category {
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

export class ContentCategories {
  readonly kind: 'content-categories' = 'content-categories'
  constructor(readonly categories: Category[]) {}
}
export class NoContent {
  readonly kind: 'np-content' = 'np-content'
}
export type PermittedContent = ContentCategories | NoContent

export const contentCategories = (categories: Category[]): PermittedContent => new ContentCategories(categories)
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
    readonly attributes: string[]
  ) {}
}
