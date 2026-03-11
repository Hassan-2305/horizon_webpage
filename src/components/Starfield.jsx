// src/components/Starfield.jsx
import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W, H

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Stars
    const stars = Array.from({ length: 260 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.3 + 0.15,
      o: Math.random() * 0.8 + 0.1,
      s: Math.random() * 0.4 + 0.05,
      t: Math.random() * Math.PI * 2,
    }))

    // Shooting stars
    let shoots = []
    const shootInterval = setInterval(() => {
      if (Math.random() < 0.45) {
        shoots.push({
          x: Math.random() * W,
          y: Math.random() * H * 0.5,
          vx: 9 + Math.random() * 7,
          vy: 3 + Math.random() * 5,
          l: 0,
          ml: 70 + Math.random() * 80,
          a: 1,
        })
      }
    }, 2000)

    // Mouse parallax
    let mouseX = W / 2, mouseY = H / 2
    const onMove = (e) => { mouseX = e.clientX; mouseY = e.clientY }
    window.addEventListener('mousemove', onMove)

    const nebulae = [
      { xR: 0.30, yR: 0.25, r: 260, c: 'rgba(255,77,28,0.03)' },
      { xR: 0.72, yR: 0.60, r: 320, c: 'rgba(28,255,212,0.02)' },
      { xR: 0.12, yR: 0.72, r: 200, c: 'rgba(100,80,255,0.025)' },
    ]

    function draw() {
      ctx.clearRect(0, 0, W, H)
      const px = (mouseX / W - 0.5) * 0.015
      const py = (mouseY / H - 0.5) * 0.015

      nebulae.forEach(({ xR, yR, r, c }) => {
        const x = xR * W, y = yR * H
        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        g.addColorStop(0, c); g.addColorStop(1, 'transparent')
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)
      })

      stars.forEach((s) => {
        s.t += 0.018
        const alpha = s.o * (0.5 + 0.5 * Math.sin(s.t * s.s * 3))
        ctx.beginPath()
        ctx.arc(s.x + px * s.r * 50, s.y + py * s.r * 50, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,215,255,${alpha})`
        ctx.fill()
      })

      shoots = shoots.filter((s) => {
        s.x += s.vx; s.y += s.vy
        s.l += Math.hypot(s.vx, s.vy)
        s.a = Math.max(0, 1 - s.l / s.ml)
        if (s.a <= 0) return false
        const tl = (s.l / s.ml) * 10
        const grd = ctx.createLinearGradient(s.x - s.vx * tl, s.y - s.vy * tl, s.x, s.y)
        grd.addColorStop(0, 'transparent')
        grd.addColorStop(1, `rgba(255,77,28,${s.a * 0.9})`)
        ctx.beginPath()
        ctx.moveTo(s.x - s.vx * tl, s.y - s.vy * tl)
        ctx.lineTo(s.x, s.y)
        ctx.strokeStyle = grd; ctx.lineWidth = 1.5; ctx.stroke()
        return s.x < W + 100 && s.y < H + 100
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(shootInterval)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
