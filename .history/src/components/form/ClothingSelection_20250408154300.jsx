export default function ClothingSelection({
  clothingSelection,
  setClothingSelection,
}) {
  const DonationItems = [
    { label: "T-Shirt", value: "tshirt" },
    { label: "Pullover", value: "pullover" },
    { label: "Jacke", value: "jacke" },
    { label: "Hose", value: "hose" },
    { label: "Winterkleidung", value: "winterkleidung" },
    { label: "Sonstiges", value: "sonstiges" },
  ];
  /* Destructuring */
  const { clothingItems, clothingItemError, clothingItemErrorText } =
    clothingSelection;

  /* Handler */
  const handleClothingItemChange = (e) => {
    let newItem = e.target.value;
    let error = false;
    let errorText = "";
    let isEmtpy = newItem === "";

    if (isEmtpy) {
      error = true;
      errorText = "Bitte wähle mind. eine Kleidungsart aus.";
    } else {
      error = false;
      errorText = "";
    }

    setClothingSelection({
      clothingItems: newItem,
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
        <p className="errorMessage">{clothingItemErrorText}</p>
      </div>
    </fieldset>
  );
}
