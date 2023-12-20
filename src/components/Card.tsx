import { RssPost } from "@/utils/rss";
import { Card as NextCard, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export const Card = ({ story }: { story: RssPost }) => {
	const date = new Date(story.publishedAt);
	const formattedDate = `${date.getFullYear()}年${
		date.getMonth() + 1
	}月${date.getDate()}日`;

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
			<Divider/>
			<CardBody>
				<h2 className="text-xl font-bold mb-3">{story.title}</h2>
				<p className="mb-4 text-clip overflow-hidden line-clamp-5">
					{story.description}
				</p>
				<p className="text-gray-500">{formattedDate}</p>
			</CardBody>
			<Divider/>
			<CardFooter>
				<Link
					isExternal
					showAnchorIcon
					href={story.link}
				>
					Read more
				</Link>
			</CardFooter>
		</NextCard>
	);
};