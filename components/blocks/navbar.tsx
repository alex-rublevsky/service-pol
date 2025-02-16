"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

function Navbar() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 py-4">
      <ul
        className="relative mx-auto flex w-fit rounded-full border border-black dark:border-white bg-white dark:bg-black p-1 mix-blend-difference"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        <Tab setPosition={setPosition} onClick={() => scrollToSection("home")}>
          Главная
        </Tab>
        <Tab
          setPosition={setPosition}
          onClick={() => scrollToSection("calculator")}
        >
          Калькулятор
        </Tab>

        <Tab
          setPosition={setPosition}
          onClick={() => scrollToSection("reviews")}
        >
          Отзывы
        </Tab>
        <Tab setPosition={setPosition} onClick={() => scrollToSection("about")}>
          О нас
        </Tab>

        <Cursor position={position} />
      </ul>
    </nav>
  );
}

const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white dark:text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-7 rounded-full bg-white dark:bg-white mix-blend-difference md:h-12"
    />
  );
};

export default Navbar;
