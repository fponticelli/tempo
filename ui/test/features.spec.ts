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

// import { compare } from 'tempo-std/lib/strings'
// import { flatten, distinctPrimitive } from 'tempo-std/lib/arrays'
// import { keys } from 'tempo-std/lib/objects'
// import { features, FeatureDescription } from '../src/features'

// const descriptions = keys(features).map(k => features[k]('')) as FeatureDescription[]

// describe('make sure that ...', () => {
//   it('... variables are unique', () => {
//     const variables = flatten(descriptions.map(o => o.variables)).sort(compare)
//     const unique = distinctPrimitive(variables)
//     expect(variables).toEqual(unique)
//   }),
//   it('... selectors are unique', () => {
//     const selectors = flatten(descriptions.map(o => o.desc)).map(o => o.selector)
//     const unique = distinctPrimitive(selectors)
//     expect(selectors).toEqual(unique)
//   })
// })
