import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main>
      <h1>Home</h1>
      <div className={`card-grid`}>
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
