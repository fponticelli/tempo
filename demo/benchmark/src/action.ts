export interface ChangeOptionMaxTime {
  kind: 'ChangeOptionMaxTime'
  value: number
}

export interface ToggleVersion {
  kind: 'ToggleVersion'
  id: string
  selected: boolean
}

export interface ToggleTest {
  kind: 'ToggleTest'
  id: string
  selected: boolean
}

export interface ToggleAllVersions { kind: 'ToggleAllVersions' }

export interface ToggleAllTests { kind: 'ToggleAllTests' }

export interface ExecuteTests { kind: 'ExecuteTests' }

export type Action = ChangeOptionMaxTime | ToggleVersion | ToggleTest | ToggleAllVersions | ToggleAllTests | ExecuteTests

export const Action = {
  changeOptionMaxTime: (value: number): Action => ({ kind: 'ChangeOptionMaxTime', value }),
  toggleVersion: (id: string, selected: boolean): Action => ({ kind: 'ToggleVersion', id, selected }),
  toggleAllVersions: (): Action => ({ kind: 'ToggleAllVersions' }),
  toggleTest: (id: string, selected: boolean): Action => ({ kind: 'ToggleTest', id, selected }),
  toggleAllTests: (): Action => ({ kind: 'ToggleAllTests' }),
  executeTests: (): Action => ({ kind: 'ExecuteTests' })
}
