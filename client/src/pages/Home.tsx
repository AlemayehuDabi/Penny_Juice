import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import splash from "../image/Orange-Juice-Splash-PNG-Clipart.png";
import { SearchForm } from "../components/Search";
import { Stars } from "../components/stars";
import { FeaturedJuice } from "../components/FeaturedJuice";
import { Catagories } from "../components/Cartagories";
import { CallForAction } from "../components/CallToAction";
import FrequentlyAskQuestion from "../components/FrequentlyAskQuestion";
import Footer from "../components/Footer";
import banner from "../image/banner2.png";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageSrc: string;
  imageAlt: string;
}

const defaultHeroData: HeroProps = {
  title: "Naturally Colorful",
  subtitle: "Juice for Kids",
  description:
    "Delicious, nutrient-rich concentrates made just for children — no added sugar, no preservatives, just vibrant fruit flavor in every drop. Perfect for schools, daycares, and families who care about quality and taste.",
  ctaText: "Shop Now",
  ctaLink: "/products",
  secondaryCtaText: "Learn More",
  secondaryCtaLink: "/about",
  imageSrc: banner,
  imageAlt: "Colorful juice bottles for kids",
};

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.utils.toArray(".gsap-reveal").forEach((el) => {
      gsap.from(el as HTMLElement, {
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el as HTMLElement,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });
  }, []);

  const navRef = useRef(null);

  useGSAP(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        {
          y: 200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen relative px-4 tracking-wide">
      <div className="absolute top-10 inset-x-0 -z-10">
        <img
          src={splash}
          alt="back_img"
          className="w-full h-full object-cover blur-md opacity-60"
        />
      </div>
      <div className="container mx-auto px-4 space-y-3">
        <NavBar />

        <Hero {...defaultHeroData} />
        <div className="gsap-reveal">
          <SearchForm />
        </div>
        <div className="gsap-reveal">
          <Stars />
        </div>
        <div className="gsap-reveal">
          <FeaturedJuice />
        </div>
        <div className="gsap-reveal">
          <Catagories />
        </div>
        <div className="gsap-reveal">
          <CallForAction />
        </div>
        <div className="gsap-reveal">
          <FrequentlyAskQuestion />
        </div>
        <div className="gsap-reveal">
          <Footer />
        </div>
      </div>
    </div>
  );
}
