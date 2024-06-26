"use client";

import { useRef, MutableRefObject } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
type FormRefType = MutableRefObject<HTMLFormElement | null>;

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	const formRef: FormRefType = useRef(null);

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%,45rem)] text-center"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>
				HERE'S A <span className="text-[#fca5a5] font-bold ">CONTACT FORM</span>{" "}
			</SectionHeading>

			<p className="text-gray-700 mt-6 dark:text-white/80">
				Have Any Questions? Please contact me directly at{" "}
				<a className="underline" href="mailto:example@gmail.com">
					chalie2123@@gmail.com
				</a>{" "}
				or through this form.
			</p>

			<form
				ref={formRef}
				className="mt-10 flex flex-col dark:text-black"
				action={async (formData) => {
					console.log(formData);
					console.log(formData.get("senderEmail"));
					const { data, error } = await sendEmail(formData);
					console.log(formData);

					if (error) {
						toast.error(error);
						return;
					}

					toast.success("Email sent successfully!");
					formRef.current?.reset();
				}}
			>
				<input
					className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="message"
					placeholder="Your message"
					required
					maxLength={5000}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
