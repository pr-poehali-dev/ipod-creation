import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Дмитрий Волков",
    role: "Senior Backend Developer, Яндекс",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "NeyroMax экономит мне 2-3 часа в день. Особенно круто для написания boilerplate и документации — больше не нужно писать их вручную.",
  },
  {
    name: "Анна Ковальская",
    role: "Full-stack разработчик, фриланс",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Как джуниор-разработчик я использую NeyroMax чтобы учиться и ускорять работу. Нейросеть отлично объясняет сложные концепции простым языком.",
  },
  {
    name: "Елена Соколова",
    role: "Tech Lead, Сбертех",
    avatar: "/professional-woman-scientist.png",
    content:
      "Подключила NeyroMax для всей команды. Скорость написания тестов выросла в 4 раза, качество кода стало заметно лучше.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">
            Что говорят <span className="text-cyan-400">разработчики</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Тысячи разработчиков уже ускорили работу с NeyroMax
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="slide-up bg-black border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.15}s`,
                boxShadow: '0 0 20px rgba(0,212,255,0.05)',
              }}
            >
              <CardContent className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-cyan-500/20 text-cyan-400">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-cyan-400">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}