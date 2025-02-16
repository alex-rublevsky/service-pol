"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/styles/class-names";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  rating?: number;
  image?: string;
}

const testimonials = [
  {
    name: "Алексей Петров",
    role: "Директор",
    company: "ООО Стройком",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    testimonial:
      "Отличная работа! Команда СервисПол выполнила монтаж напольного покрытия в нашем офисе на высшем уровне. Профессионализм и внимание к деталям впечатляют.",
  },
  {
    name: "Мария Иванова",
    role: "Управляющий",
    company: "Медицинский центр 'Здоровье'",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    testimonial:
      "Благодарим команду за качественную укладку специального медицинского покрытия. Все работы были выполнены в срок и с соблюдением всех санитарных норм.",
  },
  {
    name: "Дмитрий Соколов",
    role: "Владелец",
    company: "Фитнес клуб 'Олимп'",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    testimonial:
      "Профессиональное спортивное покрытие, установленное СервисПол, полностью соответствует нашим требованиям. Отдельное спасибо за консультацию по выбору материала.",
  },
  {
    name: "Елена Смирнова",
    role: "Директор школы",
    company: "Гимназия №5",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    testimonial:
      "Выражаем благодарность компании СервисПол за качественный монтаж спортивного покрытия в нашем спортзале. Работы выполнены точно в срок перед началом учебного года.",
  },
  {
    name: "Игорь Васильев",
    role: "Управляющий",
    company: "ТЦ 'Планета'",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    testimonial:
      "Огромное спасибо за профессиональную укладку антискользящего покрытия в нашем торговом центре. Особенно ценим внимание к безопасности и качеству материалов.",
  },
  {
    name: "Наталья Козлова",
    role: "Главврач",
    company: "Клиника 'ВитаМед'",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces",
    testimonial:
      "Благодарим за монтаж специализированного медицинского покрытия в операционных блоках. Все требования к чистым помещениям полностью соблюдены.",
  },
];

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  (
    {
      name,
      role,
      company,
      testimonial,
      rating = 5,
      image,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-primary/10 bg-background p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/5 md:p-8",
          className
        )}
        {...props}
      >
        <div className="absolute right-6 top-6 text-6xl font-serif text-muted-foreground/20">
          "
        </div>

        <div className="flex flex-col gap-4 justify-between h-full">
          {rating > 0 && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={cn(
                    index < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-muted text-muted"
                  )}
                />
              ))}
            </div>
          )}

          <p className="text-pretty text-base text-muted-foreground">
            {testimonial}
          </p>

          <div className="flex items-center gap-4 justify-start">
            <div className="flex items-center gap-4">
              {image && (
                <Avatar>
                  <AvatarImage src={image} alt={name} height={48} width={48} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <h3 className="font-semibold text-foreground">{name}</h3>
                <p className="text-sm text-muted-foreground">
                  {role}
                  {company && ` @ ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
Testimonial.displayName = "Testimonial";

export function TestimonialGrid() {
  return (
    <div className="container py-10">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export { Testimonial };
