export interface DOMContext {
  doc: Document
  append: (node: Node) => void
  parent: Element
}
