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

    on(type: 'cycle', handler: (event: { target: unknown }) => void): void
    on(type: 'complete', handler: (event: {}) => void): void

    run({ async: boolean, queued: boolean })
  }
}
