import { createStore, combineReducers } from "redux";

import menuReducer from "store/listInfo/index";
import detailReducer from "store/showDetailPage/index";

const reducer = combineReducers({
  menuReducer,
  detailReducer
});

const store = createStore(reducer);
export default store;
