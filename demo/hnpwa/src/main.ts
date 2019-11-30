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

import { Tempo } from '@tempo/dom/lib/tempo'
import { Store } from '@tempo/store/lib/store'
import { template } from './templates/app'
import { reducer } from './reducer'
import { createState, Page } from './state'
import { Route } from './route'
import { middleware, setTitle } from './middleware'
import { Action } from './action'
import { getCurrentPath } from './config'

const route = Route.fromUrl(getCurrentPath())

const state = createState(
  Route.root,
  Page.loading
)

const store = Store.ofState({
  state,
  reducer
})

document.body.innerHTML = ''
Tempo.render({ store, template })

setTitle(state)

store.property.observable.on(setTitle)
store.observable.on(middleware(store))

store.process(Action.linkClicked(route))

window.addEventListener('popstate', (event) => {
  const route = Route.fromUrl(getCurrentPath())
  store.process(Action.linkClicked(route))
})
