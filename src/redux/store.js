import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import selectedTabReducer from './selectTabSlice';
import messageReducer from './messageSlice';
import conversationsReducer from './conversationsSlice'; // Rename for consistency
import socketReducer from './socketSlice'; // Rename for clarity

// Combine all reducers into one rootReducer object
const rootReducer = {
  auth: authReducer, // Auth state will be available as `state.auth`
  selectedTab: selectedTabReducer, // SelectedTab state will be available as `state.selectedTab`
  message: messageReducer, // Message state will be available as `state.message`
  conversations: conversationsReducer, // Conversations state as `state.conversations`
  socket: socketReducer, // Socket state as `state.socket`
};

// Create the store with the combined reducers
const store = configureStore({
  reducer: rootReducer,
});

export default store;
