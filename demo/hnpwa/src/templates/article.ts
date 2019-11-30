import { article, section, span } from '@tempo/dom/lib/html'
import { Article } from '../state'
import { Action } from '../action'
import { commentsTemplate } from './comments'
import { itemFooterTemplate, itemUrlTemplate } from './page_feed'
import { mapState } from '@tempo/dom/lib/map'
import { unsafeHtml } from '@tempo/dom/lib/unsafe_html'

export const articleTemplate = article<Article, Action>(
  {},
  mapState(
    { map: (article: Article) => article.item },
    section(
      {},
      itemUrlTemplate,
      span({ attrs: { className: 'domain' } }, item => item.domain),
      itemFooterTemplate
    ),
    unsafeHtml({ content: item => item.content }),
    section({ attrs: { className: 'comments-view' } }, mapState({ map: item => item.comments || [] }, commentsTemplate))
  )
)
