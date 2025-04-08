export default function ClothingSelection() {
  const DonationItems = [
    { label: "T-Shirt", value: "tshirt" },
    { label: "Pullover", value: "pullover" },
    { label: "Jacke", value: "jacke" },
    { label: "Hose", value: "hose" },
    { label: "Sonstiges", value: "sonstiges" },
  ];

  return (
    <fieldset className="clothing-selection">
      <legend>Was möchtest du spenden?</legend>
      <div className="clothing-selection-container">
        {DonationItems.map((item) => (
          <label className="buttonized" key={item.label}>
            <input type="checkbox" value={item.value} />
            {item.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
