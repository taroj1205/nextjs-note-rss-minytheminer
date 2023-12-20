import { Suspense } from "react";
import Loading from "./loading";
import { PostFeed } from "@/component/PostFeed";

const Page = () => {
	return (
		<Suspense fallback={<Loading />}>
			<PostFeed />
		</Suspense>
	);
};

export default Page;
