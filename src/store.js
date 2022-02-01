import { combineReducers, createStore } from "redux";
import userplanReducer from "./reducers/userplanReducer";

const rootReducer = combineReducers({
    userplan: userplanReducer
})

const store = createStore(rootReducer);

export default store;