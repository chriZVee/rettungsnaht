import "../styles/image-gallery.css";
import garbageElefant from "../assets/garbage-elefant.png";
import syria from "../assets/syria-destroyed-houses.png";
import indonesia from "../assets/indonesia-flooding.png";
import northernIreland from "../assets/northern-ireland-hurricane.png";

function ImageGallery() {
  return (
    <section className="image-gallery container">
      <div className="banner">
        <img src={garbageElefant} />
        <h2>
          Hilf uns, Kleidung dorthin zu bringen, wo sie am meisten gebraucht
          wird
        </h2>
      </div>
      <div className="image-card">
        <img src={syria} />
        <p>Syrien</p>
      </div>
      <div className="image-card">
        <img src={indonesia} />
        <p>Indonesien</p>
      </div>
      <div className="image-card">
        <img src={northernIreland} />
        <p>Nordirland</p>
      </div>
    </section>
  );
}

export default ImageGallery;
