import React, { useState } from "react";
import audioFile from "../musica/Musica.mp3";
import Play from "../img/Play.png";
import Stop from "../img/Stop.png";
import styles from "../CSS/Play.module.css";

const Musica = () => {
  const [music, setMusic] = useState(false);
  const [audio] = useState(new Audio(audioFile));

  audio.loop = true;

  const reproducirMusica = () => {
    if (music) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setMusic(!music);
  };

  return (
    <div className={styles.General}>
      {music ? (
        <img src={Play} alt="Play" onClick={reproducirMusica} />
      ) : (
        <img src={Stop} alt="Stop" onClick={reproducirMusica} />
      )}
    </div>
  );
};

export default Musica;
