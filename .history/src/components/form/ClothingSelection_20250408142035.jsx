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
  const { clothingItem, clothingItemError, clothingItemErrorText } =
    clothingSelection;

  /* Handler */
  const handleClothingItemChange = (e) => {
    let item = e.target.value;
    let error = false;
    let errorText = "";
    let isEmtpy = item !== "";

    if (isEmtpy) {
      error = true;
      errorText = "Bitte wähle mind. eine Kleidungsart aus.";
    }

    setClothingSelection({
      clothingItem: item,
      clothingItemError: error,
      clothingItemErrorText: errorText,
    });
  };

  return (
    <fieldset className="clothing-selection">
      <legend>Was möchtest du spenden?</legend>
      <div className="clothing-selection-container">
        {DonationItems.map((item) => (
          <label className="buttonized" key={item.label}>
            <input
              type="checkbox"
              value={item.value}
              onChange={handleClothingItemChange}
            />
            {item.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
