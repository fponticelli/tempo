import { JSDoc } from 'ts-morph'
import { parse, Annotation, Tag } from 'doctrine'
import { ofValue, Option, none } from 'tempo-std/lib/option'
import { makePretty } from '../utils/pretty'

const annotationOfJsDoc = (docs: JSDoc[]): Annotation => {
  const doc = docs[docs.length - 1]?.getText() || ''
  return annotationOfString(doc)
}

const annotationOfString = (content: string): Annotation => {
  return parse(content, { unwrap: true })
}

const hasTagNamed = (name: string, tags: Tag[]) => {
  for (const tag of tags) {
    if (tag.title === name) return true
  }
  return false
}

const getTagNamed = (name: string, tags: Tag[]): Option<string> => {
  for (const tag of tags) {
    if (tag.title === name) return ofValue(tag.description || undefined)
  }
  return none
}

const getTagsNamed = (name: string, tags: Tag[]): string[] => {
  return tags
    .filter(t => t.title === name)
    .map(t => t.description!)
    .filter(d => !!d)
}

const docOfAnnotation = (annotation: Annotation) => {
  const description = ofValue(annotation.description || undefined)
  const isDeprecated = hasTagNamed('deprecated', annotation.tags)
  const since = getTagNamed('since', annotation.tags)
  const examples = getTagsNamed('example', annotation.tags).map(makePretty)
  const todos = getTagsNamed('todo', annotation.tags)
  return { description, isDeprecated, since, examples, todos }
}

export type BaseDoc = ReturnType<typeof docOfAnnotation>

export const docOfJsDoc = (docs: JSDoc[]) => {
  const annotation = annotationOfJsDoc(docs)
  return docOfAnnotation(annotation)
}

export const docOfContent = (content: string) => {
  const annotation = annotationOfString(content)
  return docOfAnnotation(annotation)
}
