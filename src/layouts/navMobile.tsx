import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface NavMobileProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavMobile = ({ isOpen, toggleMenu }: NavMobileProps) => {
  const pathname = usePathname(); // Mueve el hook fuera de la condición

  return (
    isOpen ? (
      <div className="nav-mobile">
        <div className="nav-mobile__header">
          <div className="nav-mobile__title">juanpredev</div>
          <i className="nav-mobile__close fas fa-times" onClick={toggleMenu}></i>
        </div>
        <nav className="nav-mobile__nav">
          <Link href="/" className={`navbar__links-link ${pathname === "/" ? "navbar__links-link--active" : ""}`} aria-current={pathname === "/" ? "page" : undefined}>
            #home
          </Link>
          <Link href="/projects" className={`navbar__links-link ${pathname === "/projects" ? "navbar__links-link--active" : ""}`} aria-current={pathname === "/projects" ? "page" : undefined}>
            #projects
          </Link>
          <Link href="/about-me" className={`navbar__links-link ${pathname === "/about-me" ? "navbar__links-link--active" : ""}`} aria-current={pathname === "/about-me" ? "page" : undefined}>
            #about-me
          </Link>
          <Link href="/contact" className={`navbar__links-link ${pathname === "/contact" ? "navbar__links-link--active" : ""}`} aria-current={pathname === "/contact" ? "page" : undefined}>
            #contact
          </Link>
        </nav>
        <div className="nav-mobile__cta">
          <button className="nav-mobile__button">Call to Action</button>
        </div>
        <div className="nav-mobile__footer">
          <div className="nav-mobile__language">
            <span className="nav-mobile__language-text">EN</span>
            <i className="fas fa-chevron-down nav-mobile__language-icon"></i>
          </div>
          <div className="nav-mobile__socials">
            <i className="fab fa-github nav-mobile__social-icon"></i>
            <i className="fab fa-dribbble nav-mobile__social-icon"></i>
            <i className="fab fa-figma nav-mobile__social-icon"></i>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default NavMobile;
