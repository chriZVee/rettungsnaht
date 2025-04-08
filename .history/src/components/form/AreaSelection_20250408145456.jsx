export default function AreaSelection({ areaSelection, setAreaSelection }) {
  /* Destructuring */
  const { area, areaError, areaErrorText } = areaSelection;

  const selectableAreas = [
    { label: "Syrien", value: "syrien" },
    { label: "Yemen", value: "yemen" },
    { label: "Ukraine", value: "ukraine" },
    { label: "Nigeria", value: "nigeria" },
    { label: "Nordirland", value: "nordirland" },
    { label: "Indonesien", value: "indonesien" },
  ];

  /* Handler */
  const handleAreaChange = (e) => {
    const newArea = e.target.value;
    let error = false;
    let errorText = "";

    if (newArea === "") {
      errorText = "Bitte wähle dein Spendengebiet aus.";
      error = true;
    }

    setAreaSelection({
      area: newArea,
      areaError: error,
      areaErrorText: errorText,
    });
  };

  return (
    <fieldset className="area-selection">
      <legend>Wohin soll deine Spende gehen?</legend>
      <div className="areas-selection-container">
        {selectableAreas.map((item) => (
          <label className="buttonized" key={item.label}>
            <input
              type="radio"
              name="area"
              value={item.value}
              onChange={handleAreaChange}
              checked={area === item.label}
            />
            {area.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
