import { fetchRssPosts } from "@/utils/rss";
import { Card } from "./Card";

export const PostFeed = async () => {

	const stories = await fetchRssPosts(
		"https://note.com/minytheminer/m/m00f9e97acc80/rss"
	);

	return <div className="flex flex-wrap flex-row p-4">{stories.map((story, index) => <Card story={story} key={index} />)}</div>
};
