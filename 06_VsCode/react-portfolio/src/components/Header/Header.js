import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }
  // Function to handle link click
  const handleLinkClick = () => {
    setIsNavOpen(false)
  }
  const handleEmailClick = () => {
    window.open(
      'mailto:catnipearlani@gmail.com?subject=Contact&body=Hello!',
      '_blank'
    )
  }

  return (
    <div className="TopRightMenu">
      {/* Menu Toggler */}
      <div
        className={`MenuItem Project ${isNavOpen ? 'active' : ''}`}
        onClick={toggleNav}
      >
        <span className="Label" data-text="close">
          {isNavOpen ? 'Close' : 'Projects'}
        </span>
      </div>
      {/* Navigation Menu */}
      <nav className={`nav js-nav ${isNavOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/project1" style={{ '--i': 0 }} onClick={handleLinkClick}>
              The Fragile Egg
            </Link>
          </li>
          <li>
            <a href="/project2" style={{ '--i': 1 }} onClick={handleLinkClick}>
              Tangible Particle Imagination
            </a>
          </li>
          <li>
            <a href="/project3" style={{ '--i': 2 }} onClick={handleLinkClick}>
              Plantasia
            </a>
          </li>
          <li>
            <a href="/project4" style={{ '--i': 3 }} onClick={handleLinkClick}>
              Cubic Pastel Reveries
            </a>
          </li>
          <li>
            <a href="/project5" style={{ '--i': 4 }} onClick={handleLinkClick}>
              Vast.C Express
            </a>
          </li>
        </ul>
      </nav>
      <div className="MenuItem Contact" onClick={handleEmailClick}>
        <span className="Label">Contact</span>
      </div>
    </div>
  )
}

export default Header
