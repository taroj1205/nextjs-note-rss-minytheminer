import { getThumbnail } from '@/components/Magazines';
import axios from 'axios';
import { notFound } from 'next/navigation';
import { parseStringPromise } from 'xml2js';

export interface RssPost {
  title: string;
  link: string;
  magazine?: string;
  publishedAt: string;
  thumbnail?: string;
  description?: string;
}

const fetchRssPosts = async (url: string, page: number): Promise<RssPost[]> => {
  try {
    // RSSフィードを取得
    const response = await axios.get(url + `?page=${page}`);
    const xml = response.data;

    // XMLをJavaScriptオブジェクトに変換
    const parsedXml = await parseStringPromise(xml);

    // 記事データを抽出
    const rssPosts = parsedXml.rss.channel[0].item
      ? parsedXml.rss.channel[0].item.map((entry: any): RssPost => {
        const mediaThumbnail = entry['media:thumbnail'] ? entry['media:thumbnail'][0] : undefined;
        const enclosureUrl = entry.enclosure ? entry.enclosure[0].$.url : undefined;
        const channelLink = parsedXml.rss.channel[0].link[0];
        const title = parsedXml.rss.channel[0].title[0];

        const thumbnail = getThumbnail(title);

        return {
          title: entry.title[0],
          magazine: parsedXml.rss.channel[0].title[0],
          description: entry.description[0].replace(/<\/?[^>]+(>|$)/g, "").replace("続きをみる", ""),
          link: entry.link[0],
          publishedAt: new Date(entry.pubDate[0]).toISOString(),
          thumbnail,
        };
      })
      : [];

    return rssPosts;
  } catch (error) {
    notFound()
  }
};

export { fetchRssPosts };