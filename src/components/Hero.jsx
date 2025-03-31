import "../styles/hero.css";
import heroImage from "../assets/hero-image.png";

function Hero() {
  return (
    <section className="hero container">
      <img
        src={heroImage}
        className="hero-image"
        alt="Five kids in crisis area showing victory sign, smiling"
      ></img>
    </section>
  );
}

export default Hero;
