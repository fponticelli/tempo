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
