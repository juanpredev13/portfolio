"use client";
import Image from 'next/image';
import HeroButton from '@/components/buttons/heroButton';

export default function HeroSection() {
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

        <div className="hero-section__profile">
          <div className="hero-section__image-wrapper">
            <Image
              src="/man4.png"
              alt="Profile"
              layout="fill"
              objectFit="contain"
              className="hero-section__image"
            />
          </div>

          <div className="hero-section__info mt-6">
            {/* Logos de tecnologías */}
            {/* <div className="hero-section__logos flex space-x-4 justify-center md:justify-start mt-4">
              <Image
                src="/wordpress-logo.svg" // Reemplaza esto con la ruta correcta del logo de WordPress
                alt="WordPress Logo"
                width={50}
                height={50}
              />
              <Image
                src="/nextjs-logo.svg" // Reemplaza esto con la ruta correcta del logo de Next.js
                alt="Next.js Logo"
                width={50}
                height={50}
              />
              <Image
                src="/bricks-logo.png" // Reemplaza esto con la ruta correcta del logo de Bricks
                alt="Bricks Logo"
                width={50}
                height={50}
              />
              <Image
                src="gutenberg-logo.svg" // Reemplaza esto con la ruta correcta del logo de Gutenberg
                alt="Gutenberg Logo"
                width={50}
                height={50}
              />
                <Image
                src="acf-logo.svg" // Reemplaza esto con la ruta correcta del logo de Gutenberg
                alt="Acf Logo"
                width={50}
                height={50}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
