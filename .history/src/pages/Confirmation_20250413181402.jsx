import Page from "../components/Page";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  const { donationMethod, areaSelection, contactData, clothingSelection } =
    state;

  return (
    <Page>
      <section className="confirmation-summary">
        <h1>Bestätigung</h1>
        <div>
          <p></p>
          <p>Spendenmethode: {donationMethod}</p>
          <p>Unterstütztes Gebiet:</p>
          <p>E-Mail: </p>
          <p>Adresse:</p>
        </div>
      </section>
    </Page>
  );
}
