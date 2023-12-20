import { RssPost } from "@/utils/rss";
import {
	Card as NextCard,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
	Link as NextLink,
	Image,
	Skeleton,
} from "@nextui-org/react";
import Link from "next/link";

export const magazine: { [key: string]: RssPost } = {
	"速く走りたいので、スピードに極振りしました": {
		publishedAt: "Wed, 15 Feb 2023 14:05:13 +0900",
		link: "https://note.com/minytheminer/m/m00f9e97acc80/rss",
		thumbnail:
			"https://assets.st-note.com/production/uploads/images/98143384/3b3f25324600071f0c1c1c41c0c37434.png?width=800",
		title: "速く走りたいので、スピードに極振りしました",
		description:
			"速く走りたいのでスピードに極振りしました。 VRの世界で、いろいろ楽しみ、本物の世界とVRの世界が入り混じってしまったことまであった。",
	},
	普通に生きたい僕であった: {
		publishedAt: "Tue, 31 Jan 2023 10:25:29 +0900",
		link: "https://note.com/minytheminer/m/m1fb4fdf7a0d1/rss",
		thumbnail:
			"https://assets.st-note.com/production/uploads/images/97453240/c99c875c048b8594d31a09031ed9ba0a.png?width=800",
		title: "普通に生きたい僕であった",
		description: "単なる小説です。",
	},
	シャドウキラー: {
		publishedAt: "Wed, 01 Feb 2023 12:27:36 +0900",
		link: "https://note.com/minytheminer/m/m99c4f90ec3ca/rss",
		thumbnail:
			"https://assets.st-note.com/production/uploads/images/101667501/b943abb686d7a6c80c768e604a3fb254.png?width=800",
		title: "シャドウキラー",
		description: "シャドウキラー",
	},
	百不思議の小学校シリーズ: {
		publishedAt: "Wed, 01 Feb 2023 12:27:36 +0900",
		link: "https://note.com/minytheminer/m/mac80516f5c41/rss",
		thumbnail:
			"https://assets.st-note.com/production/uploads/images/97288919/66eefb9ce118be93a9dbe4bc36c6a08c.jpeg?width=800",
		title: "百不思議の小学校シリーズ",
		description:
			"日本の中に貝日小学校という小学校がありました。その学校にはたくさんの不思議なことが起きるという言い伝えがあります。100個以上もあると予想されているため、百不思議の小学校とも言われています。",
	},
	暗闇と光: {
		publishedAt: "Tue, 07 Feb 2023 14:21:24 +0900",
		link: "https://note.com/minytheminer/m/mb823b0d78cc3/rss",
		thumbnail:
			"https://assets.st-note.com/production/uploads/images/97748741/676ff7839e5817299b08e7a1fe7d9112.png?width=800",
		title: "暗闇と光",
		description:
			"僕の名前はエグレス・エルゼン（えぐれす・えるぜん）。 一つの大きな家族の中に生まれた。 この世界には火、風、水、土、葉という魔法が存在するが、僕はそれが一つも使えない。しかし、僕は暗闇の魔法が使えた世界でたった一人のダークネス魔術師。",
	},
	マインクラフト: {
		publishedAt: "Wed, 08 Mar 2023 15:05:11 +0900",
		link: "https://note.com/minytheminer/m/mf1c3605f3985/rss",
		thumbnail:
			"https://assets.st-note.com/production/uploads/images/101668143/2d19c292c621f4494e2ab10bf0230723.jpeg?width=800",
		title: "マインクラフト",
		description: "マインクラフト",
	},
	忍部: {
		publishedAt: "Sun, 26 Feb 2023 10:30:09 +0900",
		link: "https://note.com/minytheminer/m/m2e6dea9e777a/rss",
		thumbnail:
			"https://assets.st-note.com/production/uploads/images/101667720/beeba0c6525e0878c86f918b8336af22.png?width=800",
		title: "忍部",
		description: "忍部",
	},
};

export const Magazines = () => {
	return (
		<div className="flex flex-wrap flex-row p-4 max-w-4xl mx-auto">
			{Object.values(magazine).map((story: RssPost, index: number) => (
				<Card key={index} story={story} />
			))}
		</div>
	);
};

const Card = ({ story }: { story: RssPost }) => {
	const date = new Date(story.publishedAt);
	const formattedDate = `${date.getFullYear()}年${
		date.getMonth() + 1
	}月${date.getDate()}日`;

	const magazineId = story.link.split("/")[5];

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
				<NextLink as={Link} href={"/magazine/" + magazineId}>
					もっと読む
				</NextLink>
			</CardFooter>
		</NextCard>
	);
};
