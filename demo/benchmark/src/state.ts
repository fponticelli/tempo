import { availableTests } from './tests'

export interface State {
  versions: Record<string, boolean>
  tests: TestInfoWithSelected[]
  options: TestOptions
  results: Record<string, unknown>
}

export const createState = (versions: string[]): State => {
  const tests = availableTests().map(test => ({
    ...test,
    selected: true
  }))
  return {
    versions: versions.reduce(
      (acc: Record<string, boolean>, curr: string) => {
        return {
          ...acc,
          [curr]: true
        }
      }, {}
    ),
    tests,
    results: {},
    options: {
      maxTime: 5
    }
  }
}

export interface TestInfo {
  id: string
  name: string
}

export interface TestInfoWithSelected extends TestInfo {
  selected: boolean
}

export interface TestResult {
  target: unknown
}

export interface TestDescription {
  id: string
  async?: boolean
  fn: string
  name: string
  args?: any
}

export interface TestOptions {
  maxTime: number
}
