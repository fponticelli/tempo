import { Project } from 'ts-morph'
import { moduleFromSourceFile, empty } from './parse/module'
import * as path from 'path'
import { module } from './template/module'
import { DOMContext } from 'tempo-dom/lib/context'
import { JSDOM } from 'jsdom'
import * as fse from 'fs-extra'
import { formatHtml } from './template/html'
import { State } from './template/state'

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

  // temporary
  const json = fse.readJSONSync('../../docs/toc.json')
  json.apis[name] = modules.map(m => {
    const path = moduleToHtmlPath(m.path)
    return {
      path,
      id: path,
      title: m.title,
      type: 'module'
    }
  })
  fse.writeJSONSync('../../docs/toc.json', json, { spaces: 2 })
  /*
    "path": "modules/text.html",
    "id": "_text_",
    "title": "text",
    "type": "module"
  */
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

const main = (destPath: string, basePath: string, projects: string[]) => {
  const { view, getHtml } = makeView()
  const renderModule = (state: State) => {
    view.change(state)
    return getHtml()
  }
  fse.emptyDirSync(destPath)
  const process = processProject(destPath, basePath, renderModule)
  projects.forEach(process)
}

main('../../docs/api', '../..', ['std', 'core', 'dom', 'store', 'paperjs'])
