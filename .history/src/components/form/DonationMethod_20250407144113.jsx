import ContactData from "./ContactData";

export default function DonationMethod({ donationMethod, setDonationMethod }) {
  /* Destructering */
  const { donationMethod: method } = donationMethod;

  const handleChange = (e) => {
    const method = e.target.value;
    let error;
    let errorText;

    if (method === "") {
      errorText = "Bitte wähle eine Methode aus.";
      error;
    }

    setDonationMethod({
      donationMethod: method,
      isHandover: method === "uebergabe",
    });
  };

  return (
    <div className="donation-method">
      <label className="button buttonized">
        <input
          type="radio"
          name="method"
          value="abholung"
          onChange={handleChange}
          checked={method === "abholung"}
        />
        Abholung
      </label>
      <label className="button buttonized">
        <input
          type="radio"
          name="method"
          value="uebergabe"
          onChange={handleChange}
          checked={method === "uebergabe"}
        />
        Übergabe an der Geschäftsstelle
      </label>
    </div>
  );
}
