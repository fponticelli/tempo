/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const fs = require('fs')
const path = require('path')

const distFolder = path.join(__dirname, '../history')
const directoryNames = fs.readdirSync(distFolder).filter(file => {
  const stat = fs.statSync(path.join(distFolder, file))
  return stat.isDirectory() && file !== '.' && file !== '..'
})

const configPath = path.join(__dirname, '../dist', 'config.json')

const content = {
  versions: ['current', ...directoryNames]
}

// console.log(configPath)
// console.log(JSON.stringify(content, null, 2))
fs.writeFileSync(configPath, JSON.stringify(content, null, 2), 'utf8')
