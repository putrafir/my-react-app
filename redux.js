// reducer

const cartReducer = (
  state = {
    login: false,
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
  }
};
// store
// subscribe
// dispatch
