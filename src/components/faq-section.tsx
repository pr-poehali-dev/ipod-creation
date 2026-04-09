import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое NeyroMax и как он работает?",
      answer:
        "NeyroMax — AI-помощник для разработчиков на базе Mistral API. Вы описываете задачу на русском или английском языке, а нейросеть генерирует готовый код, объясняет его и помогает с отладкой.",
    },
    {
      question: "Какие языки программирования поддерживаются?",
      answer:
        "Поддерживается более 30 языков: Python, JavaScript, TypeScript, Go, Rust, Java, C++, PHP, Ruby, Swift, Kotlin и другие. Также фреймворки: React, Vue, Django, FastAPI, Spring, Laravel и т.д.",
    },
    {
      question: "Насколько точен генерируемый код?",
      answer:
        "Mistral — одна из лучших моделей для кода. Для большинства стандартных задач код работает с первого раза. Для сложных проектов рекомендуем итеративный подход: уточняйте требования в диалоге.",
    },
    {
      question: "Нужны ли навыки программирования для использования?",
      answer:
        "Базовые знания помогут, но не обязательны. NeyroMax отлично подходит как новичкам для обучения, так и опытным разработчикам для ускорения работы.",
    },
    {
      question: "Как NeyroMax обрабатывает мой код — безопасно ли это?",
      answer:
        "Все запросы передаются по зашифрованному соединению. Мы не храним ваш код дольше сессии и не используем его для обучения моделей без согласия.",
    },
    {
      question: "Есть ли бесплатный тариф?",
      answer:
        "Да! Бесплатный тариф включает 50 запросов в день. Для профессионального использования доступны платные тарифы с безлимитными запросами и приоритетным доступом.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Частые <span className="text-cyan-400" style={{textShadow: '0 0 20px rgba(0,212,255,0.5)'}}>вопросы</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё что нужно знать о NeyroMax перед началом работы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-cyan-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-cyan-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
