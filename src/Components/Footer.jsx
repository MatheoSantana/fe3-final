import React from "react";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";
const Footer = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <footer>
      <p>Todos los derechos reservados de </p>
      <img
        className="firma"
        src={
          state.theme === "dark" ? "/img/FirmaDark.png" : "/img/FirmaLight.png"
        }
        alt="firma"
      />
    </footer>
  );
};

export default Footer;
