import "../styles/confirmation.css";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  /* Displays Clothing-Items more elegant */
  const item = state.clothingSelection.clothingItems;
  const displayItems = () => item.join(", ");
  const donationMethod = state.donationMethod.donationMethod;

  const isPickUp = state.donationMethod.donationMethod === "abholung";

  /* Get the current Date and Time */
  const today = new Date();
  const hours = today.getHours();
  today.getMinutes;
  console.log(today);

  /* Notice for Confirmation-Summary */
  const notice = () => {
    const pickUpNote = "Danke für die Abgabe an der Geschäftsstelle.";
    const handOverNote =
      "Unser Abholservice wird sich mit dir per E-Mail in Verbindung setzen und einen Termin vereinbaren. Danke!";
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
          {state.location !== "" && isPickUp && (
            <p className="data-element capitalize">
              <span className="data-leftElement">Ort: </span> {state.location}
            </p>
          )}
          <p className="data-element">
            <span className="data-leftElement">{notice()}</span>
          </p>

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
