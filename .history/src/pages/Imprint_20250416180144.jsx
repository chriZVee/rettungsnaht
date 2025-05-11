import Page from "../components/Page";
import org from "../data/org";
import "../styles/imprint.css";

export default function Imprint() {
  return (
    <>
      <Page>
        <section className="impressum container">
          <h1>Impressum</h1>
          <div className="impressum-block">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              RettungsNaht e.V. Musterstraße 12 12345 Musterstadt Deutschland
            </p>
          </div>

          <div className="impressum-block">
            <h2>Vertretungsberechtigter Vorstand</h2>
            <p>Max Mustermann</p>
          </div>

          <div className="impressum-block">
            <h2>Kontakt</h2>
            <p>Telefon: {org.tel}</p>
            <p>
              E-Mail:{org.email}
              <a href="mailto:kontakt@rettungsnaht.org">
                kontakt@rettungsnaht.org
              </a>
            </p>
            <p>
              <span>Website:Rettungsnaht</span>
              <a href={org.url} target="_blank" rel="noopener noreferrer">
                www.rettungsnaht.org
              </a>
            </p>
          </div>

          <div className="impressum-block">
            <h2>Registereintrag</h2>
            <p>Eintragung im Vereinsregister</p>
            <p>Registergericht: Amtsgericht Musterstadt</p>
            <p>Registernummer: VR 1234</p>
          </div>

          <div className="impressum-block">
            <h2>Umsatzsteuer-ID</h2>
            <p>USt-IdNr.: {org.ustId}</p>
          </div>

          <div className="impressum-block">
            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Max Mustermann
              <br />
              Musterstraße 12
              <br />
              12345 Musterstadt
            </p>
          </div>

          <div className="impressum-block">
            <h2>Haftung für Inhalte und Links</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>

          <div className="impressum-block">
            <h2>Online-Streitbeilegung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </div>
        </section>
      </Page>
    </>
  );
}
