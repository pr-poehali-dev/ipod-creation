import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -200, y: -200 })
  const current = useRef({ x: -200, y: -200 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", onMove)

    const animate = () => {
      const ease = 0.1
      current.current.x += (pos.current.x - current.current.x) * ease
      current.current.y += (pos.current.y - current.current.y) * ease

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[99998]"
      style={{ willChange: "transform" }}
    >
      {/* Внешний ореол */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Средний круг */}
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Ядро огонька */}
      <div
        style={{
          position: "absolute",
          width: 12,
          height: 12,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: "#00d4ff",
          boxShadow: "0 0 8px 3px rgba(0,212,255,0.8), 0 0 20px 8px rgba(0,212,255,0.4), 0 0 40px 16px rgba(0,212,255,0.15)",
          pointerEvents: "none",
        }}
      />
    </div>
  )
}
