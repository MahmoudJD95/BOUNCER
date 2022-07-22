import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './feature/cartSlice';
export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
