import { Link } from "react-router-dom";
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
      <Link to="/">
        <img
          src={rnLogo}
          className="header-image"
          alt="RettungsNaht Logo"
        ></img>
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
