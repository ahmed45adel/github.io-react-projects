import {
    REMOVE_TODO
} from "../constants/constants";

// decrease action
export const removeToDoAction = (index) => {
    return {
        type: REMOVE_TODO,
        payload: index
    }
}

