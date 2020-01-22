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
// - [ ] layout
// - [ ] style site
// - [ ] style API
// - [ ] search

import { Toc, DemoRef, ApiRef, PageRef, ProjectRef, SectionRef } from '../src/toc'
import { promises as fs } from 'fs'
import * as fse from 'fs-extra'
import * as path from 'path'
import { Converter } from 'showdown'
import fm from 'front-matter'

const markdown = new Converter()

// import { JSDOM } from 'jsdom'

const rootFolder = '../..'
const docsFolder = path.join(rootFolder, 'docs')
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

async function makeHtml(mdFile: string) {
  const content = await fs.readFile(mdFile, 'utf8')
  const parsed = fm(content)
  return {
    data: parsed.attributes as any,
    html: markdown.makeHtml(parsed.body)
  }
}

function renameMdToHtml(file: string) {
  return file.substring(0, file.length - 3) + '.html'
}

async function  createPages(src: string, dst: string) {
  const mdFiles = await listAllMDFiles(src)
  const data = await Promise.all(mdFiles.map(async file => ({
    dest: renameMdToHtml(file),
    ...await makeHtml(path.join(src, file))
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
      const html = markdown.makeHtml(content)
      return { project, html }
    })
  )
  await Promise.all(
    changelogs.map(async cl => {
      await fs.writeFile(path.join(dst, `${cl.project}.html`), cl.html)
    })
  )
}

async function createApi(project: string, root: string, dst: string): Promise<ApiRef[]> {
  const p = path.join(root, project, 'docs')
  if (!fse.existsSync(p)) {
    return []
  }
  const mdFiles = await listAllMDFiles(p)
  const data = await Promise.all(mdFiles.map(async file => ({
    dest: renameMdToHtml(file),
    ...await makeHtml(path.join(p, file))
  })))
  await Promise.all(data.map(async o => {
    const p = path.join(dst, project, o.dest)
    const base = path.dirname(p)
    await fse.ensureDir(base)
    await fs.writeFile(p, o.html)
  }))
  return data.map(d => ({
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
  const content = await fs.readFile(p, 'utf8')
  const pack = JSON.parse(content)
  return {
    priority: pack.priority ?? 0,
    data: {
      name: project,
      title: pack.title ?? pack.name ?? project,
      description: pack.description,
      version: pack.version,
      keywords: pack.keywords ?? []
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
    .map(a => ({ project: a.project, data: a.data.data }))
    .reduce((acc, curr) => {
      return {
        ...acc,
        [curr.project]: curr.data
      }
    }, {})
}

async function main() {
  console.time('main')

  const demos = await getDemos(demoFolderSrc)

  // copy demos
  await prepDir(demoFolderDst)
  await Promise.all(demos.map(demo => {
    fse.copy(path.join(demoFolderSrc, demo.path, 'build'), path.join(demoFolderDst, demo.path))
  }))

  // copy assets
  await prepDir(assetsFolderDst)
  await fse.copy(assetsFolderSrc, assetsFolderDst)

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
