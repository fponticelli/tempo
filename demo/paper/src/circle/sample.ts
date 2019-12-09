import { circle } from 'tempo-paper/lib/shape'
import { CanvasState } from '../state'
import { Point, Color } from 'paper'

export const template = circle<CanvasState, unknown>(
  {
    args: {
      radius: 100,
    },
    fillColor: new Color(0.4, 0.2, 0.3),
    position: ({size}) => new Point(size.width! / 2, size.height! / 2)
  }
)
