import { Project } from 'ts-morph'
import { moduleFromSourceFile, empty } from './parse/module'
import * as path from 'path'
import { module } from './template/module'
import { DOMContext } from 'tempo-dom/lib/context'
import { JSDOM } from 'jsdom'
import * as fse from 'fs-extra'
import { formatHtml } from './template/html'
import { State } from './template/state'
import { ApiRef } from '../src/toc'

const getModules = (basePath: string, name: string) => {
  const projectPath = path.join(basePath, name)
  const srcPath = path.join(projectPath, 'src')
  const tsConfigFilePath = path.join(projectPath, 'tsconfig.json')
  const project = new Project({
    addFilesFromTsConfig: true,
    tsConfigFilePath
  })

  const dir = project.addDirectoryAtPath(srcPath)

  const sources = project.getSourceFiles()
  return sources.map(s => moduleFromSourceFile(dir, s))
}

const moduleToHtmlPath = (mod: string) => {
  return mod.substring(0, mod.length - 3) + '.html'
}

const processProject = (destPath: string, basePath: string, renderModule: (module: State) => string) => (name: string) => {
  const modules = getModules(basePath, name)
  modules.forEach(module => {
    const state = {
      module,
      project: name
    }
    const html = renderModule(state)
    const destFile = path.join(destPath, name, moduleToHtmlPath(module.path))
    fse.ensureDirSync(path.dirname(destFile))
    fse.writeFileSync(destFile, html, 'utf8')
  })

  return modules.map(m => {
    const path = moduleToHtmlPath(m.path)
    return {
      path,
      id: path,
      title: m.title,
      type: 'module'
    }
  })
}

const makeView = () => {
  const dom = new JSDOM()
  const body = dom.window.document.body
  const ctx = DOMContext.fromElement(body, () => ({}))
  const view = module.render(ctx, { module: empty, project: '' })
  const getHtml = () => {
    const html = body.innerHTML
    return formatHtml(html)
  }
  return { view, getHtml }
}

export const generateDocs = async (projects: string[], basePath: string, destPath: string): Promise<Record<string, ApiRef[]>> => {
  const { view, getHtml } = makeView()
  const renderModule = (state: State) => {
    view.change(state)
    return getHtml()
  }
  await fse.emptyDir(destPath)
  const process = processProject(destPath, basePath, renderModule)
  return projects.reduce((acc, project) => {
    const modules = process(project)
    return {
      ...acc,
      [project]: modules
    }
  }, {})
}

// main('../../docs/api', '../..', ['std', 'core', 'dom', 'store', 'paperjs'])
