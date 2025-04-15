import { Link } from "react-router-dom";
import "../styles/header.css";
import rnLogo from "../assets/rn-logo-white.png";

function Header() {
  return (
    <header className="header container">
      <img src={rnLogo} className="header__image" alt="RettungsNaht Logo"></img>
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
          <li className="buttonized">&nbsp;</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
