import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('user') || null,
  id: localStorage.getItem('id') || null,
  token: localStorage.getItem('token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.username;  
      localStorage.setItem('user', action.payload.username); 
      state.id = action.payload._id;
      localStorage.setItem('id', action.payload._id); 
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token); 
    },

    logout(state) {
      state.user = null;
      localStorage.removeItem('user');  // Remove user from localStorage
      state.token = null;
      localStorage.removeItem('token');  // Remove token from localStorage
      state.id = null;
      localStorage.removeItem('id');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
