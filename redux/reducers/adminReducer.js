import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";
import {Base_Url} from "../../config/baseUrl"
import axios from "axios";
import Swal from 'sweetalert2'
import Cookies from "universal-cookie";
const cookies = new Cookies();
const initialState = {
  currentUser: null,
  tempFollowCommunity:""

};
// =========user login 
export const adminLogin = createAsyncThunk("adminLogin", async (data) => {
  try {
    const res = await axiosInstance.post(
      `${Base_Url}api/admin/admin-login`,
      data
    );
    cookies.set("token", res.data.data.token);
    axios.defaults.headers.authorization = res.data.data.token;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "congrs....",
      text: res.data.data?.message,
      showConfirmButton: false,
      timer: 2000,
    });
    return res;
  } catch (err) {

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: err.response.data.errorMessage,

    });
  }
});
export const getCurrentUser = createAsyncThunk(
  "getCurrentUser",
  async (userId) => {
    try {
      const { data } = await axiosInstance.get(
        `${Base_Url}user/get-current-user/${userId}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);







export const adminReducer = createSlice({
  name: "adminReducer",
  initialState: initialState,

  reducers: {
    temUserCommunity(state, action) {
      state.tempFollowCommunity = action.payload;
    },
  },
  extraReducers: {
    [getCurrentUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      // state.isLoading = false;
    },

  },
});
// Action creators are generated for each case reducer function
export const { temUserCommunity } = adminReducer.actions;
export default adminReducer.reducer;
