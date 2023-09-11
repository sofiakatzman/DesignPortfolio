import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden" // Disable scrolling
    } else {
      document.body.style.overflow = "auto" // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto" // Ensure scrolling is re-enabled when component unmounts
    }
  }, [isNavOpen])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const hideNav = () => {
    setIsNavOpen(false)
  }

  return (
    <nav className="footer">
      <div className="logo"></div>
      <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <Link onClick={hideNav} to="/">home</Link>
        <Link onClick={hideNav} to="/aboutme">about me</Link>
        <Link onClick={hideNav} to="/design">gallery</Link>
        <Link onClick={hideNav} to="/contactme">contact me</Link>
      </div>
      <div className="burger" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  )
}

export default Footer