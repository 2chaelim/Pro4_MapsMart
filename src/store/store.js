import { configureStore, createReducer } from "@reduxjs/toolkit";
import cart from "./cartStore";

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});