import React, { useState, useEffect } from "react";
import Sol from "../img/Sol.png"
import Luna from "../img/Luna.png"
import switchStyles from "../CSS/SwitchModo.module.css";

const Modo = () => {
  const [modo, setModo] = useState(false);

  useEffect(() => {
    const modoGuardado = localStorage.getItem("modo");
    if (modoGuardado) {
      setModo(JSON.parse(modoGuardado));
    }
  }, []);

  const handleSwitchChange = () => {
    const nuevoModo = !modo;
    setModo(nuevoModo);
    localStorage.setItem("modo", JSON.stringify(nuevoModo));
    window.location.reload();
  };
  return (
    <div className={switchStyles.flipswitch}>
        <img src={Sol} alt="Sol" className={switchStyles.SwitchIMG}/>
        <input
          type="checkbox"
          name="flipswitch"
          className={`flipswitchcb ${switchStyles.flipswitchcb}`}
          id="fs"
          checked={modo}
          onChange={handleSwitchChange}
        />
        <label className={switchStyles.flipswitchLabel} htmlFor="fs">
          <div className={switchStyles.flipswitchInner}></div>
          <div className={switchStyles.flipswitchSwitch}></div>
        </label>
        <img src={Luna} alt="Luna" className={switchStyles.SwitchIMG}/>
      </div>
  );
};
export default Modo;
