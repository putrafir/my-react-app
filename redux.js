// reducer

import { legacy_createStore } from "redux";

const cartReducer = (
  state = {
    cart: [{ id: 1, quantity: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
// store

const store = legacy_createStore(cartReducer);
console.log("on create store : ", store.getState());

// subscribe

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});
// dispatch

const action1 = { type: "ADD_TO_CART", payload: { id: 2, quantity: 30 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payload: { id: 3, quantity: 4 } };
store.dispatch(action2);
