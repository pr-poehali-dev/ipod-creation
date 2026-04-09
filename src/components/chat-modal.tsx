import { useState, useRef, useEffect } from "react"
import Icon from "@/components/ui/icon"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface ChatModalProps {
  open: boolean
  onClose: () => void
}

const CHAT_URL = "https://functions.poehali.dev/2e05d936-4b7c-4ed2-b03d-9b191c85825a"

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="my-2 rounded-lg overflow-hidden border border-cyan-500/20">
      <div className="flex items-center justify-between px-3 py-1 bg-gray-900 border-b border-cyan-500/20">
        <span className="text-xs text-cyan-400 font-space-mono">{lang || "code"}</span>
        <button onClick={copy} className="text-xs text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
          <Icon name={copied ? "Check" : "Copy"} size={12} />
          {copied ? "Скопировано" : "Копировать"}
        </button>
      </div>
      <pre className="p-3 bg-black overflow-x-auto text-sm font-space-mono text-gray-300 whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function MessageContent({ content }: { content: string }) {
  const parts = content.split(/(```[\s\S]*?```)/g)
  return (
    <div className="text-sm leading-relaxed">
      {parts.map((part, i) => {
        if (part.startsWith("```")) {
          const match = part.match(/```(\w*)\n?([\s\S]*?)```/)
          if (match) return <CodeBlock key={i} lang={match[1]} code={match[2].trim()} />
        }
        return (
          <p key={i} className="whitespace-pre-wrap">
            {part}
          </p>
        )
      })}
    </div>
  )
}

export function ChatModal({ open, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Привет! Я NeyroMax — твой AI-помощник для кода. Опиши задачу или вставь код, который нужно разобрать." }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => textareaRef.current?.focus(), 100)
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    if (open) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    const newMessages: Message[] = [...messages, { role: "user", content: text }]
    setMessages(newMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      const reply = typeof data === "string" ? JSON.parse(data).reply : data.reply
      setMessages([...newMessages, { role: "assistant", content: reply }])
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Произошла ошибка. Попробуй ещё раз." }])
    } finally {
      setLoading(false)
    }
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full max-w-2xl h-[80vh] flex flex-col rounded-2xl overflow-hidden border border-cyan-500/30"
        style={{
          background: "#050a0f",
          boxShadow: "0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(0,212,255,0.05)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cyan-500/20 bg-black/50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: "0 0 8px #00d4ff" }} />
            <span className="font-orbitron font-bold text-white text-sm">
              Neyro<span className="text-cyan-400">Max</span>
            </span>
            <span className="text-xs text-gray-500 font-space-mono">AI Code Assistant</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-xl px-4 py-3 ${
                  msg.role === "user"
                    ? "bg-cyan-500 text-black font-medium"
                    : "bg-gray-900 text-gray-100 border border-cyan-500/10"
                }`}
              >
                {msg.role === "assistant" ? (
                  <MessageContent content={msg.content} />
                ) : (
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-900 border border-cyan-500/10 rounded-xl px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-cyan-400"
                      style={{
                        animation: "bounce 1.2s infinite",
                        animationDelay: `${i * 0.2}s`,
                        boxShadow: "0 0 6px #00d4ff",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-4 border-t border-cyan-500/20 bg-black/50">
          <div className="flex gap-3 items-end">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Опиши задачу или вставь код... (Enter — отправить, Shift+Enter — перенос)"
              rows={1}
              className="flex-1 bg-gray-900 text-white text-sm rounded-xl px-4 py-3 resize-none border border-cyan-500/20 focus:border-cyan-500/60 focus:outline-none placeholder-gray-600 font-geist"
              style={{ maxHeight: 120 }}
              onInput={(e) => {
                const t = e.target as HTMLTextAreaElement
                t.style.height = "auto"
                t.style.height = Math.min(t.scrollHeight, 120) + "px"
              }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: input.trim() && !loading ? "#00d4ff" : "#1a2a3a",
                boxShadow: input.trim() && !loading ? "0 0 15px rgba(0,212,255,0.4)" : "none",
              }}
            >
              <Icon name="Send" size={18} className={input.trim() && !loading ? "text-black" : "text-gray-500"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}