import { createState } from './state'
import { loadConfig } from './config'
import { createApp } from './create_app'

loadConfig()
  .then(config => {
    createApp(createState(config.versions))
  })
