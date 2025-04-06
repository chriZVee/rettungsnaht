export default function AreaSelection() {
  const selectableAreas = [
    { label: "Syrien", value: "syrien" },
    { label: "Yemen", value: "yemen" },
    { label: "Ukraine", value: "ukraine" },
    { label: "Nigeria", value: "nigeria" },
    { label: "Nordirland", value: "nordirland" },
    { label: "Indonesien", value: "indonesien" },
  ];

  return (
    <fieldset className="area-selection">
      <legend>Wohin soll deine Spende gehen?</legend>
      <div className="areas-selection-container">
        {selectableAreas.map((areas) => (
          <label className="buttonized">
            <input type="radio" name="area" value={areas.label} />
            {areas.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
