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
      </div>
    </div>
  )
}

export default NavMobile

