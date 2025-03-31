import "../../styles/form.css";
import { useState } from "react";
import AreaSelection from "./AreaSelection.jsx";
import ContactData from "./ContactData.jsx";
import DonationMethod from "./DonationMethod.jsx";
import ClothingSelection from "./ClothingSelection.jsx";

function Form() {
  const [formData, setFormData] = useState({});

  return (
    <section className="form container">
      <div>
        <h1>Spende deine Kleidung weltweit an aktuelle Krisengebiete</h1>
      </div>
      <form onSubmit="">
        <DonationMethod />
        <div className="fieldset-container">
          <AreaSelection />
          <ClothingSelection />
        </div>
        <ContactData />
        <div className="submit-button-container">
          <button type="submit" className="button submit-button">
            Kleidung jetzt spenden
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
