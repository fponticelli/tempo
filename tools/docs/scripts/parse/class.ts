import { ClassDeclaration } from 'ts-morph'
import { docOfJsDoc, BaseDoc } from './jsdoc'
import { adjustSignature } from './signature'

export interface ClassT extends BaseDoc {
  kind: 'class'
  name: string
  signature: string
}

export const classOfDeclaration = (ta: ClassDeclaration): ClassT => {
  const signature = adjustSignature(ta.getText()) // TODO signature seems wrong ?
  // TODO [ ] methods
  // TODO [ ] staticMethods
  // TODO [ ] public variables
  const name = ta.getName()
  if (!name) {
    throw `Class has no name in modle ${ta.getSourceFile().getFilePath()}`
  }

  return {
    ...docOfJsDoc(ta.getJsDocs()),
    kind: 'class',
    name,
    signature
  }
}
