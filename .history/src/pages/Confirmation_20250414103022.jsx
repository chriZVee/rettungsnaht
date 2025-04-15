import "../styles/confirmation.css";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <Page title="Confirmation">
      <section className="confirmation-summary">
        <h1>Bestätigung</h1>
        <div>
          <p></p>
          <p classname="confirmation-data capitalize">
            Spendenmethode: {state.donationMethod.donationMethod}
          </p>
          <p classname="confirmation-data capitalize">
            Unterstütztes Gebiet: {state.areaSelection.area}
          </p>
          <p classname="confirmation-data capitalize">
            Kleidung: {state.clothingSelection.clothingItems}
          </p>
          <p classname="confirmation-data capitalize">E-Mail: {state.email}</p>
          {state.address !== "" && (
            <p classname="confirmation-data">Adresse: {state.address}</p>
          )}
          {state.location !== "" && (
            <p classname="confirmation-data">Stadt: {state.location}</p>
          )}
        </div>
      </section>
    </Page>
  );
}
