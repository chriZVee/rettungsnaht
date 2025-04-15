import "../styles/confirmation.css";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <Page>
      <section className="confirmation-summary container">
        <h1>Bestätigung</h1>
        <div>
          <p></p>
          <p className="confirmation-data capitalize">
            Spendenmethode: {state.donationMethod.donationMethod}
          </p>
          <p className="confirmation-data capitalize">
            Unterstütztes Gebiet: {state.areaSelection.area}
          </p>
          <p className="confirmation-data capitalize">
            Kleidung: {state.clothingSelection.clothingItems}
          </p>
          <p className="confirmation-data">E-Mail: {state.email}</p>
          {state.address !== "" && (
            <p classname="confirmation-data capitalize">
              Adresse: {state.address}
            </p>
          )}
          {state.location !== "" && (
            <p classname="confirmation-data capitalize">
              Stadt: {state.location}
            </p>
          )}
        </div>
      </section>
    </Page>
  );
}
