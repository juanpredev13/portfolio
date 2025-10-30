"use client"; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesitas
import PrimaryButton from '@/components/common/buttons/PrimaryButton';
// import NavMobile from "./NavMobile";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="container navbar" aria-label="Main Navigation">
            <div className="navbar__brand">
                <span className="navbar__brand-name">juanpredev</span>
                {/* <button className="navbar__toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="navbar__toggle-icon" />
                </button> */}
            </div>
            <div className={`navbar__links ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-4`}>
                <Link href="https://wa.me/50660691996" className={`navbar__links-link ${pathname === "/contact" ? "navbar__links-link--active" : ""}`} aria-current={pathname === "/contact" ? "page" : undefined}>
                    #contact
                </Link>
            </div>
            {/* <NavMobile isOpen={isOpen} toggleMenu={toggleMenu} /> */}
        </nav>
    );
};

export default Navbar;
