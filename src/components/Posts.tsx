"use client";
import { RssPost } from "@/utils/rss";
import { Card } from "./Card";
import { useSort } from "./SortMagazine";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

export const StoryStateContext = createContext({
	isLoading: false,
	setIsLoading: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export const useStoryState = () => useContext(StoryStateContext);

export const Posts = ({ stories }: { stories: RssPost[] }) => {
  const { setIsLoading } = useStoryState();
  if (stories.length === 0) {
    setIsLoading(true);
  } else {
    setIsLoading(false);
  }
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