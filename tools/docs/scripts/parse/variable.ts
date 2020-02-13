import { VariableDeclaration } from 'ts-morph'
import { BaseDoc, docOfJsDoc } from './jsdoc'
import { stripImportTypes } from '../utils/strip_imports'

export interface Variable extends BaseDoc {
  kind: 'variable'
  name: string
  signature: string
}

function getConstantVariableDeclarationSignature(vd: VariableDeclaration): string {
  const text = vd.getText()
  const lt = text.indexOf('<')
  let end = text.indexOf(' = ')
  if (lt !== -1 && lt < end) {
    const gt = text.indexOf('>', lt)
    end = text.indexOf(' = ', gt)
  }
  let s = text.substring(0, end)
  if (s.indexOf(':') === -1) {
    s += ': ' + stripImportTypes(vd.getType().getText(vd))
  }
  return `const ${s}`
}

export const variableOfDeclaration = (v: VariableDeclaration): Variable => {
  const doc = docOfJsDoc(((v.getParent() as any)?.getParent() as any)?.getJsDocs() || '')
  const name = v.getName()
  const signature = getConstantVariableDeclarationSignature(v)
  return {
    ...doc,
    kind: 'variable',
    name,
    signature
  }
}