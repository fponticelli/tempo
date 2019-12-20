import { component } from 'tempo-paper/lib/component'
import { Store } from 'tempo-store/lib/store'

import { makeState, State } from './state'
import { reducer } from './reducer'
import { htmlPortalWithSelector } from 'tempo-paper/lib/html_portal'
import { toolbar } from './toolbar'
import { Action } from './action'
import { middleware } from './middleware'
import { matchBool } from 'tempo-paper/lib/match'
import { fragment } from 'tempo-paper/lib/fragment'
import { raster } from 'tempo-paper/lib/raster'
import { mapState } from 'tempo-paper/lib/map'
import { circle } from 'tempo-paper/lib/shape'
import { forEach } from 'tempo-paper/lib/for_each'
import { Point, Size } from 'paper'
// import { Size, Point } from 'paper'

const state = makeState(
  // 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg'
  'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg'
)

const store = Store.ofState({ state, reducer })
store.observable.on(middleware(store))

export const makeApp = () => {
  store.observable.on(console.log)
  store.process(Action.loadUrl)

  return component(
    { store },
    htmlPortalWithSelector({ selector: '#toolbar' }, toolbar),
    matchBool({
      condition: state => typeof state.raster !== 'undefined',
      true:
        fragment(
          raster({
            image: state => state.raster?.image!,
            // size: state => state.size,
            // size: state => fitSize(state.raster!, state.size),
            // position: state => center(state.size),
            // opacity: 0.3
          }),
          mapState(
            { map: (state: State) => {
              const count = 40
              const min = Math.min(state.size.width!, state.size.height!)
              const max = Math.max(state.size.width!, state.size.height!)
              const side = Math.floor(min / count)
              const fill = Math.floor(max / side)
              const xs = min === state.size.width ? count : fill
              const ys = min === state.size.width ? fill : count
              const ox = (state.size.width! - xs * side) / 2
              const oy = (state.size.height! - ys * side) / 2
              const results = []
              const dox = (state.size.height! - count * side) / 2
              const doy = (state.size.width! - count * side) / 2

              const size = new Size(side, side)
              for (let x = 0; x < xs; x++) {
                for (let y = 0; y < ys; y++) {
                  const dx = ox + x * side + side / 2
                  const dy = oy + y * side + side / 2
                  const position = new Point(dx, dy)
                  const imgPosition = new Point(dx + dox, dy + doy)
                  results.push({
                    size,
                    position,
                    color: state.raster?.getPixel(imgPosition)
                  })
                }
              }
              return results
            } },
            forEach(
              {},
              circle({
                size: state => state.size,
                position: state => state.position,
                fillColor: state => state.color,
                opacity: 0.4
              })
            )
          )
        ),
      false: fragment()
    })
  )
}
