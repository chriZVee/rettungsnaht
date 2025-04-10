import { isValidElement } from "react";
import org from "../../data/org";

export default function ContactData({
  contactData,
  setContactData,
  isHandover,
}) {
  /* Destructuring */
  const {
    name,
    email,
    address,
    location,
    nameError,
    nameErrorText,
    emailError,
    emailErrorText,
    addressError,
    addressErrorText,
    locationError,
    locationErrorText,
  } = contactData;

  /* Handler */

  /* Handler: name field */
  const isValidName = (name) => {
    return /^[A-Za-zÄÖÜäöüß\s\-']+$/.test(name);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    let error = nameError;
    let errorText = nameErrorText;

    if (isValidName(newName)) {
      error = false;
      errorText = "";
    }

    setContactData({
      ...contactData,
      name: newName,
      nameError: error,
      nameErrorText: errorText,
    });
  };

  const handleNameBlur = () => {
    const newName = e.target.value.trim();
    let error = nameError;
    let errorText = nameErrorText;
    let isEmpty = newName.length === 0;

    if (isEmpty) {
      error = true;
      errorText = "Bitte gib deinen Namen ein.";
    } else if (newName.trim().split(" ").length < 2) {
      error = true;
      errorText = "Bitte gib deinen Vor-und Nachnamen ein.";
    } else if (!isValidName) {
      error = true;
      errorText = "Bitte nur Buchstaben verwenden.";
    } else {
      error = false;
      errorText = "";
    }

    setContactData({
      ...contactData,
      nameError: error,
      nameErrorText: errorText,
    });
  };

  /* Handler: email field */
  const isValidEmail = (email) => {
    return /^[a-zA-Z._-]{1,32}@[a-zA-Z0-9._-]{1,32}\.[a-z]{2,10}$/.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    let error = emailError;
    let errorText = emailErrorText;

    if (isValidEmail(newEmail)) {
      error = false;
      errorText = "";
    }

    setContactData({
      ...contactData,
      email: newEmail,
      emailError: false,
      emailErrorText: errorText,
    });
  };

  const handleEmailBlur = (e) => {
    const newEmail = e.target.value.trim();
    let error = false;
    let errorText = "";

    const isEmpty = newEmail.trim() === "";

    if (isEmpty) {
      error = true;
      errorText = "Bitte gib deine E-Mail-Adresse ein.";
    } else if (!isValidEmail(newEmail)) {
      error = true;
      errorText = "Bitte prüfe deine E-Mail-Adresse.";
    }

    setContactData({
      ...contactData,
      emailError: error,
      emailErrorText: errorText,
    });
  };

  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    let error = false;
    let errorText = "";
    const regex = /^[A-ZÄÖÜa-zäöüß\s\-]{2,40} \d{1,4}[a-zA-Z]?$/;
    const isEmpty = newAddress.trim() === "";

    if (isEmpty) {
      error = true;
      errorText = "Bitte gib deine Adresse ein.";
    } else if (!regex.test(newAddress)) {
      error = true;
      errorText = "Bitte eine komplette Adresse angeben.";
    } else {
      error = false;
      errorText = "";
    }

    setContactData({
      ...contactData,
      address: newAddress,
      addressError: error,
      addressErrorText: errorText,
    });
  };

  let officeZipFirstTwoDigits = org.zip.trim().slice(0, 2);
  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    let error = false;
    let errorText = "";
    let firstTwoDigits = newLocation.trim().slice(0, 2);

    let isEmpty = newLocation.trim() === "";
    let pickUpAvailable = firstTwoDigits === officeZipFirstTwoDigits;

    if (isEmpty) {
      error = true;
      errorText = "Bitte gib deine PLZ und Ort ein.";
    } else if (!isEmpty && !pickUpAvailable) {
      error = true;
      errorText = `Abholung ist leider für deinen PLZ-Bereich nicht möglich (nur für ${officeZipFirstTwoDigits}xxx). Bitte Übergabe an der Geschäftsstelle auswählen.`;
    } else {
      error = false;
      errorText = "";
    }

    setContactData({
      ...contactData,
      location: newLocation,
      locationError: error,
      locationErrorText: errorText,
    });
  };
  return (
    <div className="contact-data">
      <label>
        Name
        <input
          type="text"
          className={""}
          placeholder="Vor- und Nachname"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
        />
        {nameError && <p className="errorText">{nameErrorText}</p>}
      </label>

      <label>
        E-Mail
        <input
          type="text"
          placeholder="name@url.de"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        {emailError && <p className="errorText">{emailErrorText}</p>}
      </label>

      <label className={isHandover ? "hidden" : ""}>
        Abholadresse
        <input
          type="text"
          placeholder="Straße, Hausnummer"
          value={address}
          onChange={handleAddressChange}
        />
        {addressError && <p className="errorText">{addressErrorText}</p>}
      </label>

      <label className={`mobile-hidden ${isHandover ? "hidden" : ""} `}>
        &nbsp;
        <input
          type="text"
          placeholder="PLZ, Ort"
          value={location}
          onChange={handleLocationChange}
        />
        {locationError && <p className="errorText">{locationErrorText}</p>}
        {location === "" && (
          <p className="infoText">
            Abholung nur für Plz-Bereich {officeZipFirstTwoDigits}xxx verfügbar.
          </p>
        )}
      </label>
    </div>
  );
}
