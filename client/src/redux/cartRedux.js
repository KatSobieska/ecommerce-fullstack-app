export const getCartProducts = ({ cart }) => cart.data;

const reducerName = "cart";

const createActionName = (name) => `app/${reducerName}/${name}`;

const ADD_TO_CART = createActionName("ADD_TO_CART");
const REMOVE_FROM_CART = createActionName("REMOVE_FROM_CART");

export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
export const removeFromCart = (payload) => {
  return {
    payload,
    type: REMOVE_FROM_CART,
  };
};

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

export default function reducer(statePart = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...statePart, data: [...statePart.data, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...statePart,
        data: [...statePart.data.filter((item) => item.id !== action.payload)],
      };
    default:
      return statePart;
  }
}
