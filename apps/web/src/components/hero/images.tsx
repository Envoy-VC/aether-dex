import Image from "next/image";

import HeroBG from "public/assets/hero-bg.svg";
import Stars from "public/assets/stars.svg";

import { FlareEffect, StarsThinIcon } from "../icons";

export const AbsoluteImages = () => {
  return (
    <>
      <Image
        alt="HeroBG"
        className="absolute top-0 right-1/2 w-full translate-x-1/2"
        height={200}
        src={HeroBG}
        width={200}
      />
      <FlareEffect className="absolute top-0 left-0" />
      <FlareEffect
        className="absolute top-0 right-0"
        style={{
          transform: "rotateY(180deg)",
        }}
      />

      <StarsThinIcon className="-translate-y-1/2 absolute top-[10dvh] right-[5%] translate-x-1/2" />
      <StarsThinIcon className="-translate-y-1/2 -translate-x-1/2 absolute top-[10dvh] left-[5%]" />
      <Image
        alt="Stars"
        className="absolute top-0 right-1/2 translate-x-1/2"
        height={705}
        src={Stars}
        width={685}
      />
    </>
  );
};
