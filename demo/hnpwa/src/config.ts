const githubPrefix = '/tempo/docs/demo/hpnwa'
export const isGithub = location.pathname.startsWith(githubPrefix)

console.log(isGithub, location.pathname)

export const getPath = (path: string) => {
  if (isGithub) {
    return path.substring(githubPrefix.length)
  } else {
    return path
  }
}

export const getCurrentPath = () => {
  return getPath(location.pathname)
}

export const makePath = (path: string) => {
  if (isGithub)
    return `${githubPrefix}${path}`
  else
    return path
}
