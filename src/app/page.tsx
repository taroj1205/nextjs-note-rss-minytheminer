import { Magazines } from "@/components/Magazines";

const Page = () => {
	return (
		<>
			<div className="px-4 pt-10 flex items-center justify-center flex-col">
				<h1 className="text-2xl font-bold mb-8">∑inyThe∑iner - JokagiDesu</h1>
				<h2 className="text-4xl font-semibold text-gray-200">マガジン一覧</h2>
			</div>
			<Magazines />
		</>
	);
};

export default Page;
