import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50">
      <div className="container mx-auto px-4">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}
