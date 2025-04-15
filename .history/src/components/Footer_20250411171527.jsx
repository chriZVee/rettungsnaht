import org from "../data/org";
import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer container">
      <div className="copyright-container">
        <p className="copyright-note">© 2025 {org.officialName}</p>
      </div>
      <div className="footer-link-container">
        <ul>
          <li className="buttonized">
            <Link to="#donation-form">Spende jetzt</Link>
          </li>
          <li>
            <Link to="/imprint">Impressum</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Datenschutzrichtlinie</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
