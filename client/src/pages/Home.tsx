import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import splash from "../image/Orange-Juice-Splash-PNG-Clipart.png";
import { SearchForm } from "../components/Search";
import { Stars } from "../components/stars";
import { FeaturedJuice } from "../components/FeaturedJuice";
import { Catagories } from "../components/Cartagories";

export default function Home() {
  return (
    <div className="min-h-screen relative px-4 mb-96 tracking-wide">
      <div className="absolute top-10 inset-x-0 -z-10">
        <img
          src={splash}
          alt="back_img"
          className="w-full h-full object-cover blur-sm  opacity-60 "
        />
      </div>
      <div className="container mx-auto px-4 space-y-3">
        <NavBar />
        <Hero />
        <SearchForm />
        <Stars />
        <FeaturedJuice />
        <Catagories />
      </div>
    </div>
  );
}
