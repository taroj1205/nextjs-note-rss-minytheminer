import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
	Link,
	Skeleton,
	Image,
} from "@nextui-org/react";

export default function Loading() {
	return <LoadingSkeleton />;
}

const LoadingSkeleton = () => {
	return (
		<div className="overflow-hidden h-[100svh] pointer-events-none">
			<div className="px-4 pt-10 flex items-center justify-center flex-col">
				<h1 className="text-2xl font-bold mb-8">∑inyThe∑iner - JokagiDesu</h1>
				<Skeleton className="rounded-lg">
					<h2 className="text-4xl font-semibold text-gray-200 w-[400px]">
						Magazines
					</h2>
				</Skeleton>
			</div>
			<div className="p-4 flex flex-wrap justify-center max-w-4xl mx-auto">
				{Array(20)
					.fill(0)
					.map((_, i) => (
						<Card key={i} className="w-[400px] m-4 mx-auto" radius="lg">
							<Skeleton>
								<CardHeader>
									<Image
										height={200}
										className="h-[200px] rounded-lg bg-default-300"
									/>
								</CardHeader>
							</Skeleton>
							<Divider />
							<CardBody>
								<Skeleton className="mb-3 rounded-lg">
									<h2 className="h-6 text-xl font-bold"></h2>
									<h2 className="h-6 text-xl font-bold"></h2>
								</Skeleton>
								<Skeleton className="mb-2 rounded-lg">
									<p className="h-5 text-clip overflow-hidden line-clamp-5"></p>
								</Skeleton>
								<Skeleton className="mb-2 rounded-lg">
									<p className="h-5 text-clip overflow-hidden line-clamp-5"></p>
								</Skeleton>
								<Skeleton className="mb-2 rounded-lg">
									<p className="h-5 text-clip overflow-hidden line-clamp-5"></p>
								</Skeleton>
								<Skeleton className="mb-2 rounded-lg">
									<p className="h-5 text-clip overflow-hidden line-clamp-5"></p>
								</Skeleton>
								<Skeleton className="mb-4 rounded-lg">
									<p className="h-5 text-clip overflow-hidden line-clamp-5"></p>
								</Skeleton>
								<Skeleton className="w-24 rounded-lg">
									<p className="h-5 text-gray-500"></p>
								</Skeleton>
							</CardBody>
							<Divider />
							<CardFooter>
								<Skeleton className="rounded-lg">
									<Link isExternal showAnchorIcon href="#">
										Read more
									</Link>
								</Skeleton>
							</CardFooter>
						</Card>
					))}
			</div>
		</div>
	);
};
