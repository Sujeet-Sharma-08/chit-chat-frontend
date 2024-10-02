// redux/selectTabSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSelectedTab:false, 
  selectedUser:null,
  selectedUserId:null
};


const selectedSlice = createSlice({
  name: "selectedTab",
  initialState,
  reducers: {
    select(state, action) {
      state.isSelectedTab = action.payload.isSelectedTab;  // Corrected the payload handling
      state.selectedUser = action.payload.selectedUser;
      state.selectedUserId  = action.payload.selectedUserId
    },
  },
});

export const { select } = selectedSlice.actions;  // Corrected from 'authSlice' to 'selectedSlice'
export default selectedSlice.reducer;
