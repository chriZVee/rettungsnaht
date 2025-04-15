import from "../../styles/confirmation.css";
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
          <p classname="confirmation-data">
            Spendenmethode: {state.donationMethod.donationMethod}
          </p>
          <p classname="confirmation-data">
            Unterstütztes Gebiet: {state.areaSelection.area}
          </p>
          <p classname="confirmation-data">
            Kleidung: {state.clothingSelection.clothingItems}
          </p>
          <p classname="confirmation-data">E-Mail: {state.email}</p>
          {state.address !== "" && <p>Adresse: {state.address}</p>}
          {state.location !== "" && <p>Stadt: {state.location}</p>}
        </div>
      </section>
    </Page>
  );
}
