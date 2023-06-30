import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../CSS/Nav.module.css";
import Modo from "../component/Modo";
import Musica from "../component/Musica"

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.General}>
      <div className={styles.Switch}>
        <Modo />
      </div>
      <div className={styles.Botones}>
      {pathname !== "/prospecto" && (
        <Link to="/prospecto">
          <button>Prospecto</button>
        </Link>)}
        {pathname !== "/proyectos" && (
        <Link to="/proyectos">
          <button>Proyectos</button>
        </Link>)}
        {pathname !== "/about" && (
          <Link to="/about">
            <button>Sobre Mi</button>
          </Link>
        )}
        {pathname !== "/" && (
          <Link to="/">
            <button>Salir</button>
          </Link>
        )}
      </div>
      <Musica />
    </div>
  );
};
export default Nav;
