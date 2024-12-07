import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      <div>
        <img
          className="firma"
          src={
            state.theme === "dark"
              ? "/img/FirmaDark.png"
              : "/img/FirmaLight.png"
          }
          alt="firma"
        />
      </div>
      <div className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={toggleTheme}>
          {" "}
          {state.theme === "dark" ? "Light Mode" : "Dark Mode"} Change theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
