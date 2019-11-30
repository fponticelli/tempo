const githubPrefix = '/tempo/docs/demo/hnpwa'
export const isGithub = location.pathname.startsWith(githubPrefix)

export const getCurrentPath = () => {
  if (isGithub) {
    const base = location.hash
    if (!base || base === '#')
      return '/'
    else
      return base.substring(1)
  } else {
    return location.pathname
  }
}
