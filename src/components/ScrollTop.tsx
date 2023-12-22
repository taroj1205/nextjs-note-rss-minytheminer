"use client";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

export const ScrollTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return function cleanup() {
			window.removeEventListener("scroll", checkScrollTop);
		};
	});

	useEffect(() => {
		checkScrollTop();
	}, [])

	const checkScrollTop = () => {
		if (window.scrollY <= 600) {
			setShowScroll(false);
		} else if (window.scrollY > 600) {
			setShowScroll(true);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<Button
			className={`fixed z-10 bottom-2 right-2 p-2 rounded-full ${showScroll ? "" : "hidden"}`}
			isIconOnly
			color="primary"
			variant="faded"
			onClick={scrollTop}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4.5 15.75l7.5-7.5 7.5 7.5"
				/>
			</svg>
		</Button>
	);
};
