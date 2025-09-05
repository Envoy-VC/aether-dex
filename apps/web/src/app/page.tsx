import Image from "next/image";

import DividerGrid from "public/assets/divider-grid.svg";

import { About, Hero, Navbar } from "@/components";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-[5%] h-full border-white/20 border-r"></div>
      <div className="absolute top-0 right-[5%] h-full border-white/20 border-r"></div>
      <Navbar />
      <Hero />
      <About />
      <Image
        alt="Blur Primary"
        className="h-full w-full"
        height={100}
        src={DividerGrid}
        width={100}
      />

      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
