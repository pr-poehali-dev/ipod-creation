import { useEffect, useRef } from "react"

const TRAIL_LENGTH = 28

export function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -500, y: -500 })
  const trail = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -500, y: -500 }))
  )
  const head = useRef({ x: -500, y: -500 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", onMove)

    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Плавно двигаем голову за мышью
      head.current.x += (mouse.current.x - head.current.x) * 0.15
      head.current.y += (mouse.current.y - head.current.y) * 0.15

      // Сдвигаем хвост: каждая точка догоняет предыдущую
      for (let i = TRAIL_LENGTH - 1; i > 0; i--) {
        trail.current[i].x += (trail.current[i - 1].x - trail.current[i].x) * 0.35
        trail.current[i].y += (trail.current[i - 1].y - trail.current[i].y) * 0.35
      }
      trail.current[0].x += (head.current.x - trail.current[0].x) * 0.35
      trail.current[0].y += (head.current.y - trail.current[0].y) * 0.35

      // Рисуем хвост
      for (let i = 0; i < TRAIL_LENGTH - 1; i++) {
        const t = 1 - i / TRAIL_LENGTH
        const alpha = t * t * 0.85
        const radius = t * 7

        const grd = ctx.createRadialGradient(
          trail.current[i].x, trail.current[i].y, 0,
          trail.current[i].x, trail.current[i].y, radius * 3
        )
        grd.addColorStop(0, `rgba(0, 230, 255, ${alpha})`)
        grd.addColorStop(0.4, `rgba(0, 180, 255, ${alpha * 0.5})`)
        grd.addColorStop(1, `rgba(0, 100, 200, 0)`)

        ctx.beginPath()
        ctx.arc(trail.current[i].x, trail.current[i].y, radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()
      }

      // Внешний ореол вокруг головы
      const outerGrd = ctx.createRadialGradient(
        head.current.x, head.current.y, 0,
        head.current.x, head.current.y, 80
      )
      outerGrd.addColorStop(0, "rgba(0,212,255,0.18)")
      outerGrd.addColorStop(0.5, "rgba(0,180,255,0.07)")
      outerGrd.addColorStop(1, "rgba(0,100,200,0)")
      ctx.beginPath()
      ctx.arc(head.current.x, head.current.y, 80, 0, Math.PI * 2)
      ctx.fillStyle = outerGrd
      ctx.fill()

      // Яркое ядро
      const coreGrd = ctx.createRadialGradient(
        head.current.x, head.current.y, 0,
        head.current.x, head.current.y, 14
      )
      coreGrd.addColorStop(0, "rgba(255,255,255,1)")
      coreGrd.addColorStop(0.2, "rgba(100,240,255,1)")
      coreGrd.addColorStop(0.6, "rgba(0,212,255,0.8)")
      coreGrd.addColorStop(1, "rgba(0,150,255,0)")
      ctx.beginPath()
      ctx.arc(head.current.x, head.current.y, 14, 0, Math.PI * 2)
      ctx.fillStyle = coreGrd
      ctx.fill()

      // Блик поверх ядра
      ctx.beginPath()
      ctx.arc(head.current.x, head.current.y, 5, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(255,255,255,0.95)"
      ctx.fill()

      raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[99998]"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
