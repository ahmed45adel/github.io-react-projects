import {
    combineReducers
} from "redux";
import { countReducer } from './countReducer'
import { todoReducer } from "./toDoReducer";

export const rootReducer = combineReducers({
    countReducer:
        countReducer,
    todoReducer: todoReducer
})