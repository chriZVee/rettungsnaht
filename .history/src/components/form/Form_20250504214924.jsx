import "../../styles/form.css";
import { useState } from "react";
import AreaSelection from "./AreaSelection";
import ContactData from "./ContactData";
import DonationMethod from "./DonationMethod";
import ClothingSelection from "./ClothingSelection";
import { useNavigate } from "react-router-dom";

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

  const { clothingItems } = clothingSelection;

  /* Form validation check */
  const formIsValid = () => {
    const hasMethod = donationMethod !== "";
    const hasArea = area !== "";
    const hasItem = clothingItems.length !== 0;
    const hasName = name.trim() !== "";
    const hasEmail = email.trim() !== "";
    const hasAddress = address.trim() !== "";
    const hasLocation = location.trim() !== "";
    const handOverValid =
      hasMethod &&
      hasArea &&
      hasItem &&
      hasName &&
      hasEmail &&
      !nameError &&
      !emailError;
    const pickUpValid =
      handOverValid &&
      hasAddress &&
      hasLocation &&
      !addressError &&
      !locationError;

    return isHandover ? handOverValid : handOverValid && pickUpValid;
  };

  /* Navigation initialization */
  const navigate = useNavigate();

  /* Handler: Submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      donationMethod,
      areaSelection,
      clothingSelection,
      name,
      email,
      address,
      location,
    };

    navigate("/confirmation", { state: formData });
  };

  return (
    <section className="form " id="donation-form">
      <div className="container">
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
              contactData={contactData}
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
            >
              Kleidung jetzt spenden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
