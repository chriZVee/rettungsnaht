export default function DonationMethod({ donationMethod, setDonationMethod }) {
  /* Destructuring */
  const {
    donationMethod: method,
    methodError: error,
    methodErrorText: errorText,
  } = donationMethod;

  /* Handler */
  const handleChange = (e) => {
    const method = e.target.value;
    let error = false;
    let errorText = "";

    if (method === "") {
      errorText = "Bitte wähle eine Methode aus.";
      error = true;
    }

    setDonationMethod({
      donationMethod: method,
      isHandover: method === "uebergabe",
      methodError: error,
      methodErrorText: errorText,
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
      {error && <p> {errorText}</p>}
    </div>
  );
}
