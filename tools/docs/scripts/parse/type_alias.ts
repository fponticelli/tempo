import { TypeAliasDeclaration } from 'ts-morph'
import { docOfJsDoc, BaseDoc } from './jsdoc'
import { adjustSignature } from './signature'

export interface TypeAlias extends BaseDoc {
  kind: 'type_alias' | 'interface'
  name: string
  signature: string
}

export const typeAliasOfDeclaration = (ta: TypeAliasDeclaration): TypeAlias => {
  const signature = adjustSignature(ta.getText()) // TODO ?
  const name = ta.getName()

  return {
    ...docOfJsDoc(ta.getJsDocs()),
    kind: 'type_alias',
    name,
    signature
  }
}
