// src/reducers/paymentReducer.js
import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    sdt: '',
    sessionId: ''
  },
  reducers: {
    updatePayment: (state, action) => {
      console.log('New Payment State:', action.payload);
      state.sdt = action.payload.sdt;
      state.sessionId = action.payload.sessionId;
      console.log(' State:2', state.initialState);
    },
  },
});
console.log(paymentSlice.getInitialState)
export const { updatePayment } = paymentSlice.actions;
export default paymentSlice.reducer;
