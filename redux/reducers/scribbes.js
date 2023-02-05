import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activePageTab: 2,
  userTab:1,
  adminTab:1,
  mangUserMenu:1,
  communityTab:1,
  sidebarDropDown:"0",
  mobileDesktopView:true
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
    handelAdminTab: (state, action) => {
      state.adminTab = action.payload;
    },
    handelComunityTab: (state, action) => {
      state.communityTab = action.payload;
    },
    handleSidebarDropDown: (state, action) => {
      state.sidebarDropDown = action.payload;
    },
    handleDeskTopView: (state, action) => {
      state.mobileDesktopView = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {handelAdminTab,handleDeskTopView, handelComunityTab,handelaActivePageTab,handelaUserTab,handelMangUserMenu,handleSidebarDropDown } = scribbes.actions;
export default scribbes.reducer;
