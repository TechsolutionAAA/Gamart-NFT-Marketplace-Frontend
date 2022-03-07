import { BigNumber, BigNumberish, ethers } from "ethers";
import { addresses } from "../constants";
import { getAccountDetails } from "../hooks/action"
import { setAll } from "../helpers";
import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import  RootState  from "../store";
export const loadAccountDetails = createAsyncThunk(
  "account/loadAccountDetails",
  async ({address }, { dispatch }) => {
    let accountDetails = await getAccountDetails(address)
    if(!accountDetails){
      alert("Please create your profile!")
      return {
        account: {
          name: "",
          aboutMe: "",
          instagram: '',
          telegram: '',
          twitter: '',
          picUrl: '',
        },
       
      };
    }else{
      return {
        account: {
          name: accountDetails.name,
          aboutMe: accountDetails.description,
          instagram: accountDetails.instagram,
          telegram: accountDetails.telegram,
          twitter: accountDetails.twitter,
          picUrl: accountDetails.picUrl
        },
       
      };
    }
    
  },
);
const initialState = {
  account: { 
    name: "", 
    aboutMe: "",
    instagarm: '',
    faceBook: '',
    twitter: '',
    picUrl: ''
  },

};


const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    fetchAccountSuccess(state, action) {
      setAll(state, action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadAccountDetails.pending, state => {
        state.loading = true;
      })
      .addCase(loadAccountDetails.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(loadAccountDetails.rejected, (state, { error }) => {
        state.loading = false;
        console.log(error);
      })
  },
});

export default accountSlice.reducer;

export const { fetchAccountSuccess } = accountSlice.actions;

const baseInfo = (state) => state.account;

export const getAccountState = createSelector(baseInfo, account => account);
