import Page from "../components/Page";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <Page>
      <section className="confirmation-summary">
        <h1>Bestätigung</h1>
        <p>Hier kommt eine Zusammenfassung des Formulars</p>
        <p>Spendenmethode:</p>
        Unterstütztes Gebiet: Kleidung: Name: E-Mail: Adresse:
      </section>
    </Page>
  );
}
