"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const HomePage = () => {
	const [exitX, setExitX] = useState(0);

	const x = useMotionValue(0);
	const rotate = useTransform(x, [-200, 200], [-25, 25]);
	const opacity = useTransform(x, [-200, -125, 0, 125, 200], [0, 1, 1, 1, 0]);

	const handleDragEnd = (event, info) => {
		if (info.offset.x > 100) {
			setExitX(200);
			console.log("Dragged to the right");
		} else if (info.offset.x < -100) {
			setExitX(-200);
			console.log("Dragged to the left");
		} else {
			setExitX(0);
		}
	};

	return (
		<div className="flex items-center justify-center h-screen overflow-x-hidden">
			<motion.div
				drag="x"
				dragConstraints={{ left: 0, right: 0 }}
				onDragEnd={handleDragEnd}
				style={{ x, rotate, opacity }}
				initial={{ scale: 0.95, opacity: 0.5 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: "tween", duration: 0.3, ease: "easeIn" }}
				whileDrag={{ cursor: "grabbing" }}
				exit={{ x: exitX }}
				className="max-w-sm mx-auto mt-10 shadow-lg"
			>
				<Card className="w-full max-w-7xl p-6 bg-card text-card-foreground shadow-lg">
					<CardHeader>
						<CardTitle className="text-2xl font-bold">
							About Our Company
						</CardTitle>
						<CardDescription className="text-muted-foreground">
							Learn more about our mission and values.
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<div className="flex items-center gap-4">
							<BuildingIcon className="w-8 h-8 text-primary" />
							<div>
								<p className="text-lg font-medium">Established in 2015</p>
								<p className="text-muted-foreground">
									We've been helping businesses grow for over 7 years.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<UsersIcon className="w-8 h-8 text-primary" />
							<div>
								<p className="text-lg font-medium">100+ Employees</p>
								<p className="text-muted-foreground">
									Our team of experts is dedicated to your success.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<GlobeIcon className="w-8 h-8 text-primary" />
							<div>
								<p className="text-lg font-medium">Global Reach</p>
								<p className="text-muted-foreground">
									We serve clients in over 20 countries worldwide.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
};

function BuildingIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
			<path d="M9 22v-4h6v4" />
			<path d="M8 6h.01" />
			<path d="M16 6h.01" />
			<path d="M12 6h.01" />
			<path d="M12 10h.01" />
			<path d="M12 14h.01" />
			<path d="M16 10h.01" />
			<path d="M16 14h.01" />
			<path d="M8 10h.01" />
			<path d="M8 14h.01" />
		</svg>
	);
}

function GlobeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
			<path d="M2 12h20" />
		</svg>
	);
}

function UsersIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}

export default HomePage;
