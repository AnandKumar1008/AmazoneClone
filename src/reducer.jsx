export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      break;
    case "REMOVE_FROM_CART":
      return state;
      break;
    default:
      return state;
  }
};

export default reducer;
