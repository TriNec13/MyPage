import React, { useEffect, useState } from "react";
import Claro from "../CSS/Landign/Landing.module.css"
import Oscuro from "../CSS/Landign/LandingOscuro.module.css"
import Perfil from "../img/Perfil.png";

function Landing() {
  const [styles, setStyles] = useState(Claro);

  useEffect(() => {
    const modo = localStorage.getItem("modo");
    const newStyles = modo === "true" ? Oscuro : Claro;
    setStyles(newStyles);
  }, []);
  

  return (
    <div className={styles?.General}>
      <div className={styles?.DivUno}>
        <img src={Perfil} alt="logo" />
      </div>
      <div className={styles?.DivDos}>
        <h1>BIENVENIDOS</h1>
        <h2>Entra a este pequeño gran mundo que es mi página personal</h2>
      </div>
    </div>
  );
}

export default Landing;