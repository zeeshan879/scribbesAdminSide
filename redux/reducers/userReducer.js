import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";
import {Base_Url} from "../../config/baseUrl"
import axios from "axios";
import Swal from 'sweetalert2'
import Cookies from "universal-cookie";
const cookies = new Cookies();
const initialState = {
  tempFollowCommunity:"",
  allUsers:null,
  userCommunity:null,
  

};
// get all usrs table==========
export const getAllUsers = createAsyncThunk(
    "getAllUsers",
    async () => {
      try {
        const { data } = await axiosInstance.get(
          `${Base_Url}user/get-all-users`
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );
  // delte user from users table==========
  export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (userId) => {
      try {
        const { data } = await axiosInstance.delete(
          `${Base_Url}user/delete-user/${userId}`
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );
  // verify user status=======
  export const veryfiyUser = createAsyncThunk(
    "veryfiyUser",
    async (userId) => {
      try {
        const { data } = await axiosInstance.put(
          `${Base_Url}user/update-user-profile/${userId}`
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );
  // suspend user from user table ===
  export const suspendeUser = createAsyncThunk(
    "suspendeUser",
    async (userId) => {
      try {
        const { data } = await axiosInstance.put(
          `${Base_Url}user/update-user-profile/${userId}`
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );
  export const restricUser = createAsyncThunk(
    "suspendeUser",
    async (obj) => {
      try {
        const { data } = await axiosInstance.put(
          `${Base_Url}user/update-user-profile/${obj.userId}`,obj.data
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );
  // get all communities for specific user ===>
  export const specificUserCommunity = createAsyncThunk(
    "specificUserCommunity",
    async (userId) => {
      console.log("ali",userId)
      try {
        const { data } = await axiosInstance.get(
          `${Base_Url}community/user-community/${userId}`
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );
  export const getCurrentUserData = createAsyncThunk(
    "getCurrentUserData",
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







export const userReducer = createSlice({
  name: "userReducer",
  initialState: initialState,

  reducers: {
    temUserCommunity(state, action) {
      state.tempFollowCommunity = action.payload;
    },
  },
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload;
      // state.isLoading = false;
    },
    [specificUserCommunity.fulfilled]: (state, action) => {
      state.userCommunity = action.payload;
      // state.isLoading = false;
    },

  },
});
// Action creators are generated for each case reducer function
export const { temUserCommunity } = userReducer.actions;
export default userReducer.reducer;
