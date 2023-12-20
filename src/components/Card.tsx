import { RssPost } from "@/utils/rss";
import {
	Card as NextCard,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
	Link,
	Image,
	Skeleton,
} from "@nextui-org/react";

export const Card = ({ story }: { story: RssPost }) => {
	const date = new Date(story.publishedAt);
	const now = new Date();
	const diffInMilliseconds = now.getTime() - date.getTime();
	const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
	const diffInDays = Math.floor(diffInHours / 24);

	let formattedDate;
	if (diffInHours < 24) {
		formattedDate = `${diffInHours} hours ago`;
	} else if (diffInDays <= 7) {
		formattedDate = `${diffInDays} days ago`;
	} else {
		formattedDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
	}

	return (
		<NextCard className="max-w-[400px] m-4 mx-auto">
			{story.thumbnail && (
				<CardHeader>
						<Image
							alt={story.title}
							height={200}
							radius="sm"
							src={story.thumbnail}
							width="100%"
						/>
				</CardHeader>
			)}
			<Divider />
			<CardBody>
				<h2 className="text-xl font-bold mb-3">{story.title}</h2>
				<div className="flex flex-col justify-between h-full">
					<p className="mb-4 text-clip overflow-hidden line-clamp-5">
						{story.description}
					</p>
					<p className="text-gray-500 flex">{formattedDate}</p>
				</div>
			</CardBody>
			<Divider />
			<CardFooter>
				<Link isExternal showAnchorIcon href={story.link} className="cursor-pointer">
					もっと読む
				</Link>
			</CardFooter>
		</NextCard>
	);
};
