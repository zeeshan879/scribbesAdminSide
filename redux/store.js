import { configureStore } from "@reduxjs/toolkit";
import scribbes from "./reducers/scribbes";
import adminReducer from "../redux/reducers/adminReducer"
import userReducer from "../redux/reducers/userReducer"

export const store = configureStore({
  reducer: {
    allGernalFunction: scribbes,
    admin:adminReducer,
    user:userReducer
  },
});
