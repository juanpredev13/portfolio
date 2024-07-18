// components/HeroSection.js
import Image from 'next/image';
import HeroButton from '@/components/buttons/heroButton';

export default function HeroSection() {
  return (
    <div className="hero-section section">
      <div className="hero-section__content">
        <div className="hero-section__text">
          <p className="hero-section__overline">
            Hello, my name is
          </p>
          <h1 className="hero-section__title title">
            Juanpre. <br></br> I made <span className="hero-section__highlight">web solutions</span>
          </h1>
          <p className="hero-section__subtitle">He crafts responsive websites where technologies meet creativity</p>
          <HeroButton/>
        </div>
        <div className="hero-section__profile">
          <div className="hero-section__image-wrapper">
            <Image
              src="/man4.png" // reemplaza esto con la ruta a tu imagen
              alt="Profile"
              layout="fill"
              objectFit="contain"
              className="hero-section__image"
            />
          </div>
          <div className="hero-section__info">
            <div className="hero-section__status">Currently listing Everlong - Foo Fighters</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
