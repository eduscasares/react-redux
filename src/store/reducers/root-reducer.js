import { combineReducers } from "redux";
import { filterReducer } from "./filter-reducer";
import { todosReducer } from "./todos-reducer";

export const rootReducer = combineReducers(
    {
        // state name: reducer that will control it
        todosState: todosReducer,
        filterState: filterReducer

        // here we can add more and more states and reducers
    }
)
