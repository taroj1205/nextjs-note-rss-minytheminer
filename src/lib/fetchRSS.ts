import { RssPost, fetchRssPosts } from './rss'

//Vercelのドメインの入力
const vercelDomain = process.env.NEXT_PUBLIC_VERCEL_URL

//ZennのRSSフィードのURL
const zennFeedDomain = process.env.NEXT_PUBLIC_ZENN_URL

//note-rss-proxyのAPIルートからnoteのRSSフィードのURLを取得
const noteUrl = `${vercelDomain}/api/note-rss-proxy`

//ZennのRSSフィードのURLを取得
const zennUrl = `${zennFeedDomain}`

const getAggregatedPosts = async (): Promise<RssPost[]> => {
  // 各サービスから記事データを取得
  const notePosts = await fetchRssPosts(noteUrl)
  const zennPosts = await fetchRssPosts(zennUrl)

  // 記事データを結合
  const aggregatedPosts: RssPost[] = [...notePosts, ...zennPosts]

  //省略
  return aggregatedPosts
}

export { getAggregatedPosts }
