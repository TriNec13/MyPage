import React, { useEffect, useState } from "react";
import Claro from "../CSS/Proyectos/Proyectos.module.css";
import Oscuro from "../CSS/Proyectos/ProyectosOscuro.module.css";
import Datos from "../component/proyectos.json";

function Poyectos() {
  const [styles, setStyles] = useState(Claro);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const modo = localStorage.getItem("modo");
    const newStyles = modo === "true" ? Oscuro : Claro;
    setStyles(newStyles);
  }, []);

  return (
    <div className={styles?.General}>
      <div className={styles?.DivUno}>
        <h2>PROYECTOS</h2>
        <ul>
          {Datos.map((proyecto, index) => (
            <li
              key={index}
              onClick={() => setSelectedProject(proyecto)}
              className={styles?.NombreProyecto}
            >
              {proyecto.name}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles?.DivDos}>
        {selectedProject ? (
          <>
            <div>
              <img
                src={`../img/${selectedProject.image}`}
                alt={selectedProject.name}
              />
            </div>
            <div>
              <p>{selectedProject.desc}</p>
            </div>
            <div>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles?.Botones}
              >
                Repositorio
              </a>
              {selectedProject.deploy && (
                <a
                  href={selectedProject.linkdeply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles?.Botones}
                >
                  Deploy
                </a>
              )}
            </div>
          </>
        ) : (
          <p>Selecciona un proyecto</p>
        )}
      </div>
    </div>
  );
}

export default Poyectos;
