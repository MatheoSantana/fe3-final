export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "" ? "dark" : "" };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "TOGGLE_FAV":
      const isFavorite = state.favorites.some(
        (fav) => fav.id === action.payload.id
      );

      const updatedFavorites = isFavorite
        ? state.favorites.filter((fav) => fav.id !== action.payload.id)
        : [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return { ...state, favorites: updatedFavorites };
  }
};
