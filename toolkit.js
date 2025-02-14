import toolkit from "@reduxjs/toolkit";
import { build } from "vite";

const { configureStore, createAction, createReducer } = toolkit;

const initialState = {
  cart: [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase("ADD_TO_CART", (state, action) => {
    state.cart.push(action.payload);
  });
});
