import {
  ClassDeclaration, MethodDeclaration, ClassStaticPropertyTypes,
  ConstructorDeclaration, ClassInstancePropertyTypes } from 'ts-morph'
import { docOfJsDoc, BaseDoc } from './jsdoc'
import { adjustSignature } from './signature'
import { flatten } from 'tempo-std/lib/arrays'
import { replace } from 'tempo-std/lib/strings'

export interface ClassT extends BaseDoc {
  kind: 'class'
  name: string
  signature: string
}

function getMethodDeclarationSignature(fun: MethodDeclaration, isStatic: boolean): string {
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
  return (isStatic ? 'static ' : '') + adjustSignature(text)
}

function getValueDeclarationSignature(o: ClassStaticPropertyTypes | ClassInstancePropertyTypes, isStatic: boolean): string {
  const text = o.getText()
  // console.log(text)
  // const lt = text.indexOf('<')
  // let end = text.indexOf(' = ')
  // if (lt !== -1 && lt < end) {
  //   const gt = text.indexOf('>', lt)
  //   end = text.indexOf(' = ', gt)
  // }
  // let s = text.substring(0, end)
  // if (s.indexOf(':') === -1) {
  //   s += ': ' + o.getType().getText(o)
  // }
  return (isStatic ? 'static ' : '') + text
}

function getConstructorDeclarationSignature(o: ConstructorDeclaration): string {
  let text = o.getText()
  const body = o.compilerNode.body
  if (body !== undefined) {
    const end = body.getStart() - o.getStart() - 1
    text = text.substring(0, end)
  }
  text = replace(text, 'readonly ', '')
  text = text.trim()
  return text + ' {}'
}

function getSignature(cls: ClassDeclaration) {
  let tp = cls.getTypeParameters()?.map(t => t.getText()).join(', ') ?? ''
  if (tp) {
    tp = `<${tp}>`
  }
  let ext = cls.getExtends()?.getText() ?? ''
  if (ext) {
    ext = ` extends ${ext}`
  }
  let impl = cls.getImplements()?.map(i => i.getText()).join(', ') ?? ''
  if (impl) {
    impl = ` implements ${impl}`
  }

  let abstract = cls.getAbstractKeyword() ?? ''
  if (abstract) {
    abstract = `${abstract} `
  }


  const lines = flatten([
    cls.getStaticMethods().map(m => getMethodDeclarationSignature(m, true)),
    cls.getStaticProperties().map(m => getValueDeclarationSignature(m, true)),
    cls.getConstructors().map(c => getConstructorDeclarationSignature(c)),
    cls.getInstanceMethods().map(m => getMethodDeclarationSignature(m, false)),
    cls.getInstanceProperties().map(m => getValueDeclarationSignature(m, false))
  ]).join('\n  ')

  return `${abstract}class ${cls.getName()}${tp}${ext}${impl} {
  ${lines}
}`
}

export const classOfDeclaration = (ta: ClassDeclaration): ClassT => {
  const signature = adjustSignature(getSignature(ta))
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
