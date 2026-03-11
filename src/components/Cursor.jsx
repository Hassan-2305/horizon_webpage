// src/components/Cursor.jsx
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = followerRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let fx = mx, fy = my
    let animId

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }

    const HOVER = 'a, button, .pillar, .proj-card, .member, .c-link, .sup-item, [data-hover]'

    const onOver = (e) => {
      if (e.target.closest(HOVER)) {
        dot.style.width  = '6px'; dot.style.height  = '6px'
        ring.style.width = '52px'; ring.style.height = '52px'
        ring.style.borderColor = 'var(--accent)'
      }
    }
    const onOut = (e) => {
      if (e.target.closest(HOVER)) {
        dot.style.width  = '12px'; dot.style.height  = '12px'
        ring.style.width = '36px'; ring.style.height = '36px'
        ring.style.borderColor = 'rgba(255,77,28,0.4)'
      }
    }

    const hide = () => { dot.style.opacity = '0'; ring.style.opacity = '0' }
    const show = () => { dot.style.opacity = '1'; ring.style.opacity = '1' }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    ;(function follow() {
      fx += (mx - fx) * 0.12
      fy += (my - fy) * 0.12
      ring.style.left = fx + 'px'
      ring.style.top  = fy + 'px'
      animId = requestAnimationFrame(follow)
    })()

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={dotRef} />
      <div id="cursor-follower" ref={followerRef} />
    </>
  )
}
