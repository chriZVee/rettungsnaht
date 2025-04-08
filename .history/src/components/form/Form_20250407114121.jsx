import "../../styles/form.css";
import { useState } from "react";
import AreaSelection from "./AreaSelection.jsx";
import ContactData from "./ContactData.jsx";
import DonationMethod from "./DonationMethod.jsx";
import ClothingSelection from "./ClothingSelection.jsx";

export default function Form() {
  const [donationMethod, setDonationMethod] = useState({
    donationMethod: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formIsValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      !nameError &&
      !emailError &&
      (!donationMethod.isHandover
        ? address.trim() !== "" &&
          location.trim() !== "" &&
          !addressError &&
          !locationError
        : true)
    );
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
          <AreaSelection />
          <ClothingSelection />
        </div>
        <ContactData
          contactData={contactData}
          setContactData={setContactData}
          isHandover={donationMethod.isHandover}
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
