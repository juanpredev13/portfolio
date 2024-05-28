// components/Navbar.js

import Link from 'next/link';
import '../css/layout/navigation.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <div className="navbar__brand-icon">
                    <i className="fas fa-square"></i>
                </div>
                <span className="navbar__brand-name">juanpredev</span>
            </div>
            <div className="navbar__links">
                <Link href="#home" legacyBehavior>
                    <a className="navbar__links-link navbar__links-link--active">#home</a>
                </Link>
                <Link href="#works" legacyBehavior>
                    <a className="navbar__links-link">#works</a>
                </Link>
                <Link href="#about-me" legacyBehavior>
                    <a className="navbar__links-link">#about-me</a>
                </Link>
                <Link href="#contacts" legacyBehavior>
                    <a className="navbar__links-link">#contacts</a>
                </Link>
            </div>
            <div className="navbar__language">EN</div>
        </nav>
    );
};

export default Navbar;
