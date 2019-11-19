export interface AppConfig {
  versions: string[]
}

export const loadConfig = (): Promise<AppConfig> => {
  return fetch('./config.json')
    .then(response => response.json() as any as AppConfig)
}
