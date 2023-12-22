"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export const GoHome = () => {
	return (
		<Button
			className={`fixed z-10 bottom-2 left-2 p-2 rounded-full`}
			isIconOnly
			color="danger"
			variant="faded"
			as={Link}
			href="/">
			<FaHome size={20} />
		</Button>
	);
};
