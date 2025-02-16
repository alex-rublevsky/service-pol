"use client";
import Navbar from "@/components/blocks/navbar";
import { Typewriter } from "@/components/ui/typewriter-text";
import { TestimonialGrid } from "@/components/ui/testimonial-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { CenterUnderline } from "@/components/ui/underline-animation";
import { ModeToggle } from "@/components/ui/ThemeToggleButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // 640px is Tailwind's sm breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main>
      <Navbar />
      <section id="home" className="no-padding">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="absolute top-4 left-4 right-4 md:top-8 md:left-8 md:right-8 flex items-center sm:items-baseline justify-between"
          >
            <h1 className="text-xl md:text-2xl font-bold">СервисПол</h1>
            <div className="flex items-center sm:items-baseline gap-6 sm:gap-4">
              <div className="flex flex-col text-md gap-0 sm:flex-row sm:gap-4 sm:items-baseline  md:text-xl">
                <p className="mb-2">Владивосток</p>
                <a href="tel:89025559405">
                  {isMobile ? (
                    <span className="text-foreground">8 902 555 9405</span>
                  ) : (
                    <CenterUnderline
                      label="8 902 555 9405"
                      className="mb-6"
                      underlineHeightRatio={0.08}
                    />
                  )}
                </a>
              </div>
              <ModeToggle />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="h-full w-full flex items-center pt-20"
          >
            <div className="max-w-[78ch] px-4 md:px-8">
              <h3 className="text-2xl md:text-4xl font-bold min-h-[6em]">
                Монтаж напольных покрытий
                <br />
                любой сложности:{" "}
                <span className="inline">
                  <Typewriter
                    text={[
                      "квартиры",
                      "дома",
                      "офисы",
                      "учебные заведения",
                      "объекты здравоохранения",
                      "спортивные залы и площадки",
                      "специализированные покрытия",
                      "ремонт и реставрация",
                      "офисы",
                      "токопроводящие и антискользящие",
                    ]}
                    speed={50}
                    className="text-blue-600"
                    loop={true}
                    delay={2000}
                  />
                </span>
              </h3>
            </div>
          </motion.div>
        </AuroraBackground>
      </section>

      <section id="calculator" className="min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Калькулятор стоимости</h2>
        <div className="inline-block border border-gray-700 p-8 rounded-lg shadow-sm mx-auto">
          <p className="text-gray-300 ">Калькулятор находится в разработке</p>
        </div>
      </section>

      <section id="reviews" className="min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Отзывы наших клиентов</h2>
        <TestimonialGrid />
      </section>

      <section id="about" className="min-h-screen">
        <h2 className="text-3xl font-bold mb-6">О нас</h2>
        <div className="flex flex-col gap-4">
          <p>
            Наша компания была основана в 2019 году и уже в 2020-м стала
            полностью самостоятельной. Основное направление — монтаж напольных
            покрытий на крупных объектах для бизнеса, но мы также работаем и с
            частными клиентами.
          </p>
          <p>
            Главной задачей нашей компании всегда было не только
            профессиональное выполнение монтажных работ, но и предоставление
            гарантии на них. Мы несем полную ответственность за качество своей
            работы и выполнение гарантийных обязательств.
          </p>
          <p>
            Все наши специалисты — квалифицированные и сертифицированные
            укладчики, прошедшие обучение у производителей напольных покрытий.
            Это гарантирует высокий уровень профессионализма и соответствие всем
            отраслевым стандартам.
          </p>
        </div>
      </section>
    </main>
  );
}
