import { Link } from "react-router-dom";
import "../styles/header.css";
import rnLogo from "../assets/rn-logo-white.svg";

function Header() {
  return (
    <header className="header container">
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={rnLogo} className="header-image" alt="RettungsNaht Logo" />
      </Link>

      <nav className="nav">
        <ul className="nav-bar">
          <li>
            <Link to="/#crisis-area-section">Krisengebiete</Link>
          </li>
          <li>
            <Link to="/#about-section">Über uns</Link>
          </li>
          <li className="buttonized">
            <Link to="/#donation-form">Spende jetzt</Link>
          </li>
          <li className="buttonized deco">&nbsp;</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
