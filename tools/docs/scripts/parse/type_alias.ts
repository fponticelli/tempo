import { TypeAliasDeclaration } from 'ts-morph'
import { docOfJsDoc } from './jsdoc'
import { adjustSignature } from './signature'
import { Entity } from './entity'
import { getLineNumber } from './line_number'

export interface TypeAlias extends Entity {
  kind: 'type_alias' | 'interface'
}

export const typeAliasOfDeclaration = (ta: TypeAliasDeclaration): TypeAlias => {
  const signatures = [adjustSignature(ta.getText())]
  const name = ta.getName()

  return {
    ...docOfJsDoc(ta.getJsDocs()),
    kind: 'type_alias',
    name,
    line: getLineNumber(ta),
    signatures
  }
}
