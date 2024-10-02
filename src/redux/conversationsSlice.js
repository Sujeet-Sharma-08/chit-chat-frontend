import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  conversations: [], // Array to store conversation data
};

const conversationsSlice = createSlice({
  name: "conversations", // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    setConversationsOfLoggednUser(state, action) {
      state.conversations = action.payload; // Update conversations state with the payload data
    },
  },
});

// Export the action to set conversations
export const { setConversationsOfLoggednUser } = conversationsSlice.actions;

// Export the reducer to be used in the Redux store
export default conversationsSlice.reducer;
