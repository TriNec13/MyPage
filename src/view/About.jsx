import React, { useEffect, useState } from "react";
import Claro from "../CSS/About/About.module.css"
import Oscuro from "../CSS/About/AboutOscuro.module.css"
import Perfil from "../img/Yo.png";

function About() {
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
        <h1>Ivan Nicolas Valero</h1>
      </div>
      <div className={styles?.DivDos}>
        <p>🖐¡Hola!🖐 Soy Ivan👦, Un Desarrollador Web Fullstack y Analista en Sistemas 📚. Mi pasión por la programación surgió en mis años de estudio para ser analista en sistemas los cuales comence por mi gusto hacia todo lo referido a la tecnologia.🤖 Al realizar clases de algoritmo cada vez me fue agradando mas hasta que tuve un laboratorio de PHP/HTML/CSS el cual me atrapo por completo 🖥. Y ahora en la actualidad ya recibido de Analista y con los conocimientos complementarios aportados por Henry, estoy listo para entrar al mercado y poder demostar mis capacidades 💪</p>
      </div>
    </div>
  );
}

export default About;