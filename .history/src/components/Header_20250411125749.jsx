import "../styles/header.css";
import rnLogo from "../assets/rn-logo-white.png";

function Header() {
  return (
    <header className="header container">
      <img src={rnLogo} className="header__image" alt="RettungsNaht Logo"></img>
      <nav className="nav">
        <ul className="nav-bar">
          <li>
            <a href="#crisis-area-section">Krisengebiete</a>
          </li>
          <li>
            <a href="#about-section">Über uns</a>
          </li>
          <li className="buttonized">
            <a href="#donation-form">Spende jetzt</a>
          </li>
          <li className="buttonized">&nbsp;</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
