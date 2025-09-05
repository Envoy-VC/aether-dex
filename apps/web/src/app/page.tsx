import { Hero, Navbar } from "@/components";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-[5%] h-full border-white/20 border-r"></div>
      <div className="absolute top-0 right-[5%] h-full border-white/20 border-r"></div>
      <Navbar />
      <Hero />
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
