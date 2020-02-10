// TODO
// - [x] collect demo
// - [x] copy demos
// - [x] collect api
// - [x] transform api MDs to HTMLs
// - [x] collect changelog
// - [x] transform changelog MDs to HTMLs
// - [x] collect pages
// - [x] transform pages MDs to HTMLs
// - [x] projects metadata
// - [x] layout
// - [x] style site
// - [ ] generate API docs
// - [ ] style API
// - [ ] make sub hash scroll to the right header
// - [ ] search
// - [x] better API links (mixed modules and types, index.md and globals.md)

import { Toc, DemoRef, ApiRef, PageRef, ProjectRef, SectionRef } from '../src/toc'
import { promises as fs } from 'fs'
import * as fse from 'fs-extra'
import * as path from 'path'
import { JSDOM } from 'jsdom'
import Prism from 'prismjs'
const loadLanguages: any = require('prismjs/components/')
loadLanguages(['typescript'])
import fm from 'front-matter'
import { trimChars } from 'tempo-std/lib/strings'
import { markdown } from './template/markdown'

// import { JSDOM } from 'jsdom'

const rootFolder = '../..'
const docsFolder = path.join(rootFolder, 'docs')
const binFolderSrc = './dist'
const binFolderDst = docsFolder
const demoFolderSrc = path.join(rootFolder, 'demo')
const demoFolderDst = path.join(docsFolder, 'demo')
const assetsFolderSrc = path.join(rootFolder, 'pages/assets')
const assetsFolderDst = path.join(docsFolder, 'assets')
const pagesFolderSrc = path.join(rootFolder, 'pages')
const pagesFolderDst = path.join(docsFolder, 'pages')
const projects = ['core', 'dom', 'paperjs', 'std', 'store']
const changelogFolderDst = path.join(docsFolder, 'changelog')
const apiFolderDst = path.join(docsFolder, 'api')

const tocFile = path.join(docsFolder, 'toc.json')

const renameHtml = (path: string) => {
  const hasLeadingHash = path.startsWith('#')
  const parts = path.split('#').filter(a => !!a)
  if (!parts[0].endsWith('.html')) return path
  function processPart(part: string) {
    return part.split('.').map(p => trimChars(p, '_')).join('.')
  }
  const res = parts[0].split('/').map(processPart).join('/')
  return (hasLeadingHash ? [''] : []).concat([res].concat(parts.slice(1))).join('#')
}

async function getDemos(folder: string): Promise<DemoRef[]> {
  const dirs = filterDirectories(await fs.readdir(folder))
  const data = dirs
    .map(dir => ({
      dir: path.join(folder, dir),
      path: dir
    }))
  const contents = await Promise.all(
    data.map(async o => {
      const { dir, path } = o
      // const dom = loadHtml(dir)
      const pack = await loadPackage(dir)
      // const { title, description, priority } = extractDemoInfo(dom)
      return {
        priority: pack.priority,
        data: {
          path: path,
          version: pack.version,
          title: pack.title,
          description: pack.description
        }
      }
    })
  )
  return contents
    .sort((a, b) => a.priority - b.priority)
    .map(a => a.data)
}

async function loadPackage(dir: string) {
  const content = await fs.readFile(path.join(dir, 'package.json'), 'utf8')
  return JSON.parse(content)
}

// function loadHtml(dir: string): JSDOM {
//   const content = fs.readFileSync(path.join(dir, 'build/index.html'), 'utf8')
//   return new JSDOM(content)
// }

// function extractDemoInfo(dom: JSDOM) {
//   const title = dom.window.document.title
//   const description = dom.window.document.querySelector('meta[name=description]')?.getAttribute('content') || ''
//   const priority = Number(dom.window.document.querySelector('meta[name=priority]')?.getAttribute('content'))
//   return { title, description, priority }
// }

function filterDirectories(dirs: string[]) {
  return dirs.filter(dir => !dir.startsWith('.'))
}

async function prepDir(dir: string) {
  await fse.ensureDir(dir)
  await fse.emptyDir(dir)
}

async function listAllMDFiles(src: string): Promise<string[]> {
  const files = await fs.readdir(src)
  const filtered = filterDirectories(files)
  const buff = []
  for (const file of filtered) {
    if (file.endsWith('md')) {
      buff.push(file)
    } else {
      const filePath = path.join(src, file)
      if (((await fs.stat(filePath)).isDirectory())) {
        const collect = await listAllMDFiles(filePath)
        buff.push(...collect.map(c => path.join(file, c)))
      }
    }
  }
  return buff
}

async function makeHtml(mdFile: string, anchorMangler: (url: string) => string) {
  const content = await fs.readFile(mdFile, 'utf8')
  const parsed = fm(content)
  const rawHtml = markdown(parsed.body)
  const dom = new JSDOM(rawHtml)
  const codes = dom.window.document.querySelectorAll('.language-ts')
  for (let i = 0; i < codes.length; i++) {
    const code = codes[i]
    code.parentElement?.classList.add('language-ts')
    code.innerHTML = Prism.highlight(code.textContent || '', Prism.languages.typescript, 'typescript')
  }

  const anchors = dom.window.document.querySelectorAll('a')
  for (let i = 0; i < anchors.length; i++) {
    const a = anchors[i]
    const href = a.href
    if (href.startsWith('http:') || href.startsWith('https:')) continue
    a.href = renameHtml(anchorMangler(href))
  }

  return {
    data: parsed.attributes as any,
    html: dom.window.document.body.innerHTML
  }
}

function renameMdToHtml(file: string) {
  return file.substring(0, file.length - 3) + '.html'
}

function manglePageHref(url: string) {
  if (url.startsWith('./')) url = url.substring(2)
  return url
}

async function createPages(src: string, dst: string) {
  const mdFiles = await listAllMDFiles(src)
  const data = await Promise.all(mdFiles.map(async file => ({
    dest: renameHtml(renameMdToHtml(file)),
    ...await makeHtml(path.join(src, file), manglePageHref)
  })))
  await Promise.all(data.map(async o => {
    const p = path.join(dst, o.dest)
    const base = path.dirname(p)
    await fse.ensureDir(base)
    await fs.writeFile(p, o.html)
  }))
  const section = {
    pages: [] as PageRef[],
    sections: {} as Record<string, SectionRef>
  }
  data
    .sort((a, b) => a.data.order - b.data.order)
    .forEach(d => {
      const subs = d.dest.split('/')
      subs.pop()
      let sect = section
      for (const sub in subs) {
        if (!sect.sections[sub]) {
          sect.sections = {
            ...sect.sections,
            [sub]: {
              pages: [],
              sections: {}
            }
          }
        }
        sect = sect.sections[sub]
      }
      sect.pages.push({
        path: d.dest,
        title: d.data.title
      })
    //   ({
    //   path: d.dest,
    //   title: d.data.title
    // })
    })
  return section
}

async function createChangeLogs(projects: string[], root: string, dst: string) {
  const changelogs = await Promise.all(
    projects.map(async project => {
      const p = path.join(root, project, 'CHANGELOG.md')
      const content = await fs.readFile(p, 'utf8')
      const html = markdown(content)
      return { project, html }
    })
  )
  await Promise.all(
    changelogs.map(async cl => {
      await fs.writeFile(path.join(dst, `${cl.project}.html`), cl.html)
    })
  )
}

const mangleApiHref = (name: string, base: string) => (url: string) => {
  if (url.endsWith('.md')) {
    url = url.substring(0, url.length - 3) + '.html'
  } else if (url.indexOf('.md#')) {
    url = url.replace('.md#', '.html#')
  }
  const p = path.join(name, base, url)
  return `#/api/${p}`
}

async function createApi(project: string, root: string, dst: string): Promise<ApiRef[]> {
  const p = path.join(root, project, 'docs')
  if (!fse.existsSync(p)) {
    return []
  }
  const mdFiles = await listAllMDFiles(p)
  const data = await Promise.all(mdFiles.map(async file => ({
    dest: renameHtml(renameMdToHtml(file)),
    ...await makeHtml(path.join(p, file), mangleApiHref(project, path.dirname(file)))
  })))

  const mapName: Record<string, string> = {
    modules: 'module',
    classes: 'class',
    interfaces: 'interface',
    enums: 'enum'
  }

  data
    .forEach(d => {
      const parts = d.dest.split('/')
      if (parts.length === 1) return
      delete d.data.sidebar_label
      const ctx = parts[0]!
      if (!!mapName[ctx]) {
        d.data.type = mapName[ctx]
      } else {
        console.log(`unkown type ${ctx}`)
      }
    })
  await Promise.all(data.map(async o => {
    const p = path.join(dst, project, o.dest)
    const base = path.dirname(p)
    await fse.ensureDir(base)
    await fs.writeFile(p, o.html)
  }))
  return data
    .filter(d => !!d.data.type)
    .map(d => ({
      path: d.dest,
      ...d.data
    }))
}

async function createApis(projects: string[], root: string, dst: string): Promise<Record<string, ApiRef[]>> {
  const list = await Promise.all(
    projects
      .map(async project => ({
        project,
        list: await createApi(project, root, dst)
      }))
  )
  return list.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.project]: curr.list
    }
  }, {})
}

async function collectProject(project: string, src: string): Promise<{ priority: number, data: ProjectRef }> {
  const p = path.join(src, project, 'package.json')
  const packageJson = await fs.readFile(p, 'utf8')
  const pack = JSON.parse(packageJson)
  const projectPath = path.join(src, project, 'PROJECT.md')
  const content = markdown(fse.existsSync(projectPath) ? await fs.readFile(projectPath, 'utf8') : '')
  return {
    priority: pack.priority ?? 0,
    data: {
      name: project,
      title: pack.title ?? pack.name ?? project,
      description: pack.description,
      version: pack.version,
      keywords: pack.keywords ?? [],
      content
    }
  }
}

async function collectProjects(projects: string[], src: string) {
  const list = await Promise.all(
    projects
      .map(async project => ({
        project,
        data: await collectProject(project, src)
      }))
  )
  return list
    .sort((a, b) => a.data.priority - b.data.priority)
    .map(a => a.data.data)
}

async function main() {
  console.time('main')

  const demos = await getDemos(demoFolderSrc)

  await prepDir(docsFolder)

  // copy demos
  await prepDir(demoFolderDst)
  await Promise.all(demos.map(demo => {
    let src = path.join(demoFolderSrc, demo.path, 'dist')
    if (!fse.existsSync(src))
      src = path.join(demoFolderSrc, demo.path, 'build')
    fse.copy(src, path.join(demoFolderDst, demo.path))
  }))

  // copy assets
  await prepDir(assetsFolderDst)
  await fse.copy(assetsFolderSrc, assetsFolderDst)

  // copy binaries
  await fse.copy(binFolderSrc, binFolderDst)

  // ensure no jekyll
  await fse.createFile(path.join(docsFolder, '.nojekyll'))

  // pages
  await prepDir(pagesFolderDst)
  const sections = await createPages(pagesFolderSrc, pagesFolderDst)

  // changelog
  await prepDir(changelogFolderDst)
  await createChangeLogs(projects, rootFolder, changelogFolderDst)

  // api
  await prepDir(apiFolderDst)
  const apis = await createApis(projects, rootFolder, apiFolderDst)

  // projects
  const projectsData = await collectProjects(projects, rootFolder)

  const outputContent: Toc = {
    projects: projectsData,
    demos,
    ...sections,
    apis
  }

  await fs.writeFile(tocFile, JSON.stringify(outputContent, null, 2))

  console.timeEnd('main')
}

main()
