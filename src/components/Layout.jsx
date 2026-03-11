// src/components/Layout.jsx
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Starfield from './Starfield'
import Cursor from './Cursor'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Cursor />
      <Starfield />
      <Navbar />
      <main className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
