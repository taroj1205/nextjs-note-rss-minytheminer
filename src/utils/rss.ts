import axios from 'axios'
import { parseStringPromise } from 'xml2js'

export interface RssPost {
  title: string
  description: string
  link: string
  publishedAt: string
  thumbnail?: string
}

const fetchRssPosts = async (url: string): Promise<RssPost[]> => {
  let page = 1;
  let allPosts: RssPost[] = [];

  while (true) {
    // Fetch the RSS feed
    const response = await axios.get(`${url}?page=${page}`);
    const xml = response.data;

    // Convert XML to JavaScript object
    const parsedXml = await parseStringPromise(xml);

    // Extract post data
    const rssPosts = parsedXml.rss.channel[0].item
      ? parsedXml.rss.channel[0].item.map((entry: any): RssPost => {
          const mediaThumbnail = entry['media:thumbnail'] ? entry['media:thumbnail'][0] : undefined;
          const enclosureUrl = entry.enclosure ? entry.enclosure[0].$.url : undefined;

          return {
            title: entry.title[0],
            description: entry.description[0].replace(/<\/?[^>]+(>|$)/g, "").replace("続きをみる", ""),
            link: entry.link[0],
            publishedAt: new Date(entry.pubDate[0]).toISOString(),
            thumbnail: mediaThumbnail || enclosureUrl || undefined,
          };
        })
      : [];

    if (rssPosts.length === 0) {
      break;
    }

    allPosts = [...allPosts, ...rssPosts];
    page++;
  }

  return allPosts;
}

export { fetchRssPosts }