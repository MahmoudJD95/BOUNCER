import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
