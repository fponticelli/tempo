export type Result<T> =
  | { kind: 'failure', message: string }
  | { kind: 'success', value: T }

export type Action =
  | { kind: 'LoadUrl' }
  | { kind: 'ChangeUrl', url: string }
  | { kind: 'ImageLoaded', result: Result<HTMLImageElement> }

export const Action = {
  loadUrl: { kind: 'LoadUrl' } as Action,
  changeUrl(url: string): Action {
    return { kind: 'ChangeUrl', url }
  },
  imageLoaded(value: HTMLImageElement): Action {
    return { kind: 'ImageLoaded', result: { kind: 'success', value } }
  },
  imageFailed(message: string): Action {
    return { kind: 'ImageLoaded', result: { kind: 'failure', message } }
  }
}
