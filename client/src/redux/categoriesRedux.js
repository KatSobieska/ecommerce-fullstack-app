import axios from "axios";
import { API_URL } from "../config";

export const getAllCategories = ({ categories }) => categories.data;

const reducerName = "categories";
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_CATEGORIES = createActionName("LOAD_CATEGORIES");

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

export const loadCategories = (payload) => ({ payload, type: LOAD_CATEGORIES });

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });

export const loadCategoriesRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest({ name: "LOAD_CATEGORIES" }));
    try {
      const res = await axios.get(`${API_URL}/api/categories`);
      dispatch(loadCategories(res.data));
      dispatch(endRequest({ name: "LOAD_CATEGORIES" }));
    } catch (err) {
      dispatch(errorRequest({ name: "LOAD_CATEGORIES", error: err.message }));
    }
  };
};

const initialState = {
  data: [],
  requests: {
    pending: false,
    error: null,
    success: null,
  },
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CATEGORIES:
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
