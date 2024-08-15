import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorites: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const favoritesSliceAction = FavoritesSlice.actions;

export default FavoritesSlice.reducer;
