import Image from "next/image";

import { MoveRightIcon, ZapIcon } from "lucide-react";
import BotIcon from "public/assets/bot.svg";
import ChainIcon from "public/assets/chain.svg";
import Flare from "public/assets/flare.svg";
import Logo from "public/assets/logo.svg";
import PackageIcon from "public/assets/package-icon.svg";
import Stars from "public/assets/stars.svg";
import StarsThin from "public/assets/start-thin.svg";

export const Hero = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col justify-center gap-8 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/hero-bg.svg')",
      }}
    >
      <Image
        alt="Flare"
        className="absolute top-0 left-0 size-[32rem]"
        height={200}
        src={Flare}
        width={200}
      />
      <Image
        alt="Flare"
        className="absolute top-0 right-0 size-[32rem]"
        height={200}
        src={Flare}
        style={{
          transform: "rotateY(180deg)",
        }}
        width={200}
      />
      <div className="absolute top-[10%] w-full border-white/20 border-b" />
      <div className="absolute top-[10%] left-[20%] h-[calc(100%-2px)] translate-y-[1px] border-white/20 border-r" />
      <div className="absolute top-[10%] right-[20%] h-[calc(100%-2px)] translate-y-[1px] border-white/20 border-r" />
      <div className="absolute top-[10%] left-[12.5%] h-[calc(100%-2px)] w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)]" />
      <div className="absolute top-[10%] right-[12.5%] h-[calc(100%-2px)] w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)]" />

      <Image
        alt="Stars Thin"
        className="-translate-y-1/2 absolute top-[10%] right-[5%] translate-x-1/2"
        height={48}
        src={StarsThin}
        width={48}
      />
      <Image
        alt="Stars Thin"
        className="-translate-y-1/2 -translate-x-1/2 absolute top-[10%] left-[5%]"
        height={48}
        src={StarsThin}
        width={48}
      />
      <Image
        alt="Stars"
        className="absolute top-0 right-1/2 translate-x-1/2"
        height={705}
        src={Stars}
        width={685}
      />
      <div className="absolute top-0 right-1/2 z-[2] translate-x-1/2">
        <svg
          fill="none"
          height="705"
          viewBox="0 0 685 705"
          width="685"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Background Blur</title>
          <g filter="url(#filter0_f_2_3154)">
            <ellipse
              cx="342.146"
              cy="352.425"
              fill="#BB3EFF"
              fill-opacity="0.2"
              rx="142.146"
              ry="152.425"
            />
          </g>
          <defs>
            {/** biome-ignore lint/correctness/useUniqueElementIds: safe for this */}
            <filter
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
              height="704.849"
              id="filter0_f_2_3154"
              width="684.291"
              x="0"
              y="0"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_2_3154"
                stdDeviation="100"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="z-[3] mx-auto flex flex-col items-center justify-center gap-4">
        <Image alt="Logo" height={84} src={Logo} width={84} />
        <div className="flex w-fit flex-row items-center gap-2 border border-secondary px-8 py-3">
          <div className="size-3 rounded-full bg-secondary" />
          <div className="font-geist-mono text-secondary text-sm">
            PRIVACY-FIRST DECENTRALIZED EXCHANGE
          </div>
        </div>
      </div>
      <div className="text-center font-medium text-[5rem] leading-[1] tracking-tighter">
        The Privacy-First Exchange
        <br />
        for{" "}
        <span className="font-instrument text-primary italic">
          <span className="text-secondary">AI</span> and{" "}
          <span className="text-secondary">DePIN</span> Tokens
        </span>
      </div>
      <p className="mx-auto max-w-3xl text-center font-geist-mono text-[#D2D2D2] text-lg">
        AetherDEX is building a decentralized exchange that lets you trade AI
        and DePIN tokens across multiple blockchains with unmatched privacy and
        efficiency. Powered by zero-knowledge proofs and AI-driven routing,
        we're rethinking what secure, intelligent trading looks like.
      </p>
      <div className="mx-auto flex w-full max-w-lg flex-row items-center justify-between gap-6">
        <div className="relative">
          <button
            className="btn-gradient flex h-12 cursor-pointer flex-row items-center gap-4 border border-border px-4 font-geist-mono font-semibold"
            type="button"
          >
            Discover AetherDEX
            <MoveRightIcon />
          </button>
          <div className="absolute top-0 right-0 size-3 border-[#FB9B00] border-t border-r"></div>
          <div className="absolute right-0 bottom-0 size-3 border-[#FB9B00] border-r border-b"></div>
          <div className="absolute top-0 left-0 size-3 border-[#FB9B00] border-t border-l"></div>
          <div className="absolute bottom-0 left-0 size-3 border-[#FB9B00] border-b border-l"></div>
        </div>
        <div className="relative">
          <button
            className="flex h-12 cursor-pointer flex-row items-center gap-4 border border-primary px-4 font-geist-mono font-semibold"
            type="button"
          >
            See How it works
            <ZapIcon className="text-accent" />
          </button>
          <div className="absolute top-0 right-0 size-3 border-[#FB9B00] border-t border-r"></div>
          <div className="absolute right-0 bottom-0 size-3 border-[#FB9B00] border-r border-b"></div>
          <div className="absolute top-0 left-0 size-3 border-[#FB9B00] border-t border-l"></div>
          <div className="absolute bottom-0 left-0 size-3 border-[#FB9B00] border-b border-l"></div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl border-white/20 border-t" />
      <div className="mx-auto flex flex-row gap-8 text-lg">
        <div className="flex flex-row items-center gap-3 border border-secondary px-5 py-2 text-secondary">
          <Image alt="Logo" height={24} src={PackageIcon} width={24} />
          Zero-Knowledge Proofs
        </div>
        <div className="flex flex-row items-center gap-3 border border-primary px-5 py-2 text-primary">
          <Image alt="Logo" height={24} src={BotIcon} width={24} />
          AI-Driven Routing
        </div>
        <div className="flex flex-row items-center gap-3 border border-secondary px-5 py-2 text-secondary">
          <Image alt="Logo" height={24} src={ChainIcon} width={24} />
          Cross-Chain Trading
        </div>
      </div>
    </div>
  );
};
