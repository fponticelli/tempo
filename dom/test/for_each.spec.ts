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

import { createContext } from './common'
import { div } from '../src/html'
import { forEach } from '../src/for_each'

describe('repeat', () => {
  it('repeat starting empty', () => {
    const ctx = createContext()
    const template = forEach({}, div({}, String))
    const view = template.render(ctx, [])
    expect(ctx.doc.body.innerHTML).toEqual('<!--md:for_each-->')
    view.change([1, 2, 3])
    expect(ctx.doc.body.innerHTML).toEqual('<div>1</div><div>2</div><div>3</div><!--md:for_each-->')
    view.change([4, 5])
    expect(ctx.doc.body.innerHTML).toEqual('<div>4</div><div>5</div><!--md:for_each-->')
    view.change([1, 2, 3])
    expect(ctx.doc.body.innerHTML).toEqual('<div>1</div><div>2</div><div>3</div><!--md:for_each-->')
    view.change([])
    expect(ctx.doc.body.innerHTML).toEqual('<!--md:for_each-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('repeat starting full', () => {
    const ctx = createContext()
    const template = forEach({ refId: 'A' }, div({}, String))
    const view = template.render(ctx, [1, 2, 3])
    expect(ctx.doc.body.innerHTML).toEqual('<div>1</div><div>2</div><div>3</div><!--A-->')
    view.change([4, 5])
    expect(ctx.doc.body.innerHTML).toEqual('<div>4</div><div>5</div><!--A-->')
    view.change([1, 2, 3])
    expect(ctx.doc.body.innerHTML).toEqual('<div>1</div><div>2</div><div>3</div><!--A-->')
    view.change([])
    expect(ctx.doc.body.innerHTML).toEqual('<!--A-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
