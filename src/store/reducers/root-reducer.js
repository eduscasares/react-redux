import { combineReducers } from "redux";
import { filterReducer } from "./filter-reducer";
import { todosReducer } from "./todos-reducer";
import { userReducer } from "./user-reducer";

export const rootReducer = combineReducers(
    {
        // state name: reducer that will control it
        todosState: todosReducer,
        filterState: filterReducer,


        // Async example (LOGIN USER)
        userState: userReducer

        // here we can add more and more states and reducers
    }
)
