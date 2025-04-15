import Page from "../components/Page";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <Page>
      <section className="confirmation-summary">
        <h1>Bestätigung</h1>
        <p></p>
        <p>Spendenmethode:</p>
        <p>Unterstütztes Gebiet:</p>
        <p>E-Mail: </p>
        <p>Adresse:</p>
      </section>
    </Page>
  );
}
