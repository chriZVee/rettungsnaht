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
    locationZipWarning,
  } = contactData;

  /* Handler */

  /* Auxiliary functions */
  /* Checks if field is empty */
  const isEmpty = (value) => value.trim().length === 0;

  /* Checks field by word count */
  const wordCount = (value) => value.trim().split(" ").length;

  /* Checks name by regex */
  const isValidName = (name) => /^[\p{L}\p{M}\s.'-]{2,50}$/u.test(name);

  /* Name Validation */
  const validateName = (name) => {
    const newName = name.trim();
    let error = false;
    let errorText = "";

    if (isEmpty(newName)) {
      error = true;
      errorText = "Bitte gib deinen Namen ein.";
    }

    if (wordCount(newName) < 2) {
      error = true;
      errorText = "Bitte gib deinen Vor-und Nachnamen ein.";
    }

    if (!isValidName(newName)) {
      error = true;
      errorText = "Bitte prüfe deinen Namen.";
    }
    return { error, errorText };
  };

  /* Handler: name field */
  const handleNameChange = (e) => {
    const newName = e.target.value;
    const { error } = validateName(newName);

    if (!error || isValidName(newName)) {
      setContactData({
        ...contactData,
        name: newName,
        nameError: false,
        nameErrorText: "",
      });
    } else {
      setContactData({
        ...contactData,
        name: newName,
      });
    }
  };

  const handleNameBlur = (e) => {
    const newName = e.target.value.trim();
    const { error, errorText } = validateName(newName);

    setContactData({
      ...contactData,
      name: newName,
      nameError: error,
      nameErrorText: errorText,
    });
  };

  /* Checks if email is valid by regex */
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,24}$/.test(
      email
    );
  };

  /* Email Validation */
  const validateEmail = (mail) => {
    let error = false;
    let errorText = "";
    let newEmail = mail.trim();

    if (isEmpty(newEmail)) {
      error = true;
      errorText = "Bitte gib deine E-Mail-Adresse ein.";
    }

    if (!isValidEmail(newEmail)) {
      error = true;
      errorText = "Bitte prüfe deine E-Mail-Adresse.";
    }
    return { error, errorText };
  };

  /* Handler: email field */
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    const { error } = validateEmail(newEmail);

    if (!error || isValidEmail(newEmail)) {
      setContactData({
        ...contactData,
        email: newEmail,
        emailError: false,
        emailErrorText: "",
      });
    } else {
      setContactData({
        ...contactData,
        email: newEmail,
      });
    }
  };

  const handleEmailBlur = (e) => {
    const newEmail = e.target.value.trim();
    const { error, errorText } = validateEmail(newEmail);

    setContactData({
      ...contactData,
      emailError: error,
      emailErrorText: errorText,
    });
  };

  /* Checks if address field is valid by regex */
  const isValidAddress = (address) =>
    /^[A-ZÄÖÜa-zäöüß \-.,]{2,40} \d{1,4}[A-Za-z]?([\/][A-Za-z])?$/.test(
      address
    );

  /* Address Validation */
  const validateAddress = (address) => {
    const newAddress = address.trim();
    let error = false;
    let errorText = "";

    if (isEmpty(newAddress)) {
      error = true;
      errorText = "Bitte gib deine Adresse ein.";
    }

    if (!isValidAddress(newAddress)) {
      error = true;
      errorText = "Bitte prüfe deine Adresse.";
    }

    return { error, errorText };
  };

  /* Handler: Address field */
  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    const { error } = validateAddress(newAddress);

    if (!error || isValidAddress) {
      setContactData({
        ...contactData,
        address: newAddress,
        addressError: false,
        addressErrorText: "",
      });
    }
  };

  const handleAddressBlur = (e) => {
    const newAddress = e.target.value;
    const { error, errorText } = validateAddress(newAddress);

    if (error) {
      setContactData({
        ...contactData,
        address: newAddress,
        addressError: error,
        addressErrorText: errorText,
      });
    } else {
      setContactData({
        ...contactData,
        address: newAddress,
      });
    }
  };

  /* Check if the location is valid */
  const isValidLocation = (address) => {
    return /^\d{5}\s(?:[A-ZÄÖÜa-zäöüß\- ]{1,40}){1,5}$/.test(address);
  };

  /* Check if ZIP is available for pickup method */
  let officeZipFirstTwoDigits = org.zip.trim().slice(0, 2);
  const isPickupZip = (location) => {
    let zipFirstTwoDigits = location.trim().slice(0, 2);
    return zipFirstTwoDigits === officeZipFirstTwoDigits;
  };

  /* Validation for the location field */
  const validateLocation = (location) => {
    const newLocation = location.trim();
    let error = false;
    let errorText = "";

    if (isEmpty(newLocation)) {
      error = true;
      errorText = "Bitte gib deine PLZ und Ort ein.";
    }

    if (!isValidLocation(newLocation)) {
      error = true;
      errorText = "Bitte prüfe deine Eingabe.";
    }

    return { error, errorText };
  };

  const pickUpZipWarning = (location) => {
    const newLocation = location.trim();
    let errorText = `Abholung ist leider für deinen PLZ-Bereich nicht möglich (nur für ${officeZipFirstTwoDigits}xxx). Bitte Übergabe an der Geschäftsstelle auswählen.`;

    if (!isPickupZip(newLocation) && !isEmpty(newLocation)) {
      return errorText;
    } else {
      return "123";
    }
  };

  const pickUpZipNote = (location) => {
    const newLocation = location.trim();

    if (pickUpZipWarning(newLocation) === "") {
      return `Abholung nur für Plz-Bereich ${officeZipFirstTwoDigits}xxx verfügbar.`;
    } else {
      return "";
    }
  };

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    const { error } = validateLocation(newLocation);

    if (!error) {
      setContactData({
        ...contactData,
        location: newLocation,
        locationError: false,
        locationErrorText: "",
      });
    } else {
      setContactData({
        ...contactData,
        location: newLocation,
      });
    }
  };

  const handleLocationBlur = (e) => {
    const newLocation = e.target.value.trim();
    const { error, errorText } = validateLocation(newLocation);
    const zipWarning = pickUpZipWarning(newLocation);

    if (error) {
      setContactData({
        ...contactData,
        location: newLocation,
        locationError: true,
        locationErrorText: errorText,
      });
    } else {
      setContactData({
        ...contactData,
        location: newLocation,
        locationError: false,
        locationZipWarning: zipWarning,
      });
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
          onBlur={handleAddressBlur}
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
          onBlur={handleLocationBlur}
        />
        {locationError && <p className="errorText">{locationErrorText}</p>}
        {!locationError && pickUpZipWarning !== "" && !isEmpty(location) && (
          <p className="errorText">{pickUpZipWarning}</p>
        )}
        {pickUpZipWarning === "" && !isPickupZip(location) && (
          <p className="infoText">{pickUpZipNote(location)}</p>
        )}
      </label>
      {console.log(pickUpZipNote(location))}
      {console.log(pickUpZipWarning(location) === "")}
    </div>
  );
}
