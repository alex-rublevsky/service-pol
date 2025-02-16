"use client";

import React, { useEffect, useRef } from "react";
import { motion, ValueAnimationTransition } from "framer-motion";
import { cn } from "@/lib/styles/class-names";

interface UnderlineBaseProps {
  label: string;
  className?: string;
  onClick?: () => void;
  underlineHeightRatio?: number;
  underlinePaddingRatio?: number;
  transition?: ValueAnimationTransition;
}

export function CenterUnderline({
  label,
  className,
  onClick,
  transition = { duration: 0.25, ease: "easeInOut" },
  underlineHeightRatio = 0.1,
  underlinePaddingRatio = 0.01,
  ...props
}: UnderlineBaseProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateUnderlineStyles = () => {
      if (textRef.current) {
        const fontSize = parseFloat(getComputedStyle(textRef.current).fontSize);
        const underlineHeight = fontSize * underlineHeightRatio;
        const underlinePadding = fontSize * underlinePaddingRatio;
        textRef.current.style.setProperty(
          "--underline-height",
          `${underlineHeight}px`
        );
        textRef.current.style.setProperty(
          "--underline-padding",
          `${underlinePadding}px`
        );
      }
    };

    updateUnderlineStyles();
    window.addEventListener("resize", updateUnderlineStyles);

    return () => window.removeEventListener("resize", updateUnderlineStyles);
  }, [underlineHeightRatio, underlinePaddingRatio]);

  return (
    <motion.span
      className={cn("relative inline-block cursor-pointer", className)}
      whileHover="visible"
      onClick={onClick}
      ref={textRef}
      {...props}
    >
      <span>{label}</span>
      <motion.div
        className="absolute left-1/2 bg-current -translate-x-1/2"
        style={{
          height: "var(--underline-height)",
          bottom: "calc(-1 * var(--underline-padding))",
        }}
        variants={{
          hidden: {
            width: 0,
            originX: 0.5,
          },
          visible: {
            width: "100%",
            transition: transition,
          },
        }}
      />
    </motion.span>
  );
}
