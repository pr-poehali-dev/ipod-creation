import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Neyro<span className="text-cyan-400" style={{textShadow: '0 0 10px #00d4ff'}}>Max</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              AI-нейросеть для написания кода на базе Mistral API. Генерируйте, анализируйте и улучшайте код на естественном языке.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li>
                <a href="#technology" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Как работает
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Начать чат
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  API Документация
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2026 NeyroMax. Все права защищены. Powered by Mistral AI.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Конфиденциальность
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Условия использования
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Cookie-политика
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}