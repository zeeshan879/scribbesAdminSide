import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activePageTab: 2,
  userTab:1,
  mangUserMenu:1
};

export const scribbes = createSlice({
  name: "scribbes",
  initialState: initialState,
  reducers: {
    handelaActivePageTab: (state, action) => {
      state.activePageTab = action.payload;
    },
    handelaUserTab: (state, action) => {
      state.userTab = action.payload;
    },
    handelMangUserMenu: (state, action) => {
      state.mangUserMenu = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { handelaActivePageTab,handelaUserTab,handelMangUserMenu } = scribbes.actions;
export default scribbes.reducer;
