"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import xml2js from "xml2js";
import { Card, Story } from "./component/Card";

const Page = () => {
	const [stories, setStories] = useState<Story[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchRSS = async () => {
			try {
				const response = await axios.get(
					"/api/rss/note?url=https://note.com/minytheminer/m/m00f9e97acc80/rss"
				);
				const parser = new xml2js.Parser({ explicitArray: false });
				parser.parseString(response.data, (err, result) => {
					if (err) {
						console.error(err);
					} else {
						const formattedStories = result.rss.channel.item.map(
							(story: any) => ({
								title: story.title,
								description: story.description.replace(/<\/?[^>]+(>|$)/g, ""),
								link: story.link,
								thumbnail: story["media:thumbnail"],
								publishedDate: story.pubDate,
							})
						);
						setStories(formattedStories);
					}
				});
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchRSS();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	return (
		<div className="p-4 flex flex-row flex-wrap">
			{stories.map((story, index) => (
        <Card story={story} key={index} />
			))}
		</div>
	);
};

export default Page;
