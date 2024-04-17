"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import { FaMobileAlt } from "react-icons/fa";
import GoodAt from "./good-at";
import ContactSection from "./contact-info ";

export default function Experience() {
	const { ref } = useSectionInView("Experience");
	const { theme } = useTheme();

	return (
		<section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-35">
			<SectionHeading>My experience</SectionHeading>
			<VerticalTimeline lineColor="">
				{experiencesData.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background:
									theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
								boxShadow: "none",
								border: "1px solid #fca5a5",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight:
									theme === "light"
										? "0.4rem solid #fca5a5"
										: "0.4rem solid #fca5a5",
							}}
							date={item.date}
							icon={item.icon}
							iconStyle={{
								background: theme === "light" ? "white" : "#fca5a5",
								border: "1px solid #fca5a5",
								fontSize: "1.5rem",
							}}
						>
							<h3 className="font-semibold capitalize">{item.title}</h3>
							<p className="font-normal !mt-0">{item.location}</p>
							<p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
								{item.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
				<GoodAt />
				<ContactSection />
			</VerticalTimeline>
		</section>
	);
}
