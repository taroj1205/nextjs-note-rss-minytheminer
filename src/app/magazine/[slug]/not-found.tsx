import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center py-12 px-4 sm:px-6 lg:px-8">
			<h1 className="text-9xl font-extrabold text-gray-900">404</h1>
			<p className="text-4xl font-extrabold text-gray-700 mt-4">
				マガジンが見つかりません。
			</p>
			<p className="mt-8 text-lg text-gray-500">
				お探しのマガジンは見つかりませんでした。
			</p>
			<div className="mt-6">
				<Link href="/" className="text-blue-500 hover:text-blue-700 underline">
					ホームに戻る
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
