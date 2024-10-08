"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				Web and Mobile Application developer over 5 years of professional
				experience as <span className="font-medium">full-stack developer</span>{" "}
				{"  "}
				with solid understanding of Web app Development using SDLC{"  "}
				<span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out a solution to a problem. My core stack
				is{" "}
				<span className="font-medium">
					React, Next.js, Node.js,Laravel, MongoDB,MySQL and Oracle
				</span>
				. I am proficient in TypeScript and Prisma. I have a strong eagerness to
				learn and stay updated with emerging technologies. Currently, I am
				actively seeking a{" "}
				<span className="font-medium"> Remote Full-time position </span> to
				contribute my expertise as a software developer. as a software
				developer.
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I enjoy playing
				video games, watching movies, and playing football. I also enjoy{" "}
				<span className="font-medium">learning new things</span>.
			</p>
		</motion.section>
	);
}
