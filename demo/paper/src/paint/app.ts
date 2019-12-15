import { component } from 'tempo-paper/lib/component'
import { Store } from 'tempo-store/lib/store'

import { makeState } from './state'
import { reducer } from './reducer'
import { htmlPortalWithSelector } from 'tempo-paper/lib/html_portal'
import { toolbar } from './toolbar'
import { Action } from './action'
import { middleware } from './middleware'
import { matchBool } from 'tempo-paper/lib/match'
import { fragment } from 'tempo-paper/lib/fragment'
import { raster } from 'tempo-paper/lib/raster'
import { Size, Point } from 'paper'

const state = makeState(
  // 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg'
  'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg'
)

const store = Store.ofState({ state, reducer })
store.observable.on(middleware(store))

const fitSize = (image: HTMLImageElement, size: Size) => {
  const iw = image.width
  const ih = image.height
  const ir = iw / ih
  const cw = size.width!
  const ch = size.height!
  const cr = cw / ch
  console.log(
    `iw: ${iw}, ih: ${ih}, ir: ${ir}, cw: ${cw}, cw: ${cw}, cw: ${cw}, ratio: ${ir >
      cr}`
  )
  if (ir < cr) {
    const ratio = cw / iw
    return new Size(iw * ratio, ih * ratio)
  } else {
    const ratio = ch / ih
    return new Size(iw * ratio, ih * ratio)
  }
}

const center = (size: Size) => {
  return new Point(size.width! / 2, size.height! / 2)
}

export const makeApp = () => {
  store.observable.on(console.log)
  store.process(Action.loadUrl)

  return component(
    { store },
    htmlPortalWithSelector({ selector: '#toolbar' }, toolbar),
    matchBool({
      condition: state => typeof state.raster !== 'undefined',
      true: raster({
        image: state => state.raster,
        size: state => fitSize(state.raster!, state.size),
        position: state => center(state.size),
        opacity: 0.3
      }),
      false: fragment()
    })
  )
}
