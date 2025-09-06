import Image from "next/image";

import { MoveRightIcon, ZapIcon } from "lucide-react";
import BotIcon from "public/assets/bot.svg";
import ChainIcon from "public/assets/chain.svg";
import Logo from "public/assets/logo.png";
import PackageIcon from "public/assets/package-icon.svg";

import { AbsoluteImages } from "./images";
import { Lines } from "./lines";

export const Hero = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center gap-8 sm:overflow-hidden">
      <Lines />
      <AbsoluteImages />
      <div className="mx-auto flex max-w-[90%] translate-y-[12dvh] flex-col items-center justify-center gap-8 sm:translate-y-0">
        <div className="z-[3] mx-auto flex flex-col items-center justify-center gap-4">
          <Image
            alt="Logo"
            className="size-16 md:size-20"
            height={84}
            src={Logo}
            width={84}
          />
          <div className="mx-2 flex w-fit flex-row items-center gap-2 border border-secondary px-2 py-2 md:px-8 md:py-3">
            <div className="size-2 rounded-full bg-secondary md:size-3" />
            <div className="font-geist-mono text-[13px] text-secondary md:text-base">
              PRIVACY-FIRST DECENTRALIZED EXCHANGE
            </div>
          </div>
        </div>
        <div className="max-w-sm text-center font-medium text-4xl leading-[1] sm:max-w-4xl sm:text-[4rem] md:text-[5rem] md:tracking-tighter">
          The Privacy-First Exchange for{" "}
          <span className="font-instrument text-primary italic">
            <span className="text-secondary">AI</span> and
            <br className="block sm:hidden" />{" "}
            <span className="text-secondary">DePIN</span> Tokens
          </span>
        </div>
        <p className="mx-auto max-w-3xl px-2 text-center font-geist-mono text-[#D2D2D2] text-sm md:text-lg">
          AetherDEX is building a decentralized exchange that lets you trade AI
          and DePIN tokens across multiple blockchains with unmatched privacy
          and efficiency. Powered by zero-knowledge proofs and AI-driven
          routing, we're rethinking what secure, intelligent trading looks like.
        </p>
        <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
          <div className="relative w-full">
            <button
              className="btn-gradient flex h-16 w-full cursor-pointer flex-row items-center justify-center gap-4 border border-border px-4 font-geist-mono font-semibold"
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
          <div className="relative w-full">
            <button
              className="flex h-16 w-full cursor-pointer flex-row items-center justify-center gap-4 border border-primary px-4 font-geist-mono font-semibold"
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

        <div className="mx-auto flex flex-col gap-3 pb-[18dvh] text-base sm:pb-0 md:flex-row md:gap-8 md:text-lg">
          <div className="flex flex-row items-center gap-3 border border-secondary px-5 py-1 text-secondary md:py-2">
            <Image
              alt="Logo"
              className="size-4 md:size-6"
              height={24}
              src={PackageIcon}
              width={24}
            />
            Zero-Knowledge Proofs
          </div>
          <div className="flex flex-row items-center gap-3 border border-primary px-5 py-1 text-primary md:py-2">
            <Image alt="Logo" height={24} src={BotIcon} width={24} />
            AI-Driven Routing
          </div>
          <div className="flex flex-row items-center gap-3 border border-secondary px-5 py-1 text-secondary md:py-2">
            <Image alt="Logo" height={24} src={ChainIcon} width={24} />
            Cross-Chain Trading
          </div>
        </div>
      </div>
    </div>
  );
};
