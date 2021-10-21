import {
    createStore
} from "redux"
import {
    rootReducer
} from "../reducers/rootReducer";

// Store
export const store = createStore(rootReducer);