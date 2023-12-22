// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import { SortContext } from "./SortMagazine";
import { StoryStateContext } from "./Posts";

export function Providers({ children }: { children: React.ReactNode }) {
	const sortOption = ["oldest", "newest"];
	const [sort, setSort] = useState(sortOption[0]);
	const [isLoading, setIsLoading] = useState(true);

	return (
		<NextUIProvider>
			<SortContext.Provider value={{ sort, setSort }}>
				<StoryStateContext.Provider value={{ isLoading, setIsLoading }}>
					{children}
					</StoryStateContext.Provider>
			</SortContext.Provider>
		</NextUIProvider>
	);
}
