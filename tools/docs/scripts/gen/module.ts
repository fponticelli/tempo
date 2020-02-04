import { SourceFile, Node } from 'ts-morph' // TypeGuards
import { variableFromNode } from './variable'
import { functionFromNode } from './function'
import { flatten } from 'tempo-std/lib/arrays'

export interface Module {
  kind: 'module'
  baseName: string
}

export const moduleFromSourceFile = (source: SourceFile): Module => {
  const baseName = source.getBaseName()

  // console.log(source.getExportDeclarations().map(d => d.getKindName()))
  // source.getExportDeclarations()
  // console.log(source.getExportSymbols())
  // source.getInterfaces()
  // source.getKindName()
  // source.getStatements()
  // source.getTypeAliases()
  // source.getVariableDeclarations()
  // source.getVariableStatements()
  // source.forEachChild()
  // console.log(Object.keys(source.getExportedDeclarations()))
  const declarations = source.getExportedDeclarations()

  flatten(
    Array.from(declarations.entries())
      .map(([_, decs]) => {
        // console.log(name)
        // console.log(`${name}: ${decs.map(d => d.getText()).join(', ')}`)
        return decs.map(n => {
          // console.log(n.getKindName(), Node.isFunctionDeclaration(n), Node.isFunctionLikeDeclaration(n), Node.isFunctionTypeNode(n))
          if(Node.isFunctionLikeDeclaration(n)) {
            return functionFromNode(n)
          } else if (Node.isVariableDeclaration(n)) {
            return variableFromNode(n)
          } else {
            return { kind: 'unknown', kindName: n.getKindName(), value: n.print() }
          }
        })

        // console.log( c. c.getKindName())
      })
  )
    .filter(v => v.kind !== 'unknown')
    .forEach(n => console.log(n))


  // const variables = source.getVariableDeclarations()
  // variables.forEach(variable => {
  //   // console.log(variable.getName(), variable.getType(), variable.getKind(), variable.getPos())
  //   // console.log(variable.getName(), variable.getType(), variable.getKind(), variable.getPos())
  //   if (!variable.isExported()) return

  //   console.log(variable.getName(), variable.getType().getText())
  // })
  // // source.forEachChild(node => {
  // //   console.log(node.getText(true))
  // // })
  return {
    kind: 'module',
    baseName
  }
}
