import { StarsThinIcon } from "../icons";

export const Features = () => {
  return (
    <div className="relative mx-auto flex w-[90%] flex-col border-white/20 border-b md:flex-row">
      <StarsThinIcon className="-translate-y-1/2 absolute top-0 right-1/2 translate-x-1/2" />
      <StarsThinIcon className="absolute right-1/2 bottom-0 translate-x-1/2 translate-y-1/2" />

      <div className="flex w-full basis-1/2 flex-col gap-4 border-white/20 px-4 py-8 sm:py-12 md:border-r md:px-8">
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-2xl">
            Built for AI and DePIN tokens
          </div>
          <div className="max-w-xl font-geist-mono text-base text-muted-foreground">
            Whether you're trading $RNDR, $INJ, or other emerging AI and DePIN
            tokens, AetherDEX provides specialized support and optimized trading
            routes.
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4 font-geist-mono">
          <div className="flex flex-row items-center justify-between border-b pb-3">
            <div className="flex flex-row items-center gap-4">
              <div className="flex size-6 items-center justify-center bg-secondary font-bold text-black text-xl sm:size-8 sm:text-3xl">
                I
              </div>
              <div className="font-semibold text-2xl sm:text-3xl">$INJ</div>
            </div>
            <div className="font-medium text-sm sm:text-base">
              Render Network
            </div>
          </div>
          <div className="flex flex-row items-center justify-between border-b pb-3">
            <div className="flex flex-row items-center gap-4">
              <div className="flex size-6 items-center justify-center bg-primary font-bold text-black text-xl sm:size-8 sm:text-3xl">
                I
              </div>
              <div className="font-semibold text-2xl sm:text-3xl">$RNDR</div>
            </div>
            <div className="font-medium text-sm sm:text-base">
              Injective Protocol
            </div>
          </div>
        </div>
        <div className="text-center font-geist-mono text-sm sm:text-base">
          + Other emerging AI and DePIN tokens
        </div>
      </div>
      <div className="relative md:hidden">
        <StarsThinIcon className="-translate-y-1/2 absolute top-0 right-0 translate-x-1/2" />
        <StarsThinIcon className="-translate-y-1/2 -translate-x-1/2 absolute top-0 left-0" />
        <div className="w-full border-white/20 border-t" />
      </div>
      <div className="flex w-full basis-1/2 flex-col gap-4">
        <div className="flex flex-col gap-4 p-4 sm:p-12">
          <div className="py-4 font-geist-mono font-medium text-secondary text-xl sm:text-2xl">
            Making Every Transaction...
          </div>
          <div className="flex flex-col gap-4 font-geist-mono">
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-base sm:text-lg">Simpler</div>
              <div className="w-full max-w-xl text-muted-foreground text-sm sm:text-base">
                One-click cross-chain trades with natural language commands and
                intuitive interface design.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-base sm:text-lg">Smarter</div>
              <div className="w-full max-w-xl text-muted-foreground text-sm sm:text-base">
                AI-driven optimization finds the best routes, timing, and
                execution strategies automatically.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-base sm:text-lg">Safer</div>
              <div className="w-full max-w-xl text-muted-foreground text-sm sm:text-base">
                Zero-knowledge privacy protection and advanced security auditing
                keep your trades secure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
