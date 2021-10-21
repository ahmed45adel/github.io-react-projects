import {
    DECREASE_COUNT
} from "../constants/constants";

// decrease action
export const Decrease = (payload) => {
    return {
        type: DECREASE_COUNT,
        payload
    }
}