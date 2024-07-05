"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Landing = () => {
	useEffect(() => {
		redirect("/home");
	}, []);
};

export default Landing;
