import axios from 'axios'
import { parseStringPromise } from 'xml2js'

export interface RssPost {
  title: string
  link: string
  publishedAt: string
  thumbnail?: string
  source: string
}

const fetchRssPosts = async (url: string): Promise<RssPost[]> => {
  // RSSフィードを取得
  const response = await axios.get(url)
  const xml = response.data

  // XMLをJavaScriptオブジェクトに変換
  const parsedXml = await parseStringPromise(xml)

  // 記事データを抽出
const rssPosts = parsedXml.rss.channel[0].item
 // 省略

  return rssPosts
}

export { fetchRssPosts }