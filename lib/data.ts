import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import amazon from "@/public/amazon.png";
import lms from "@/public/lms.png";
import agrado from "@/public/agrado.png";
import event from "@/public/evently.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated Addis Ababa University",
		location: "Addis Ababa, Ethiopia",
		description:
			"I graduated Software Engineering. I immediately found a job as a front-end developer.",
		icon: React.createElement(LuGraduationCap),
		date: "2017",
	},
	{
		title: "Graphics and Video Editor  ",
		location: "Bahir dar, Ethiopia",
		description:
			"As a film editor and graphics, my role was Collaborating closely with the production team, you grasp their needs and specifications, utilizing your technical skills and artistic sensibilities to enhance the visual and narrative aspects of the film. By reviewing the shooting script and raw material, you create a shot decision list that prioritizes scenes based on their value and contribution to continuity. ",
		icon: React.createElement(CgWorkAlt),
		date: "2018 - 2020",
	},
	{
		title: "Software Developer",
		location: "Bahir dar, Ethiopia",
		description:
			"as Software developer i accomplished many projects like `✍️Reporting System`,`📺TV, FM and 📻 Radio Livestream Running Order Management System |ROM` and `✍️💰Plan and Field Allowance Management` using Laravel framework",
		icon: React.createElement(FaReact),
		date: "2020 - 2023",
	},

	{
		title: "Full-stack Developer at Bank industry",
		location: "Addis Ababa, Ethiopia",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2023 - Present",
	},
] as const;

export const projectsData = [
	{
		title: "Learning Management System",
		description:
			"I Built my own Learning Management System platform to learn new tech. like udemy clone and users can purchase course ,rate and comment the course",
		tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma", "Clerk", "MUX"],
		imageUrl: lms,
		proLink: "https://learning-management-system-advanced.vercel.app/",
	},
	{
		title: "Evently",
		description:
			"Evently is a unique platform which connects companies & professionals with event suppliers who match their specific criteria , organizer have their account and can post their event , purchase event and check order detail",
		tags: [
			"React",
			"TypeScript",
			"Next.js",
			"Tailwind",
			"MongoDB",
			"NextAuth",
			"Strip Payment",
		],
		imageUrl: event,
		proLink: "https://event-promotion.vercel.app/",
	},
	{
		title: "Amazone Shopping",
		description:
			"I Built this amazon clone to learn how e-commerce and payment integration",
		tags: [
			"React",
			"TypeScript",
			"Next.js",
			"Tailwind",
			"Redux Toolkit",
			"Strip Payment",
		],
		imageUrl: amazon,
		proLink: "https://amazon-shopping-gold.vercel.app/",
	},

	{
		title: "Agrado Ethiopia",
		description:
			"I develope for Agrado Ethiopia Local Non Governmental, Non-Political and non-religious organization that has been working in Ethiopia in partnership with both local and international Partners on poverty reduction, climate change ,food security, community health, emergencies and disasters response, Promoting peace and justice and development and human rights advocacy. ",
		tags: ["Laravel", "javascript", "Bootstrap"],
		imageUrl: agrado,
		proLink: "https://www.agradoethiopia.org/",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"GraphQL",
	"Laravel",
	"Express",
	"PostgreSQL",
] as const;
