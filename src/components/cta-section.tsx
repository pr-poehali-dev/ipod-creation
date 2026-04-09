import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-white mb-6 font-orbitron text-balance">
            Пишите код в <span className="text-cyan-400" style={{textShadow: '0 0 30px rgba(0,212,255,0.6)'}}>10x быстрее</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Присоединяйтесь к тысячам разработчиков, которые уже используют NeyroMax для генерации,
            отладки и документирования кода с помощью Mistral AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-black font-bold text-lg px-8 py-4 pulse-button"
              style={{
                background: '#00d4ff',
                boxShadow: '0 0 25px rgba(0,212,255,0.5), 0 0 50px rgba(0,212,255,0.2)',
              }}
            >
              Начать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black text-lg px-8 py-4 bg-transparent transition-all duration-300"
              style={{boxShadow: '0 0 15px rgba(0,212,255,0.1)'}}
            >
              Посмотреть демо
            </Button>
          </div>

          <p className="mt-6 text-gray-500 text-sm">
            50 бесплатных запросов в день · Без кредитной карты · Мгновенный доступ
          </p>
        </div>
      </div>
    </section>
  )
}
