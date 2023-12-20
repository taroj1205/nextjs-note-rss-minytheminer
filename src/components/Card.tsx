import { RssPost } from "@/utils/rss";
import Link from "next/link";

export const Card = ({ story}: { story: RssPost }) => {
	const date = new Date(story.publishedAt);
	const formattedDate = `${date.getFullYear()}年${
		date.getMonth() + 1
	}月${date.getDate()}日`;

	return (
		<Link
			href={story.link}
			className="border border-gray-200 rounded-lg overflow-hidden m-4 max-w-sm mx-auto">
			{story.thumbnail && (
				<img
					src={story.thumbnail}
					alt={story.title}
					className="w-full h-48 object-cover"
				/>
			)}

			<div className="p-5">
				<h2 className="text-xl font-bold mb-3">{story.title}</h2>
				<p className="mb-4 text-clip overflow-hidden line-clamp-5">
					{story.description}
				</p>
				<p className="text-gray-500">{formattedDate}</p>
			</div>
		</Link>
	);
};
