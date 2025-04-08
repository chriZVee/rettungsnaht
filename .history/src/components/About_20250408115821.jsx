import "../styles/about.css";
import logoOrange from "../assets/logo-orange.png";
import togetherStatue from "../assets/together-statue.png";
import clothingCheck from "../assets/clothing-check.png";
import rnBuilding from "../assets/rn-building.png";

function About() {
  return (
    <section className="about container">
      <div className="about-image-gallery">
        <img
          src={togetherStatue}
          alt="Kleine Statue mit der Aufrischt together"
        ></img>
        <img
          src={clothingCheck}
          alt="Mann prüft Kleidung bei der Kleiderspende"
        ></img>
        <img src={rnBuilding} alt="Eingangstür des RettungsNaht-Gebäudes"></img>
      </div>
      <div className="text-container">
        <h2 className="about-heading">Über Uns</h2>
        <div className="about-text">
          <p>
            Wir von RettungsNaht e. V. setzen uns für eine nachhaltige und
            gezielte Verteilung von Kleiderspenden ein. Unser gemeinnütziger
            Verein hilft Menschen in Krisengebieten, indem wir nicht nur
            Kleidung sammeln, sondern auch sicherstellen, dass sie genau dort
            ankommt, wo sie am dringendsten benötigt wird.
          </p>
          <p>
            Mit unserer digitalen Plattform ermöglichen wir es Spendenden,
            selbst zu entscheiden, welche Krisenregion sie unterstützen möchten.
            Ob durch persönliche Übergabe an unserer Geschäftsstelle oder durch
            Abholung durch ein mobiles Sammelfahrzeug – jede Spende zählt! Dabei
            setzen wir auf Transparenz und Vertrauen: Jede Registrierung wird
            von uns sorgfältig dokumentiert und ausgewertet, um den Weg jeder
            Spende nachvollziehbar zu machen. So stellen wir sicher, dass deine
            Hilfe effizient und wirkungsvoll ankommt.
          </p>
          <p>
            Unsere Vision ist eine Welt, in der Kleidung nicht ungenutzt bleibt,
            während Menschen sie dringend brauchen. Wir glauben daran, dass
            selbst kleine Beiträge Großes bewirken können – wenn sie gezielt,
            solidarisch und digital unterstützt werden.
          </p>
          <p>
            Gemeinsam können wir einen Unterschied machen – Hoffnung schenken,
            Wärme spenden, Leben verändern.{" "}
          </p>
        </div>
        <img src={logoOrange} alt="RettungsNaht Logo in orange"></img>
      </div>
    </section>
  );
}

export default About;
