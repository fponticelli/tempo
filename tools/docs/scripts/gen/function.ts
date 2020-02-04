import { FunctionLikeDeclaration } from 'ts-morph'
import { docFromJsDoc } from './jsdoc'
import { Annotation } from 'doctrine'

export interface Function {
  kind: 'function'
  doc: Annotation
  signature: string
}

export const functionFromNode = (node: FunctionLikeDeclaration): Function => {
  // node.getJsDocs
  // node.getModifiers
  // node.getParameters
  // node.getReturnType
  // node.getSignature
  // node.getStatement
  // node.
  return {
    kind: 'function',
    doc: docFromJsDoc(node.getJsDocs()),
    signature: node.getSignature().getDeclaration().print()
  }
}
