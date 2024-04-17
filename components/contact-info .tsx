import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMobileAlt } from "react-icons/fa";
import { ReactNode } from "react";

import { useEffect } from "react";
interface ContactInfoProps {
	icon: ReactNode; // ReactNode type is used for accepting any JSX element as the icon
	title: string;
	info: ReactNode; // ReactNode type is used for accepting any JSX element as the info
}
const ContactInfo = ({ icon, title, info }: ContactInfoProps) => {
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
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
			transition={{ duration: 0.7 }}
			className="w-full border-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
		>
			<div className="flex items-center">
				{icon}
				<p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
					{title}
				</p>
			</div>
			<p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
				{info}
			</p>
		</motion.div>
	);
};

const ContactSection = () => {
	return (
		<div className="flex flex-col pt-16 lg:flex-row gap-x-6 pb-10">
			<ContactInfo
				icon={<i className="bx bx-phone text-2xl text-grey-40"></i>}
				title="My Phone"
				info={
					<>
						<FaMobileAlt className="w-8 h-8 text-[#fecaca]" /> (+251) 918 270
						370
					</>
				}
			/>
			<ContactInfo
				icon={<i className="bx bx-envelope text-2xl text-grey-40"></i>}
				title="My Email"
				info="chalie2123@gmail.com"
			/>
			<ContactInfo
				icon={<i className="bx bx-map text-2xl text-grey-40"></i>}
				title="My Address"
				info="Addis Ababa, Ethiopia"
			/>
		</div>
	);
};

export default ContactSection;
