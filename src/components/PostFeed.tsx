import { RssPost, fetchRssPosts } from "@/utils/rss";
import { Card } from "./Card";

export const PostFeed = async ({ url }: { url: string }) => {
	let page = 1;
	let stories: RssPost[] = [];

	while (true) {
		const newStories = await fetchRssPosts(url, page);
		if (newStories.length === 0) {
			break; // No more stories, exit the loop
		}

		stories = [...stories, ...newStories];
		page++;
	}

	return (
		<>
			<div className="px-4 pt-10 flex items-center justify-center flex-col">
				<h1 className="text-2xl font-bold mb-8">∑inyThe∑iner - JokagiDesu</h1>
				<h2 className="text-4xl font-semibold text-gray-200">
					{stories[0].magazine}
				</h2>
			</div>
			<div className="flex flex-wrap flex-row p-4 max-w-4xl mx-auto">
				{[...stories].reverse().map((story, index) => (
					<Card story={story} key={index} />
				))}
			</div>
		</>
	);
};
