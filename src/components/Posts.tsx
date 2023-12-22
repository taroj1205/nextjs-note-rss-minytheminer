"use client";
import { RssPost } from "@/utils/rss";
import { Card } from "./Card";
import { useSort } from "./SortMagazine";

export const Posts = ({ stories }: { stories: RssPost[] }) => {
  const { sort } = useSort();

  const sortedStories = sort === "newest" ? stories : [...stories].reverse();

  return (
    <div className="flex flex-wrap flex-row p-4 max-w-4xl mx-auto">
      {sortedStories.map((story, index) => (
        <Card story={story} key={index} />
      ))}
    </div>
  );
};