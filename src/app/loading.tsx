export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return <LoadingSkeleton />;
}

const LoadingSkeleton = () => {
	return (
		<div className="p-4 flex flex-wrap justify-center h-[100svh] overflow-y-scroll pointer-events-none">
			{Array(20)
				.fill(0)
				.map((_, i) => (
					<div key={i} className="border border-gray-200 rounded-lg overflow-hidden m-4 w-[24rem] mx-auto">
						<div className="w-full h-48 bg-gray-200 animate-pulse" />

						<div className="p-5">
							<div className="h-6 bg-gray-200 animate-pulse mb-3"></div>
							<div className="h-4 bg-gray-200 animate-pulse mb-4"></div>
							<div className="h-4 bg-gray-200 animate-pulse"></div>
						</div>
					</div>
				))}
		</div>
	);
};
