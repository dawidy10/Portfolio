import Image from "next/image";
import homebg from "@/public/home-bg.jpg"
import fire1 from '@/public/fire1.svg'
import fire2 from '@/public/fire2.svg'
import aboutimg from '@/public/about-img.jpg'

export default function Home() {
  return (
    <>
	<div className="landing-section">
        <Image className="landing-bg" src={homebg} alt="david buraga" />
        <Image className="landing-bg" src={fire1} alt="david buraga" />
        <div className="landing-text">
                <p className="landing-title">
                DAVID BURAGA
                </p>
            <div className="caption-container">
                <p className="landing-caption">
                TRANSFORM IDEI ÎN REALITATE FOLOSIND DESIGN SI COD
                </p>
            </div>
        </div>
    </div>
    <div className="about-section">
        <Image className="about-bg" src={fire2} alt="david buraga" />
        <div className="about-text">
            <p className="about-title">
            Eu sunt David,
            </p>
            <p className="about-caption">
            un programator-designer-youtuber pasionat de a fi tot mai bun la ce face pe zi ce trece.
            </p>
        </div>
        <Image className='about-Image' src={aboutimg} alt="david-buraga" />
    </div>
	</>
  );
}
