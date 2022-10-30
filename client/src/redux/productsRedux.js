import axios from "axios";
import { API_URL } from "../config";

export const getAllProducts = ({ products }) => products.data;

export const getProductById = ({ products }, id) =>
  products.data.find((product) => product._id === id);

export const getProductByCategory = ({ products }, category) =>
  products.data.filter((product) => product.category === category);

const reducerName = "products";
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });

export const loadProductsRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest({ name: "LOAD_PRODUCTS" }));
    try {
      const res = await axios.get(`${API_URL}/api/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest({ name: "LOAD_PRODUCTS" }));
    } catch (err) {
      dispatch(errorRequest({ name: "LOAD_PRODUCTS", error: err.message }));
    }
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

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return {
        ...statePart,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: {
          pending: false,
          error: action.payload.error,
          success: false,
        },
      };
    default:
      return statePart;
  }
}
