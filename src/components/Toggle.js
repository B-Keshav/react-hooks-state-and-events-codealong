import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function switchButton() {
    setIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "blue"

  return <button style={{ background : color }} onClick={switchButton}>{isOn ? "Off" : "On"}</button>;
}

export default Toggle;
