"use client";
import { Button, Spinner } from "@nextui-org/react";
import {
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from "react";
import { useStoryState } from "./Posts";

export const SortContext = createContext({
	sort: "oldest",
	setSort: (() => {}) as Dispatch<SetStateAction<string>>,
});

export const useSort = () => useContext(SortContext);

export const SortMagazine = () => {
	const sortOption = ["oldest", "newest"];
	const { sort, setSort } = useSort();
	const { isLoading } = useStoryState();

	const sortItems = () => {
		console.log(sortOption);
		setSort(sort === "oldest" ? "newest" : "oldest");
	};

	return (
		<Button
			className="fixed z-10 bottom-2 left-14 p-2 rounded-full"
			isIconOnly
			color="warning"
			variant="faded"
			disabled={isLoading}
			onClick={sortItems}>
			{isLoading ? (
				<Spinner size="sm" />
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-6 h-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
					/>
				</svg>
			)}
		</Button>
	);
};
