import { useGlitch } from 'react-powerglitch';

export default function HeroButton() {
    const glitch = useGlitch();
    
    // Número de WhatsApp al que deseas redirigir
    const whatsappNumber = '50683067400'; // Reemplaza con tu número de WhatsApp
    
    const handleClick = () => {
        // Formato para abrir WhatsApp con el número
        const whatsappUrl = `https://wa.me/${whatsappNumber}`;
        // Redireccionar a la URL de WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button className="hero-section__button" ref={glitch.ref} onClick={handleClick}>
            let&apos;s get in touch
        </button>
    );
}
