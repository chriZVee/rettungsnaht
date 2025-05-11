import { useState } from "react";

export default function ClothingSelection({
  clothingSelection,
  setClothingSelection,
}) {
  const donationItems = [
    { label: "T-Shirt", value: "t-shirt" },
    { label: "Pullover", value: "pullover" },
    { label: "Jacke", value: "jacke" },
    { label: "Hose", value: "hose" },
    { label: "Winterkleidung", value: "winterkleidung" },
    { label: "Sonstiges", value: "sonstiges" },
  ];

  const [itemsNotice, setItemsNotice] = useState("");

  /* Destructuring */
  const { clothingItems, clothingItemError, clothingItemErrorText } =
    clothingSelection;

  /* Handler */
  const handleClothingItemChange = (e) => {
    let newItem = e.target.value;
    let newItems = [...clothingItems];
    let error = false;
    let errorText = "";
    let isChecked = e.target.checked;
    let notice = "";

    newItems = isChecked
      ? [...newItems, newItem]
      : newItems.filter((item) => item !== newItem);

    if (newItems.length === 0) {
      error = true;
      errorText = "Bitte wähle mind. eine Kleidungsart aus.";
    } else if (!isChecked) {
      notice = "Bitte wähle mind. eine Kleidungsart aus.";
      error = false;
      errorText = "";
    } else {
      error = false;
      errorText = "";
    }
    console.log("newItems.length: " + (newItems.length === 0));
    console.log("____");
    console.log("newItem: " + newItem);

    setClothingSelection({
      clothingItems: newItems,
      clothingItemError: error,
      clothingItemErrorText: errorText,
    });
    setItemsNotice(notice);
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
        {!clothingItemError && <p className="itemsNotice">{itemsNotice}</p>}
      </div>
    </fieldset>
  );
}
