import {
  article,
  fragment,
  matchAsyncResult,
  mapField
} from 'tempo-dom/lib/html'
import { htmlContent } from './html_content'
import { Content } from '../state'
import { Action } from '../action'
import { AsyncResult } from 'tempo-std/lib/async_result'
import { HttpError } from '../request'
import { matchKind } from 'tempo-dom/lib/html'
import { demosContent } from './demos_content'
import { projectContent } from './project_content'
import { loader } from './loader'

export const content = fragment<
  AsyncResult<Content, HttpError, unknown>,
  Action,
  unknown
>($ =>
  $.append(
    matchAsyncResult({
      Failure: article($ =>
        $.class('content message is-danger').div($ =>
          $.class('message-body').text(s => s.message)
        )
      ),
      Loading: loader,
      NotAsked: '',
      Success: matchKind<Content, Action, unknown>({
        HtmlPage: htmlContent,
        Demos: mapField('demos', $ => $.append(demosContent)),
        Project: mapField('project', $ => $.append(projectContent))
      })
    })
  )
)
