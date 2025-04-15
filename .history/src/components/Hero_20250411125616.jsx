import "../styles/hero.css";
import heroImage from "../assets/hero-image.png";
import seamHero from "../assets/seam-hero.svg";

function Hero() {
  return (
    <section className="hero container" id="hero-section">
      <img
        src={heroImage}
        className="hero-image"
        alt="Five kids in crisis area showing victory sign, smiling"
      ></img>
      <img src={seamHero} className="hero-seam" alt="seam in orange"></img>
    </section>
  );
}

export default Hero;
