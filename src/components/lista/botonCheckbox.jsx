import "./styles.css";
import React, { useState } from "react";

export const BotonCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="form-check divBoton">
      <input
        className="form-check-input botonC"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ backgroundColor: isChecked ? "rgb(62, 160, 127)" : "" }}
      />
    </div>
  );
};
