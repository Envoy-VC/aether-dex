import Image from "next/image";

import DividerGrid from "public/assets/divider-grid.svg";

import { About, Hero, MobileNavbar, Navbar } from "@/components";

const Home = () => {
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-[5%] h-full border-white/20 border-r"></div>
      <div className="absolute top-0 right-[5%] h-full border-white/20 border-r"></div>
      <Navbar />
      <MobileNavbar />
      <Hero />
      <About />
      <Image
        alt="Divider Grid"
        className="h-20 w-screen object-cover md:h-full"
        height={300}
        src={DividerGrid}
        width={600}
      />
    </div>
  );
};

export default Home;
