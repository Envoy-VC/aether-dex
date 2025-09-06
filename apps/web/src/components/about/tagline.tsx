import { ArrowRightIcon } from "lucide-react";

export const Tagline = () => {
  return (
    <div className="mx-auto flex min-h-[25dvh] max-w-[90%] flex-col items-center justify-center gap-6 px-2 py-12 font-geist-mono text-muted-foreground sm:py-4">
      <div className="max-w-5xl text-center text-base sm:text-lg">
        AetherDEX is being designed to transform how traders interact with AI
        and DePIN token ecosystems, providing the privacy, efficiency, and
        intelligence that the next generation of DeFi demands.
      </div>
      <div className="mx-auto flex w-full max-w-screen-md flex-row items-center justify-between gap-4 px-4 font-medium text-sm sm:text-base">
        <div>Currently in development</div>
        <ArrowRightIcon className="text-secondary" />
        <div>Contact us for Updates</div>
      </div>
    </div>
  );
};
