import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import rnLogo from "../assets/rn-logo-white.svg";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/", { replace: true }); // Erzeugt echten "Wechsel"
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <header className="header container">
      <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <img src={rnLogo} className="header-image" alt="RettungsNaht Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-bar">
          <li>
            <a href="/#crisis-area-section">Krisengebiete</a>
          </li>
          <li>
            <a href="/#about-section">Über uns</a>
          </li>
          <li className="buttonized">
            <a href="/#donation-form">Spende jetzt</a>
          </li>
          <li className="buttonized deco">&nbsp;</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
