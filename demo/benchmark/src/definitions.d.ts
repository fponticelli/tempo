export namespace Benchmark {
  export class Suite {
    add({
      id: string,
      async: boolean,
      fn: Function,
      name: string,
      setup: Function,
      teardown: Function,
      maxTime: number
    }): void;

    on(type: 'cycle', handler: (event: { target: Target }) => void): void
    on(type: 'complete', handler: (event: {}) => void): void

    run({ async: boolean, queued: boolean })
  }
}

export interface Target {
  options: {
    async: boolean
    defer: boolean
    delay: number
    id: string
    initCount: number
    maxTime: number
    minSamples: number
    minTime: number
    name: string
  }
  async: boolean
  defer: boolean
  delay: number
  id: string
  initCount: number
  maxTime: number
  minSamples: number
  minTime: number
  name: string
  stats: {
    moe: number
    rme: number
    sem: number
    deviation: number
    mean: number
    sample: number[]
    variance: number
  }
  times: {
    cycle: number
    elapsed: number
    period: number
    timeStamp: number
  }
  running: boolean
  count: number
  cycles: number
  hz: number
}
