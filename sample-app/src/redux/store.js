import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    user: userReducer, // Add your user-related reducers here
  },
});

export default store;
