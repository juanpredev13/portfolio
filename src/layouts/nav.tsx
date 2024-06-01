// components/Navbar.js

import Link from 'next/link';
import '../css/layout/navigation.css';
import Logo from "@/components/logo";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <Logo/>
                <span className="navbar__brand-name">juanpredev</span>
            </div>
            <div className="navbar__links">
                <Link href="/projects" legacyBehavior>
                    <a className="navbar__links-link navbar__links-link--active">#projects</a>
                </Link>
                <Link href="/about-me" legacyBehavior>
                    <a className="navbar__links-link">#about-me</a>
                </Link>
                <Link href="/contact" legacyBehavior>
                    <a className="navbar__links-link">#contact</a>
                </Link>
            </div>
            <div className="navbar__language">EN</div>
        </nav>
    );
};

export default Navbar;
