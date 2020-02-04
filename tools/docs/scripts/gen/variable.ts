import { VariableDeclaration } from 'ts-morph'

export interface Variable {
  kind: 'variable'
}

export const variableFromNode = (node: VariableDeclaration): Variable => {
  // console.log(node.getKindName)
  return {
    kind: 'variable'
  }
}
