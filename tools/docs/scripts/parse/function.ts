import { FunctionDeclaration } from 'ts-morph'
import { docOfJsDoc, BaseDoc } from './jsdoc'

export interface Function extends BaseDoc {
  kind: 'function'
  name: string
  signatures: string[]
}

function getFunctionDeclarationSignature(fun: FunctionDeclaration): string {
  let text = fun.getText()
  const body = fun.compilerNode.body
  if (body !== undefined) {
    const end = body.getStart() - fun.getStart() - 1
    text = text.substring(0, end)
  }
  text = text.trim()
  if (text.endsWith(')')) {
    text += ': ' + fun.getReturnType().getText()
  }
  return text
}

export const functionOfDeclaration = (fun: FunctionDeclaration): Function => {
  // fun.getModifiers
  // fun.getParameters
  // fun.getReturnType
  // fun.getSignature
  // fun.getStatement
  // fun.
  const name = fun.getName()
  if (!name) {
    throw `Function name required in module ${fun.getSourceFile().getFilePath()}`
  }
  const overloads = fun.getOverloads()
  const signatures = overloads.length > 0 ? overloads.map(getFunctionDeclarationSignature) : [getFunctionDeclarationSignature(fun)]

  return {
    ...docOfJsDoc(fun.getJsDocs()),
    kind: 'function',
    name,
    signatures
  }
}
