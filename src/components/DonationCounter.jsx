import '../styles/donation-counter.css'
import PeopleWithDonatedClothes from '../assets/people-with-donated-clothes.png'

function DonationCounter() {
  return (
    <section className="donation-summary container">
      <div className="donation-box">
        <p className="donation-counter">20.752</p>
        <p className="donation-info">Kleidungsstücke gespendet</p>
      </div>
      <div className="donation-banner">
        <img src={PeopleWithDonatedClothes} alt="Lachende Menschen mit gespendeten Kleidern" />
      </div>
    </section>
  );
}

export default DonationCounter