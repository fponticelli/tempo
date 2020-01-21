// TODO
// - collect demo
// - collect api
// - collect changelog
// - collect pages

import { Toc, DemoRef } from '../src/toc'
import * as fs from 'fs'
import * as path from 'path'
import { JSDOM } from 'jsdom'

const docsFolder = '../../docs/'
const demoFolder = path.join(docsFolder, 'demo')
const tocFile = path.join(docsFolder, 'toc.json')

const outputContent: Toc = {
  demos: getDemos('demo', demoFolder)
}

fs.writeFileSync(tocFile, JSON.stringify(outputContent, null, 2))

function getDemos(baseUrl: string, folder: string): DemoRef[] {
  const dirs = filterDirectories(fs.readdirSync(folder))
  return dirs
    .map(dir => {
      const dom = loadHtml(path.join(folder, dir))
      const { title, description, priority } = extractDemoInfo(dom)
      return {
        priority,
        data: {
          path: path.join(baseUrl, dir),
          title,
          description
        }
      }
    })
    .sort((a, b) => {
      return a.priority - b.priority
    })
    .map(a => a.data)
}

function loadHtml(dir: string): JSDOM {
  const content = fs.readFileSync(path.join(dir, 'index.html'), 'utf8')
  // console.log(content)
  return new JSDOM(content)
}

function extractDemoInfo(dom: JSDOM) {
  const title = dom.window.document.title
  const description = dom.window.document.querySelector('meta[name=description]')?.getAttribute('content') || ''
  const priority = Number(dom.window.document.querySelector('meta[name=priority]')?.getAttribute('content'))
  return { title, description, priority }
}

function filterDirectories(dirs: string[]) {
  return dirs.filter(dir => !dir.startsWith('.'))
}
