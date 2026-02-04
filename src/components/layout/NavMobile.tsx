"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { TreeView } from "../treeView"
import { X } from "lucide-react" // Import the X icon from lucide-react

interface NavMobileProps {
  isOpen: boolean
  toggleMenu: () => void
}

const NavMobile = ({ isOpen, toggleMenu }: NavMobileProps) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div ref={menuRef} className="nav-mobile" tabIndex={-1}>
      <div className="nav-mobile__header">
        <div className="navbar__brand-name">juanpredev</div>
        <button className="nav-mobile__close" onClick={toggleMenu} aria-label="Close menu">
          <X size={24} />
        </button>
      </div>
      <div className="nav-mobile__content">
        <TreeView />
      </div>
      <div className="nav-mobile__footer">
        <div className="nav-mobile__language">
          <span className="nav-mobile__language-text">EN</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="nav-mobile__language-icon"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <div className="nav-mobile__socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
            </svg>
          </a>
          <a href="https://figma.com" target="_blank" rel="noopener noreferrer" aria-label="Figma">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavMobile

