import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "pink";

  return (
    <button onClick={handleClick} style={{ background: color }}>
      {isOn ? "OFF" : "ON"}
    </button>
  );
}

export default Toggle;
