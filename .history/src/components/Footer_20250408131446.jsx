import org from "../data/org";
import "../styles/footer.css";

function Footer() {
  return (
    <section className="footer container">
      <div className="footer-link-container">
        <ul>
          <li className="buttonized">
            <a href="">Spende jetzt</a>
          </li>
          <li>
            <a href="">Über Uns</a>
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

export default Footer;
