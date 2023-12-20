import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Skeleton,
} from "@nextui-org/react";

export default function Loading() {
  return <LoadingSkeleton />;
}

const LoadingSkeleton = () => {
  return (
		<div className="p-4 flex flex-wrap justify-center h-[100vh] overflow-y-scroll pointer-events-none">
			{Array(20)
				.fill(0)
				.map((_, i) => (
					<Card key={i} className="w-[400px] m-4 mx-auto" radius="lg">
						<Skeleton>
							<CardHeader>
								<div className="h-[200px] rounded-lg bg-default-300"></div>
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
	);
};