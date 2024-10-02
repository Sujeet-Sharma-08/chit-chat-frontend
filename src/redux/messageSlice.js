import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedMessages: [],
  shouldShake: false,

};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    getMessage(state, action) {
      state.fetchedMessages = action.payload; // Store messages directly 
      state.shouldShake = true;
    },

    clearShake(state) {
      state.shouldShake = false; // Reset the shake state
    },
   
  },
});

export const { getMessage, clearShake} = messageSlice.actions; // Corrected export
export default messageSlice.reducer;
