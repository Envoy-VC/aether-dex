import Image from "next/image";

import LogoText from "public/assets/logo-text.svg";

export const MobileNavbar = () => {
  return (
    <div className="absolute right-1/2 mx-auto flex h-[10dvh] w-[90%] translate-x-1/2 flex-row items-center justify-between gap-5 bg-transparent px-2 md:hidden">
      <Image
        alt="Logo"
        className="w-[8rem]"
        height={100}
        src={LogoText}
        width={100}
      />
    </div>
  );
};
