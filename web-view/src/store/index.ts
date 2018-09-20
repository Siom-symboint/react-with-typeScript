import { createStore, combineReducers } from "redux";

import menuReducer from "store/listInfo/index";

const reducer = combineReducers({
  menuReducer
});

const store = createStore(reducer);
export default store;
