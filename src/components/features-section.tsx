import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Генерация кода на лету",
    description: "Опишите задачу на русском — NeyroMax мгновенно напишет готовый код на Python, JavaScript, TypeScript и других языках.",
    icon: "⚡",
    badge: "Mistral AI",
  },
  {
    title: "Объяснение кода",
    description: "Вставьте любой фрагмент — нейросеть разберёт его по строкам, объяснит логику и найдёт потенциальные ошибки.",
    icon: "🔍",
    badge: "Анализ",
  },
  {
    title: "Рефакторинг",
    description: "Автоматическое улучшение читаемости, оптимизация производительности и приведение кода к лучшим практикам.",
    icon: "🔧",
    badge: "Оптимизация",
  },
  {
    title: "Отладка ошибок",
    description: "Скопируйте ошибку — NeyroMax найдёт причину и предложит точное решение с объяснением.",
    icon: "🐛",
    badge: "Debug",
  },
  {
    title: "Конвертация языков",
    description: "Переводите код между языками программирования: Python ↔ JavaScript, Go ↔ Rust и десятки других пар.",
    icon: "🔄",
    badge: "Конвертер",
  },
  {
    title: "Документация",
    description: "Автоматическая генерация JSDoc, docstrings и README на основе вашего кода — без лишних усилий.",
    icon: "📝",
    badge: "Авто-docs",
  },
]

export function FeaturesSection() {
  return (
    <section id="technology" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron" style={{textShadow: '0 0 30px rgba(0,212,255,0.3)'}}>
            Возможности <span className="text-cyan-400">NeyroMax</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Всё что нужно разработчику — от генерации до документации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="slide-up bg-gray-950 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
                boxShadow: '0 0 20px rgba(0,212,255,0.05)',
              }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
