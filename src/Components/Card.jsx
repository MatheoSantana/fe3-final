import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const isFavorite = state.favorites.some((fav) => fav.id === dentist.id);
  const addFav = () => {
    dispatch({ type: "TOGGLE_FAV", payload: dentist });
  };

  return (
    <div className={`card`}>
      <Link to={`/detail/${dentist.id}`}>
        <img className="Avatar" src="/img/doctor.jpg" alt="avatar" />
        <h4>{dentist.name}</h4>
        <p>{dentist.username}</p>
      </Link>
      <button onClick={addFav} className={`favButton`}>
        {isFavorite ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
      </button>
    </div>
  );
};

export default Card;
