"use client";
import { cn } from "@/lib/styles/class-names";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main className="relative">
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-background text-foreground transition-colors duration-300",
          className
        )}
        {...props}
      >
        {/* Aurora Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,rgb(255_255_255)_0%,rgb(255_255_255)_7%,transparent_10%,transparent_12%,rgb(255_255_255)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,rgb(0_0_0)_0%,rgb(0_0_0)_7%,transparent_10%,transparent_12%,rgb(0_0_0)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            absolute -inset-[10px] opacity-80 dark:opacity-25 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
            )}
          ></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full">{children}</div>
      </div>
    </main>
  );
};
