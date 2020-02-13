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

import { reducer } from './reducer'
import { template } from './template'
import { State } from './state'
import { Store } from 'tempo-store/lib/store'
import { Tempo } from 'tempo-dom/lib/tempo'
import { middleware } from './middleware'

export const createApp = (state: State) => {
  const store = Store.ofState({ state, reducer })

  const el = document.getElementById('app')!

  const app = Tempo.render({ store, template, el })

  app.store.observable.on(middleware(app))
}