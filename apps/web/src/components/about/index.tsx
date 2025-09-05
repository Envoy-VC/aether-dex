import Image from "next/image";

import { ArrowRightIcon } from "lucide-react";
import AboutDivider from "public/assets/about-divider.svg";
import BlurPrimary from "public/assets/blur-primary.svg";
import BlurSecondary from "public/assets/blur-secondary.svg";
import StarsThin from "public/assets/start-thin.svg";

export const About = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-[5%] size-3 border-secondary border-t border-l"></div>
      <div className="absolute top-0 right-[5%] size-3 border-secondary border-t border-r"></div>
      <Image
        alt="Blur Primary"
        className="absolute top-0 right-0 size-[48rem]"
        height={200}
        src={BlurPrimary}
        width={200}
      />
      <Image
        alt="Blur Secondary"
        className="absolute bottom-0 left-0 size-[48rem]"
        height={200}
        src={BlurSecondary}
        width={200}
      />
      <Image
        alt="About Divider"
        className="w-full"
        height={100}
        src={AboutDivider}
        width={100}
      />
      <Image
        alt="Stars Thin"
        className="-translate-y-1/2 absolute top-0 right-[20%] translate-x-1/2"
        height={48}
        src={StarsThin}
        width={48}
      />
      <Image
        alt="Stars Thin"
        className="-translate-y-1/2 -translate-x-1/2 absolute top-0 left-[20%]"
        height={48}
        src={StarsThin}
        width={48}
      />
      <div className="relative mx-auto flex w-[90%] flex-row items-center gap-6 border-white/20 border-b">
        <div className="absolute bottom-0 size-3 border-secondary border-b border-l"></div>
        <div className="absolute right-0 bottom-0 size-3 border-secondary border-r border-b"></div>
        <div className="flex basis-2/5 flex-col border-primary/20 border-r pb-8">
          <div className="flex flex-col gap-8 p-8">
            <div className="flex w-fit flex-row items-center gap-2 border border-secondary px-4 py-2">
              <div className="size-3 rounded-full bg-secondary" />
              <div className="font-geist-mono text-base text-secondary">
                About
              </div>
            </div>
            <div className="flex flex-col font-sans font-semibold text-7xl">
              <div>What is </div>
              <div className="bg-gradient-to-r from-[#5C14AF] to-[#fb9b00b0] bg-clip-text text-transparent">
                AetherDEX
              </div>
            </div>
            <div className="font-geist-mono text-base">
              Built for the Next Generation of Traders
            </div>
          </div>
        </div>
        <div className="flex basis-3/5">
          <div className="mx-auto flex w-full max-w-xl flex-col justify-center gap-4">
            <div className="font-semibold text-2xl">DeFi has a problem!</div>
            <div className="font-geist-mono text-base text-muted-foreground">
              Fragmented liquidity, high costs, and little attention to privacy.
              AetherDEX solves these challenges by combining cross-chain swaps,
              advanced privacy protection, and AI-powered trade optimization
              into one seamless platform.
            </div>
            <div className="flex flex-row items-center justify-between gap-2 font-geist-mono text-primary">
              <div className="border border-primary px-4 py-2">
                Fragmented Liquidity
              </div>
              <div className="border border-primary px-4 py-2">High Cost</div>
              <div className="border border-primary px-4 py-2">
                Privacy Concerns
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex w-[90%] flex-row border-white/20 border-b">
        <Image
          alt="Stars Thin"
          className="-translate-y-1/2 absolute top-0 right-1/2 translate-x-1/2"
          height={48}
          src={StarsThin}
          width={48}
        />
        <Image
          alt="Stars Thin"
          className="absolute right-1/2 bottom-0 translate-x-1/2 translate-y-1/2"
          height={48}
          src={StarsThin}
          width={48}
        />
        <div className="flex w-full basis-1/2 flex-col gap-4 border-white/20 border-r px-8 py-12">
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-2xl">
              Built for AI and DePIN tokens
            </div>
            <div className="max-w-xl font-geist-mono text-base text-muted-foreground">
              Whether you're trading $RNDR, $INJ, or other emerging AI and DePIN
              tokens, AetherDEX provides specialized support and optimized
              trading routes.
            </div>
          </div>
          <div className="flex flex-col gap-4 py-4 font-geist-mono">
            <div className="flex flex-row items-center justify-between border-b pb-3">
              <div className="flex flex-row items-center gap-4">
                <div className="flex size-8 items-center justify-center bg-secondary font-bold text-3xl text-black">
                  I
                </div>
                <div className="font-semibold text-3xl">$INJ</div>
              </div>
              <div className="font-medium">Render Network</div>
            </div>
            <div className="flex flex-row items-center justify-between border-b pb-3">
              <div className="flex flex-row items-center gap-4">
                <div className="flex size-8 items-center justify-center bg-primary font-bold text-3xl text-black">
                  I
                </div>
                <div className="font-semibold text-3xl">$RNDR</div>
              </div>
              <div className="font-medium">Injective Protocol</div>
            </div>
          </div>
          <div className="text-center font-geist-mono">
            + Other emerging AI and DePIN tokens
          </div>
        </div>
        <div className="flex w-full basis-1/2 flex-col gap-4 p-12">
          <div className="py-4 font-geist-mono font-medium text-2xl text-secondary">
            Making Every Transaction...
          </div>
          <div className="flex flex-col gap-4 font-geist-mono">
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-lg">Simpler</div>
              <div className="w-full max-w-xl text-muted-foreground">
                One-click cross-chain trades with natural language commands and
                intuitive interface design.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-lg">Smarter</div>
              <div className="w-full max-w-xl text-muted-foreground">
                AI-driven optimization finds the best routes, timing, and
                execution strategies automatically.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-lg">Safer</div>
              <div className="w-full max-w-xl text-muted-foreground">
                Zero-knowledge privacy protection and advanced security auditing
                keep your trades secure.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[25dvh] max-w-screen-lg flex-col items-center justify-center gap-6 font-geist-mono text-muted-foreground">
        <div className="text-center text-lg">
          AetherDEX is being designed to transform how traders interact with AI
          and DePIN token ecosystems, providing the privacy, efficiency, and
          intelligence that the next generation of DeFi demands.
        </div>
        <div className="mx-auto flex w-full max-w-screen-md flex-row items-center justify-between font-medium">
          <div>Currently in development</div>
          <ArrowRightIcon className="text-secondary" />
          <div>Currently in development</div>
        </div>
      </div>
    </div>
  );
};
