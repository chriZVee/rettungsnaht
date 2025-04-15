import Page from "../components/Page";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <Page>
      <section className="confirmation-summary">
        <h1>Bestätigung</h1>
        <div>
          <p></p>
          <p>Spendenmethode: {state.donationMethod.donationMethod}</p>
          <p>Unterstütztes Gebiet: {state.areaSelection.area}</p>
          <p>Kleidung: {state.clothingItems}</p>
          <p>E-Mail: {state.email}</p>
          {state.address !== "" && <p>Adresse: {state.address}</p>}
          {state.location !== "" && <p>Stadt: {state.location}</p>}
        </div>
      </section>
    </Page>
  );
}
