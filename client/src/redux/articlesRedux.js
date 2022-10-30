import axios from "axios";
import { API_URL } from "../config";

export const getAllArticles = ({ articles }) => articles.data;

export const getArticleById = ({ articles }, id) =>
  articles.data.find((article) => article._id === id);

const reducerName = "articles";
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_ARTICLES = createActionName("LOAD_ARTICLES");

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

export const loadArticles = (payload) => ({ payload, type: LOAD_ARTICLES });
export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });

export const loadArticlesRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest({ name: "LOAD_ARTICLES" }));
    try {
      const res = await axios.get(`${API_URL}/api/articles`);
      dispatch(loadArticles(res.data));
      dispatch(endRequest({ name: "LOAD_ARTICLES" }));
    } catch (err) {
      dispatch(errorRequest({ name: "LOAD_ARTICLES", error: err.message }));
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
    case LOAD_ARTICLES:
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
