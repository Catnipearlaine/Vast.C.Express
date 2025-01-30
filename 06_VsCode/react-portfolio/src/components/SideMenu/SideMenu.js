import React from 'react'
import { Link } from 'react-router-dom'
import './SideMenu.scss'

function SideMenu({ setIsNavOpen }) {
  const handleLogoClick = () => {
    setIsNavOpen(false) 
  }
  return (
    <div className="SideMenu">
      <Link className="Logo" to="/" onClick={handleLogoClick}>
        lan!
      </Link>
      <div className="SocialMedia">
        <div className="Button">
          <a
            className="Label"
            href="https://www.instagram.com/catnipearlaine"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ins
          </a>
        </div>
        <div className="Button">
          <a
            className="Label"
            href="https://github.com/Catnipearlaine"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="Button">
          <a
            className="Label"
            href="https://www.behance.net/catnipearlani"
            title="Behance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
