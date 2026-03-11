// src/hooks/useReveal.js
import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container ref.
 * Any child with class .reveal / .reveal-l / .reveal-r
 * gets the .vis class added when it enters the viewport.
 */
export function useReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const els = container.querySelectorAll('.reveal, .reveal-l, .reveal-r')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
