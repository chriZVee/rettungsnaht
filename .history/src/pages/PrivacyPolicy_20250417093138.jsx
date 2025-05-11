import Page from "../components/Page";
import org from "../data/org";
import from "../../styles/privacy-policy.ss";

export default function PrivacyPolicy() {
  return (
    <Page>
      <section className="privacy-policy container">
        <h1>Datenschutzerklärung</h1>
        <div className="legal-wrapper">
          <h2>1. Allgemeine Hinweise</h2>
          <p>
            Der Schutz deiner persönlichen Daten ist uns ein besonderes
            Anliegen. Wir behandeln deine personenbezogenen Daten vertraulich
            und entsprechend der gesetzlichen Datenschutzvorschriften sowie
            dieser Datenschutzerklärung.
          </p>

          <p>
            Diese Website dient ausschließlich der Abwicklung von Kleiderspenden
            in Krisengebiete. Die Nutzung ist ohne Registrierung möglich. Es
            findet keine kommerzielle Datennutzung oder Weitergabe statt.
          </p>
        </div>
        <div className="legal-wrapper">
          <h2>2. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>

          <p>{org.officialName}</p>
          <p>{org.address}</p>
          <p>
            {org.zip} {org.city}
          </p>
          <p>E-Mail: {org.email}</p>
        </div>
        <div className="legal-wrapper">
          <h2>3. Erhebung und Nutzung personenbezogener Daten</h2>
          <p>
            Personenbezogene Daten (z. B. Name, E-Mail-Adresse, Abholadresse,
            PLZ/Ort) werden nur im Rahmen des Spendenformulars erfasst und
            ausschließlich lokal im Browser verarbeitet, um die Spendenanfrage
            zu bearbeiten.
          </p>
          <p>
            Es erfolgt keine Speicherung auf einem Server und keine Weitergabe
            an Dritte.
          </p>

          <p>
            Die Formularangaben werden nicht dauerhaft gespeichert, sondern
            dienen lediglich der lokalen Bestätigung deiner Angaben auf der
            nächsten Seite.
          </p>
        </div>
        <div className="legal-wrapper">
          <h2>4. Cookies und Tracking</h2>

          <p>
            Diese Website verwendet keine Cookies, keine Analyse-Tools (z. B.
            Google Analytics) und keine Drittanbieter-Skripte.
          </p>
        </div>
        <div className="legal-wrapper">
          <h2>5. Deine Rechte</h2>
          <p>
            Da keine personenbezogenen Daten gespeichert oder übertragen werden,
            entstehen dir gegenüber uns keine über das Spendenformular
            hinausgehenden Verpflichtungen.
          </p>
          <p>
            Wenn du Fragen hast, kannst du uns jederzeit per E-Mail
            kontaktieren.
          </p>
        </div>
        <div className="legal-wrapper">
          <h2>6. Sicherheit</h2>
          <p>
            Diese Seite läuft über eine SSL-verschlüsselte Verbindung (HTTPS).
            Dadurch sind deine Eingaben vor dem Zugriff Dritter geschützt.
          </p>
        </div>
        <div className="legal-wrapper">
          <h2>7. Änderungen</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren,
            falls sich technische oder rechtliche Rahmenbedingungen ändern.
          </p>
        </div>
      </section>
    </Page>
  );
}
