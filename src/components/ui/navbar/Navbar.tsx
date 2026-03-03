'use client'

import React, { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import './Navbar.css'

interface NavbarProps {
  onNavigate?: (section: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Travel guides', href: '#guides' },
    { label: 'Hotels', href: '#hotels' },
  ]

  const handleNavClick = (section: string) => {
    onNavigate?.(section)
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
           <button 
          onClick={() => handleNavClick('home')}
          className="navbar-logo"
          aria-label="Travel Planner Home"
          style = {{cursor: 'pointer'}}
        >
          <div className="logo-icon">✈</div>
          <span className="logo-text">travel-planner</span>
        </button>
          {/* Desktop Navigation Links */}
          <div className="navbar-links-desktop">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.label)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="navbar-search">
            <div className="search-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Explore by destination"
                className="search-input"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="navbar-auth">
            <button className="login-btn">Log in</button>
            <button
              onClick={() => handleNavClick('signup')}
              className="signup-btn"
            >
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X className="mobile-menu-icon" />
            ) : (
              <Menu className="mobile-menu-icon" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.label)}
                className="mobile-nav-link"
              >
                {link.label}
              </button>
            ))}
            <div className="mobile-search-section">
              <div style={{ position: 'relative' }}>
                <Search
                  className="search-icon"
                  style={{ position: 'absolute' }}
                />
                <input
                  type="text"
                  placeholder="Explore by destination"
                  className="mobile-search-input"
                />
              </div>
            </div>
            <div className="mobile-auth-section">
              <button className="mobile-login-btn">Log in</button>
              <button
                onClick={() => handleNavClick('signup')}
                className="mobile-signup-btn"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar