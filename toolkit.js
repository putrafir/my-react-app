import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ session: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.session = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("on create store : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(addToCart({ id: 2, quantity: 30 }));
store.dispatch(login());
