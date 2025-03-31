import { useState } from "react";

function ContactData() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [nameErrorText, setNameErrorText] = useState("");

  const [email, setEmail] = useState("");
  const [eMailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);
  const [addressErrorText, setAddressErrorText] = useState("");

  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState(false);
  const [locationErrorText, setLocationErrorText] = useState("");

  const handleNameChange = (e) => {
    let name = e.target.value;
    setName(name);

    if (name.length < 3) {
      setNameError(true);
      return setNameErrorText("Bitte gib deinen Namen ein.");
    } else if (name.trim().split(" ").length !== 2) {
      setNameError(true);
      return setNameErrorText("Bitte gib deinen Vor-und Nachnamen ein.");
    } else {
      setNameError(false);
      return setNameErrorText("");
    }
  };

  const handleEmailChange = (e) => {
    let eMail = e.target.value;
    setEmail(eMail);

    if (eMail.trim() === "") {
      setEmailError(true);
      setEmailErrorText("Bitte gib deine E-Mailadresse ein.");
    } else {
      setEmailError(false);
      setEmailErrorText("");
    }
  };

  const handleAddressChange = (e) => {
    let address = e.target.value;
    setAddress(address);

    if (address.trim() === "") {
      setAddressError(true);
      setAddressErrorText("Bitte gibt deine Adresse ein.");
    } else {
      setAddressError(false);
      setAddressErrorText("");
    }
  };

  const handleLocationChange = (e) => {
    let location = e.target.value;
    setLocation(location);

    if (location.trim() === "") {
      setLocationError(true);
      setLocationErrorText("Bitte gib deine PLZ und Ort ein.");
    }
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
        />
        {nameError && <p>{nameErrorText}</p>}
      </label>

      <label>
        E-Mail
        <input
          type="text"
          placeholder="name@url.de"
          value={email}
          onChange={handleEmailChange}
        />
        {eMailError && <p>{emailErrorText}</p>}
      </label>

      <label>
        Abholadresse
        <input
          type="text"
          placeholder="Straße, Hausnummer"
          value={address}
          onChange={handleAddressChange}
        />
        {addressError && <p>{addressErrorText}</p>}
      </label>

      <label className="mobile-hidden">
        &nbsp;
        <input
          type="text"
          placeholder="PLZ, Ort"
          value={location}
          onChange={handleLocationChange}
        />
        {locationError && <p>{locationErrorText}</p>}
      </label>
    </div>
  );
}
console.log("ContactData geladen");
export default ContactData;
