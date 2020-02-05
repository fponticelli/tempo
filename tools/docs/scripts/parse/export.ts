import { ExportDeclaration, ExportSpecifier } from 'ts-morph'
import { BaseDoc, docOfContent } from './jsdoc'
import { adjustSignature } from './signature'

export interface Export extends BaseDoc {
  kind: 'export'
  name: string
  signature: string
}

export const exportOfDeclaration = (e: ExportDeclaration): Export[] => {
  return e.getNamedExports().map(exportOfSpecifier)
}

const exportOfSpecifier = (e: ExportSpecifier): Export => {
  const signature = adjustSignature(e.getType().getText(e)) // TODO signature seems wrong ?
  const name = e.compilerNode.name.text
  const comment = e.getLeadingCommentRanges()[0]?.getText()
  const doc = docOfContent(comment ?? '')
  return {
    ...doc,
    kind: 'export',
    name,
    signature
  }
}
