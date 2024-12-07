import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          <div className="card-grid">
            {state.favorites.map((dentist) => (
              <Card key={dentist.id} dentist={dentist} />
            ))}
          </div>
        ) : (
          <p>No hay dentistas en favoritos.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
