export default function DonationMethod({
  donationMethod,
  setDonationMethod,
  setIsHandover,
}) {
  /* Destructering */
  const { donationMethod: method } = donationMethod;

  const handleChange = (e) => {
    const method = e.target.value;
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
          checked={donationMethod === "abholung"}
        />
        Abholung
      </label>
      <label className="button buttonized">
        <input
          type="radio"
          name="method"
          value="uebergabe"
          onChange={handleChange}
          checked={donationMethod === "uebergabe"}
        />
        Übergabe an der Geschäftsstelle
      </label>
    </div>
  );
}
