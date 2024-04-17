"use client";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaMobileAlt } from "react-icons/fa";
import ContactSection from "./contact-info ";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
interface ServiceItemProps {
	iconSrc: string;
	title: string;
	description: string;
}

const ServiceItem = ({ iconSrc, title, description }: ServiceItemProps) => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start({ opacity: 1, y: 0 });
		} else {
			controls.start({ opacity: 0, y: 50 });
		}
	}, [controls, inView]);
	return (
		<>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 50 }}
				animate={controls}
				transition={{ duration: 0.7 }}
				className="group rounded px-8 py-12 shadow hover:bg-[#9ca3af]"
				whileHover={{ scale: 1.05 }}
			>
				<div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
					<div className="hidden group-hover:block">
						<Image
							width={200}
							height={200}
							src={iconSrc}
							alt={`${title} icon`}
						/>
					</div>
					<div className="block group-hover:hidden">
						<Image
							width={200}
							height={200}
							src={iconSrc.replace("white", "black")}
							alt={`${title} icon`}
						/>
					</div>
				</div>
				<div className="text-center">
					<h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
						{title}
					</h3>
					<p className="text-grey  text-justify text-balance  pt-4 text-sm group-hover:text-white md:text-base">
						{description}
					</p>
				</div>
			</motion.div>
		</>
	);
};

const GoodAt = () => {
	return (
		<div className="container py-16 md:py-20">
			<h2 className="text-center font-header text-2xl font-semibold uppercase text-primary sm:text-3xl lg:text-4xl">
				Here's what I'm{" "}
				<span className="text-[#fca5a5] font-bold ">good at</span>
			</h2>
			<h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
				These are the services I offer
			</h3>

			<div className="grid grid-cols-1  text-justify text-wrap gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
				<ServiceItem
					iconSrc="/assets/img/icon-development-white.svg"
					title="BACKEND WEB APP"
					description="As a backend web app developer, I thrive on building robust and scalable solutions that power the digital world. With expertise in RESTful API development and a commitment to clean, efficient code using Node.js, I bring projects to fruition with reliability and performance in mind. From architecting databases to implementing server-side logic, I leverage cutting-edge technologies to drive innovation and deliver exceptional results."
				/>
				<ServiceItem
					iconSrc="/assets/img/icon-content-white.svg"
					title="FRONTEND DESIGN"
					description="Frontend design is where creativity meets functionality, and I excel in crafting user-centric experiences that elevate brands and engage audiences. With a passion for design and a focus on usability, I specialize in creating attractive interfaces with seamless integration to backend systems using the MERN stack. From wireframing to final implementation, I ensure every pixel serves a purpose, resulting in intuitive and visually compelling designs"
				/>
				<ServiceItem
					iconSrc="/assets/img/icon-mobile-white.svg"
					title="MOBILE APP DEVELOPMENT"
					description="Mobile app development is my realm of expertise, where I harness the power of technology to bring innovative ideas to life on iOS and Android platforms. From conceptualization to deployment, I specialize in developing feature-rich applications that deliver exceptional user experiences. With a focus on efficiency and performance, I leverage the latest tools and frameworks to create mobile solutions that stand out in a competitive market."
				/>
				<ServiceItem
					iconSrc="/assets/img/icon-mobile-white.svg"
					title="VIDEO EDITING AND GRAPHICS"
					description="
                   With a keen eye for detail and a passion for storytelling, I excel in the realm of video editing and graphics. I specialize in creating seamless visual experiences, manipulating film pieces to captivate audiences, and crafting stunning graphics that enhance narratives. Through meticulous editing and creative flair, I bring ideas to life, ensuring each project leaves a lasting impression."
				/>
			</div>
		</div>
	);
};

export default GoodAt;
