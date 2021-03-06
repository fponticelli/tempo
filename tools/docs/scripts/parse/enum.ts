import { EnumDeclaration } from 'ts-morph'
import { docOfJsDoc as docOfJsDocs } from './jsdoc'
import { adjustSignature } from './signature'
import { DocEntity } from './doc_entity'
import { getLineNumber } from './line_number'

export const enumOfDeclaration = (e: EnumDeclaration): DocEntity => {
  const doc = docOfJsDocs(e.getJsDocs())
  const name = e.getName()
  const signatures = [adjustSignature(e.getText())]

  return {
    kind: 'enum',
    ...doc,
    name,
    line: getLineNumber(e),
    signatures
  }
}
