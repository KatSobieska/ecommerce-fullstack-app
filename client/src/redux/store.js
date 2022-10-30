import articlesReducer from "./articlesRedux";
import adsReducer from "./adsRedux";
import categoriesReducer from "./categoriesRedux";
import productsReducer from "./productsRedux";
import cartReducer from "./cartRedux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import usersReducer from "./usersRedux";
import thunk from "redux-thunk";

const subreducers = {
  articles: articlesReducer,
  ads: adsReducer,
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  user: usersReducer,
};

const rootReducer = combineReducers(subreducers);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
