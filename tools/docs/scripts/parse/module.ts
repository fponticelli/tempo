import { SourceFile } from 'ts-morph'
import { functionOfDeclaration } from './function'
import { docOfContent, BaseDoc } from './jsdoc'
import { flatMap, flatten } from 'tempo-std/lib/arrays'
import { compareCaseInsensitive } from 'tempo-std/lib/strings'
import { interfaceOfDeclaration, Interface } from './interface'
import { Function } from './function'
import { TypeAlias, typeAliasOfDeclaration } from './type_alias'
import { ClassT, classOfDeclaration } from './class'
import { Export, exportOfDeclaration } from './export'
import { Variable, variableOfDeclaration } from './variable'
import {
  Directory
} from 'ts-morph'
import { none } from 'tempo-std/lib/option'

export interface Module extends BaseDoc {
  kind: 'module'
  title: string
  path: string
  interfaces: Interface[]
  functions: Function[]
  typeAliases: TypeAlias[]
  classes: ClassT[]
  exports: Export[]
  variables: Variable[]
}

export const empty: Module = {
  kind: 'module', path: '', title: '', interfaces: [], functions: [], exports: [], classes: [],
  typeAliases: [], description: none, examples: [], isDeprecated: false, since: none,
  todos: [], variables: []
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
    .sort((a, b) => compareCaseInsensitive(a.name, b.name))
}

const functionsOfSource = (source: SourceFile) => {
  return source.getFunctions()
    .filter(i => i.isExported())
    .map(functionOfDeclaration)
    .sort((a, b) => compareCaseInsensitive(a.name, b.name))
}

const typeAliasesOfSource = (source: SourceFile) => {
  return source.getTypeAliases()
    .filter(i => i.isExported())
    .map(typeAliasOfDeclaration)
    .sort((a, b) => compareCaseInsensitive(a.name, b.name))
}

const classesOfSource = (source: SourceFile) => {
  return source.getClasses()
    .filter(i => i.isExported())
    .map(classOfDeclaration)
    .sort((a, b) => compareCaseInsensitive(a.name, b.name))
}

const exportOfSource = (source: SourceFile) => {
  return flatten(
            source.getExportDeclarations()
              .map(exportOfDeclaration)
          )
          .sort((a, b) => compareCaseInsensitive(a.name, b.name))
}

const variablesOfSource = (source: SourceFile) => {
  return source
    .getVariableDeclarations()
    .filter(f => f.isExported())
    .map(variableOfDeclaration)
    .sort((a, b) => compareCaseInsensitive(a.name, b.name))
}

export const moduleFromSourceFile = (dir: Directory, source: SourceFile): Module => {
  const path = dir.getRelativePathTo(source)
  const title = path.substring(0, path.length - 3)
  const doc = moduleDocOfSource(source)
  const interfaces = interfacesOfSource(source)
  const functions = functionsOfSource(source)
  const typeAliases = typeAliasesOfSource(source)
  const classes = classesOfSource(source)
  const exports = exportOfSource(source)
  const variables = variablesOfSource(source)

  return {
    kind: 'module',
    ...doc,
    path,
    title,
    interfaces,
    functions,
    typeAliases,
    classes,
    exports,
    variables
  }
}
