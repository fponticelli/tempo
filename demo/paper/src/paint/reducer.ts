import { Action } from './action'
import { State } from './state'
import { reduceOnKind } from 'tempo-store/lib/reducer'
import { Raster, Size } from 'paper'

export const resizeRaster = (image: HTMLImageElement, raster: Raster, size: Size) => {
  raster.image = image
  raster.size = fitSize(image, size)
  // raster.position = center(image, size)
  return raster
}

const fitSize = (image: HTMLImageElement, size: Size) => {
  const iw = image.width
  const ih = image.height
  const ir = iw / ih
  const cw = size.width!
  const ch = size.height!
  const cr = cw / ch

  if (ir < cr) {
    const ratio = cw / iw
    return new Size(iw * ratio, ih * ratio)
  } else {
    const ratio = ch / ih
    return new Size(iw * ratio, ih * ratio)
  }
}

// const center = (image: HTMLImageElement, size: Size) => {
//   return new Point((image.width + size.width!) / 2, (image.height + size.height!) / 2)
  // return new Point(size.width! / 2, size.height! / 2)
  // return new Point(0, 0)
  // return new Point((-image.width + size.width!) / 2, (-image.height + size.height!) / 2)
// }

export const reducer = reduceOnKind<State, Action>({
  ChangeUrl: (state, action) => {
    return {
      ...state,
      url: action.url
    }
  },
  LoadUrl: (state, action) => {
    return {
      ...state,
      message: `loading ${state.url}`
    }
  },
  ImageLoaded: (state, action) => {
    switch (action.result.kind) {
      case 'failure':
        return {
          ...state,
          message: action.result.message
        }
      case 'success':
        const image = action.result.value
        const raster = new Raster(new Size(image.width, image.height))
        raster.remove()
        resizeRaster(action.result.value, raster, state.size)

        console.log(raster.size)
        return {
          ...state,
          message: '',
          image: action.result.value,
          raster
        }
      default:
        throw 'unreacheable'
    }
  }
})
