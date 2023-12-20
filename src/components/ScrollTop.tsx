"use client";
import { useEffect, useState } from "react";

export const ScrollTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return function cleanup() {
			window.removeEventListener("scroll", checkScrollTop);
		};
	});

	const checkScrollTop = () => {
		console.log(window.scrollY);
		if (window.scrollY > 1000) {
			setShowScroll(true);
		} else if (window.scrollY <= 1000) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<button
			className={`fixed z-10 bottom-2 right-2 p-2 rounded-full bg-gray-200 ${showScroll ? "block" : "hidden"}`}
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
		</button>
	);
};
