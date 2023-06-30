import React, { useEffect, useState } from "react";
import Claro from "../CSS/Prospecto/Prospecto.module.css";
import Oscuro from "../CSS/Prospecto/ProspectoOscuro.module.css";
import {
  PrimeraSemana,
  SegundaSemana,
  PrimerMes,
  SegundoMes,
  CuartoMes,
  NovenoMes,
  DecimoOctavoMes,
} from "../component/Prospecto/index";

function Prospecto() {
  const [styles, setStyles] = useState(Claro);
  const [etapa, setEtapa] = useState(false);
  const [semanaSeleccionada, setSemanaSeleccionada] = useState(""); // Estado para almacenar el nombre de la semana seleccionada

  useEffect(() => {
    const modo = localStorage.getItem("modo");
    const newStyles = modo === "true" ? Oscuro : Claro;
    setStyles(newStyles);
  }, []);

  const handleClickSemana = (semana) => {
    setSemanaSeleccionada(semana);
    setEtapa(true);
  };

  function renderizarComponente(semana) {
    switch (semana) {
      case "Primera semana":
        return <PrimeraSemana />;
      case "Segunda Semana":
        return <SegundaSemana />;
      case "Primer Mes":
        return <PrimerMes />;
      case "Segundo Mes":
        return <SegundoMes />;
      case "Cuarto Mes":
        return <CuartoMes />;
      case "Noveno Mes":
        return <NovenoMes />;
      case "Decimo Octavo Mes":
        return <DecimoOctavoMes />;
      default:
        return null;
    }
  }

  return (
    <div className={styles.General}>
      <div className={styles.DivTitulo}><h2>DESARROLLADOR FULL STACK</h2></div>
      <div className={styles.DivUno}>
        <h2>ETAPAS</h2>
        <p onClick={() => handleClickSemana("Primera semana")}>
          Primera semana
        </p>
        <p onClick={() => handleClickSemana("Segunda Semana")}>
          Segunda Semana
        </p>
        <p onClick={() => handleClickSemana("Primer Mes")}>Primer Mes</p>
        <p onClick={() => handleClickSemana("Segundo Mes")}>Segundo Mes</p>
        <p onClick={() => handleClickSemana("Cuarto Mes")}>Cuarto Mes</p>
        <p onClick={() => handleClickSemana("Noveno Mes")}>Noveno Mes</p>
        <p onClick={() => handleClickSemana("Decimo Octavo Mes")}>
          Decimo Octavo Mes
        </p>
      </div>
      <div className={styles.DivDos}>
        {!etapa ? (
          <>
            <h1>Este es un prospecto a 18 meses</h1>
            <h2>Seleccione la etapa para mas informacion</h2>
          </>
        ) : (
          renderizarComponente(semanaSeleccionada)
        )}
      </div>
    </div>
  );
}

export default Prospecto;
