import {
    ADD_TODO
} from "../constants/constants";

// decrease action
export const addToDoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}