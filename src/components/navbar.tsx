import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface NavbarProps {
  onChatOpen: () => void
}

export function Navbar({ onChatOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              Neyro<span className="text-cyan-400" style={{textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff'}}>Max</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#technology" className="font-geist text-white hover:text-cyan-400 transition-colors duration-200">
                Возможности
              </a>
              <a href="#applications" className="font-geist text-white hover:text-cyan-400 transition-colors duration-200">
                Применения
              </a>
              <a href="#faq" className="font-geist text-white hover:text-cyan-400 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button onClick={onChatOpen} className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-geist border-0" style={{boxShadow: '0 0 15px rgba(0,212,255,0.4)'}}>
              Начать чат
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-cyan-400 transition-colors duration-200">
              <Icon name={isOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-cyan-500/20">
              <a href="#technology" className="block px-3 py-2 font-geist text-white hover:text-cyan-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Возможности
              </a>
              <a href="#applications" className="block px-3 py-2 font-geist text-white hover:text-cyan-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Применения
              </a>
              <a href="#faq" className="block px-3 py-2 font-geist text-white hover:text-cyan-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button onClick={() => { onChatOpen(); setIsOpen(false) }} className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-geist border-0">
                  Начать чат
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
