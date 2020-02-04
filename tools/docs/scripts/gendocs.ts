import { Project } from 'ts-morph'
import { moduleFromSourceFile } from './gen/module'

const main = () => {
  const project = new Project({
    addFilesFromTsConfig: true,
    tsConfigFilePath: '../../std/tsconfig.json'
  })

  const sources = project.getSourceFiles()

  const modules = sources.map(moduleFromSourceFile)

  // modules.forEach(m => console.log(m))
  console.log(modules.length)
}

main()
