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

const defaultStyles = `
html, body {
  height: 100%;
}

\* {
  border: none;
  border-style: solid;
  border-width: 0;
  box-sizing: border-box;
  color: inherit;
  flex-basis: auto;
  flex-direction: row;
  flex-shrink: 0;
  font-family: sans-serif;
  font-feature-settings: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: relative;
  resize: none;
  text-decoration: none;
}

body \* {
  display: flex;
}

\*:focus {
  outline: none;
}
`

export function resetStyles(doc = document) {
  const style = doc.createElement('style')
  style.textContent = defaultStyles
  doc.head.appendChild(style)
}
