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

export type Differentiate<
  Field extends (string | number | symbol),
  State extends { [k in Field]: any },
  K extends State[Field]
> = State extends { [_ in Field]: K } ? State : never

export type DifferentiateByKind<
  State extends { kind: any },
  K extends State['kind']
> =
  Differentiate<'kind', State, K>
