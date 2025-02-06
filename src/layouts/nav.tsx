"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';

const NavMobile = dynamic(() => import("./navMobile"), { ssr: false });

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { href: "/", label: "#home" },
        { href: "/projects", label: "#projects" },
        { href: "/about-me", label: "#about-me" },
        { href: "/contact", label: "#contact" },
    ];

    return (
        <nav className="container navbar" aria-label="Main Navigation">
            <div className="navbar__brand">
                <Link href="/" className="navbar__brand-name">juanpredev</Link>
                <button 
                    className="navbar__toggle" 
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="navbar__toggle-icon" />
                </button>
            </div>
            <div className="navbar__links">
                {navLinks.map((link) => (
                    <Link 
                        key={link.href}
                        href={link.href} 
                        className={`navbar__links-link ${pathname === link.href ? "navbar__links-link--active" : ""}`}
                        aria-current={pathname === link.href ? "page" : undefined}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <NavMobile isOpen={isOpen} toggleMenu={toggleMenu} navLinks={navLinks} />
        </nav>
    );
};

export default Navbar;