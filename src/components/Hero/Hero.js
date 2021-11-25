import heroImage from '../../assets/images/hero-image.png';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__content">
        <h2>Obtené el café que necesitás al mejor precio!</h2>
        <p>
          Empezá tu mañana de la mejor forma con un buen café. Elegí alguno de
          nuestro catálogo y disfrutá un sabor único.
        </p>
        <a href="#list">Comprar ahora</a>
      </div>
      <img className="Hero__image" src={heroImage} alt="Hero" />
    </div>
  );
};

export default Hero;
