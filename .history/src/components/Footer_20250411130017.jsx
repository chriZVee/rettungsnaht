import org from "../data/org";
import "../styles/footer.css";

export default function Footer() {
  return (
    <section className="footer container">
      <div className="footer-link-container">
        <ul>
          <li className="buttonized">
            <a href="#donation-form">Spende jetzt</a>
          </li>
          <li>
            <a href="#about-section">Über Uns</a>
          </li>
          <li>
            <a href="">Impressum</a>
          </li>
          <li>
            <a href="">Datenschutzrichtlinie</a>
          </li>
        </ul>
      </div>
      <div className="copyright-container">
        <p className="copyright-note">© 2025 {org.officialName}</p>
      </div>
    </section>
  );
}
