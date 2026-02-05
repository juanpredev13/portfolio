"use client";
import Image from 'next/image';
import HeroButton from '@/components/home/HeroButton';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.project-section');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <HeroButton />
        </div>

        {/* Glass Card with Aura */}
        <div className="hero-section__glass-wrapper">
          <div className="hero-section__aura"></div>
          <div className="hero-section__glass-card">
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
