import articlesReducer from './articlesRedux';
import adsReducer from './adsRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

const reducers = {
  articles: articlesReducer,
  ads: adsReducer,
  categories: categoriesReducer,
  products: productsReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
