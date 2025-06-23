import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <div className="container mx-auto bg-gradient-to-r from-white-50 via-orange-300 to-white-50 px-4">
        <NavBar />
        <Hero />
      </div>
    </>
  );
}
