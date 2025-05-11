export default function ClothingSelection({ clothingSelection }) {
  const donationItems = [
    { label: "T-Shirt", value: "t-shirt" },
    { label: "Pullover", value: "pullover" },
    { label: "Jacke", value: "jacke" },
    { label: "Hose", value: "hose" },
    { label: "Winterkleidung", value: "winterkleidung" },
    { label: "Sonstiges", value: "sonstiges" },
  ];

  /* Destructuring */
  const {
    clothingItems,
    clothingItemError,
    clothingItemErrorText,
    setClothingSelection,
  } = clothingSelection;

  /* Handler */
  const handleClothingItemChange = (e) => {
    let newItem = e.target.value;
    let newItems = [...clothingItems];
    let error = false;
    let errorText = "";
    let isChecked = e.target.checked;
    let itemsNotice = "";

    newItems = isChecked
      ? [...newItems, newItem]
      : newItems.filter((item) => item !== newItem);

    if (newItems.length === 0) {
      error = true;
      errorText = "Bitte wähle mind. eine Kleidungsart aus.";
    } else if (newItem === "") {
      itemsNotice = "Bitte wähle mind. eine Kleidungsart aus.";
    } else {
      error = false;
      errorText = "";
    }

    setClothingSelection({
      clothingItems: newItems,
      clothingItemError: error,
      clothingItemErrorText: errorText,
    });
  };

  return (
    <fieldset className="clothing-selection">
      <legend>Was möchtest du spenden?</legend>
      <div className="clothing-selection-container">
        {donationItems.map((item) => (
          <label className="buttonized" key={item.label}>
            <input
              type="checkbox"
              value={item.value}
              onChange={handleClothingItemChange}
            />
            {item.label}
          </label>
        ))}
        {clothingItemError && (
          <p className="errorText">{clothingItemErrorText}</p>
        )}
      </div>
    </fieldset>
  );
}
