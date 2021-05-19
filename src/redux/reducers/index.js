import {combineReducers} from "redux";
import categoriesListReducer from "./list-reducer";

export const rootReducer = combineReducers({
    categoriesListReducer,
})
