import "../styles/donation-counter.css";
import PeopleWithDonatedClothes from "../assets/people-with-donated-clothes.png";

function DonationCounter() {
  return (
    <section className="donation-counter container">
      <div>
        <p>20.752</p>
        <p>Kleidungsstücke gespendet</p>
        <div>
          <img
            src={PeopleWithDonatedClothes}
            alt="Lachende Menschen mit gespendeten Kleidern"
          />
        </div>
      </div>
    </section>
  );
}

export default DonationCounter;
