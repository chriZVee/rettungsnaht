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
          <p>Unterstütztes Gebiet: {state.ContactData.area}</p>
          <p>E-Mail: </p>
          <p>Adresse:</p>
        </div>
      </section>
    </Page>
  );
}
