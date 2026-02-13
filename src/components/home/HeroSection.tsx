"use client";
import Image from 'next/image';
import HeroButton from '@/components/home/HeroButton';
import { useEffect, useRef, useState } from 'react';
import { useGlitch } from 'react-powerglitch';

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const [cardStyle, setCardStyle] = useState<React.CSSProperties>({});
  const glitch = useGlitch();

  const whatsappNumber = '50660691996';
  const handleContact = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.project-section');
    if (!projectsSection) return;

    const targetY = projectsSection.getBoundingClientRect().top + window.scrollY;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 1500;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      window.scrollTo(0, startY + distance * ease);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const targetRight = 24;
    const scrollRange = 400;

    const handleScroll = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const naturalRight = window.innerWidth - wrapperRect.right;
      const triggerOffset = 100 - wrapperRect.top;

      if (triggerOffset > 0) {
        const progress = Math.min(1, triggerOffset / scrollRange);
        const currentRight = naturalRight + (targetRight - naturalRight) * progress;

        setCardStyle({
          position: 'fixed',
          top: '100px',
          right: `${currentRight}px`,
          zIndex: 40,
        });
      } else {
        setCardStyle({});
      }
    };

    document.body.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="hero-section section">
      <div className="hero-section__content">
        <div className="hero-section__text">
          <p className="hero-section__overline">Juanpre.</p>
          <h1 className="hero-section__title title">
            Building scalable <span className="hero-section__highlight">web experiences</span>
          </h1>
          <p className="hero-section__subtitle">
            where technology meets creativity.
          </p>
          <div className="lg:hidden">
            <HeroButton />
          </div>
        </div>

        {/* Glass Card with Aura */}
        <div ref={wrapperRef} className="hero-section__glass-wrapper">
          <div
            ref={floatRef}
            className="hero-section__glass-float"
            style={Object.keys(cardStyle).length > 0 ? cardStyle : undefined}
          >
            <div className="hero-section__aura"></div>
            <div
              ref={glitch.ref}
              className="hero-section__glass-card cursor-pointer"
              onClick={handleContact}
              data-umami-event="click-get-in-touch-desktop"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleContact(); }}
            >
              <div className="hero-section__glass-glow">
                <div className="hero-section__orb hero-section__orb--1"></div>
                <div className="hero-section__orb hero-section__orb--2"></div>
                <div className="hero-section__orb hero-section__orb--3"></div>
              </div>
              <div className="hero-section__profile-overlay">
                <Image
                  src="/images/man4.webp"
                  alt="Juanpre"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="hero-section__profile-img"
                />
              </div>
              <div className="hero-section__glass-footer">
                <div className="hero-section__status">
                  <span className="hero-section__slash">{"//"}</span>
                  <span>AVAILABLE</span>
                  <span className="hero-section__slash">{"//"}</span>
                </div>
                <div className="hero-section__status">
                  <span className="hero-section__slash">{"//"}</span>
                  <span>FREELANCE</span>
                  <span className="hero-section__slash">{"//"}</span>
                </div>
              </div>
              <span className="hero-section__glass-cta">
                GET IN TOUCH
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="hero-section__bottom">
        <div className="hero-section__divider"></div>
        <div className="hero-section__bottom-content">
          <button
            className="hero-section__explore"
            onClick={scrollToProjects}
            data-umami-event="click-explore-work"
          >
            EXPLORE MY WORK &darr;
          </button>
          <p className="hero-section__description">
            FULL-STACK DEVELOPER AND HACKER DRIVEN BY A PASSION FOR BUILDING EFFICIENT, SECURE APPLICATIONS. EXPERTISE IN WEB DEVELOPMENT, WITH A FOCUS ON PERFORMANCE AND SECURITY, PUSHING BOUNDARIES IN CODE.
          </p>
        </div>
      </div>
    </div>
  );
}
