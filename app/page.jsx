import Image from "next/image";
import homebg from "@/public/home-bg.jpg";
import fire1 from "@/public/fire1.svg";
import fire2 from "@/public/fire2.svg";
import aboutimg from "@/public/about-img.jpg";
import styles from "@/app/app.module.css";
import Link from "next/link";
import About from "@/components/about";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import romans1 from "@/public/work/romans1.jpg";
import vessel from "@/public/work/vessel.jpg";
import apologia1 from "@/public/work/apologia1.jpg";
import apologia2 from "@/public/work/apologia2.jpg";
import dusk from "@/public/work/dusk.jpg";
import duskgif from "@/public/work/duskgif.gif";
import anto from "@/public/work/anto.jpg";
import refugiu from "@/public/work/refugiu.jpg";
import startpoint from "@/public/work/startpoint.jpg";

export default function Home() {
	let work = [romans1, apologia1, apologia2, vessel, duskgif, dusk, anto, refugiu, startpoint];
	return (
		<>
			<div className="landing-section">
				<Image priority={true} className="landing-bg" src={homebg} alt="david buraga" />
				<Image priority={true} className="landing-bg" src={fire1} alt="david buraga" />
				<div
					className={`${styles.fadeInAnimation} w-100 text-center text-white relative h-screen flex flex-col justify-center`}
				>
					<h1 className={`${styles.title} text-7xl`}>Hi, I'm David.</h1>
					<div className="">
						<p className={`${styles.text} text-lg md:text-2xl w-2/3 md:w-96 ml-auto mr-auto mt-2 md:mt-0`}>
							I like taking brands to the next level using design and code.
						</p>
						<Button className={`${styles.cta} mt-8 md:mt-4 text-xl`}>
							<Link href="#work">See my work</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="about-section py-20 md:py-40 px-8 md:px-32">
				{/* <Image className="about-bg" src={fire2} alt="david buraga" /> */}
				<About>
					<div className={`order-2 md:order-1 mt-14 text-center md:text-left md:mt-0`}>
						<h1 className={`${styles.title} text-white text-6xl`}>About me.</h1>
						<p className={`${styles.text} text-xl mt-4 text-white w-full md:w-4/5`}>
							Started coding at 16, and got into design around the same time. Now I’m a web developer,
							designer, youtuber, artist and computer engineering student. I’m passionate about improving
							my skills, learning new things and helping others grow their brand.
							<br />
							<br />
							Currently working on:{" "}
							<Link className="underline" target="blank" href="https://vessel-waitlist.netlify.app/">
								Vessel
							</Link>
						</p>
					</div>
					<Image className="rounded-full w-72 order-1 md:order-2" src={aboutimg} alt="david-buraga" />
				</About>
			</div>
			<div className={`${styles.background} px-8 md:px-32 py-4 relative pb-32`}>
				<h1 id="work" className={`${styles.title} text-white text-6xl`}>
					Recent work.
				</h1>

				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full mt-14"
				>
					<CarouselContent>
						{Array.from({ length: work.length }).map((_, index) => (
							<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
								<Card className="border-0 bg-transparent">
									<CardContent className="flex aspect-[1] items-center justify-center p-0">
										<Image
											priority={true}
											src={work[index]}
											// width={800}
											// height={400}
											className="object-contain rounded-md"
										/>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="ml-8 bg-[#6E6E8C] border-0 md:ml-0" />
					<CarouselNext className="mr-8 bg-[#6E6E8C] border-0 md:mr-0" />
				</Carousel>

				<h1 className={`${styles.title} mt-20 text-white text-6xl`}>Skills.</h1>
				<div className="flex flex-col md:flex-row mt-20 items-center justify-evenly">
					<Card className="bg-[#111112] border-[#4F4F8B] text-white w-64 text-center py-10">
						<CardHeader>
							<div className="flex w-full justify-center">
								<Avatar className="z-30 w-14 h-14">
									<AvatarImage src="/next.jpg" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar className="-ml-4 z-20 w-14 h-14">
									<AvatarImage src="/tailwind.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar className="-ml-4 z-10 w-14 h-14">
									<AvatarImage src="/supabase.jpg" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</div>
						</CardHeader>
						<CardContent>
							<p className={`${styles.text} text-xl`}>Web development</p>
							<p className={`${styles.text} text-sm`}>
								Developing web apps using NextJS, Tailwind CSS and Supabase
							</p>
						</CardContent>
					</Card>
					<Card className="bg-[#111112] border-[#88513F] text-white w-64 text-center py-10 mt-8 md:mt-0">
						<CardHeader>
							<div className="flex w-full justify-center">
								<Avatar className="z-30 w-14 h-14">
									<AvatarImage src="/figma.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar className="-ml-4 z-20 w-14 h-14">
									<AvatarImage src="/animate.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar className="-ml-4 z-10 w-14 h-14">
									<AvatarImage src="/photoshop.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</div>
						</CardHeader>
						<CardContent>
							<p className={`${styles.text} text-xl`}>Graphic/Web Design</p>
							<p className={`${styles.text} text-sm`}>
								Creating modern designs using tools like Figma, Adobe Animate and Photoshop
							</p>
						</CardContent>
					</Card>
				</div>
				<h1 className={`${styles.title} mt-20 text-white text-6xl`}>Don't take my word for it.</h1>
				<div className="flex flex-col mt-20 items-center justify-evenly">
					<Card className="bg-[#111112] border-0 text-white w-100 md:w-2/3 text-center py-4 md:px-8 mt-8 md:mt-0">
						<CardHeader>
							<div className="ml-auto mr-auto w-20 h-20 rounded-full overflow-hidden">
								<Image src="/work/refugiu.jpg" width={100} height={100} className="object-cover" />
							</div>
							<CardTitle>Refugiu pentru Suflet</CardTitle>
							<CardDescription>refugiupentrusuflet.ro</CardDescription>
						</CardHeader>
						<CardContent>
							<Tabs defaultValue="ro">
								<TabsList className="bg-[#111112]">
									<TabsTrigger className="bg-[#111112]" value="ro">
										RO
									</TabsTrigger>
									<TabsTrigger className="bg-[#111112]" value="en">
										EN
									</TabsTrigger>
								</TabsList>
								<TabsContent value="ro">
									<p className={`${styles.text} text-left md:text-lg mt-4`}>
										"Colaborarea noastră cu David a fost una excelentă. I-am prezentat viziunea și
										scopul asociației noastre, iar el a înțeles imediat direcția pe care o dorim.
										Într-un timp foarte scurt, ne-a prezentat mai multe variante de logo, fiecare
										reflectând în mod clar valorile noastre. După ce am ales designul care ne-a
										plăcut cel mai mult, David a venit cu diverse idei de culori și nuanțe care să
										ne reprezinte vizual cât mai bine. Profesionalismul și creativitatea lui ne-au
										ajutat să ne consolidăm identitatea de brand și să ne prezentăm într-un mod
										coerent și atractiv publicului nostru."
									</p>
								</TabsContent>
								<TabsContent value="en">
									<p className={`${styles.text} text-left`}></p>
								</TabsContent>
							</Tabs>
						</CardContent>
						<CardFooter>
							<p className="text-sm text-gray-600">Web design | Web development</p>
						</CardFooter>
					</Card>
					<Card className="bg-[#111112] border-0 text-white w-100 md:w-2/3 text-center py-4 mt-8">
						<CardHeader>
							<div className="ml-auto mr-auto w-20 h-20 rounded-full overflow-hidden">
								<Image src="/anto.jpg" width={100} height={100} className="object-cover" />
							</div>
							<CardTitle>Anto Sticea</CardTitle>
							<CardDescription>@antosticea</CardDescription>
						</CardHeader>
						<CardContent>
							<Tabs defaultValue="ro">
								<TabsList className="bg-[#111112]">
									<TabsTrigger className="bg-[#111112]" value="ro">
										RO
									</TabsTrigger>
									<TabsTrigger className="bg-[#111112]" value="en">
										EN
									</TabsTrigger>
								</TabsList>
								<TabsContent value="ro">
									<p className={`${styles.text} text-left md:text-lg mt-4`}>
										"Munca lui David a fost de un real folos pentru mine și afacerea mea. Cu
										ajutorul site-ului creat de el, prospectii mei au ocazia sa ma cunoasca in doar
										cateva minute si chiar sa ma contacteze in vederea colaborării. Totul este făcut
										pe gustul meu, dar si actual, ceea ce imi creează o imagine de profesionist în
										fața celor interesați de activitatea pe care o desfășor. Recomand cu încredere
										serviciile lui dacă doriți să arătați cât mai bine în online și să ajungeți la
										clienți de lux!"
									</p>
								</TabsContent>
								<TabsContent value="en">
									<p className={`${styles.text} text-left`}></p>
								</TabsContent>
							</Tabs>
						</CardContent>
						<CardFooter>
							<p className="text-sm text-gray-600">Web design | Web development</p>
						</CardFooter>
					</Card>
				</div>

				<h1 className={`${styles.text} mt-32 text-center text-white text-2xl`}>
					Need help with your own brand?
				</h1>
				<Link href="https://calendly.com/davidburaga10/discutie-1-la-1" target="blank">
					<p className={`${styles.text} mt-20 underline text-center text-white text-2xl`}>Book a call.</p>
				</Link>
			</div>
		</>
	);
}
