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

import { Tempo } from 'tempo-dom/lib/tempo'
import { div } from 'tempo-dom/lib/html'
import { Store } from 'tempo-store/lib/store'
import { project } from 'tempo-paper/lib/project'
import { circle, ellipse, rectangle } from 'tempo-paper/lib/shape'
import { raster } from 'tempo-paper/lib/raster'
import { Point, Size, Color } from 'paper'

interface State {

}

const state = {  }

type Action = unknown

const reducer = (state: State, action: Action): State => {
  return state
}

const store = Store.ofState({ state, reducer })

const template = div<State, Action>(
  { attrs: { className: 'app' } },
  div(
    {},
    project(
      {
        width: 800,
        height: 800
      },
      circle({
        position: new Point(100, 100),
        size: new Size(100, 100),
        fillColor: new Color(0, 0.5, 1)
      }),
      rectangle({
        position: new Point(200, 100),
        size: new Size(100, 100),
        fillColor: new Color('white'),
        strokeColor: new Color(1, 0.5, 0),
        strokeWidth: 2
      }),
      ellipse({
        position: new Point(150, 200),
        size: new Size(200, 100),
        fillColor: new Color(0.2, 0.1, 0.2)
      }),
      raster({
        position: new Point(200, 200),
        size: new Size(30, 30),
        source: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
      })
    )
  )
)

Tempo.render({ store, template })
