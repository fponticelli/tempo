import * as fs from 'fs-extra-promise'
import * as path from 'path'
import * as prettier from 'prettier'

export class FileContent {
  constructor(
    readonly filePath: string,
    readonly content: string
  ) {}
}

export class Project {
  static empty(basePath: string) {
    return new Project(basePath, [])
  }
  constructor(
    readonly basePath: string,
    readonly files: FileContent[]
  ) {}

  addFile(filePath: string, content: string) {
    return new Project(
      this.basePath,
      this.files.concat([new FileContent(filePath, content)])
    )
  }

  async clean() {
    fs.emptyDirSync(this.basePath)
    // await fs.emptyDir(this.basePath)
  }

  async save() {
    const options = await prettier.resolveConfig('../../.prettierrc')
    const promises = this.files.map(async file => {
      const filePath = path.join(this.basePath, file.filePath)
      const dir = path.dirname(filePath)
      await fs.ensureDir(dir)
      const formatted = prettier.format(file.content, options || undefined)
      return fs.writeFile(filePath, formatted, { encoding: 'utf8' })
    })
    return Promise.all(promises)
  }

  async cleanAndSave() {
    await this.clean()
    await this.save()
  }
}
