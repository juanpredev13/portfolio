"use client";
import Image from 'next/image';
import HeroButton from '@/components/home/HeroButton';
import { ChevronDown } from 'lucide-react';
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
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const targetRight = 24; // final distance from screen edge
    const scrollRange = 400; // px of scroll over which the slide happens

    const handleScroll = () => {
      const wrapperRect = wrapper.getBoundingClientRect();

      // How far the card naturally sits from the right edge of the screen
      const naturalRight = window.innerWidth - wrapperRect.right;

      // Trigger when wrapper scrolls past 100px from top
      const triggerOffset = 100 - wrapperRect.top;

      if (triggerOffset > 0) {
        // 0 → 1 progress over scrollRange
        const progress = Math.min(1, triggerOffset / scrollRange);
        // Smoothly interpolate right from natural position to screen edge
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
          <p className="hero-section__overline">Hello, my name is</p>
          <h1 className="hero-section__title title">
            Juanpre. <br /> I made <span className="hero-section__highlight">web solutions</span>
          </h1>
          <p className="hero-section__subtitle">
            He crafts responsive websites where technologies meet creativity
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
              {/* Profile image overlay */}
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
                  <span>Q1 2026</span>
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

      {/* Scroll indicator */}
      <button className="hero-section__scroll-indicator" onClick={scrollToProjects} aria-label="Scroll to projects">
        <ChevronDown className="hero-section__scroll-icon" />
      </button>
    </div>
  );
}
