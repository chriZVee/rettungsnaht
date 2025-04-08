export default function ClothingSelection({
  clothingSelection,
  setClothingSelection,
}) {
  const DonationItems = [
    { label: "T-Shirt", value: "tshirt" },
    { label: "Pullover", value: "pullover" },
    { label: "Jacke", value: "jacke" },
    { label: "Hose", value: "hose" },
    { label: "Sonstiges", value: "sonstiges" },
  ];
  /* Destructuring */
  const {
    clothingItem: item,
    clothingItemError: error,
    clothingItemErrorText: errorText,
  } = clothingSelection;

  /* Handler */
  const handleClothingChange = (e) => {};

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
