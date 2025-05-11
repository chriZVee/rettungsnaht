import "../styles/confirmation.css";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  /* Displays Clothing-Items more elegant */
  const item = state.clothingSelection.clothingItems;
  const displayItems = (item) => {
    return item.join(", ");
  };

  const donationMethod = state.donationMethod.donationMethod;

  const isPickUp = () => state.donationMethod.donationMethod === "abholung";

  const notice = () => {
    const pickUpNote = "Bitte gib die Kleidung in unserer Geschäftsstelle ab.";
    const handOverNote =
      "Unser Abholservice wird sich mit dir in Verbindung setzen und einen Termin vereinbaren.";
    return isPickUp ? pickUpNote : handOverNote;
  };

  return (
    <Page>
      <section className="confirmation-summary container">
        <h1>Danke für deine Spende!</h1>
        <div className="confirmation-data">
          <p className="data-element capitalize">
            <span className="data-leftElement">Spendenmethode: </span>
            {donationMethod}
          </p>
          <p className="data-element capitalize">
            <span className="data-leftElement">Unterstütztes Gebiet: </span>
            {state.areaSelection.area}
          </p>
          <p className="data-element capitalize">
            <span className="data-leftElement">Kleidung: </span>
            {displayItems(item)}
          </p>
          <p className="confirmation-">
            <span className="data-leftElement">E-Mail: </span> {state.email}
          </p>
          {state.address !== "" && isPickUp && (
            <p className="data-element capitalize">
              <span className="data-leftElement">Adresse: </span>
              {state.address}
            </p>
          )}
          {state.city !== "" && isPickUp && (
            <p className="data-element capitalize">
              <span className="data-leftElement">Stadt: </span> {state.location}
            </p>
          )}

          {!isPickUp && (
            <p className="data-element capitalize">
              <span className="data-leftElement">{notice}</span>
            </p>
          )}

          <Link to="/">
            <button className="button back-button">
              zurück zur Startseite
            </button>
          </Link>
        </div>
      </section>
    </Page>
  );
}
