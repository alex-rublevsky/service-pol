import Navbar from "@/components/blocks/navbar";
import { Typewriter } from "@/components/ui/typewriter-text";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4">
        <section id="home" className="h-screen flex flex-col justify-center ">
          <div className="absolute top-4 left-4 right-4 flex items-baseline justify-between">
            <h1 className="text-xl md:text-2xl font-bold mb-4">СервисПол</h1>
            <div className="flex gap-4">
              <p className="mb-2">Владивосток</p>
              <p className="mb-6">8 902 555 9405</p>
            </div>
          </div>

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
                  "ремонт и рставрация",
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
        </section>

        <section id="calculator" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Калькулятор стоимости</h2>
          <div className="inline-block border border-gray-700 p-8 rounded-lg shadow-sm mx-auto">
            <p className="text-gray-300 ">Калькулятор находится в разработке</p>
          </div>
        </section>
        <section id="team" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Наша команда</h2>
          <div className="inline-block border border-gray-700 p-8 rounded-lg shadow-sm mx-auto">
            <p className="text-gray-300 ">
              Информация о команде будет добавлена
            </p>
          </div>
        </section>

        <section id="about" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">О нас</h2>
          <div className="inline-block border border-gray-700 p-8 rounded-lg shadow-sm mx-auto">
            <p className="text-gray-300 ">
              Мы специализируемся на монтаже напольных покрытий любой сложности.
              Наша команда профессионалов имеет большой опыт в установке
              покрытий для спортивных залов и площадок.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
