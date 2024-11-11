import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './features/bikes/bikesSlice';

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
  },
});

export default store;