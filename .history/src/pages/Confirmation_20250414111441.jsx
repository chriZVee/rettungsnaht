import "../styles/confirmation.css";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <Page>
      <section className="confirmation-summary container">
        <h1>Danke für deine Spende</h1>
        <div className="confirmation-data">
          <p className="data-element capitalize">
            Spendenmethode: {state.donationMethod.donationMethod}
          </p>
          <p className="data-element capitalize">
            Unterstütztes Gebiet: {state.areaSelection.area}
          </p>
          <p className="data-element capitalize">
            Kleidung: {state.clothingSelection.clothingItems}
          </p>
          <p className="confirmation-">E-Mail: {state.email}</p>
          {state.address !== "" && (
            <p classname="data-element capitalize">Adresse: {state.address}</p>
          )}
          {state.location !== "" && (
            <p classname="data-element capitalize">Stadt: {state.location}</p>
          )}
          <button className="button" onChange=""></button>
        </div>
      </section>
    </Page>
  );
}
