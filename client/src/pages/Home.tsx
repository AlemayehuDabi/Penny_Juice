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

export default function Home() {
  return (
    <div className="min-h-screen relative px-4 tracking-wide">
      <div className="absolute top-10 inset-x-0 -z-10">
        <img
          src={splash}
          alt="back_img"
          className="w-full h-full object-cover blur-md  opacity-60 "
        />
      </div>
      <div className="container mx-auto px-4 space-y-3">
        <NavBar />
        <Hero {...defaultHeroData} />
        <SearchForm />
        <Stars />
        <FeaturedJuice />
        <Catagories />
        <CallForAction />
        <FrequentlyAskQuestion />
        <Footer />
      </div>
    </div>
  );
}
