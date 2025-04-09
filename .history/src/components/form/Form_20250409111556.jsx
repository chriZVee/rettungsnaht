import "../../styles/form.css";
import { useState } from "react";
import AreaSelection from "./AreaSelection.jsx";
import ContactData from "./ContactData.jsx";
import DonationMethod from "./DonationMethod.jsx";
import ClothingSelection from "./ClothingSelection.jsx";

export default function Form() {
  const [donationMethod, setDonationMethod] = useState({
    donationMethod: "abholung",
    methodError: false,
    methodErrorText: "",
    isHandover: false,
  });

  const [contactData, setContactData] = useState({
    name: "",
    nameError: false,
    email: "",
    emailError: false,
    address: "",
    addressError: false,
    location: "",
    locationError: false,
  });

  const [areaSelection, setAreaSelection] = useState({
    area: "syrien",
    areaError: false,
    areaErrorText: "",
  });

  const [clothingSelection, setClothingSelection] = useState({
    clothingItems: [],
    clothingItemError: false,
    clothingItemErrorText: "",
  });

  /* Destructuring */
  const {
    name,
    nameError,
    email,
    emailError,
    address,
    addressError,
    location,
    locationError,
  } = contactData;

  const { area, areaError: error, areaErrorText: errorText } = areaSelection;

  const { isHandover } = donationMethod;

  /* Handler */
  const handleSubmit = (e) => {
    let event = e.target.value;
    const regex = /^[a-zA-Z._-]{1,32}@[a-zA-Z0-9._-]{1,32}\.[a-z]{2,10}$/;
    e.preventDefault();

    let error = false;
    let errorText = "";

    if (!regex.test(newEmail)) {
      error = true;
      errorText = "Bitte eine komplette E-Mailadresse eingeben";
  };

  /* Form validation check */
  const formIsValid = () => {
    const hasMethod = donationMethod !== "";
    const hasArea = area !== "";
    const hasName = name.trim() !== "";
    const hasEmail = email.trim() !== "";
    const hasAddress = address.trim() !== "";
    const hasLocation = location.trim() !== "";
    const handOverValid =
      hasMethod && hasArea && hasName && hasEmail && !nameError && !emailError;
    const pickUpValid =
      handOverValid &&
      hasAddress &&
      hasLocation &&
      !addressError &&
      !locationError;

    return isHandover ? handOverValid : handOverValid && pickUpValid;
  };

  return (
    <section className="form container">
      <div>
        <h1>Spende deine Kleidung weltweit an aktuelle Krisengebiete</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <DonationMethod
          donationMethod={donationMethod}
          setDonationMethod={setDonationMethod}
        />
        <div className="fieldset-container">
          <AreaSelection
            areaSelection={areaSelection}
            setAreaSelection={setAreaSelection}
          />
          <ClothingSelection
            clothingSelection={clothingSelection}
            setClothingSelection={setClothingSelection}
          />
        </div>
        <ContactData
          contactData={contactData}
          setContactData={setContactData}
          isHandover={isHandover}
        />
        <div className="submit-button-container">
          <button
            type="submit"
            className="button submit-button"
            disabled={!formIsValid()}
            onSubmit={handleSubmit}
          >
            Kleidung jetzt spenden
          </button>
        </div>
      </form>
    </section>
  );
}
