import { InterfaceDeclaration } from 'ts-morph'
import { BaseDoc, docOfJsDoc as docOfJsDocs } from './jsdoc'
import { adjustSignature } from './signature'

export interface Interface extends BaseDoc {
  kind: 'interface'
  name: string
  signature: string
}

export const interfaceOfDeclaration = (interf: InterfaceDeclaration): Interface => {
  const doc = docOfJsDocs(interf.getJsDocs())
  const name = interf.getName()
  const signature = adjustSignature(interf.getText())

  return {
    kind: 'interface',
    ...doc,
    name,
    signature
  }
}
