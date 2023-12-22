// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import { SortContext } from "./SortMagazine";

export function Providers({ children }: { children: React.ReactNode }) {
	const sortOption = ["oldest", "newest"];
	const [sort, setSort] = useState(sortOption[0]);

	return (
		<NextUIProvider>
			<SortContext.Provider value={{ sort, setSort }}>
				{children}
			</SortContext.Provider>
		</NextUIProvider>
	);
}
