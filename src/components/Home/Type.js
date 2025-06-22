import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Egresado de Duoc UC",
          "Ingeniero en Informática",
          "Desarrollador Full Stack",
        ],
        autoStart: true,
        loop: true,
        typeSpeed: 10,
        deleteSpeed: 10,
        delay: 80,
      }}
    />
  );
}

export default Type;
