import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Напишите задачу",
      content: (
        <div>
          <p className="text-gray-300 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Опишите задачу на русском языке — как объясняете коллеге. NeyroMax понимает естественный язык
            и мгновенно переводит его в точные технические требования.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-cyan-400 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{boxShadow: '0 0 6px #00d4ff'}}></div>
              «Создай REST API для авторизации на Node.js»
            </div>
            <div className="flex items-center gap-3 text-cyan-400 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{boxShadow: '0 0 6px #00d4ff'}}></div>
              «Напиши функцию сортировки без использования sort()»
            </div>
            <div className="flex items-center gap-3 text-cyan-400 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{boxShadow: '0 0 6px #00d4ff'}}></div>
              «Оптимизируй этот SQL-запрос для ускорения»
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Получите код",
      content: (
        <div>
          <p className="text-gray-300 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Mistral AI генерирует чистый, готовый к использованию код с комментариями. Поддерживается
            более 30 языков программирования и популярных фреймворков.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-cyan-400 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{boxShadow: '0 0 6px #00d4ff'}}></div>
              Python, JavaScript, TypeScript, Go, Rust
            </div>
            <div className="flex items-center gap-3 text-cyan-400 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{boxShadow: '0 0 6px #00d4ff'}}></div>
              React, Vue, Django, FastAPI, Spring
            </div>
            <div className="flex items-center gap-3 text-cyan-400 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{boxShadow: '0 0 6px #00d4ff'}}></div>
              SQL, NoSQL, GraphQL запросы
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Улучшайте итерациями",
      content: (
        <div>
          <p className="text-gray-300 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Общайтесь с NeyroMax как с опытным разработчиком в команде. Уточняйте детали,
            просите доработки — нейросеть помнит контекст всего диалога.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-cyan-400 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{boxShadow: '0 0 6px #00d4ff'}}></div>
              Контекстный диалог без потери истории
            </div>
            <div className="flex items-center gap-3 text-cyan-400 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{boxShadow: '0 0 6px #00d4ff'}}></div>
              Объяснение каждого шага по запросу
            </div>
            <div className="flex items-center gap-3 text-cyan-400 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{boxShadow: '0 0 6px #00d4ff'}}></div>
              Встроенный редактор с подсветкой синтаксиса
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Как работает <span className="text-cyan-400" style={{textShadow: '0 0 20px rgba(0,212,255,0.5)'}}>NeyroMax</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три простых шага — от идеи до рабочего кода. Никаких лишних действий.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
