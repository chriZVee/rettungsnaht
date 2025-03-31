import { useState } from "react";

function pickUpMethod() {
  const [pickUpMethod, setPickupMethod] = useState("");
  const [isHandover, setIsHandover] = useState(false);

  // const handleHandoverChange = (e) => {
  //   setIsHandover();

  //   if (isHandover = checked) {

  //     const isChecked = e.target.checked;
  //   }

  // }

  return (
    <div className="pick-up-method">
      <label className="button buttonized">
        <input type="radio" name="method" />
        Abholung
      </label>
      <label className="button buttonized">
        <input type="radio" name="method" value="" onChange="" checked="" />
        Übergabe an der Geschäftsstelle
      </label>
    </div>
  );
}

export default pickUpMethod;
