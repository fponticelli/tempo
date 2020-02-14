import { InterfaceDeclaration } from 'ts-morph'
import { docOfJsDoc as docOfJsDocs } from './jsdoc'
import { adjustSignature } from './signature'
import { Entity } from './entity'
import { getLineNumber } from './line_number'

export interface Interface extends Entity {
  kind: 'interface'
}

export const interfaceOfDeclaration = (interf: InterfaceDeclaration): Interface => {
  const doc = docOfJsDocs(interf.getJsDocs())
  const name = interf.getName()
  const signatures = [adjustSignature(interf.getText())]

  return {
    kind: 'interface',
    ...doc,
    name,
    line: getLineNumber(interf),
    signatures
  }
}
