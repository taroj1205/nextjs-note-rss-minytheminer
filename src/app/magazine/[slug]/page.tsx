import { Suspense } from "react";
import Loading from "./loading";
import { PostFeed } from "@/components/PostFeed";
import { Pagination } from "@nextui-org/react";

const Page = ({ params }: { params: { slug: string } }) => {
	const slug = params.slug;
	const url = `https://note.com/minytheminer/m/${slug}/rss`;
	return (
		<>
			<Suspense fallback={<Loading />}>
				<PostFeed url={url} />
			</Suspense>
		</>
	);
};

export default Page;
