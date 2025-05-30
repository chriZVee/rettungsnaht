export default function AreaSelection(areaSelection, setAreaSelection) {
  /* Deconstruction */
  const { area, areaError, areaErrorText } = areaSelection;

  const selectableAreas = [
    { label: "Syrien", value: "syrien" },
    { label: "Yemen", value: "yemen" },
    { label: "Ukraine", value: "ukraine" },
    { label: "Nigeria", value: "nigeria" },
    { label: "Nordirland", value: "nordirland" },
    { label: "Indonesien", value: "indonesien" },
  ];

  const handleAreaChange = (e) => {
    const newArea = e.target.value;
    let error = false;
    let errorText = "";

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
        {selectableAreas.map((area) => (
          <label className="buttonized" key={area.label}>
            <input
              type="radio"
              name="area"
              value={area.label}
              onChange={handleAreaChange}
            />
            {area.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
