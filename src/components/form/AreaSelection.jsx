function AreaSelection() {
  return (
    <fieldset className="area-selection">
      <legend>Wohin soll deine Spende gehen?</legend>
      <div className="areas-selection-container">
        <label className="buttonized">
          <input type="radio" name="area" />
          Syrien
        </label>
        <label className="buttonized">
          <input type="radio" name="area" />
          Yemen
        </label>
        <label className="buttonized">
          <input type="radio" name="area" />
          Ukraine
        </label>
        <label className="buttonized">
          <input type="radio" name="area" />
          Nigeria
        </label>
        <label className="buttonized">
          <input type="radio" name="area" />
          Nordirland
        </label>
        <label className="buttonized">
          <input type="radio" name="area" />
          Indonesien
        </label>
      </div>
    </fieldset>
  );
}
console.log("AreaSelection geladen");
export default AreaSelection;
