import Image from "next/image";
import homebg from "@/public/home-bg.jpg";
import fire1 from "@/public/fire1.svg";
import fire2 from "@/public/fire2.svg";
import aboutimg from "@/public/about-img.jpg";
import styles from "@/app/app.module.css";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
			<div className="landing-section">
				<Image className="landing-bg" src={homebg} alt="david buraga" />
				<Image className="landing-bg" src={fire1} alt="david buraga" />
				<div className="w-100 text-center text-white relative">
					<h1 className={`${styles.landingTitle} mt-60 text-7xl`}>Hi, I'm David.</h1>
					<div className="">
						<p className={`${styles.landingSubtitle} text-2xl w-96 ml-auto mr-auto`}>
							I like taking brands to the next level using design and code.
						</p>
						<Button className={`${styles.cta} mt-4 text-xl`}>
							<Link href="">See my work</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="about-section">
				<Image className="about-bg" src={fire2} alt="david buraga" />
				<div className="about-text">
					<p className="about-title">Eu sunt David,</p>
					<p className="about-caption">
						un programator-designer-youtuber pasionat de a fi tot mai bun la ce face pe zi ce trece.
					</p>
				</div>
				<Image className="about-Image" src={aboutimg} alt="david-buraga" />
			</div>
		</>
	);
}
