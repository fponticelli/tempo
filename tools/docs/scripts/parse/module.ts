import { SourceFile } from 'ts-morph'
import { functionOfDeclaration } from './function'
import { docOfContent, BaseDoc } from './jsdoc'
import { flatMap, flatten } from 'tempo-std/lib/arrays'
import { compareCaseInsensitive } from 'tempo-std/lib/strings'
import { interfaceOfDeclaration } from './interface'
import { enumOfDeclaration } from './enum'
import { typeAliasOfDeclaration } from './type_alias'
import { classOfDeclaration } from './class'
import { exportOfDeclaration } from './export'
import { variableOfDeclaration } from './variable'
import {
  Directory
} from 'ts-morph'
import { DocEntity } from './doc_entity'

export interface Module extends BaseDoc {
  kind: 'module'
  title: string
  path: string
  docEntities: DocEntity[]
}

const moduleDocOfSource = (source: SourceFile) => {
  const comments =
    flatMap(
      s => s.getLeadingCommentRanges().map(c => c.getText()),
      source.getStatements()
    )
    .filter(c => c.indexOf('Copyright 2019 Google') < 0)
  return docOfContent(comments[0] ?? '')
}

const interfacesOfSource = (source: SourceFile) => {
  return source.getInterfaces()
    .filter(i => i.isExported())
    .map(interfaceOfDeclaration)
}

const enumsOfSource = (source: SourceFile) => {
  return source.getEnums()
    .filter(i => i.isExported())
    .map(enumOfDeclaration)
}

const functionsOfSource = (source: SourceFile) => {
  return source.getFunctions()
    .filter(i => i.isExported())
    .map(functionOfDeclaration)
}

const typeAliasesOfSource = (source: SourceFile) => {
  return source.getTypeAliases()
    .filter(i => i.isExported())
    .map(typeAliasOfDeclaration)
}

const classesOfSource = (source: SourceFile) => {
  return source.getClasses()
    .filter(i => i.isExported())
    .map(classOfDeclaration)
}

const exportOfSource = (source: SourceFile) => {
  return flatten(
            source.getExportDeclarations()
              .map(exportOfDeclaration)
          )
}

const variablesOfSource = (source: SourceFile) => {
  return source
    .getVariableDeclarations()
    .filter(f => f.isExported())
    .map(variableOfDeclaration)
}

export const moduleFromSourceFile = (dir: Directory, source: SourceFile): Module => {
  const path = dir.getRelativePathTo(source)
  const title = path.substring(0, path.length - 3)
  const doc = moduleDocOfSource(source)
  const enums = enumsOfSource(source)
  const interfaces = interfacesOfSource(source)
  const functions = functionsOfSource(source)
  const typeAliases = typeAliasesOfSource(source)
  const classes = classesOfSource(source)
  const exports = exportOfSource(source)
  const variables = variablesOfSource(source)
  const docEntities = flatten([
    enums,
    interfaces,
    functions,
    typeAliases,
    classes,
    exports,
    variables
  ]).sort((a, b) => compareCaseInsensitive(a.name, b.name))

  return {
    kind: 'module',
    ...doc,
    path,
    title,
    docEntities
  }
}
