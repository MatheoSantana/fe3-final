import { createContext, useReducer, useEffect } from "react";
import { reducer } from "../../Reducers/reducer";
import axios from "axios";

export const initialState = {
  theme: "",
  dentists: [],
  favorites: JSON.parse(localStorage.getItem("fav_data")) || [],
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("fav_data", JSON.stringify(state.favorites));
  }, [state.favorites]);

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "SET_DENTISTS", payload: res.data });
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
