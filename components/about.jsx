"use client";
import { InView } from "react-intersection-observer";
import aboutimg from "@/public/about-img.jpg";
import styles from "@/app/app.module.css";

export default function About({ children }) {
	return (
		<InView triggerOnce threshold={0.5}>
			{({ inView, ref, entry }) => (
				<div
					ref={ref}
					className={`${
						inView ? `${styles.fadeInAnimation} opacity-1` : "opacity-0"
					} flex flex-col md:flex-row items-center w-full justify-evenly`}
				>
					{children}
				</div>
			)}
		</InView>
	);
}
