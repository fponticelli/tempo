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

console.log('BEFORE import')

import { Tempo } from 'tempo-dom/lib/tempo'
console.log(Tempo)

import { a } from 'tempo-dom/lib/html'
console.log(a)

// const component = simpleComponent<number, unknown>(
//   n => {
//     n.div(n => {
//       n.class('app').div(n => {
//         n.div(n => n.class('count count-small').text('count')).div(n =>
//           n.class('count').text(String)
//         )
//         n.class('buttons')
//           .button(b => {
//             b.onClick(count => count - 1)
//               .disabled(count => count <= 0)
//               .text('-')
//           })
//           .button(b => {
//             b.onClick(count => count + 1).text('+')
//           })
//       })
//     })
//   }
//   // div(
//   //   { attrs: { class: 'app' } },
//   //   div({ attrs: { class: 'count count-small' } }, 'count'),
//   //   div({ attrs: { class: 'count' } }, String),
//   //   div(
//   //     { attrs: { class: 'buttons' } },
//   //     button(
//   //       {
//   //         events: { click: count => count - 1 },
//   //         attrs: { disabled: count => count <= 0 }
//   //       },
//   //       '-'
//   //     ),
//   //     button({ events: { click: count => count + 1 } }, '+')
//   //   )
//   // )
// )

// console.log(component)

// Tempo.renderSimple({ component, state: 0 })
