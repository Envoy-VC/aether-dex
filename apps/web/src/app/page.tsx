import { About, Hero, MobileNavbar, Navbar } from "@/components";
import { DividerGrid } from "@/components/icons";

const Home = () => {
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-[5%] h-full border-white/20 border-r"></div>
      <div className="absolute top-0 right-[5%] h-full border-white/20 border-r"></div>
      <Navbar />
      <MobileNavbar />
      <Hero />
      <About />
      <DividerGrid />
    </div>
  );
};

export default Home;
