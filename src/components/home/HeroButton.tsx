import { useGlitch } from 'react-powerglitch';

export default function HeroButton() {
    const glitch = useGlitch();

    const whatsappNumber = '50660691996';

    const handleClick = () => {
        const whatsappUrl = `https://wa.me/${whatsappNumber}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button className="hero-section__button" ref={glitch.ref} onClick={handleClick}>
            GET IN TOUCH
        </button>
    );
}
